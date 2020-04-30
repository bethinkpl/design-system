<template>
	<fieldset class="m-formSection">
		<legend v-if="legend" class="m-formSection__legend">{{legend}}</legend>
		<slot />
	</fieldset>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.m-formSection {
		border: 0;

		&__legend {
			@include textBase;

			border-bottom: 1px solid $color-athens-grey;
			display: block;
			font-weight: bold;
			margin-bottom: $space-m;
			padding-bottom: $space-xxxxs;
			width: 100%;
		}
	}
</style>

<script>
export default {
	props: {
		legend: {
			type: String,
			default: '',
		},
	},
};
</script>
