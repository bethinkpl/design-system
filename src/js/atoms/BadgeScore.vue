<template>
	<div
		class="a-badgeScore"
		:class="{
			'-success': color === BADGE_SCORE_COLORS.SUCCESS,
			'-warning': color === BADGE_SCORE_COLORS.WARNING,
			'-danger': color === BADGE_SCORE_COLORS.DANGER,
			'-inverted': color === BADGE_SCORE_COLORS.INVERTED,
			'-minor': color === BADGE_SCORE_COLORS.MINOR,
			'-small': size === BADGE_SCORE_SIZES.SMALL,
			'-xsmall': size === BADGE_SCORE_SIZES.XSMALL,
		}"
	>
		{{ text }}
	</div>
</template>

<style scoped lang="scss">
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';
@import 'resources/assets/styles/styleguide/settings/colors';

$badge-score-width: 74px;
$small-badge-score-width: 48px;
$x-small-badge-score-width: 36px;

.a-badgeScore {
	@include textBold();
	@include headlineL();

	border-radius: 4px;
	border: 2px solid currentColor;
	display: inline-block;
	min-width: $badge-score-width;
	padding: $space-xxxs $space-xxxxs;
	text-align: center;

	&.-success {
		color: $color-success;
	}

	&.-danger {
		color: $color-danger;
	}

	&.-warning {
		color: $color-warning;
	}

	&.-inverted {
		color: $color-total-white;
	}

	&.-minor {
		color: $color-minor-supporting;
	}

	&.-small {
		@include headlineS();

		min-width: $small-badge-score-width;
	}

	&.-xsmall {
		@include textInfoM();

		min-width: $x-small-badge-score-width;
		border-width: 1px;
		padding: $space-xxxxs;
	}
}
</style>

<script lang="ts">
export const BADGE_SCORE_COLORS = {
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INVERTED: 'inverted',
	MINOR: 'minor',
} as const;

export const BADGE_SCORE_SIZES = {
	MEDIUM: 'medium',
	SMALL: 'small',
	XSMALL: 'extra small',
} as const;

export default {
	name: 'BadgeScore',
	props: {
		text: {
			type: String,
			required: true,
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
