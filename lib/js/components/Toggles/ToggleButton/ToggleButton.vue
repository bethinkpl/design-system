<template>
	<div
		class="toggleButtonWrapper"
		:class="{
			'-rounded': radius === TOGGLE_BUTTON_RADIUSES.ROUNDED,
		}"
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

				'-disabled': state === TOGGLE_BUTTON_STATES.DISABLED,
				'-loading': state === TOGGLE_BUTTON_STATES.LOADING,
				'-interactive': isInteractiveComputed,
				'-selected': isSelected,
			}"
			@click="isInteractiveComputed && $emit('click')"
		>
			<div class="toggleButton__contentWrapper">
				<ds-icon
					v-if="iconLeft"
					class="toggleButton__icon"
					:icon="iconLeft"
					:size="iconSize"
				/>
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

			<ds-icon
				v-if="state === TOGGLE_BUTTON_STATES.LOADING"
				class="toggleButton__icon toggleButton__loadingSpinner"
				:icon="ICONS.FAD_SPINNER_THIRD"
				:size="iconSize"
				spinning
			/>
		</div>
	</div>
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
	'neutral': (
		'color': $color-neutral-text,
		'border': $color-neutral-border,
		'border-hovered': $color-neutral-border-hovered,
		'border-focused': $color-neutral-border-focused,
		'background': $color-neutral-background-ghost,
		'background-hovered': $color-neutral-background-ghost-hovered,
		'background-focused': $color-neutral-background-ghost-focused,
		'icon': $color-neutral-icon-weak,
		'outline-hovered': $color-neutral-background-ghost-hovered,
		'outline-focused': $color-neutral-background-ghost-focused,
		'disabled': (
			'color': $color-neutral-text-disabled,
			'border': $color-neutral-border-disabled,
			'background': $color-neutral-background-ghost-disabled,
			'icon': $color-neutral-icon-weak-disabled,
		),
		'selected': (
			'color': $color-neutral-text-heavy,
			'border': $color-primary-border,
			'border-hovered': $color-primary-border-hovered,
			'border-focused': $color-primary-border-focused,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused,
			'icon': $color-primary-icon,
			'outline-hovered': $color-primary-background-ghost-hovered,
			'outline-focused': $color-primary-background-ghost-focused,
			'disabled': (
				'color': $color-neutral-text-heavy-disabled,
				'border': $color-primary-border-disabled,
				'background': $color-primary-background-disabled,
				'icon': $color-primary-icon-disabled,
			),
		),
	),
	'neutralHeavy': (
		'color': $color-neutral-text,
		'border': $color-neutral-border-heavy,
		'border-hovered': $color-neutral-border-heavy-hovered,
		'border-focused': $color-neutral-border-heavy-focused,
		'background': $color-neutral-background-ghost,
		'background-hovered': $color-neutral-background-ghost-hovered,
		'background-focused': $color-neutral-background-ghost-focused,
		'icon': $color-neutral-icon,
		'outline-hovered': $color-neutral-background-ghost-hovered,
		'outline-focused': $color-neutral-background-ghost-focused,
		'disabled': (
			'color': $color-neutral-text-disabled,
			'border': $color-neutral-border-heavy-disabled,
			'background': $color-neutral-background-ghost-disabled,
			'icon': $color-neutral-icon-weak-disabled,
		),
		'selected': (
			'color': $color-neutral-text-heavy,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused,
			'border': $color-primary-border,
			'border-hovered': $color-primary-border-hovered,
			'border-focused': $color-primary-border-focused,
			'icon': $color-primary-icon,
			'outline-hovered': $color-primary-background-ghost-hovered,
			'outline-focused': $color-primary-background-ghost-focused,
			'disabled': (
				'color': $color-neutral-text-heavy-disabled,
				'border': $color-primary-border-disabled,
				'background': $color-primary-background-disabled,
				'icon': $color-primary-icon-disabled,
			),
		),
	),
	'neutralStrong': (
		'color': $color-neutral-text,
		'border': $color-neutral-border-strong,
		'border-hovered': $color-neutral-border-strong-hovered,
		'border-focused': $color-neutral-border-strong-focused,
		'background': $color-neutral-background-ghost,
		'background-hovered': $color-neutral-background-ghost-hovered,
		'background-focused': $color-neutral-background-ghost-focused,
		'icon': $color-neutral-icon,
		'outline-hovered': $color-neutral-background-ghost-hovered,
		'outline-focused': $color-neutral-background-ghost-focused,
		'disabled': (
			'color': $color-neutral-text-disabled,
			'border': $color-neutral-border-strong-disabled,
			'background': $color-neutral-background-ghost-disabled,
			'icon': $color-neutral-icon-disabled,
		),
		'selected': (
			'color': $color-inverted-text,
			'background': $color-neutral-background-strong,
			'background-hovered': $color-neutral-background-strong-hovered,
			'background-focused': $color-neutral-background-strong-focused,
			'border': $color-neutral-background-strong,
			'border-hovered': $color-neutral-background-strong-hovered,
			'border-focused': $color-neutral-background-strong-focused,
			'icon': $color-inverted-icon,
			'outline-hovered': $color-neutral-background-ghost-hovered,
			'outline-focused': $color-neutral-background-ghost-focused,
			'disabled': (
				'color': $color-inverted-text-disabled,
				'border': $color-neutral-background-strong-disabled,
				'background': $color-neutral-background-strong-disabled,
				'icon': $color-inverted-icon-disabled,
			),
		),
	),
	'primary': (
		'color': $color-primary-text,
		'border': $color-primary-border,
		'border-hovered': $color-primary-border-hovered,
		'border-focused': $color-primary-border-focused,
		'background': $color-primary-background-ghost,
		'background-hovered': $color-primary-background-ghost-hovered,
		'background-focused': $color-primary-background-ghost-focused,
		'icon': $color-primary-icon-weak,
		'outline-hovered': $color-primary-background-ghost-hovered,
		'outline-focused': $color-primary-background-ghost-focused,
		'disabled': (
			'color': $color-primary-text-disabled,
			'border': $color-primary-border-disabled,
			'background': $color-neutral-background-ghost-disabled,
			'icon': $color-primary-icon-weak-disabled,
		),
		'selected': (
			'color': $color-inverted-text,
			'background': $color-primary-background-strong,
			'background-hovered': $color-primary-background-strong-hovered,
			'background-focused': $color-primary-background-strong-focused,
			'border': $color-primary-background-strong,
			'border-hovered': $color-primary-background-strong-hovered,
			'border-focused': $color-primary-background-strong-focused,
			'icon': $color-inverted-icon,
			'outline-hovered': $color-primary-background-ghost-hovered,
			'outline-focused': $color-primary-background-ghost-focused,
			'disabled': (
				'color': $color-inverted-text-disabled,
				'border': $color-primary-background-strong-disabled,
				'background': $color-primary-background-strong-disabled,
				'icon': $color-inverted-icon-disabled,
			),
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
				border-color: map-get($color-map, 'border-hovered');
				outline-color: map-get($color-map, 'outline-hovered');
			}

			&:focus {
				background-color: map-get($color-map, 'background-focused');
				border-color: map-get($color-map, 'border-focused');
				outline-color: map-get($color-map, 'outline-focused');
			}

			&.-selected {
				background-color: map-get($color-map, 'selected', 'background');
				border-color: map-get($color-map, 'selected', 'border');
				color: map-get($color-map, 'selected', 'color');

				&:hover {
					background-color: map-get($color-map, 'selected', 'background-hovered');
					border-color: map-get($color-map, 'selected', 'border-hovered');
					outline-color: map-get($color-map, 'selected', 'outline-hovered');
				}

				&:focus {
					background-color: map-get($color-map, 'selected', 'background-focused');
					border-color: map-get($color-map, 'selected', 'border-focused');
					outline-color: map-get($color-map, 'selected', 'outline-focused');
				}

				#{$root}__icon {
					color: map-get($color-map, 'selected', 'icon');
				}
			}

			&.-disabled {
				background-color: map-get($color-map, 'disabled', 'background');
				border-color: map-get($color-map, 'disabled', 'border');
				color: map-get($color-map, 'disabled', 'color');

				#{$root}__icon {
					color: map-get($color-map, 'disabled', 'icon');
				}
			}

			&.-disabled.-selected {
				background-color: map-get($color-map, 'selected', 'disabled', 'background');
				border-color: map-get($color-map, 'selected', 'disabled', 'border');
				color: map-get($color-map, 'selected', 'disabled', 'color');

				#{$root}__icon {
					color: map-get($color-map, 'selected', 'disabled', 'icon');
				}
			}

			#{$root}__icon {
				color: map-get($color-map, 'icon');
			}
		}
	}

	align-items: center;
	// we can't use percent value because we don't want ellipse shape when label is longer
	// value it big enough to make circle when label is short
	border-radius: 100px;
	border-style: solid;
	border-width: $toggle-button-border-size;
	display: flex;
	justify-content: center;
	outline: 6px solid transparent;
	pointer-events: none;
	transition: color ease-in-out $default-transition-time,
		border-color ease-in-out $default-transition-time,
		background-color ease-in-out $default-transition-time,
		outline-color ease-in-out $default-transition-time;

	&__contentWrapper {
		align-items: center;
		display: flex;
		gap: $space-4xs;
		justify-content: center;
	}

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

	&.-interactive {
		cursor: pointer;
		pointer-events: initial;
	}

	&.-loading {
		#{$root}__contentWrapper {
			opacity: 0;
		}
	}

	&.-small {
		min-height: $toggle-button-size-small;
		min-width: $toggle-button-size-small;
		padding: substract-border($space-3xs, 'small') substract-border($space-xs, 'small');

		&.-hasSmallHorizontalPadding {
			padding: substract-border($space-3xs, 'small') substract-border($space-5xs, 'small');
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
		padding: substract-border($space-2xs, 'medium') substract-border($space-xs, 'medium');

		&.-hasSmallHorizontalPadding {
			padding: substract-border($space-2xs, 'medium')
				substract-border($space-5xs, 'medium');
		}

		#{$root}__content.-small {
			@include label-m-default-bold;

			&.-uppercase {
				@include label-m-default-bold-uppercase;
			}
		}
	}

	&.-large {
		border-width: $toggle-button-border-size-large;
		min-height: $toggle-button-size-large;
		min-width: $toggle-button-size-large;
		padding: substract-border($space-xs, 'large') substract-border($space-s, 'large');

		&.-hasSmallHorizontalPadding {
			padding: substract-border($space-2xs, 'large') substract-border($space-5xs, 'large');
		}
	}

	&__loadingSpinner {
		position: absolute;
	}
}
</style>

