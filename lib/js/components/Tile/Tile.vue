<template>
	<ds-ripple :disable="!interactive" :color="rippleColor">
		<div :class="[tileColor, { '-interactive': interactive }]" class="a-tile">
			<ds-icon
				v-if="iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
				class="a-tile__iconLeft"
			/>
			<div class="a-tile__center">
				<span
					class="a-tile__eyebrowText"
					:class="{ '-uppercase': isEyebrowTextUppercase }"
					v-text="eyebrowText"
				/>
				<span class="a-tile__text" v-text="text" />
			</div>
			<ds-icon
				v-if="iconRight"
				:icon="iconRight"
				:size="ICON_SIZES.SMALL"
				:class="{ '-interactive': interactive }"
				class="a-tile__iconRight"
			/>
			<div v-else-if="additionalText" class="a-tile__additionalText">
				{{ additionalText }}
			</div>
		</div>
	</ds-ripple>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

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
			// TODO Update when https://bethink.atlassian.net/browse/IT-4795 is merged
			'eyebrow-text': var(--raw-orange-200),
			'icon': $color-fail-icon-disabled,
			'icon-interactive': $color-fail-icon-disabled,
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

		&:hover {
			background-color: map-get($color-map, 'background-hover');
		}
	}
}

.a-tile {
	$self: &;

	align-items: center;
	display: flex;
	flex-direction: row;
	padding: $space-xxs $space-xs;
	border-radius: $radius-s;

	@each $color-name, $color-map in $tile-colors {
		&.-#{$color-name} {
			@include setColors($self, map-get($color-map, 'default'));
		}
	}

	&.-disabled {
		@each $color-name, $color-map in $tile-colors {
			&.-#{$color-name} {
				@include setColors($self, map-get($color-map, 'disabled'));
			}
		}

		#{$self}__text {
			color: $color-neutral-text-heavy-disabled;
		}
	}

	&__additionalText {
		@include textXS;

		color: $color-neutral-text;
		flex-grow: 1;
		margin-left: $space-xs;
		max-width: 30%;
		text-align: right;
	}

	&__center {
		@include textBold;

		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	&__eyebrowText {
		@include textS;

		&.-uppercase {
			text-transform: uppercase;
		}
	}

	&__text {
		@include textM;

		color: $color-neutral-text-heavy;
		margin-top: $space-xxxxxs;
	}

	&__iconLeft {
		margin-right: $space-xs;
	}

	&__iconRight {
		margin-left: $space-xs;
	}

	&.-interactive {
		cursor: pointer;
	}
}
</style>

<script lang="ts">
import DsRipple, { RIPPLE_COLORS } from '../Ripple';
import DsIcon, { ICON_SIZES, ICONS } from '../Icon';
import { VueConstructor } from 'vue';
import { TILE_COLORS } from './Tile.consts';

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
			validate(iconLeft: VueConstructor) {
				return Object.values(ICONS).includes(iconLeft);
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validate(iconRight: VueConstructor) {
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
			validate(color) {
				return Object.values(TILE_COLORS).includes(color);
			},
		},
		isEyebrowTextUppercase: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		tileColor() {
			return {
				[TILE_COLORS.NEUTRAL]: '-neutral',
				[TILE_COLORS.PRIMARY]: '-primary',
				[TILE_COLORS.SUCCESS]: '-success',
				[TILE_COLORS.FAIL]: '-fail',
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
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
