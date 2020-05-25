<template>
	<div class="m-inputWithIcon">
		<slot />
		<span class="m-inputWithIcon__icon">{{icon}}</span>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.m-inputWithIcon {
		position: relative;

		.a-input {
			padding-right: $space-l;
		}

		&__icon {
			@include textBase;
			align-items: center;
			bottom: 0;
			color: $color-storm-grey;
			display: flex;
			padding: 0 $space-xs;
			position: absolute;
			top: 0;
			right: 0;
		}
	}
</style>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true,
		}
	}
};
</script>
