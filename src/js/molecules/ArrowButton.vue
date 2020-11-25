<template>
	<!-- TODO check how to migrate this -->
	<wnl-button class="m-arrowButton">
		<wnl-icon class="m-arrowButton__icon" fa-icon-class="fa-angle-left" size="x-small" />
	</wnl-button>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/radiuses';
@import 'resources/assets/styles/styleguide/settings/spacings';

.m-arrowButton {
	background-color: $color-total-white;
	border: 1px solid $color-primary;
	border-radius: $radius-s;
	padding: $space-xxxs $space-xs;

	&:hover {
		background-color: $color-alabaster-gray;
	}

	&__icon {
		color: $color-primary;
	}
}
</style>

<script>
import WnlButton from 'js/components/global/styleguide/atoms/Button';
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export default {
	name: 'ArrowButton',
	components: {
		WnlButton,
		WnlIcon,
	},
};
</script>
