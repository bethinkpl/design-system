<template>
	<div
		class="ds-counterToggle"
		:class="[{ '-ds-selected': isSelected, '-ds-disabled': isDisabled }, colorClass]"
	>
		<icon class="ds-counterToggle__icon" :icon="icon" :size="ICON_SIZES.X_SMALL" />
		<span v-if="hasCounter" class="ds-counterToggle__counter">{{ counter }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/radiuses';

$counter-toggle-colors: (
	'primary': (
		'default': (
			'color': $color-primary-text,
			'background': $color-primary-background-ghost,
			'background-hovered': $color-primary-background-ghost-hovered,
			'background-focused': $color-primary-background-ghost-focused,
			'background-pressed': $color-primary-background-ghost-pressed,
			'icon': $color-primary-icon,
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
			'background-pressed': $color-primary-background-pressed,
			'icon': $color-primary-icon,
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
			'background-pressed': $color-primary-background-pressed,
			'icon': $color-primary-icon,
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
			'background-pressed': $color-primary-background-pressed,
			'icon': $color-primary-icon,
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
			'background-pressed': $color-primary-background-pressed,
			'icon': $color-primary-icon,
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
	&.-ds-hovered {
		background-color: $background-hover;
	}

	&:active,
	&.-ds-active {
		background-color: $background-pressed;
	}

	&:focus,
	&.-ds-focused {
		background-color: $background-focus;
	}
}

@mixin setCounterToggleDisabled($disabled-color, $disabled-icon, $disabled-background) {
	&:disabled,
	&.-ds-disabled {
		background-color: $disabled-background;
		color: $disabled-color;

		.ds-counterToggle__icon {
			color: $disabled-icon;
		}
	}
}

@mixin setCounterToggleAdditions($icon) {
	.ds-counterToggle {
		&__icon {
			color: $icon;
		}
	}
}

.ds-counterToggle {
	$self: &;

	@each $color-name, $color-map in $counter-toggle-colors {
		&.-ds-color-#{$color-name} {
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
			@include setCounterToggleAdditions(map-get($color-map, 'default', 'icon'));
		}
	}

	align-items: center;
	background-color: transparent;
	border: 0;
	border-radius: $radius-s;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	padding: $space-2xs;
	position: relative;
	transition: color ease-in-out $default-transition-time,
		background-color ease-in-out $default-transition-time;
	user-select: none;
	width: auto;

	&.-ds-selected {
		@each $color-name, $color-map in $counter-toggle-colors {
			&.-ds-color-#{$color-name} {
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
				@include setCounterToggleAdditions(map-get($color-map, 'selected', 'icon'));
			}
		}
	}

	&:disabled,
	&.-ds-disabled {
		pointer-events: none;
	}

	&__icon {
		transition: color ease-in-out $default-transition-time;
	}

	&__counter {
		@include label-s-extensive-bold-uppercase();

		margin-left: $space-5xs;
	}
}
</style>

<script lang="ts">
import { COUNTER_TOGGLE_COLORS, CounterToggleColor } from './CounterToggle.consts';
import Icon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	name: 'CounterToggle',
	components: {
		Icon,
	},
	props: {
		counter: {
			type: [String, Number],
			default: null,
		},
		color: {
			type: String,
			default: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG,
			validator(color) {
				return Object.values(COUNTER_TOGGLE_COLORS).includes(color as CounterToggleColor);
			},
		},
		icon: {
			type: Object,
			required: true,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
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
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {
		colorClass(): string {
			return `-ds-color-${this.color}`;
		},
		hasCounter(): boolean {
			return this.counter !== null && this.counter !== '' && this.counter !== undefined;
		},
	},
});
</script>
