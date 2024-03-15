<template>
	<div
		class="switch"
		:class="{
			'-small': size === SWITCH_SIZE.SMALL,
			'-medium': size === SWITCH_SIZE.MEDIUM,

			'-rounded': radius === SWITCH_RADIUSES.ROUNDED,

			'-disabled': state === SWITCH_STATE.DISABLED,
		}"
	>
		<div
			class="switch__item -left"
			:class="{
				'-pressed': currentSide === SWITCH_SIDE.LEFT && isPressed,
				'-selected': currentSide === SWITCH_SIDE.LEFT,
			}"
			:title="labelLeft"
			@click="onSwitch(SWITCH_SIDE.LEFT)"
		>
			<ds-icon
				v-if="iconLeft"
				class="switch__icon"
				:icon="iconLeft"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div class="switch__label">
				{{ labelLeft }}
			</div>
		</div>
		<div
			class="switch__item -right"
			:class="{
				'-pressed': currentSide === SWITCH_SIDE.RIGHT && isPressed,
				'-selected': currentSide === SWITCH_SIDE.RIGHT,
			}"
			:title="labelRight"
			@click="onSwitch(SWITCH_SIDE.RIGHT)"
		>
			<ds-icon
				v-if="iconRight"
				class="switch__icon"
				:icon="iconRight"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div class="switch__label">
				{{ labelRight }}
			</div>
		</div>
		<div ref="selection" class="switch__item -selection">
			<ds-icon
				v-if="currentIcon"
				class="switch__icon"
				:icon="currentIcon"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div class="switch__label">{{ currentLabel }}</div>
		</div>
		<div ref="rightReference" class="switch__item -reference">
			<ds-icon
				v-if="iconRight"
				class="switch__icon"
				:icon="iconRight"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div class="switch__label">{{ labelRight }}</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
	@import '../../../styles/settings/animations';
	@import '../../../styles/settings/spacings';
	@import '../../../styles/settings/radiuses';
	@import '../../../styles/settings/colors/tokens';
	@import '../../../styles/settings/typography/tokens';

	$switch-transition: all $default-transition-time ease;

	.switch {
		$root: &;

		align-items: flex-start;
		background-color: $color-default-background;
		border: 1px solid $color-neutral-border;
		border-radius: $radius-xs;
		box-sizing: border-box;
		display: inline-flex;
		max-width: 100%;
		position: relative;

		&.-rounded {
			border-radius: $radius-xl;
		}

		&__icon {
			color: $color-neutral-icon;
		}

		.-selected &__icon {
			color: $color-primary-icon;
		}

		&__label {
			@include label-s-extensive-bold-uppercase;

			color: $color-neutral-text;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.-selected &__label {
			color: $color-neutral-text-heavy;
		}

		&__item {
			align-items: center;
			background-color: $color-neutral-background-ghost;
			border: 1px solid transparent;
			border-radius: $radius-xs;
			cursor: pointer;
			display: flex;
			flex-grow: 1;
			gap: $space-xxxs;
			justify-content: center;
			margin: -1px;
			min-height: 32px;
			min-width: 64px;
			overflow: hidden;
			padding: 0 $space-s;
			position: relative;
			transition: $switch-transition;
			z-index: 2;

			&.-left {
				margin: -1px 0 -1px -1px;
			}

			&.right {
				margin: -1px -1px -1px 0;
			}

			&.-selection {
				background-color: $color-primary-background;
				border: 1px solid $color-primary-border;
				box-sizing: border-box;
				left: 0;
				position: absolute;
				top: 0;
				z-index: 1;

				#{$root}__icon {
					visibility: hidden;
				}

				#{$root}__label {
					overflow: hidden;
					visibility: hidden;
					white-space: nowrap;
					width: max-content;
				}
			}

			&.-selected,
			&.-selection:hover {
				cursor: default;
				flex-grow: 0.00001;
				flex-shrink: 0;
				overflow: hidden;
				text-overflow: initial;
			}

			&.-reference {
				display: inline-flex;
				left: 0;
				position: absolute;
				transition: none;
				visibility: hidden;
				z-index: 1;

				#{$root}__label {
					white-space: nowrap;
				}
			}
		}

		&.-small &__item {
			gap: $space-xxxxs;
			min-height: 24px;
			min-width: 48px;
			padding: 0 $space-xs;
		}

		&.-rounded &__item {
			border-radius: $radius-xl;
		}

		&.-disabled &__item {
			cursor: default;

			&.-selected {
				background-color: $color-primary-background-disabled;
				border-color: $color-primary-border-disabled;
			}
		}

		&.-disabled &__icon {
			color: $color-neutral-icon-disabled;
		}

		&.-disabled .-selected &__icon {
			color: $color-primary-icon-disabled;
		}

		&.-disabled &__label {
			color: $color-neutral-text-weak;
		}

		&.-disabled .-selected &__label {
			color: $color-neutral-text-strong;
		}

		&:not(.-disabled) &__item:not(.-selected) {
			&:hover, {
				background-color: $color-neutral-background-ghost-hovered;

				&::before {
					content: '';
					position: absolute;
					transform: scale(0);
				}
			}
		}

		&__item.-pressed {
			background-color: $color-neutral-background-ghost-hovered;

			&::before {
				background-color: $color-neutral-ripple;
				border-radius: 50%;
				content: '';
				padding-top: 100%;
				position: absolute;
				transform: scale(1);
				transition: $switch-transition;
				width: 100%;
			}
		}
	}
