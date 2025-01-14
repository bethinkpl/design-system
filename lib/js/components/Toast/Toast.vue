<template>
	<div :style="styles" :class="['ds-toast', toastSize, toastPosition]">
		<ds-card :loading-bar-color="color" has-loading-bar :loading-bar-time="disappearingTimeout">
			<template #content>
				<div class="ds-toast__content">
					<slot name="content" />
				</div>
			</template>
			<template
				v-if="footerPrimaryButtonText.length > 0 || footerSecondaryButtonText.length > 0"
				#footer
			>
				<div class="ds-toast__footerButtons">
					<ds-button
						v-if="footerSecondaryButtonText.length"
						:color="buttonSecondaryColor"
						:icon-right="footerSecondaryButtonIcon"
						:type="BUTTON_TYPES.OUTLINED"
						:radius="BUTTON_RADIUSES.ROUNDED"
						@click="$emit('secondary-button-click')"
						>{{ footerSecondaryButtonText }}
					</ds-button>
					<ds-button
						v-if="footerPrimaryButtonText.length"
						:color="buttonPrimaryColor"
						:icon-right="footerPrimaryButtonIcon"
						:radius="BUTTON_RADIUSES.ROUNDED"
						@click="$emit('primary-button-click')"
						>{{ footerPrimaryButtonText }}
					</ds-button>
				</div>
			</template>
		</ds-card>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/media-queries';

.ds-toast {
	position: fixed;
	width: 100%;

	&.-ds-size-small {
		max-width: 320px + $space-s * 2;
		padding: $space-s;
	}

	&.-ds-size-medium {
		max-width: 500px + $space-s * 2;
		padding: $space-s;

		@media (#{breakpoint-s()}) {
			max-width: 500px + $space-m * 2;
			padding: $space-m;
		}
	}

	&.-ds-size-large {
		max-width: 700px + $space-s * 2;
		padding: $space-s;

		@media (#{breakpoint-s()}) {
			max-width: 700px + $space-m * 2;
			padding: $space-m;
		}
	}

	&.-ds-position-left {
		bottom: 0;
		left: 0;
	}

	&.-ds-position-right {
		bottom: 0;
		right: 0;
	}

	&.-ds-position-center {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	&__content {
		@include text-m-default-regular;
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
import { defineComponent, PropType, toRaw } from 'vue';
import { ICONS } from '../Icons/Icon';

const TOAST_OFFSET = 24;

function calculateBoundariesOffset(boundariesElement: HTMLElement) {
	const borderLeftWidth = window.getComputedStyle(boundariesElement).borderLeftWidth;
	const borderRightWidth = window.getComputedStyle(boundariesElement).borderRightWidth;
	const boundingClientRect = boundariesElement.getBoundingClientRect();
	const boundariesOffsetLeft = boundingClientRect.left + parseInt(borderLeftWidth, 10);
	const boundariesOffsetRight =
		boundingClientRect.right - parseInt(borderRightWidth, 10) - parseInt(borderLeftWidth, 10);
	const boundariesOffsetWidth = boundingClientRect.width;
	return {
		left: {
			left: `${boundariesOffsetLeft}px`,
		},
		right: {
			left: `${boundariesOffsetRight}px`,
			transform: 'translateX(-100%)',
		},
		center: {
			left: `${boundariesOffsetLeft + boundariesOffsetWidth / 2}px`,
			transform: 'translateX(-50%)',
		},
	};
}

export default defineComponent({
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
			default: TOAST_POSITIONS.CENTER,
		},
		boundariesSelector: {
			type: [String, HTMLElement],
			default: null,
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
	},
	emits: {
		close: () => true,
		'primary-button-click': () => true,
		'secondary-button-click': () => true,
	},
	data() {
		return {
			boundariesSelectorElement: null,
			boundariesSelectorElementResizeObserver: null,
			styles: {},
			BUTTON_COLORS: Object.freeze(BUTTON_COLORS),
			BUTTON_RADIUSES: Object.freeze(BUTTON_RADIUSES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			TOAST_SIZES: Object.freeze(TOAST_SIZES),
			TOAST_POSITIONS: Object.freeze(TOAST_POSITIONS),
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
		toastPosition() {
			return `-ds-position-${this.position.toLowerCase()}`;
		},
		toastSize() {
			return `-ds-size-${this.size.toLowerCase()}`;
		},
	},
	mounted() {
		this.setBoundariesSelectorElement();
		this.calculateStyles();
		this.boundariesSelectorElementResizeObserver?.disconnect();
		this.boundariesSelectorElementResizeObserver = new ResizeObserver(() => {
			this.calculateStyles();
		});
		if (this.boundariesSelectorElement) {
			this.boundariesSelectorElementResizeObserver.observe(this.boundariesSelectorElement);
		} else {
			//window resize does not work for some reason, so we observe body
			this.boundariesSelectorElementResizeObserver.observe(document.querySelector('body'));
		}
		if (this.isDisappearing && this.disappearingTimeout !== '0') {
			setTimeout(
				() => this.$emit('close'),
				parseInt(this.disappearingTimeout, 10) * 1000 + 100, // 100 ms is to let loading bar animation to finish
			);
		}
	},
	beforeUnmount() {
		this.boundariesSelectorElementResizeObserver.disconnect();
		this.boundariesSelectorElementResizeObserver = null;
	},
	updated() {
		const { right, left } = this.$el.getClientRects()[0];
		if (parseInt(left, 10) < 0 || right > document.documentElement.clientWidth) {
			this.styles = {
				left: '50%',
				transform: 'translateX(-50%)',
			};
		}
	},
	methods: {
		calculateStyles() {
			if (this.boundariesSelectorElement) {
				this.styles = calculateBoundariesOffset(this.boundariesSelectorElement)[
					this.position
				];
			} else {
				this.styles = {};
			}
		},
		setBoundariesSelectorElement() {
			if (typeof this.boundariesSelector === 'string') {
				this.boundariesSelectorElement =
					document.querySelector(this.boundariesSelector) || null;
			} else if (this.boundariesSelector instanceof HTMLElement) {
				this.boundariesSelectorElement = this.boundariesSelector;
			}
		},
	},
});
</script>
