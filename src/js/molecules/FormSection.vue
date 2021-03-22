<template>
	<fieldset class="m-formSection">
		<legend v-if="legend" class="m-formSection__legend">{{ legend }}</legend>
		<slot />
	</fieldset>
</template>

<style lang="scss" scoped>
@import 'src/styles/settings/colors';
@import 'src/styles/settings/spacings';
@import 'src/styles/settings/typography';

.m-formSection {
	border: 0;

	&__legend {
		@include textL;

		border-bottom: 1px solid $color-athens-gray;
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
	name: 'FormSection',
	props: {
		legend: {
			type: String,
			default: '',
		},
	},
};
</script>
