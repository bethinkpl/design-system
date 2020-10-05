<template>
	<div class="a-loader">
		<span class="a-loader__icon"><i class="fa fa-spinner fa-spin" /></span>
		<span class="a-loader__text"><slot>Momencik, ładuję dane...</slot></span>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/variables';
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.a-loader {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: $color-total-white-opacity90;
	z-index: $z-index-overlay;

	&__text {
		@include header6;

		color: $color-primary;
		text-align: center;
		margin: $space-s;
	}

	&__icon {
		color: $color-storm-gray;
		font-size: $space-xxxl;
	}
}
</style>

<script>
export default {
	name: 'SpinnerLoader',
};
</script>
