<template>
	<ds-ripple :disable="rippleDisabled" :color="rippleColor">
		<div :class="[tileColor, tileState, { '-interactive': interactive }]" class="a-tile">
			<ds-icon
				v-if="iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
				class="a-tile__iconLeft"
			/>
			<div class="a-tile__center">
				<span
					class="a-tile__eyebrowText"
					:class="{ '-uppercase': isEyebrowTextUppercase, '-ellipsis': eyebrowEllipsis }"
					v-text="eyebrowText"
				/>
				<span class="a-tile__text" :class="{ '-ellipsis': textEllipsis }" v-text="text" />
			</div>
			<ds-icon
				v-if="state === TILE_STATES.LOADING"
				class="a-tile__iconRight"
				:icon="ICONS.FAD_SPINNER_THIRD"
				:size="ICON_SIZES.SMALL"
				spinning
			/>
			<ds-icon
				v-else-if="iconRight"
				class="a-tile__iconRight"
				:icon="iconRight"
				:size="ICON_SIZES.SMALL"
			/>
			<div v-else-if="additionalText" class="a-tile__additionalText">
				{{ additionalText }}
			</div>
		</div>
	</ds-ripple>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

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

	&.-interactive {
		#{$root}__iconRight {
			color: map-get($color-map, 'icon-interactive');
		}

		&:not(.-loading):hover {
			background-color: map-get($color-map, 'background-hover');
		}
	}

	&.-loading {
		#{$root}__iconRight {
			color: map-get($color-map, 'icon-interactive');
		}
	}
}

.a-tile {
	$self: &;

	@each $color-name, $color-map in $tile-colors {
		&.-#{$color-name} {
			@include setColors($self, map-get($color-map, 'default'));
		}
	}

	align-items: center;
	border-radius: $radius-s;
	display: flex;
	flex-direction: row;
	padding: $space-xxs $space-xs;

	&.-disabled {
		@each $color-name, $color-map in $tile-colors {
			&.-#{$color-name} {
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
		max-width: 30%;
		text-align: right;
	}

	&__center {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		overflow: hidden;
	}

	&__eyebrowText {
		@include info-m-default-bold;

		&.-uppercase {
			@include info-m-extensive-bold-uppercase();
		}

		&.-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__text {
		@include text-m-default-bold;

		color: $color-neutral-text-heavy;
		margin-top: $space-xxxxs;

		&.-ellipsis {
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
	}

	&.-interactive:not(.-disabled):not(.-loading) {
		cursor: pointer;
	}
}
</style>

<script lang="ts">
import DsRipple, { RIPPLE_COLORS } from '../Ripple';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { TILE_COLORS, TILE_STATES } from './Tile.consts';
import { Value } from '../../utils/type.utils';

export default {
	name: 'Tile',
	components: {
		DsIcon,
		DsRipple,
	},
	props: {
		interactive: {
			type: Boolean,
			default: false,
		},
		iconLeft: {
			type: Object,
			default: null,
			validator(iconLeft) {
				return Object.values(ICONS).includes(iconLeft);
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validator(iconRight) {
				return Object.values(ICONS).includes(iconRight);
			},
		},
		text: {
			type: String,
			required: true,
		},
		eyebrowText: {
			type: String,
			required: true,
		},
		additionalText: {
			type: String,
			default: null,
		},
		color: {
			type: String,
			default: TILE_COLORS.NEUTRAL,
			validator(color) {
				return Object.values(TILE_COLORS).includes(color);
			},
		},
		isEyebrowTextUppercase: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String,
			default: TILE_STATES.DEFAULT,
			validator(value: Value<typeof TILE_STATES>) {
				return Object.values(TILE_STATES).includes(value);
			},
		},
		eyebrowEllipsis: {
			type: Boolean,
			default: true,
		},
		textEllipsis: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			TILE_STATES: Object.freeze(TILE_STATES),
		};
	},
	computed: {
		rippleDisabled() {
			return (
				!this.interactive ||
				[TILE_STATES.DISABLED, TILE_STATES.LOADING].includes(this.state)
			);
		},
		tileColor() {
			return {
				[TILE_COLORS.NEUTRAL]: '-neutral',
				[TILE_COLORS.PRIMARY]: '-primary',
				[TILE_COLORS.SUCCESS]: '-success',
				[TILE_COLORS.FAIL]: '-fail',
				[TILE_COLORS.INFO]: '-info',
			}[this.color];
		},
		rippleColor() {
			return {
				[TILE_COLORS.NEUTRAL]: RIPPLE_COLORS.NEUTRAL,
				[TILE_COLORS.PRIMARY]: RIPPLE_COLORS.PRIMARY,
				[TILE_COLORS.SUCCESS]: RIPPLE_COLORS.SUCCESS,
				[TILE_COLORS.FAIL]: RIPPLE_COLORS.FAIL,
			}[this.color];
		},
		tileState() {
			return {
				[TILE_STATES.DEFAULT]: null,
				[TILE_STATES.DISABLED]: '-disabled',
				[TILE_STATES.LOADING]: '-loading',
			}[this.state];
		},
	},
};
</script>
