<template>
	<div class="m-iconButtonWithLabel" @mouseover="hovered = true" @mouseleave="hovered = false">
		<span class="m-iconButtonWithLabel__label">{{ label }}</span>
		<wnl-icon-button :fa-icon-class="faIconClass" :hovered="hovered" />
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/media-queries';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.m-iconButtonWithLabel {
	align-items: center;
	color: $color-primary;
	cursor: pointer;
	display: flex;

	&:hover {
		color: $color-primary-dark;
	}

	&__label {
		@include textS;

		display: none;
		font-weight: bold;
		margin-right: $space-s;
		text-transform: uppercase;
		transition: color ease-in-out 0.3s, border-color ease-in-out 0.3s;

		@media #{breakpoint-s()} {
			display: initial;
		}
	}
}
</style>

<script>
import WnlIconButton from 'js/components/global/styleguide/atoms/IconButton';

export default {
	components: {
		WnlIconButton,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		faIconClass: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			hovered: false,
		};
	},
};
</script>
