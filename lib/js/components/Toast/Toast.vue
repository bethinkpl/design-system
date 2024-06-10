<template>
	<Teleport :to="appendToElement" :disabled="disableTeleport">
		<span class="ds-toast" :style="styles">
			<span
				ref="toastCard"
				:class="{
					'ds-toast__absoluteWrapper': true,
					'-ds-size-small': size === TOAST_SIZES.SMALL,
					'-ds-size-medium': size === TOAST_SIZES.MEDIUM,
				}"
			>
				<ds-card
					:loading-bar-color="color"
					has-loading-bar
					:loading-bar-time="disappearingTimeout"
				>
					<template #content>
						<div class="ds-toast__content">
							<slot name="content" />
						</div>
					</template>
					<template #footer>
						<div class="ds-toast__footerButtons">
							<ds-button
								v-if="footerSecondaryButtonText.length"
								:color="buttonSecondaryColor"
								:icon-right="footerSecondaryButtonIcon"
								:type="BUTTON_TYPES.OUTLINED"
								:radius="BUTTON_RADIUSES.ROUNDED"
								@click="$emit('secondary-button-click')"
								>{{ footerSecondaryButtonText }}</ds-button
							>
							<ds-button
								v-if="footerPrimaryButtonText.length"
								:color="buttonPrimaryColor"
								:icon-right="footerPrimaryButtonIcon"
								:radius="BUTTON_RADIUSES.ROUNDED"
								@click="$emit('primary-button-click')"
								>{{ footerPrimaryButtonText }}</ds-button
							>
						</div>
					</template>
				</ds-card>
			</span>
		</span>
	</Teleport>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';

.ds-toast {
	display: flex;
	position: relative;

	&__absoluteWrapper {
		position: absolute;

		&.-ds-size-small {
			width: 320px;
		}

		&.-ds-size-medium {
			width: 500px;
		}
	}

	&__content {
		display: flex;
	}

	&__footerButtons {
		column-gap: $space-xs;
		display: flex;
		justify-content: flex-end;
		padding: 0 $space-s $space-s;
	}
}
</style>

<script lang="ts">
import DsButton, { BUTTON_COLORS, BUTTON_RADIUSES, BUTTON_TYPES } from '../Buttons/Button';
import DsCard from '../Cards/Card';
import {
	TOAST_COLORS,
	TOAST_POSITIONS,
	TOAST_SIZES,
	ToastColors,
	ToastPositions,
	ToastSizes,
} from './Toast.consts';
import { PropType, toRaw } from 'vue';
import { ICONS } from '../Icons/Icon';

const TOAST_OFFSET = 24;

function offsetRight(el: HTMLElement) {
	if (!el) {
		return 0;
	}

	const style = window.getComputedStyle(el);
	const paddingRight = parseInt(style.paddingRight, 10);
	const borderRight = parseInt(style.borderRight, 10);
	const borderLeft = parseInt(style.borderLeft, 10);

	return TOAST_OFFSET + paddingRight + borderRight + borderLeft;
}

function offsetLeft(el: HTMLElement) {
	if (!el) {
		return 0;
	}

	const style = window.getComputedStyle(el);

	return TOAST_OFFSET - parseInt(style.paddingLeft, 10);
}
function offsetCenter(el: HTMLElement) {
	if (!el) {
		return 0;
	}

	const style = window.getComputedStyle(el);

	return TOAST_OFFSET + parseInt(style.paddingLeft, 10);
}

function offsetTop(el: HTMLElement) {
	if (!el) {
		return 0;
	}

	const style = window.getComputedStyle(el);

	return TOAST_OFFSET - parseInt(style.paddingTop, 10);
}
function offsetBottom(el: HTMLElement) {
	if (!el) {
		return 0;
	}

	const style = window.getComputedStyle(el);
	const padding = parseInt(style.paddingBottom, 10);
	const borderBottom = parseInt(style.borderBottom, 10);
	const borderTop = parseInt(style.borderTop, 10);

	return TOAST_OFFSET + (padding + borderBottom + borderTop);
}

