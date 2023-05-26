<template>
	<ds-ripple
		class="toggleButtonWrapper"
		:class="{
			'-rounded': radius === TOGGLE_BUTTON_RADIUSES.ROUNDED,
		}"
		:disable="!isInteractive"
		:color="rippleColor"
	>
		<div
			class="toggleButton"
			:class="{
				'-small': size === TOGGLE_BUTTON_SIZES.SMALL,
				'-medium': size === TOGGLE_BUTTON_SIZES.MEDIUM,
				'-large': size === TOGGLE_BUTTON_SIZES.LARGE,

				'-hasSmallHorizontalPadding': hasSmallHorizontalPadding,

				'-rounded': radius === TOGGLE_BUTTON_RADIUSES.ROUNDED,

				[colorClassName]: true,

				'-interactive': isInteractive,
				'-selected': isSelected,
			}"
			@click="isInteractive && $emit('click')"
		>
			<ds-icon v-if="iconLeft" class="toggleButton__icon" :icon="iconLeft" :size="iconSize" />
			<span
				v-if="label"
				class="toggleButton__content"
				:class="{
					'-small': labelSize === TOGGLE_BUTTON_LABEL_SIZES.SMALL,
					'-uppercase': isLabelUppercase,
				}"
			>
				{{ label }}
			</span>
			<ds-icon
				v-if="iconRight"
				class="toggleButton__icon"
				:icon="iconRight"
				:size="iconSize"
			/>
		</div>
	</ds-ripple>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/shadows';

$toggle-button-size-small: 28px;
$toggle-button-size-medium: 32px;
$toggle-button-size-large: 40px;

$toggle-button-border-size: 1px;
$toggle-button-border-size-large: 2px;

$toggle-button-colors: (
	'primary': (
		'color': $color-primary-text,
		'outline': $color-primary-border-weak,
		'border': $color-primary-border,
		'background': $color-primary-background-ghost,
		'background-hovered': $color-primary-background-ghost-hovered,
		'background-focused': $color-primary-background-ghost-focused,
		'selected': (
			'background': $color-primary-background-strong,
			'background-hovered': $color-primary-background-strong-hovered,
			'background-focused': $color-primary-background-strong-focused,
		),
	),
	'neutral': (
		'color': $color-neutral-text-weak,
		'outline': $color-neutral-border-weak,
		'border': $color-neutral-border-strong,
		'background': $color-neutral-background-ghost,
		'background-hovered': $color-neutral-background-ghost-hovered,
		'background-focused': $color-neutral-background-ghost-focused,
		'selected': (
			'background': $color-neutral-background-strong,
			'background-hovered': $color-neutral-background-strong-hovered,
			'background-focused': $color-neutral-background-strong-focused,
		),
	),
);

@function substract-border($padding, $size) {
	$size-map: (
		'small': $toggle-button-border-size,
		'medium': $toggle-button-border-size,
		'large': $toggle-button-border-size-large,
	);

	@return $padding - map-get($size-map, $size);
}

.toggleButtonWrapper {
	display: inline-block;

	&:deep(.ripple-container) {
		border-radius: 100px !important;
	}

	&.-rounded:deep(.ripple-container) {
		border-radius: $radius-s !important;
	}
}

.toggleButton {
	$root: &;

	@each $color-name, $color-map in $toggle-button-colors {
		&.-color-#{$color-name} {
			background-color: map-get($color-map, 'background');
			border-color: map-get($color-map, 'border');
			color: map-get($color-map, 'color');

			&:hover {
				background-color: map-get($color-map, 'background-hovered');
				outline-color: map-get($color-map, 'outline');
			}

			&:focus {
				background-color: map-get($color-map, 'background-focused');
			}

			&.-selected {
				background-color: map-get($color-map, 'selected', 'background');

				&:hover {
					background-color: map-get($color-map, 'selected', 'background-hovered');
				}

				&:focus {
					background-color: map-get($color-map, 'selected', 'background-focused');
				}
			}
		}
	}

	align-items: center;
	border: $toggle-button-border-size solid;
	// we can't use percent value because we don't want ellipse shape when label is longer
	// value it big enough to make circle when label is short
	border-radius: 100px;
	display: flex;
	gap: $space-xxxxs;
	justify-content: center;
	outline: 6px solid transparent;
	pointer-events: none;
	transition: color ease-in-out $default-transition-time,
		border-color ease-in-out $default-transition-time,
		background-color ease-in-out $default-transition-time,
		outline-color ease-in-out $default-transition-time;

	&__content {
		@include label-l-default-bold;

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&.-uppercase {
			@include label-l-default-bold-uppercase;
		}
	}

	&.-rounded {
		border-radius: $radius-s;
	}

	&.-selected {
		color: $color-inverted-text;
	}

	&.-interactive {
		cursor: pointer;
		pointer-events: initial;
	}

	&.-small {
		min-height: $toggle-button-size-small;
		min-width: $toggle-button-size-small;
		padding: substract-border($space-xxxs, 'small') substract-border($space-xs, 'small');

		&.-hasSmallHorizontalPadding {
			padding: substract-border($space-xxxs, 'small') substract-border($space-xxxxxs, 'small');
		}

		#{$root}__content.-small {
			@include label-s-default-bold;

			&.-uppercase {
				@include label-s-default-bold-uppercase;
			}
		}
	}

	&.-medium {
		min-height: $toggle-button-size-medium;
		min-width: $toggle-button-size-medium;
		padding: substract-border($space-xxs, 'medium') substract-border($space-xs, 'medium');

		&.-hasSmallHorizontalPadding {
			padding: substract-border($space-xxs, 'medium')
				substract-border($space-xxxxxs, 'medium');
		}

		#{$root}__content.-small {
			@include label-m-default-bold;

			&.-uppercase {
				@include label-m-default-bold-uppercase;
			}
		}
	}

	&.-large {
		border: $toggle-button-border-size-large solid;
		min-height: $toggle-button-size-large;
		min-width: $toggle-button-size-large;
		padding: substract-border($space-xs, 'large') substract-border($space-s, 'large');

		&.-hasSmallHorizontalPadding {
			padding: substract-border($space-xxs, 'large') substract-border($space-xxxxxs, 'large');
		}
	}
}
</style>

