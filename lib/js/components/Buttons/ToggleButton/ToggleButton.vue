<template>
	<ds-ripple class="toggleButtonWrapper" :disable="!isInteractive" :color="rippleColor">
		<span
			class="toggleButton"
			:class="{
				'-outlined': type === TOGGLE_BUTTON_TYPES.OUTLINED,
				'-filled': type === TOGGLE_BUTTON_TYPES.FILLED,

				'-xSmall': size === TOGGLE_BUTTON_SIZES.X_SMALL,
				'-small': size === TOGGLE_BUTTON_SIZES.SMALL,

				'-rounded': radius === TOGGLE_BUTTON_RADIUSES.ROUNDED,

				[colorClassName]: true,

				'-elevationXSmall': elevation === TOGGLE_BUTTON_ELEVATIONS.X_SMALL,
				'-elevationSmall': elevation === TOGGLE_BUTTON_ELEVATIONS.SMALL,

				'-interactive': isInteractive,
				'-selected': isSelected,
			}"
			@click="isInteractive && $emit('click')"
		>
			{{ text }}
		</span>
	</ds-ripple>
</template>

<style lang="scss">
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/shadows';

$toggle-button-size-x-small: 28px;
$toggle-button-size-small: 32px;
$toggle-button-size-medium: 40px;

$toggle-button-colors: (
	'primary': (
		'text': $color-primary-text,
		'outline': $color-primary-border-weak,
		'filled': (
			'background': $color-primary-background-medium,
			'background-hovered': $color-primary-background-medium-hovered,
		),
		'outlined': (
			'border': $color-primary-border,
			'background-hovered': $color-primary-background-ghost-hovered,
		),
		'selected': (
			'background': $color-primary-background-strong,
			'background-hovered': $color-primary-background-strong-hovered,
		),
	),
	'neutral': (
		'text': $color-neutral-text-weak,
		'outline': $color-neutral-border-weak,
		'filled': (
			'background': $color-neutral-background-medium,
			'background-hovered': $color-neutral-background-medium-hovered,
		),
		'outlined': (
			'border': $color-neutral-border-strong,
			'background-hovered': $color-neutral-background-ghost-hovered,
		),
		'selected': (
			'background': $color-neutral-background-strong,
			'background-hovered': $color-neutral-background-strong-hovered,
		),
	),
);

.toggleButtonWrapper {
	display: inline-flex;
}

.toggleButton {
	@include headlineXS;

	align-items: center;
	// we can't use percent value because we don't want ellipse shape when text is longer
	// value it big enough to make circle when text is short
	border-radius: 100px;
	display: inline-flex;
	font-weight: bold;
	justify-content: center;
	min-height: $toggle-button-size-medium;
	min-width: $toggle-button-size-medium;
	outline: 6px solid transparent;
	padding: $space-xxs;
	pointer-events: none;
	transition: color ease-in-out $default-transition-time,
		border-color ease-in-out $default-transition-time,
		background-color ease-in-out $default-transition-time,
		outline-color ease-in-out $default-transition-time;

	@each $color-name, $color-map in $toggle-button-colors {
		&.-color-#{$color-name} {
			color: map-get($color-map, 'text');

			&:hover {
				outline-color: map-get($color-map, 'outline');
			}

			&.-filled {
				background-color: map-get($color-map, 'filled', 'background');

				&:hover {
					background-color: map-get($color-map, 'filled', 'background-hovered');
				}
			}

			&.-outlined {
				border-color: map-get($color-map, 'outlined', 'border');

				&:hover {
					background-color: map-get($color-map, 'outlined', 'background-hovered');
				}
			}

			&.-selected {
				background-color: map-get($color-map, 'selected', 'background');

				&:hover {
					background-color: map-get($color-map, 'selected', 'background-hovered');
				}
			}
		}
	}

	&.-rounded {
		border-radius: $radius-s;
	}

	&.-outlined {
		border: 2px solid;
	}

	&.-selected {
		color: $color-inverted-text;
	}

	&.-interactive {
		cursor: pointer;
		pointer-events: initial;
	}

	&.-xSmall {
		min-height: $toggle-button-size-x-small;
		min-width: $toggle-button-size-x-small;
		padding: $space-xxxxs;
	}

	&.-small {
		min-height: $toggle-button-size-small;
		min-width: $toggle-button-size-small;
		padding: $space-xxxs;
	}

	&.-elevationXSmall,
	&.-elevationSmall {
		background-color: $color-default-background;
	}

	&.-elevationSmall {
		box-shadow: $default-lighter-shadow;
	}
}
</style>