</style>

<script lang="ts">
import { PropType, toRaw } from 'vue';
import {
	SWITCH_RADIUSES,
	SWITCH_SIDE,
	SWITCH_SIZES,
	SWITCH_STATE,
	SwitchRadius,
	SwitchSelection,
	SwitchSize,
	SwitchState,
} from './Switch.consts';
import DsIcon, { ICON_SIZES, ICONS, IconItem } from '../Icons/Icon';
import { Value } from "../../utils/type.utils";

const adjustSelectionPosition = ({ rightReference, selection }, currentSide: SwitchSelection, size: SwitchSize) => {
	const maxSize = selection.parentNode.offsetWidth;

	if (currentSide === SWITCH_SIDE.LEFT) {
		selection.style.left = '0';
	} else {
		const position = Math.max(maxSize - rightReference.offsetWidth, size === SWITCH_SIZES.SMALL ? 48 : 64);
		selection.style.left = `${position}px`;
	}
}

export default {
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Switch',
	components: {
		DsIcon
	},
	props: {
		size: {
			type: String as PropType<SwitchSize>,
			default: SWITCH_SIZES.MEDIUM,
			validator(size) {
				return Object.values(SWITCH_SIZES).includes(size);
			},
		},
		radius: {
			type: String as PropType<SwitchRadius>,
			default: SWITCH_RADIUSES.CAPSULE,
			validator(value: Value<typeof SWITCH_RADIUSES>) {
				return Object.values(SWITCH_RADIUSES).includes(value);
			},
		},
		iconLeft: {
			type: Object as PropType<IconItem>,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconRight: {
			type: Object as PropType<IconItem>,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		labelLeft: {
			type: String,
			default: null,
		},
		labelRight: {
			type: String,
			default: null,
		},
		state: {
			type: String as PropType<SwitchState>,
			default: SWITCH_STATE.DEFAULT,
			validator(state) {
				return Object.values(SWITCH_STATE).includes(state);
			},
		},
		selectedSide: {
			type: String as PropType<SwitchSelection>,
			default: SWITCH_SIDE.LEFT,
			validator(side) {
				return Object.values(SWITCH_SIDE).includes(side);
			},
		},
	},
	emits: ['update:selectedSide'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			SWITCH_RADIUSES: Object.freeze(SWITCH_RADIUSES),
			SWITCH_SIDE: Object.freeze(SWITCH_SIDE),
			SWITCH_SIZE: Object.freeze(SWITCH_SIZES),
			SWITCH_STATE: Object.freeze(SWITCH_STATE),
			currentSide: this.selectedSide,
			currentIcon: this.selectedSide === SWITCH_SIDE.LEFT ? this.iconLeft : this.iconRight,
			currentLabel: this.selectedSide === SWITCH_SIDE.LEFT ? this.labelLeft : this.labelRight,
			isPressed: false,
		};
	},
	watch: {
		currentSide(side) {
			adjustSelectionPosition(this.$refs, side, this.size);
		}
	},
	async mounted() {
		adjustSelectionPosition(this.$refs, this.currentSide, this.size);
	},
	methods: {
		onSwitch(side: SwitchSelection) {
			if (this.state === SWITCH_STATE.DISABLED || this.currentSide === side) {
				return;
			}
			this.isPressed = true
			setTimeout(() => this.isPressed = false, 300);
			this.currentIcon = side === SWITCH_SIDE.LEFT ? this.iconLeft : this.iconRight;
			this.currentLabel = side === SWITCH_SIDE.LEFT ? this.labelLeft : this.labelRight;
			this.currentSide = side;
			this.$emit('update:selectedSide', side);
		}
	},
};
</script>
