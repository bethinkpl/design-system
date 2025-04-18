<template>
	<div
		:class="[
			tileColor,
			tileState,
			{
				'-ds-interactive': interactive,
				[`-ds-border-${borderColor}`]: borderColor !== null,
			},
		]"
		class="ds-tile"
	>
		<ds-icon
			v-if="iconLeft"
			:icon="iconLeft"
			:size="ICON_SIZES.SMALL"
			class="ds-tile__iconLeft"
		/>
		<div class="ds-tile__center">
			<span
				v-if="eyebrowText"
				class="ds-tile__eyebrowText"
				:class="{
					'-ds-uppercase': isEyebrowTextUppercase,
					'-ds-ellipsis': eyebrowEllipsis,
				}"
				v-text="eyebrowText"
			/>
			<span class="ds-tile__text" :class="{ '-ds-ellipsis': textEllipsis }" v-text="text" />
		</div>
		<ds-icon
			v-if="state === TILE_STATES.LOADING"
			class="ds-tile__iconRight"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="ICON_SIZES.SMALL"
			spinning
		/>
		<ds-icon
			v-else-if="iconRight"
			class="ds-tile__iconRight"
			:class="{ '-ds-hiddenOnMobile': isIconRightHiddenOnMobile }"
			:icon="iconRight"
			:size="ICON_SIZES.SMALL"
		/>
		<div
			v-else-if="additionalText"
			class="ds-tile__additionalText"
			:class="{
				'-ds-max-width-small':
					additionalTextMaxWidth === TILE_ADDITIONAL_TEXT_MAX_WIDTHS.SMALL,
				'-ds-max-width-medium':
					additionalTextMaxWidth === TILE_ADDITIONAL_TEXT_MAX_WIDTHS.MEDIUM,
			}"
		>
			{{ additionalText }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/animations';
@import '../../../styles/settings/borders';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';

$tile-border-colors: (
	'neutral': (
		'default': $color-neutral-border,
		'disabled': $color-neutral-border-disabled,
	),
	'neutralWeak': (
		'default': $color-neutral-border-weak,
		'disabled': $color-neutral-border-weak-disabled,
	),
	'primary': (
		'default': $color-primary-border,
		'disabled': $color-primary-border-disabled,
	),
	'primaryWeak': (
		'default': $color-primary-border-weak,
		'disabled': $color-primary-border-weak-disabled,
	),
	'success': (
		'default': $color-success-border,
		'disabled': $color-success-border-disabled,
	),
	'successWeak': (
		'default': $color-success-border-weak,
		'disabled': $color-success-border-weak-disabled,
	),
	'fail': (
		'default': $color-fail-border,
		'disabled': $color-fail-border-disabled,
	),
	'failWeak': (
		'default': $color-fail-border-weak,
		'disabled': $color-fail-border-weak-disabled,
	),
	'danger': (
		'default': $color-danger-border,
		'disabled': $color-danger-border-disabled,
	),
	'dangerWeak': (
		'default': $color-danger-border-weak,
		'disabled': $color-danger-border-weak-disabled,
	),
	'warning': (
		'default': $color-warning-border,
		'disabled': $color-warning-border-disabled,
	),
	'warningWeak': (
		'default': $color-warning-border-weak,
		'disabled': $color-warning-border-weak-disabled,
	),
	'info': (
		'default': $color-info-border,
		'disabled': $color-info-border-disabled,
	),
	'infoWeak': (
		'default': $color-info-border-weak,
		'disabled': $color-info-border-weak-disabled,
	),
);

$tile-colors: (
	'neutral': (
		'default': (
			'background': $color-neutral-background,
			'background-hover': $color-neutral-background-hovered,
			'eyebrow-text': $color-neutral-text-weak,
			'icon': $color-neutral-icon,
			'icon-interactive': $color-primary-icon,
		),
		'disabled': (
			'background': $color-neutral-background-disabled,
			'eyebrow-text': $color-neutral-text-weak-disabled,
			'icon': $color-neutral-icon-disabled,
			'icon-interactive': $color-primary-icon-disabled,
		),
	),
	'neutralWeak': (
		'default': (
			'background': $color-neutral-background-weak,
			'background-hover': $color-neutral-background-weak-hovered,
			'eyebrow-text': $color-neutral-text-weak,
			'icon': $color-neutral-icon,
			'icon-interactive': $color-primary-icon,
		),
		'disabled': (
			'background': $color-neutral-background-weak-disabled,
			'eyebrow-text': $color-neutral-text-weak-disabled,
			'icon': $color-neutral-icon-disabled,
			'icon-interactive': $color-primary-icon-disabled,
		),
	),
	'primary': (
		'default': (
			'background': $color-primary-background,
			'background-hover': $color-primary-background-hovered,
			'eyebrow-text': $color-primary-text,
			'icon': $color-primary-icon,
			'icon-interactive': $color-primary-icon,
		),
		'disabled': (
			'background': $color-primary-background-disabled,
			'eyebrow-text': $color-primary-text-disabled,
			'icon': $color-primary-icon-disabled,
			'icon-interactive': $color-primary-icon-disabled,
		),
	),
	'success': (
		'default': (
			'background': $color-success-background,
			'background-hover': $color-success-background-hovered,
			'eyebrow-text': $color-success-text,
			'icon': $color-success-icon,
			'icon-interactive': $color-success-icon,
		),
		'disabled': (
			'background': $color-success-background-disabled,
			'eyebrow-text': $color-success-text-disabled,
			'icon': $color-success-icon-disabled,
			'icon-interactive': $color-success-icon-disabled,
		),
	),
	'fail': (
		'default': (
			'background': $color-fail-background,
			'background-hover': $color-fail-background-hovered,
			'eyebrow-text': $color-fail-text,
			'icon': $color-fail-icon,
			'icon-interactive': $color-fail-icon,
		),
		'disabled': (
			'background': $color-fail-background-disabled,
			'eyebrow-text': $color-fail-text-disabled,
			'icon': $color-fail-icon-disabled,
			'icon-interactive': $color-fail-icon-disabled,
		),
	),
	'danger': (
		'default': (
			'background': $color-danger-background,
			'background-hover': $color-danger-background-hovered,
			'eyebrow-text': $color-danger-text,
			'icon': $color-danger-icon,
			'icon-interactive': $color-danger-icon,
		),
		'disabled': (
			'background': $color-danger-background-disabled,
			'eyebrow-text': $color-danger-text-disabled,
			'icon': $color-danger-icon-disabled,
			'icon-interactive': $color-danger-icon-disabled,
		),
	),
	'warning': (
		'default': (
			'background': $color-warning-background,
			'background-hover': $color-warning-background-hovered,
			'eyebrow-text': $color-warning-text,
			'icon': $color-warning-icon,
			'icon-interactive': $color-warning-icon,
		),
		'disabled': (
			'background': $color-warning-background-disabled,
			'eyebrow-text': $color-warning-text-disabled,
			'icon': $color-warning-icon-disabled,
			'icon-interactive': $color-warning-icon-disabled,
		),
	),
	'info': (
		'default': (
			'background': $color-info-background,
			'background-hover': $color-info-background-hovered,
			'eyebrow-text': $color-info-text,
			'icon': $color-info-icon,
			'icon-interactive': $color-info-icon,
		),
		'disabled': (
			'background': $color-info-background-disabled,
			'eyebrow-text': $color-info-text-disabled,
			'icon': $color-info-icon-disabled,
			'icon-interactive': $color-info-icon-disabled,
		),
	),
);

@mixin setColors($root, $color-map) {
	background-color: map-get($color-map, 'background');

	#{$root}__eyebrowText {
		color: map-get($color-map, 'eyebrow-text');
	}

	#{$root}__iconLeft,
	#{$root}__iconRight {
		color: map-get($color-map, 'icon');
	}

	&.-ds-interactive {
		#{$root}__iconRight {
			color: map-get($color-map, 'icon-interactive');
		}

		&:not(.-ds-loading):hover {
			background-color: map-get($color-map, 'background-hover');
		}
	}

	&.-ds-loading {
		#{$root}__iconRight {
			color: map-get($color-map, 'icon-interactive');
		}
	}
}