<script lang="ts">
import { Value } from '../../../utils/type.utils';
import DsRipple, { RIPPLE_COLORS } from '../../Ripple';

import {
	TOGGLE_BUTTON_COLORS,
	TOGGLE_BUTTON_ELEVATIONS,
	TOGGLE_BUTTON_RADIUSES,
	TOGGLE_BUTTON_SIZES,
	TOGGLE_BUTTON_TYPES,
} from './ToggleButton.consts';

export default {
	name: 'ToggleButton',
	components: {
		DsRipple,
	},
	props: {
		text: {
			type: String,
			default: '',
		},
		size: {
			type: String,
			default: TOGGLE_BUTTON_SIZES.MEDIUM,
			validator(value: Value<typeof TOGGLE_BUTTON_SIZES>) {
				return Object.values(TOGGLE_BUTTON_SIZES).includes(value);
			},
		},
		type: {
			type: String,
			default: TOGGLE_BUTTON_TYPES.FILLED,
			validator(value: Value<typeof TOGGLE_BUTTON_TYPES>) {
				return Object.values(TOGGLE_BUTTON_TYPES).includes(value);
			},
		},
		color: {
			type: String,
			default: TOGGLE_BUTTON_COLORS.PRIMARY,
			validator(value: Value<typeof TOGGLE_BUTTON_COLORS>) {
				return Object.values(TOGGLE_BUTTON_COLORS).includes(value);
			},
		},
		radius: {
			type: String,
			default: TOGGLE_BUTTON_RADIUSES.CAPSULE,
			validator(value: Value<typeof TOGGLE_BUTTON_RADIUSES>) {
				return Object.values(TOGGLE_BUTTON_RADIUSES).includes(value);
			},
		},
		isInteractive: {
			type: Boolean,
			default: true,
		},
		isSelected: {
			type: Boolean,
			default: true,
		},
		// TODO implement me in future
		// iconLeft: {
		// 	type: Object,
		// 	default: null,
		// 	validate(icon: VueConstructor) {
		// 		return Object.values(ICONS).includes(icon);
		// 	},
		// },
		// iconRight: {
		// 	type: Object,
		// 	default: null,
		// 	validate(icon: VueConstructor) {
		// 		return Object.values(ICONS).includes(icon);
		// 	},
		// },
		elevation: {
			type: String,
			default: TOGGLE_BUTTON_ELEVATIONS.NONE,
			validator(value: Value<typeof TOGGLE_BUTTON_ELEVATIONS>) {
				return Object.values(TOGGLE_BUTTON_ELEVATIONS).includes(value);
			},
		},
	},
	data() {
		return {
			TOGGLE_BUTTON_COLORS: Object.freeze(TOGGLE_BUTTON_COLORS),
			TOGGLE_BUTTON_ELEVATIONS: Object.freeze(TOGGLE_BUTTON_ELEVATIONS),
			TOGGLE_BUTTON_SIZES: Object.freeze(TOGGLE_BUTTON_SIZES),
			TOGGLE_BUTTON_TYPES: Object.freeze(TOGGLE_BUTTON_TYPES),
			TOGGLE_BUTTON_RADIUSES: Object.freeze(TOGGLE_BUTTON_RADIUSES),
		};
	},
	computed: {
		colorClassName(): string {
			return `-color-${this.color}`;
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
