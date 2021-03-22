<template>
	<div class="a-pill" :class="{ '-hasNumber': !!number }" :style="style">
		<span v-if="number" class="a-pill__number">{{ number }}</span>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/settings/colors';
@import 'src/styles/settings/icons';
@import 'src/styles/settings/spacings';
@import 'src/styles/settings/typography';

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
		@include textM;

		align-items: center;
		background-color: $color-total-white;
		border-radius: 50%;
		color: $color-cadet-gray;
		display: inline-flex;
		flex-shrink: 0;
		justify-content: center;
		height: $icon-m;
		margin-right: $space-xxs;
		width: $icon-m;
	}
}
</style>

<script>
export default {
	name: 'Pill',
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
