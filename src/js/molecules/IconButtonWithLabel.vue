<template>
	<div
		class="m-iconButtonWithLabel"
		@mouseover="hovered = true"
		@mouseleave="hovered = false"
	>
		<span class="m-iconButtonWithLabel__label">{{ label }}</span>
		<wnl-button class="-icon" medium :hovered="hovered">
			<wnl-icon :fa-icon-class="faIconName" size="x-small" />
		</wnl-button>
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

		@media #{$breakpoint-s} {
			display: initial;
		}
	}
}
</style>

<script>
import WnlButton from 'js/components/global/styleguide/atoms/Button';
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export default {
	components: {
		WnlButton,
		WnlIcon,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		faIconName: {
			type: String,
			required: true,
		}
	},
	data() {
		return {
			hovered: false,
		};
	},
};
</script>
