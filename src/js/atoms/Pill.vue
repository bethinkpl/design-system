<template>
	<div class="a-pill" :class="{ '-hasNumber': !!number }" :style="style">
		<span v-if="number" class="a-pill__number">{{ number }}</span>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/icons';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.a-pill {
	align-items: center;
	background-color: $color-goldfish-yellow;
	border-radius: 1000px;
	color: $color-total-white;
	display: inline-flex;
	font-weight: bold;
	padding: $space-xxxs $space-s;

	&.-hasNumber {
		padding-left: $space-xxxs;
	}

	&__number {
		@include textS;

		align-items: center;
		background-color: $color-total-white;
		border-radius: 50%;
		color: $color-cadet-blue;
		display: inline-flex;
		flex-shrink: 0;
		justify-content: center;
		height: $icon-s;
		margin-right: $space-xxs;
		width: $icon-s;
	}
}
</style>

<script>
export default {
	props: {
		backgroundColor: {
			type: String,
			default: null,
		},
		number: {
			type: [String, Number],
			default: null,
		},
	},
	computed: {
		style() {
			return {
				...(this.backgroundColor && { backgroundColor: this.backgroundColor }),
			};
		},
	},
};
</script>
