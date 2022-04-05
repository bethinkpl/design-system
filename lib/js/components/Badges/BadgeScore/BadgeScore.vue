<template>
	<div
		class="badgeScore"
		:class="{
			'-success': color === BADGE_SCORE_COLORS.SUCCESS,
			'-warning': color === BADGE_SCORE_COLORS.WARNING,
			'-danger': color === BADGE_SCORE_COLORS.DANGER,
			'-inverted': color === BADGE_SCORE_COLORS.INVERTED,
			'-primary': color === BADGE_SCORE_COLORS.PRIMARY,
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
@import '../../../../styles/settings/colors/tokens';

$badge-score-width: 74px;
$small-badge-score-width: 48px;
$x-small-badge-score-width: 36px;

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

	&.-success {
		color: $color-success-text;
		border-color: $color-success-border;
		#{$self}__additionalText {
			color: $color-success-text-weak;
		}
	}

	&.-danger {
		color: $color-danger-text;
		border-color: $color-danger-border;
		#{$self}__additionalText {
			color: $color-danger-text-weak;
		}
	}

	&.-warning {
		color: $color-warning-text;
		border-color: $color-warning-border;
		#{$self}__additionalText {
			color: $color-warning-text-weak;
		}
	}

	&.-inverted {
		color: $color-default-text-inverted;
		border-color: $color-default-border-inverted;
		#{$self}__additionalText {
			color: $color-default-text-inverted;
		}
	}

	&.-primary {
		color: $color-primary-text;
		border-color: $color-primary-border;
		#{$self}__additionalText {
			color: $color-primary-text;
		}
	}

	&.-neutral {
		color: $color-neutral-text;
		border-color: $color-neutral-border-strong;
		#{$self}__additionalText {
			color: $color-neutral-text-weak;
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