.ds-tile {
	$self: &;

	@each $color-name, $color-map in $tile-colors {
		&.-ds-#{$color-name} {
			@include setColors($self, map-get($color-map, 'default'));
		}
	}

	@each $border-color-name, $border-color-map in $tile-border-colors {
		&.-ds-border-#{$border-color-name} {
			outline: $border-xs solid map-get($border-color-map, 'default');

			&.-ds-disabled {
				outline: $border-xs solid map-get($border-color-map, 'disabled');
			}
		}
	}

	align-items: center;
	border-radius: $radius-s;
	display: flex;
	flex-direction: row;
	min-height: 48px;
	padding: $space-2xs $space-xs;
	transition: background-color ease-in-out $default-transition-time;

	&.-ds-disabled {
		@each $color-name, $color-map in $tile-colors {
			&.-ds-#{$color-name} {
				@include setColors($self, map-get($color-map, 'disabled'));
			}
		}

		pointer-events: none;

		#{$self}__text {
			color: $color-neutral-text-heavy-disabled;
		}
	}

	&__additionalText {
		@include info-s-default-regular;

		color: $color-neutral-text;
		flex-grow: 1;
		margin-left: $space-xs;
		text-align: right;

		&.-ds-max-width-small {
			max-width: 30%;
		}

		&.-ds-max-width-medium {
			max-width: 50%;
		}
	}

	&__center {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		overflow: hidden;
	}

	&__eyebrowText {
		@include info-m-default-bold;

		margin-bottom: $space-4xs;

		&.-ds-uppercase {
			@include info-m-extensive-bold-uppercase();
		}

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__text {
		@include text-m-default-bold;

		color: $color-neutral-text-heavy;

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__iconLeft {
		margin-right: $space-xs;
	}

	&__iconRight {
		margin-left: $space-xs;

		&.-ds-hiddenOnMobile {
			display: none;

			@media #{breakpoint-s()} {
				display: block;
			}
		}
	}

	&.-ds-interactive:not(.-ds-disabled):not(.-ds-loading) {
		cursor: pointer;
	}
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { TILE_ADDITIONAL_TEXT_MAX_WIDTHS, TILE_COLORS, TILE_STATES } from './Tile.consts';
import { props } from './Tile.shared';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Tile',
	components: {
		DsIcon,
	},
	props,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			TILE_STATES: Object.freeze(TILE_STATES),
			TILE_ADDITIONAL_TEXT_MAX_WIDTHS: Object.freeze(TILE_ADDITIONAL_TEXT_MAX_WIDTHS),
		};
	},
	computed: {
		tileColor() {
			return {
				[TILE_COLORS.NEUTRAL]: '-ds-neutral',
				[TILE_COLORS.NEUTRAL_WEAK]: '-ds-neutralWeak',
				[TILE_COLORS.PRIMARY]: '-ds-primary',
				[TILE_COLORS.SUCCESS]: '-ds-success',
				[TILE_COLORS.FAIL]: '-ds-fail',
				[TILE_COLORS.DANGER]: '-ds-danger',
				[TILE_COLORS.WARNING]: '-ds-warning',
				[TILE_COLORS.INFO]: '-ds-info',
			}[this.color];
		},
		tileState() {
			return {
				[TILE_STATES.DEFAULT]: null,
				[TILE_STATES.DISABLED]: '-ds-disabled',
				[TILE_STATES.LOADING]: '-ds-loading',
			}[this.state];
		},
	},
});
</script>
