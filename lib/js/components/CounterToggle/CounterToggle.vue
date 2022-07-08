<template>
	<div
		v-ripple
		class='counterToggle'
		:class="[{ '-selected': isSelected, '-disabled': isDisabled }, colorClass]"
	>
		<icon
			class='counterToggle__icon'
			:icon='icon'
			:size='ICON_SIZES.X_SMALL'
		/>
		<span class='counterToggle__counter'>{{ counter }}</span>
	</div>
</template>

<style scoped lang='scss'>
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

$counter-toggle-width: 46px;
$counter-toggle-height: 32px;

$counter-toggle-colors: (
	'primary': (
		'default': (
			'color': $color-primary-text,
			'color-hovered': $color-primary-text,
			'color-focused': $color-primary-text,
			'background': $color-primary-background-ghost,
			'background-hovered': $color-primary-background-ghost-hovered,
			'background-focused': $color-primary-background-ghost-focused,
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
			'color-hovered': $color-primary-text-hovered,
			'color-focused': $color-primary-text-focused,
			'background': $color-primary-background,
			'background-hovered': $color-primary-background-hovered,
			'background-focused': $color-primary-background-focused, // todo dopytać się o pressed a hovered
			'icon': $color-primary-icon,
			'ripple': $color-primary-ripple,
			'disabled': (
				'color': $color-primary-text-disabled,
				'icon': $color-primary-icon-disabled,
				'background': $color-primary-background-disabled,
			),
		),
	),
	'neutral': (),
	'neutralStrong': (),
	'inverted': (),
);

@mixin setCounterToggleColor($color, $color-hovered: null, $color-focused: null, $color-disabled: null) {
	color: $color;

	&:hover,
	&.-hovered,
	&:active,
	&.-active {
		color: $color-hovered;
	}

	&:focus,
	&.-focused {
		color: $color-focused;
	}

	&.-disabled {
		color: $color-disabled;
	}
}


@mixin setCounterToggleBackground(
	$background,
	$background-hover,
	$background-focus
) {
	@if $background == null {
		background-color: transparent;
	}

	background-color: $background;

	&:hover,
	&.-hovered,
	&:active,
	&.-active {
		background-color: $background-hover;
	}

	&:focus,
	&.-focused {
		background-color: $background-focus;
	}
}


@mixin setCounterToggleDisabled(
	$disabled-color: null,
	$disabled-icon: null,
	$disabled-background: null,
	$disabled-border: null
) {
	&:disabled,
	&.-disabled {
		border-color: $disabled-border;
		color: $disabled-color;
		background-color: $disabled-background;

		.counterToggle__icon {
			color: $disabled-icon;
		}
	}
}


@mixin setCounterToggleAdditions(
	$ripple: null,
	$icon: null,
) {
	@if $ripple == null {
		.ripple {
			display: none;
		}
	}

	.ripple {
		background-color: $ripple !important;
	}

	.counterToggle {
		&__icon {
			color: $icon;
		}
	}
}

.counterToggle {
	$self: &;

	align-items: center;
	flex-direction: row;
	background-color: transparent;
	border: 0;
	border-radius: 4px;
	cursor: pointer;
	display: inline-flex;
	width: auto;
	min-width: $counter-toggle-width;
	min-height: $counter-toggle-height;
	justify-content: center;
	padding: $space-xxs;
	gap: 2px;
	position: relative;
	text-transform: uppercase;
	transform-style: preserve-3d;
	transition: color ease-in-out $default-transition-time,
	border-color ease-in-out $default-transition-time,
	background-color ease-in-out $default-transition-time;
	user-select: none;


	@each $color-name, $color-map in $counter-toggle-colors {
		&.-color-#{$color-name} {
			@include setCounterToggleColor(map-get($color-map, 'default', 'color'));
			@include setCounterToggleBackground(
					map-get($color-map, 'default', 'background'),
					map-get($color-map, 'default', 'background-hovered'),
					map-get($color-map, 'default', 'background-focused')
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

	&.-selected {
		@each $color-name, $color-map in $counter-toggle-colors {
			&.-color-#{$color-name} {
				@include setCounterToggleColor(map-get($color-map, 'selected', 'color'));
				@include setCounterToggleBackground(
						map-get($color-map, 'selected', 'background'),
						map-get($color-map, 'selected', 'background-hovered'),
						map-get($color-map, 'selected', 'background-focused')
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
		cursor: not-allowed;
		pointer-events: none;
	}

	&__counter {
		@include textBold();
		@include buttonS();

		// Keep it consistent with DsIconButton
		//transition: color ease-in-out $default-transition-time;
	}
}
</style>

<script lang='ts'>
import { COUNTER_TOGGLE_COLORS } from './CounterToggle.consts';
import Icon, { ICON_SIZES } from '../Icon';
import { VueConstructor } from 'vue';
import { ICONS } from '../Icon';
import Ripple from 'vue-ripple-directive';

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
			type: String,
			required: true,
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
