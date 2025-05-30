<template>
	<div
		class="ds-badgeScore"
		:class="{
			'-ds-success': color === BADGE_SCORE_COLORS.SUCCESS,
			'-ds-warning': color === BADGE_SCORE_COLORS.WARNING,
			'-ds-fail': color === BADGE_SCORE_COLORS.FAIL,
			'-ds-inverted': color === BADGE_SCORE_COLORS.INVERTED,
			'-ds-neutralWeak': color === BADGE_SCORE_COLORS.NEUTRAL_WEAK,
			'-ds-neutral': color === BADGE_SCORE_COLORS.NEUTRAL,
			'-ds-small': size === BADGE_SCORE_SIZES.SMALL,
			'-ds-xsmall': size === BADGE_SCORE_SIZES.XSMALL,
			'-ds-fullWidth': fullWidth,
		}"
	>
		<wnl-icon v-if="icon" class="ds-badgeScore__icon" :icon="icon" :size="iconSize" />
		<div class="ds-badgeScore__text">{{ text }}</div>
		<span class="ds-badgeScore__suffix">{{ suffix }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$badge-score-min-width: 66px;
$badge-score-small-min-width: 56px;
$badge-score-x-small-min-width: 40px;

$badge-score-colors: (
	'success': (
		'background': $color-success-background-medium,
		'icon': $color-success-icon,
		'color': $color-success-text,
		'color-suffix': $color-success-text-weak,
		'color-suffix-xs': $color-success-text,
	),
	'fail': (
		'background': $color-fail-background-medium,
		'icon': $color-fail-icon,
		'color': $color-fail-text,
		'color-suffix': $color-fail-text-weak,
		'color-suffix-xs': $color-fail-text,
	),
	'warning': (
		'background': $color-warning-background-medium,
		'icon': $color-warning-icon,
		'color': $color-warning-text,
		'color-suffix': $color-warning-text-weak,
		'color-suffix-xs': $color-warning-text,
	),
	'inverted': (
		'background': $color-default-background,
		'icon': $color-neutral-icon-weak,
		'color': $color-neutral-text-weak,
		'color-suffix': $color-neutral-text-weak,
		'color-suffix-xs': $color-neutral-text-weak,
	),
	'neutral': (
		'background': $color-neutral-background-medium,
		'icon': $color-neutral-icon,
		'color': $color-neutral-text,
		'color-suffix': $color-neutral-text,
		'color-suffix-xs': $color-neutral-text,
	),
	'neutralWeak': (
		'background': $color-neutral-background,
		'icon': $color-neutral-icon-weak,
		'color': $color-neutral-text-weak,
		'color-suffix': $color-neutral-text-weak,
		'color-suffix-xs': $color-neutral-text-weak,
	),
);

@mixin setBadgeScoreColor($self, $background, $icon, $color, $color-suffix, $color-suffix-xs) {
	background-color: $background;
	color: $color;
	#{$self}__icon {
		color: $icon;
	}
	#{$self}__suffix {
		color: $color-suffix;
	}

	&.-ds-xsmall {
		#{$self}__suffix {
			color: $color-suffix-xs;
		}
	}
}

.ds-badgeScore {
	$self: &;

	@include label-2xl-default-bold;

	@each $color-name, $color-map in $badge-score-colors {
		&.-ds-#{$color-name} {
			@include setBadgeScoreColor(
				$self,
				map-get($color-map, 'background'),
				map-get($color-map, 'icon'),
				map-get($color-map, 'color'),
				map-get($color-map, 'color-suffix'),
				map-get($color-map, 'color-suffix-xs')
			);
		}
	}

	border-radius: 4px;
	display: inline-flex;
	justify-content: center;
	min-width: $badge-score-min-width;
	padding: $space-2xs $space-2xs;

	&__text {
		align-self: baseline;
	}

	&__icon {
		align-self: center;
		margin-right: $space-5xs;
	}

	&__suffix {
		@include label-xl-default-bold;

		align-self: baseline;
	}

	&.-ds-small {
		@include label-xl-default-bold;

		min-width: $badge-score-small-min-width;
		padding: $space-2xs $space-2xs;

		#{$self}__suffix {
			@include label-l-default-bold;
		}
	}

	&.-ds-xsmall {
		@include label-s-default-bold;

		min-width: $badge-score-x-small-min-width;
		padding: $space-3xs;

		#{$self}__suffix {
			@include label-s-default-bold;
		}
	}

	&.-ds-fullWidth {
		width: 100%;
	}
}
</style>

<script lang="ts">
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';
import WnlIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	name: 'BadgeScore',
	components: {
		WnlIcon,
	},
	props: {
		text: {
			type: String,
			required: true,
		},
		suffix: {
			type: String,
			required: false,
			default: null,
		},
		color: {
			type: String,
			required: true,
			validator(color: any) {
				return Object.values(BADGE_SCORE_COLORS).includes(color);
			},
		},
		icon: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		size: {
			type: String,
			default: BADGE_SCORE_SIZES.MEDIUM,
			validator(size: any) {
				return Object.values(BADGE_SCORE_SIZES).includes(size);
			},
		},
		fullWidth: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
			BADGE_SCORE_COLORS: Object.freeze(BADGE_SCORE_COLORS),
			BADGE_SCORE_SIZES: Object.freeze(BADGE_SCORE_SIZES),
		};
	},
	computed: {
		iconSize(): string {
			if (this.size === BADGE_SCORE_SIZES.SMALL) {
				return ICON_SIZES.X_SMALL;
			}
			if (this.size === BADGE_SCORE_SIZES.XSMALL) {
				return ICON_SIZES.XXX_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
});
</script>