<script lang="ts">
import { Value } from '../../../utils/type.utils';
import DsRipple, { RIPPLE_COLORS } from '../../Ripple';
import { PropType, toRaw } from 'vue';

import {
	TOGGLE_BUTTON_COLORS,
	TOGGLE_BUTTON_LABEL_SIZES,
	TOGGLE_BUTTON_RADIUSES,
	TOGGLE_BUTTON_SIZES,
	ToggleButtonColor,
	ToggleButtonLabelSize,
	ToggleButtonRadius,
	ToggleButtonSize,
} from './ToggleButton.consts';
import { ICON_SIZES, IconItem, ICONS, IconSize } from '../../Icons/Icon';
import DsIcon from '../../Icons/Icon/Icon.vue';

export default {
	name: 'ToggleButton',
	components: {
		DsIcon,
		DsRipple,
	},
	props: {
		color: {
			type: String as PropType<ToggleButtonColor>,
			default: TOGGLE_BUTTON_COLORS.PRIMARY,
			validator(value: Value<typeof TOGGLE_BUTTON_COLORS>) {
				return Object.values(TOGGLE_BUTTON_COLORS).includes(value);
			},
		},
		hasSmallHorizontalPadding: {
			type: Boolean,
			default: false,
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
		isInteractive: {
			type: Boolean,
			default: true,
		},
		isLabelUppercase: {
			type: Boolean,
			default: false,
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		labelSize: {
			type: String as PropType<ToggleButtonLabelSize>,
			default: TOGGLE_BUTTON_SIZES.SMALL,
		},
		radius: {
			type: String as PropType<ToggleButtonRadius>,
			default: TOGGLE_BUTTON_RADIUSES.CAPSULE,
			validator(value: Value<typeof TOGGLE_BUTTON_RADIUSES>) {
				return Object.values(TOGGLE_BUTTON_RADIUSES).includes(value);
			},
		},
		size: {
			type: String as PropType<ToggleButtonSize>,
			default: TOGGLE_BUTTON_SIZES.MEDIUM,
			validator(value: Value<typeof TOGGLE_BUTTON_SIZES>) {
				return Object.values(TOGGLE_BUTTON_SIZES).includes(value);
			},
		},
		label: {
			type: String,
			default: '',
		},
	},
	emits: ['click'],
	data() {
		return {
			TOGGLE_BUTTON_COLORS: Object.freeze(TOGGLE_BUTTON_COLORS),
			TOGGLE_BUTTON_LABEL_SIZES: Object.freeze(TOGGLE_BUTTON_LABEL_SIZES),
			TOGGLE_BUTTON_SIZES: Object.freeze(TOGGLE_BUTTON_SIZES),
			TOGGLE_BUTTON_RADIUSES: Object.freeze(TOGGLE_BUTTON_RADIUSES),
		};
	},
	computed: {
		colorClassName(): string {
			return `-color-${this.color}`;
		},
		iconSize(): IconSize {
			return this.size === TOGGLE_BUTTON_SIZES.LARGE
				? ICON_SIZES.X_SMALL
				: ICON_SIZES.XX_SMALL;
		},
		rippleColor() {
			if (this.isSelected) {
				return RIPPLE_COLORS.INVERTED;
			}

			return {
				[TOGGLE_BUTTON_COLORS.NEUTRAL]: RIPPLE_COLORS.NEUTRAL,
				[TOGGLE_BUTTON_COLORS.PRIMARY]: RIPPLE_COLORS.PRIMARY,
			}[this.color];
		},
	},
};
</script>
