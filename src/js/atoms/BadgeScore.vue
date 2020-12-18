<template>
	<div
		class="a-badgeScore"
		:class="{
			'-success': color === BADGE_SCORE_COLORS.SUCCESS,
			'-warning': color === BADGE_SCORE_COLORS.WARNING,
			'-danger': color === BADGE_SCORE_COLORS.DANGER,
		}"
	>
		{{ text }}
	</div>
</template>

<style scoped lang="scss">
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';
@import 'resources/assets/styles/styleguide/settings/colors';

.a-badgeScore {
	@include textBold();
	@include headlineL();

	display: inline-block;
	border-radius: 4px;
	border: 2px solid currentColor;
	padding: $space-xxs $space-xs;

	&.-success {
		color: $color-success;
	}

	&.-danger {
		color: $color-danger;
	}

	&.-warning {
		color: $color-warning;
	}
}
</style>

<script lang="ts">
export const BADGE_SCORE_COLORS = {
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
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
			validate(color: string) {
				Object.values(BADGE_SCORE_COLORS).includes(color);
			},
		},
	},
	created() {
		this.BADGE_SCORE_COLORS = BADGE_SCORE_COLORS;
	},
};
</script>
