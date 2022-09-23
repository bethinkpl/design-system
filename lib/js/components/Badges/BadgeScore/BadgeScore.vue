<template>
	<div
		class="badgeScore"
		:class="{
			'-success': color === BADGE_SCORE_COLORS.SUCCESS,
			'-warning': color === BADGE_SCORE_COLORS.WARNING,
			'-fail': color === BADGE_SCORE_COLORS.FAIL,
			'-inverted': color === BADGE_SCORE_COLORS.INVERTED,
			'-neutral': color === BADGE_SCORE_COLORS.NEUTRAL,
			'-neutral-medium': color === BADGE_SCORE_COLORS.NEUTRAL_MEDIUM,
			'-small': size === BADGE_SCORE_SIZES.SMALL,
			'-xsmall': size === BADGE_SCORE_SIZES.XSMALL,
			'-full-width': fullWidth,
		}"
	>
		<wnl-icon v-if="icon" class="badgeScore__icon" :icon="icon" :size="iconSize" />
		<div class="badgeScore__text">{{ text }}</div>
		<span class="badgeScore__suffix">{{ suffix }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography';
@import '../../../../styles/settings/colors/tokens';

$badge-score-min-width: 66px;
$badge-score-small-min-width: 56px;
$badge-score-x-small-min-width: 40px;

$badge-score-colors: (
	'success': (
		'background': $color-success-background-medium,
		'icon': $color-success-icon,
		'color': $color-success-text,
		'color-suffix': $color-success-text-weak,
	),
	'fail': (
		'background': $color-fail-background-medium,
		'icon': $color-fail-icon,
		'color': $color-fail-text,
		'color-suffix': $color-fail-text-weak,
	),
	'warning': (
		'background': $color-warning-background-medium,
		'icon': $color-warning-icon,
		'color': $color-warning-text,
		'color-suffix': $color-warning-text-weak,
	),
	'inverted': (
		'background': $color-default-background,
		'icon': $color-neutral-icon-weak,
		'color': $color-neutral-text-weak,
		'color-suffix': $color-neutral-text-weak,
	),
	'neutral': (
		'background': $color-neutral-background,
		'icon': $color-neutral-icon-weak,
		'color': $color-neutral-text-weak,
		'color-suffix': $color-neutral-text-weak,
	),
	'neutral-medium': (
		'background': $color-neutral-background-medium,
		'icon': $color-neutral-icon-strong,
		'color': $color-neutral-text,
		'color-suffix': $color-neutral-text,
	),
);

@mixin setBadgeScoreColor($self, $background, $icon, $color, $color-suffix) {
	background-color: $background;
	color: $color;
	#{$self}__icon {
		color: $icon;
	}
	#{$self}__suffix {
		color: $color-suffix;
	}
}

.badgeScore {
	$self: &;

	@include textBold();
	@include headlineM();

	@each $color-name, $color-map in $badge-score-colors {
		&.-#{$color-name} {
			@include setBadgeScoreColor(
				$self,
				map-get($color-map, 'background'),
				map-get($color-map, 'icon'),
				map-get($color-map, 'color'),
				map-get($color-map, 'color-suffix')
			);
		}
	}

	border-radius: 4px;
	display: inline-flex;
	justify-content: center;
	min-width: $badge-score-min-width;
	padding: $space-xxxs $space-xxs;

	&__text {
		align-self: baseline;
	}

	&__icon {
		margin-right: $space-xxxxxs;
		align-self: center;
	}

	&__suffix {
		@include headlineS();

		align-self: baseline;
	}

	&.-small {
		@include headlineS();

		padding: $space-xxs $space-xxs;
		min-width: $badge-score-small-min-width;
		#{$self}__suffix {
			@include headlineXS();
		}
	}

	&.-xsmall {
		@include textInfoM();

		min-width: $badge-score-x-small-min-width;
		padding: $space-xxxs;

		#{$self}__suffix {
			@include textInfoM();
		}
	}

	&.-full-width {
		width: 100%;
	}
}
</style>

<script lang="ts">
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';
import WnlIcon, { ICONS, ICON_SIZES } from '../../Icon';
import { VueConstructor } from 'vue';

export default {
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
			validate(color) {
				return Object.values(BADGE_SCORE_COLORS).includes(color);
			},
		},
		icon: {
			type: Object,
			default: null,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		size: {
			type: String,
			default: BADGE_SCORE_SIZES.MEDIUM,
			validate(size) {
				return Object.values(BADGE_SCORE_SIZES).includes(size);
			},
		},
		fullWidth: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		iconSize(): string {
			if (this.size === BADGE_SCORE_SIZES.SMALL) {
				return ICON_SIZES.X_SMALL;
			}
			if (this.size === BADGE_SCORE_SIZES.XSMALL) {
				return ICON_SIZES.XX_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.BADGE_SCORE_COLORS = BADGE_SCORE_COLORS;
		this.BADGE_SCORE_SIZES = BADGE_SCORE_SIZES;
	},
};
</script>
