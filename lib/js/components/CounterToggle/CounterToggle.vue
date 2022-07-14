<template>
	<div
		v-ripple
		class="counterToggle"
		:class="[{ '-selected': isSelected, '-disabled': isDisabled }, colorClass]"
		@click="$emit('click')"
	>
		<icon class="counterToggle__icon" :icon="icon" :size="ICON_SIZES.X_SMALL" />
		<span v-if="counter !== null" class="counterToggle__counter">{{ counter }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/radiuses';

$counter-toggle-colors: (
	'primary': (
		'default': (
			'color': $color-primary-text,
			'background': $color-primary-background-ghost,
			'background-hovered': $color-primary-background-ghost-hovered,
			'background-focused': $color-primary-background-ghost-focused,
			'background-pressed': $color-primary-background-ghost-pressed,
			'icon': $color-primary-icon,
			'ripple': $color-primary-ripple,
			'disabled': (
				'color': $color-primary-text-disabled,
				'icon': $color-primary-icon-disabled,
				'background': $color-primary-background-ghost-disabled,
			),
		),
		'selected': (
			'color': $color-primary-text,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused,
			'background-pressed': $color-primary-background-hovered,
			'icon': $color-primary-icon,
			'ripple': $color-primary-ripple,
			'disabled': (
				'color': $color-primary-text-disabled,
				'icon': $color-primary-icon-disabled,
				'background': $color-primary-background-disabled,
			),
		),
	),
	'neutral': (
		'default': (
			'color': $color-neutral-text,
			'background': $color-neutral-background-ghost,
			'background-hovered': $color-neutral-background-ghost-hovered,
			'background-focused': $color-neutral-background-ghost-focused,
			'background-pressed': $color-neutral-background-ghost-pressed,
			'icon': $color-neutral-icon,
			'ripple': $color-neutral-ripple,
			'disabled': (
				'color': $color-neutral-text-disabled,
				'icon': $color-neutral-icon-disabled,
				'background': $color-neutral-background-ghost-disabled,
			),
		),
		'selected': (
			'color': $color-primary-text,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused,
			'background-pressed': $color-primary-background-hovered,
			'icon': $color-primary-icon,
			'ripple': $color-primary-ripple,
			'disabled': (
				'color': $color-primary-text-disabled,
				'icon': $color-primary-icon-disabled,
				'background': $color-primary-background-disabled,
			),
		),
	),
	'neutralStrong': (
		'default': (
			'color': $color-neutral-text-strong,
			'background': $color-neutral-background-ghost,
			'background-hovered': $color-neutral-background-ghost-hovered,
			'background-focused': $color-neutral-background-ghost-focused,
			'background-pressed': $color-neutral-background-ghost-pressed,
			'icon': $color-neutral-icon-strong,
			'ripple': $color-inverted-ripple,
			'disabled': (
				'color': $color-neutral-text-strong-disabled,
				'icon': $color-neutral-icon-strong-disabled,
				'background': $color-neutral-background-ghost-disabled,
			),
		),
		'selected': (
			'color': $color-primary-text,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused,
			'background-pressed': $color-primary-background-hovered,
			'icon': $color-primary-icon,
			'ripple': $color-primary-ripple,
			'disabled': (
				'color': $color-primary-text-disabled,
				'icon': $color-primary-icon-disabled,
				'background': $color-primary-background-disabled,
			),
		),
	),
	'inverted': (
		'default': (
			'color': $color-inverted-text,
			'background': $color-default-background-ghost,
			'background-hovered': $color-default-background-ghost-hovered,
			'background-focused': $color-default-background-ghost-focused,
			'background-pressed': $color-default-background-ghost-pressed,
			'icon': $color-inverted-icon,
			'ripple': $color-inverted-ripple,
			'disabled': (
				'color': $color-inverted-text-disabled,
				'icon': $color-inverted-icon-disabled,
				'background': $color-default-background-ghost-disabled,
			),
		),
		'selected': (
			'color': $color-primary-text,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused,
			'background-pressed': $color-primary-background-hovered,
			'icon': $color-primary-icon,
			'ripple': $color-primary-ripple,
			'disabled': (
				'color': $color-primary-text-disabled,
				'icon': $color-primary-icon-disabled,
				'background': $color-primary-background-disabled,
			),
		),
	),
);

@mixin setCounterToggleColor($color) {
	color: $color;
}

@mixin setCounterToggleBackground(
	$background,
	$background-hover,
	$background-focus,
	$background-pressed
) {
	background-color: $background;

	&:hover,
	&.-hovered {
		background-color: $background-hover;
	}

	&:active,
	&.-active {
		background-color: $background-pressed;
	}

	&:focus,
	&.-focused {
		background-color: $background-focus;
	}
}

@mixin setCounterToggleDisabled($disabled-color, $disabled-icon, $disabled-background) {
	&:disabled,
	&.-disabled {
		color: $disabled-color;
		background-color: $disabled-background;

		.counterToggle__icon {
			color: $disabled-icon;
		}
	}
}

@mixin setCounterToggleAdditions($ripple, $icon) {
	&::v-deep .ripple {
		background-color: $ripple !important;
	}

	.counterToggle {
		&__icon {
			color: $icon;
		}
	}
}

.counterToggle {
	@each $color-name, $color-map in $counter-toggle-colors {
		&.-color-#{$color-name} {
			@include setCounterToggleColor(map-get($color-map, 'default', 'color'));
			@include setCounterToggleBackground(
				map-get($color-map, 'default', 'background'),
				map-get($color-map, 'default', 'background-hovered'),
				map-get($color-map, 'default', 'background-focused'),
				map-get($color-map, 'default', 'background-pressed')
			);
			@include setCounterToggleDisabled(
				map-get($color-map, 'default', 'disabled', 'color'),
				map-get($color-map, 'default', 'disabled', 'icon'),
				map-get($color-map, 'default', 'disabled', 'background')
			);
			@include setCounterToggleAdditions(
				map-get($color-map, 'default', 'ripple'),
				map-get($color-map, 'default', 'icon')
			);
		}
	}

	align-items: center;
	background-color: transparent;
	border: 0;
	border-radius: $radius-s;
	cursor: pointer;
	display: inline-flex;
	width: auto;
	justify-content: center;
	padding: $space-xxs;
	position: relative;
	transition: color ease-in-out $default-transition-time,
		background-color ease-in-out $default-transition-time;
	user-select: none;

	&.-selected {
		@each $color-name, $color-map in $counter-toggle-colors {
			&.-color-#{$color-name} {
				@include setCounterToggleColor(map-get($color-map, 'selected', 'color'));
				@include setCounterToggleBackground(
					map-get($color-map, 'selected', 'background'),
					map-get($color-map, 'selected', 'background-hovered'),
					map-get($color-map, 'selected', 'background-focused'),
					map-get($color-map, 'selected', 'background-pressed')
				);
				@include setCounterToggleDisabled(
					map-get($color-map, 'selected', 'disabled', 'color'),
					map-get($color-map, 'selected', 'disabled', 'icon'),
					map-get($color-map, 'selected', 'disabled', 'background')
				);
				@include setCounterToggleAdditions(
					map-get($color-map, 'selected', 'ripple'),
					map-get($color-map, 'selected', 'icon')
				);
			}
		}
	}

	&:disabled,
	&.-disabled {
		pointer-events: none;
	}

	&__icon {
		margin-right: $space-xxxxxs;
		transition: color ease-in-out $default-transition-time;
	}

	&__counter {
		@include textBold();
		@include buttonS();
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';
import Ripple from 'vue-ripple-directive';

import { COUNTER_TOGGLE_COLORS } from './CounterToggle.consts';
import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'CounterToggle',
	components: {
		Icon,
	},
	directives: {
		ripple: Ripple,
	},
	props: {
		counter: {
			type: [String, Number],
			default: null,
		},
		color: {
			type: String,
			default: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG,
			validate(color) {
				Object.values(COUNTER_TOGGLE_COLORS).includes(color);
			},
		},
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		colorClass(): string {
			return `-color-${this.color}`;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
