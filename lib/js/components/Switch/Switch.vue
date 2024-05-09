<template>
	<div
		class="ds-switch"
		:class="{
			'-ds-small': size === SWITCH_SIZE.SMALL,
			'-ds-medium': size === SWITCH_SIZE.MEDIUM,
			'-ds-rounded': radius === SWITCH_RADIUSES.ROUNDED,
			'-ds-disabled': state === SWITCH_STATE.DISABLED,
		}"
	>
		<div
			class="ds-switch__item -ds-left"
			:class="{
				'-ds-clickable':
					currentSide !== SWITCH_SIDE.LEFT && state !== SWITCH_STATE.DISABLED,
				'-ds-selected': currentSide === SWITCH_SIDE.LEFT,
			}"
			:title="labelLeft"
			@click="onSwitch(SWITCH_SIDE.LEFT)"
		>
			<ds-icon
				v-if="iconLeft"
				class="ds-switch__icon"
				:icon="iconLeft"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div v-if="labelLeft" class="ds-switch__label">
				{{ labelLeft }}
			</div>
		</div>
		<div
			class="ds-switch__item -ds-right"
			:class="{
				'-ds-clickable':
					currentSide !== SWITCH_SIDE.RIGHT && state !== SWITCH_STATE.DISABLED,
				'-ds-selected': currentSide === SWITCH_SIDE.RIGHT,
			}"
			:title="labelRight"
			@click="onSwitch(SWITCH_SIDE.RIGHT)"
		>
			<ds-icon
				v-if="iconRight"
				class="ds-switch__icon"
				:icon="iconRight"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div v-if="labelRight" class="ds-switch__label">
				{{ labelRight }}
			</div>
		</div>
		<div
			class="ds-switch__item -ds-selection"
			:class="{
				'-ds-left': currentSide === SWITCH_SIDE.LEFT,
				'-ds-right': currentSide === SWITCH_SIDE.RIGHT,
			}"
		>
			<ds-icon
				v-if="currentIcon"
				class="ds-switch__icon"
				:icon="currentIcon"
				:size="ICON_SIZES.XX_SMALL"
			/>
			<div v-if="currentLabel" class="ds-switch__label">{{ currentLabel }}</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/animations';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$switch-transition: all $default-transition-time ease-out;

.ds-switch {
	$root: &;

	background-color: $color-default-background;
	border: 1px solid $color-neutral-border;
	border-radius: $radius-xs;
	display: inline-flex;
	max-width: 100%;
	position: relative;

	&__icon {
		color: $color-neutral-icon;
	}

	&__label {
		@include label-s-extensive-bold-uppercase;

		color: $color-neutral-text;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.-ds-selected {
		#{$root}__icon {
			color: $color-primary-icon;
		}

		#{$root}__label {
			color: $color-neutral-text-heavy;
		}
	}

	&__item {
		align-items: center;
		background-color: $color-neutral-background-ghost;
		border: 1px solid transparent;
		border-radius: $radius-xs;
		cursor: pointer;
		display: flex;
		flex-grow: 1;
		gap: $space-3xs;
		justify-content: center;
		margin: -1px;
		max-width: calc(100% - 64px);
		min-height: 32px;
		min-width: 64px;
		overflow: hidden;
		padding: 0 $space-s;
		position: relative;
		transition: $switch-transition;
		z-index: 2;

		&.-ds-left {
			margin: -1px 0 -1px -1px;
		}

		&.-ds-right {
			margin: -1px -1px -1px 0;
		}

		&.-ds-selection {
			background-color: $color-primary-background;
			border: 1px solid $color-primary-border;
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

			&.-ds-left {
				left: 0;
			}

			&.-ds-right {
				left: calc(100% + 1px);
				transform: translateX(-100%);
			}
		}

		&.-ds-selected,
		&.-ds-selection:hover {
			cursor: default;
			flex-shrink: 0;
			text-overflow: initial;
		}

		&.-ds-clickable:hover {
			background-color: $color-neutral-background-ghost-hovered;
		}
	}

	&.-ds-rounded {
		border-radius: $radius-xl;

		#{$root}__item {
			border-radius: $radius-xl;
		}
	}

	&.-ds-small &__item {
		gap: $space-4xs;
		max-width: calc(100% - 48px);
		min-height: 24px;
		min-width: 48px;
		padding: 0 $space-xs;
	}

	&.-ds-disabled &__item {
		cursor: default;
		pointer-events: none;

		#{$root}__icon {
			color: $color-neutral-icon-disabled;
		}

		#{$root}__label {
			color: $color-neutral-text-disabled;
		}

		&.-ds-selected {
			#{$root}__icon {
				color: $color-primary-icon-disabled;
			}

			#{$root}__label {
				color: $color-neutral-text-heavy;
			}
		}

		&.-ds-selection {
			background-color: $color-primary-background-disabled;
			border-color: $color-primary-border-disabled;
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
import DsIcon, { ICON_SIZES, IconItem, ICONS } from '../Icons/Icon';

export default {
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Switch',
	components: {
		DsIcon,
	},
	props: {
		size: {
			type: String as PropType<SwitchSize>,
			default: SWITCH_SIZES.MEDIUM,
			validator(size: SwitchSize) {
				return Object.values(SWITCH_SIZES).includes(size);
			},
		},
		radius: {
			type: String as PropType<SwitchRadius>,
			default: SWITCH_RADIUSES.CAPSULE,
			validator(value: SwitchRadius) {
				return Object.values(SWITCH_RADIUSES).includes(value);
			},
		},
		iconLeft: {
			type: Object as PropType<IconItem>,
			default: null,
			validator(icon: IconItem) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconRight: {
			type: Object as PropType<IconItem>,
			default: null,
			validator(icon: IconItem) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		labelLeft: {
			type: String,
			default: '',
		},
		labelRight: {
			type: String,
			default: '',
		},
		state: {
			type: String as PropType<SwitchState>,
			default: SWITCH_STATE.DEFAULT,
			validator(state: SwitchState) {
				return Object.values(SWITCH_STATE).includes(state);
			},
		},
		selectedSide: {
			type: String as PropType<SwitchSelection>,
			default: SWITCH_SIDE.LEFT,
			validator(side: SwitchSelection) {
				return Object.values(SWITCH_SIDE).includes(side);
			},
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['update:selectedSide'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			SWITCH_RADIUSES: Object.freeze(SWITCH_RADIUSES),
			SWITCH_SIDE: Object.freeze(SWITCH_SIDE),
			SWITCH_SIZE: Object.freeze(SWITCH_SIZES),
			SWITCH_STATE: Object.freeze(SWITCH_STATE),
			// TODO: Remove currentSide when storybook is upgraded (IT-5440)
			// This is a workaround for keeping the animation preview in storybook when prop changes
			currentSide: this.selectedSide,
		};
	},
	computed: {
		currentIcon() {
			return this.currentSide === SWITCH_SIDE.LEFT ? this.iconLeft : this.iconRight;
		},
		currentLabel() {
			return this.currentSide === SWITCH_SIDE.LEFT ? this.labelLeft : this.labelRight;
		},
	},
	watch: {
		selectedSide: {
			handler(side: SwitchSelection) {
				if (side !== this.currentSide) {
					this.currentSide = side;
				}
			},
			immediate: true,
		},
	},
	methods: {
		onSwitch(side: SwitchSelection) {
			if (this.state === SWITCH_STATE.DISABLED || this.currentSide === side) {
				return;
			}
			this.currentSide = side;
			this.$emit('update:selectedSide', side);
		},
	},
};
</script>