<script lang="ts">
import { Value } from '../../../utils/type.utils';
import { PropType, toRaw } from 'vue';

import {
	TOGGLE_BUTTON_COLORS,
	TOGGLE_BUTTON_LABEL_SIZES,
	TOGGLE_BUTTON_RADIUSES,
	TOGGLE_BUTTON_SIZES,
	TOGGLE_BUTTON_STATES,
	ToggleButtonColor,
	ToggleButtonLabelSize,
	ToggleButtonRadius,
	ToggleButtonSize,
	ToggleButtonState,
} from './ToggleButton.consts';
import { ICON_SIZES, IconItem, ICONS, IconSize } from '../../Icons/Icon';
import DsIcon from '../../Icons/Icon/Icon.vue';

export default {
	name: 'ToggleButton',
	components: {
		DsIcon,
	},
	props: {
		color: {
			type: String as PropType<ToggleButtonColor>,
			default: TOGGLE_BUTTON_COLORS.NEUTRAL,
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
		label: {
			type: String,
			default: '',
		},
		labelSize: {
			type: String as PropType<ToggleButtonLabelSize>,
			default: TOGGLE_BUTTON_SIZES.MEDIUM,
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
		state: {
			type: String as PropType<ToggleButtonState>,
			default: TOGGLE_BUTTON_STATES.DEFAULT,
			validator(value: Value<typeof TOGGLE_BUTTON_STATES>) {
				return Object.values(TOGGLE_BUTTON_STATES).includes(value);
			},
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['click'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			TOGGLE_BUTTON_COLORS: Object.freeze(TOGGLE_BUTTON_COLORS),
			TOGGLE_BUTTON_LABEL_SIZES: Object.freeze(TOGGLE_BUTTON_LABEL_SIZES),
			TOGGLE_BUTTON_RADIUSES: Object.freeze(TOGGLE_BUTTON_RADIUSES),
			TOGGLE_BUTTON_SIZES: Object.freeze(TOGGLE_BUTTON_SIZES),
			TOGGLE_BUTTON_STATES: Object.freeze(TOGGLE_BUTTON_STATES),
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
		isInteractiveComputed(): boolean {
			if (this.state !== TOGGLE_BUTTON_STATES.DEFAULT) {
				return false;
			}

			return this.isInteractive;
		},
	},
};
</script>
