<template>
	<div
		class="badgeScore"
		:class="{
			'-success': color === BADGE_SCORE_COLORS.SUCCESS,
			'-warning': color === BADGE_SCORE_COLORS.WARNING,
			'-fail': color === BADGE_SCORE_COLORS.FAIL,
			'-inverted': color === BADGE_SCORE_COLORS.INVERTED,
			'-neutral': color === BADGE_SCORE_COLORS.NEUTRAL,
			'-small': size === BADGE_SCORE_SIZES.SMALL,
			'-xsmall': size === BADGE_SCORE_SIZES.XSMALL,
		}"
	>
		{{ text }}<span class="badgeScore__additionalText">{{ additionalText }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography';
@import '../../../../styles/settings/colors';
@import '../../../../styles/components/badge-score';
@import '../../../../styles/settings/colors/tokens';

$badge-score-width: 74px;
$small-badge-score-width: 48px;
$x-small-badge-score-width: 36px;

@mixin setBadgeScoreColor($self, $border: '', $color: '', $color-additional: '') {
	@if $border != '' {
		border-color: $border;
	}

	@if $color != '' {
		color: $color;
	}

	@if $color-additional != '' {
		#{$self}__additionalText {
			color: $color-additional;
		}
	}
}

.badgeScore {
	$self: &;
	@include textBold();
	@include headlineL();

	border-radius: 4px;
	border: 2px solid currentColor;
	display: inline-block;
	min-width: $badge-score-width;
	padding: $space-xxxs $space-xxxxs;
	text-align: center;

	@each $color-name, $color-map in $badge-score-colors {
		&.-#{$color-name} {
			@include setBadgeScoreColor(
				$self,
				map-get($color-map, 'border'),
				map-get($color-map, 'color'),
				map-get($color-map, 'color-additional')
			);
		}
	}

	&.-small {
		@include headlineS();

		min-width: $small-badge-score-width;
	}

	&.-xsmall {
		@include textXS();

		min-width: $x-small-badge-score-width;
		border-width: 1px;
		padding: $space-xxxxs;
	}
}
</style>

<script lang="ts">
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';

export default {
	name: 'BadgeScore',
	props: {
		text: {
			type: String,
			required: true,
		},
		additionalText: {
			type: String,
			required: false,
			default: null,
		},
		color: {
			type: String,
			required: true,
			validate(color) {
				Object.values(BADGE_SCORE_COLORS).includes(color);
			},
		},
		size: {
			type: String,
			default: BADGE_SCORE_SIZES.MEDIUM,
			validate(size) {
				Object.values(BADGE_SCORE_SIZES).includes(size);
			},
		},
	},
	created() {
		this.BADGE_SCORE_COLORS = BADGE_SCORE_COLORS;
		this.BADGE_SCORE_SIZES = BADGE_SCORE_SIZES;
	},
};
</script>