export default {
	name: 'Toast',
	components: {
		DsButton,
		DsCard,
	},
	props: {
		size: {
			type: String as PropType<ToastSizes>,
			default: TOAST_SIZES.MEDIUM,
		},
		position: {
			type: String as PropType<ToastPositions>,
			default: TOAST_POSITIONS.BOTTOM_CENTER,
		},
		color: {
			type: String as PropType<ToastColors>,
			default: TOAST_COLORS.INFO,
		},
		footerPrimaryButtonText: {
			type: String,
			default: '',
		},
		footerPrimaryButtonIcon: {
			type: Object,
			default: null,
			validator(footerPrimaryButtonIcon: any) {
				return (
					footerPrimaryButtonIcon == null ||
					Object.values(ICONS).includes(toRaw(footerPrimaryButtonIcon))
				);
			},
		},
		footerSecondaryButtonText: {
			type: String,
			default: '',
		},
		footerSecondaryButtonIcon: {
			type: Object,
			default: null,
			validator(footerSecondaryButtonIcon: any) {
				return (
					footerSecondaryButtonIcon == null ||
					Object.values(ICONS).includes(toRaw(footerSecondaryButtonIcon))
				);
			},
		},
		isDisappearing: {
			type: Boolean,
			default: true,
		},
		disappearingTimeout: {
			type: String,
			default: '0',
			validator(disappearingTimeout: string) {
				return (
					(disappearingTimeout === '0' || !isNaN(parseInt(disappearingTimeout, 10))) &&
					parseInt(disappearingTimeout, 10) >= 0
				);
			},
		},
		appendTo: {
			type: [String, HTMLElement],
			default: null,
		},
	},
	emits: {
		close: () => true,
		'primary-button-click': () => true,
		'secondary-button-click': () => true,
	},
	data() {
		return {
			appendToElement: null,
			styles: {},
			resizeObserver: new ResizeObserver(() => {
				this.calculateStyles();
			}),
			BUTTON_COLORS: Object.freeze(BUTTON_COLORS),
			BUTTON_RADIUSES: Object.freeze(BUTTON_RADIUSES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			TOAST_SIZES: Object.freeze(TOAST_SIZES),
		};
	},
	computed: {
		buttonPrimaryColor() {
			return this.color === TOAST_COLORS.DANGER
				? BUTTON_COLORS.NEUTRAL
				: BUTTON_COLORS.PRIMARY;
		},
		buttonSecondaryColor() {
			return this.color === TOAST_COLORS.DANGER
				? BUTTON_COLORS.DANGER
				: BUTTON_COLORS.NEUTRAL;
		},
		disableTeleport() {
			return this.appendTo === null || this.appendToElement === this.$parent.$el;
		},
	},
	watch: {
		appendTo() {
			this.choseAppendToElement();
			this.calculateStyles();
			this.resizeObserver?.disconnect();
			this.resizeObserver?.observe(this.appendToElement);
			//We watch the toast's card height because it changes by 1px at the beginning, and we don;t know why
			this.resizeObserver?.observe(this.$refs?.toastCard);
		},
		position() {
			this.calculateStyles();
		},
	},
	mounted() {
		this.choseAppendToElement();
		this.calculateStyles();

		this.resizeObserver.observe(this.appendToElement);
		//We watch the toast's card height because it changes by 1px at the beginning, and we don;t know why
		this.resizeObserver?.observe(this.$refs?.toastCard);
		if (this.isDisappearing && this.disappearingTimeout !== '0') {
			setTimeout(
				() => this.$emit('close'),
				parseInt(this.disappearingTimeout, 10) * 1000 + 100, // 100 ms is to let loading bar animation to finish
			);
		}
	},
	beforeDestroy() {
		this.resizeObserver.disconnect();
		this.resizeObserver = null;
	},
	methods: {
		calculateStyles() {
			const parentWidthPx =
				this.appendToElement?.offsetWidth - this.$refs.toastCard?.offsetWidth || 0;
			const parentHeightPx =
				this.appendToElement?.offsetHeight - this.$refs.toastCard?.offsetHeight || 0;

			this.styles = {
				bottomCenter: {
					left: `${parentWidthPx / 2 - offsetCenter(this.appendToElement)}px`,
					top: `${parentHeightPx - offsetBottom(this.appendToElement)}px`,
				},
				bottomLeft: {
					left: `${offsetLeft(this.appendToElement)}px`,
					top: `${parentHeightPx - offsetBottom(this.appendToElement)}px`,
				},
				bottomRight: {
					left: `${parentWidthPx - offsetRight(this.appendToElement)}px`,
					top: `${parentHeightPx - offsetBottom(this.appendToElement)}px`,
				},
				topCenter: {
					left: `${parentWidthPx / 2 - offsetCenter(this.appendToElement)}px`,
					top: `${offsetTop(this.appendToElement)}px`,
				},
				topLeft: {
					left: `${offsetLeft(this.appendToElement)}px`,
					top: `${offsetTop(this.appendToElement)}px`,
				},
				topRight: {
					left: `${parentWidthPx - offsetRight(this.appendToElement)}px`,
					top: `${offsetTop(this.appendToElement)}px`,
				},
			}[this.position];
		},
		choseAppendToElement() {
			let appendToElement = this.$parent.$el;
			if (typeof this.appendTo === 'string') {
				appendToElement = document.querySelector(this.appendTo);
			} else if (this.appendTo instanceof HTMLElement) {
				appendToElement = this.appendTo;
			}

			if (!(appendToElement instanceof HTMLElement)) {
				console.error(
					'The appendTo prop is not an HTMLElement. Falling back to parent element.',
				);
				appendToElement = this.$parent.$el;
			}

			this.appendToElement = appendToElement;
		},
	},
};
</script>
