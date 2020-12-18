<template>
	<div
		class="a-badge"
		:class="{
			'-success': color === BADGE_COLORS.SUCCESS,
			'-warning': color === BADGE_COLORS.WARNING,
			'-danger': color === BADGE_COLORS.DANGER,
		}"
	>
		{{ text }}
	</div>
</template>

<style scoped lang="scss">
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';
@import 'resources/assets/styles/styleguide/settings/colors';

.a-badge {
	@include textBold();
	@include headlineL();

	display: inline-block;
	border-radius: 4px;
	border: 2px solid red;
	padding: $space-xxs $space-xs;

	&.-success {
		border-color: $color-success;
		color: $color-success;
	}

	&.-danger {
		border-color: $color-danger;
		color: $color-danger;
	}

	&.-warning {
		border-color: $color-warning;
		color: $color-warning;
	}
}
</style>

<script lang="ts">
export const BADGE_COLORS = {
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
} as const;

export default {
	name: 'Badge',
	props: {
		text: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
			validate(color: string) {
				Object.values(BADGE_COLORS).includes(color);
			},
		},
	},
	created() {
		this.BADGE_COLORS = BADGE_COLORS;
	},
};
</script>
