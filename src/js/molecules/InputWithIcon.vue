<template>
	<div class="m-inputWithIcon">
		<slot />
		<span class="m-inputWithIcon__icon">{{ icon }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/settings/colors';
@import 'src/styles/settings/spacings';
@import 'src/styles/settings/typography';

.m-inputWithIcon {
	position: relative;

	.a-inputDeprecated {
		padding-right: $space-l;
	}

	&__icon {
		@include textL;

		align-items: center;
		bottom: 0;
		color: $color-storm-gray;
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
	name: 'InputWithIcon',
	props: {
		icon: {
			type: String,
			required: true,
		},
	},
};
</script>
