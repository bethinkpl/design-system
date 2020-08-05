<template>
	<wnl-button
		class="m-arrowButton"
		:disabled="disabled"
	>
		<wnl-icon
			class="m-arrowButton__icon"
			fa-icon-class="fa-angle-left"
			size="x-small"
		/>
	</wnl-button>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';

	.m-arrowButton {
		box-sizing: border-box;
		height: 32px;
		width: 32px;
		border: 1px solid $color-blue-chill;
		border-radius: 4px;
		background-color: $color-white;
		padding: 7px;

		&__icon {
			height: 16px;
			width: 16px;
			color: $color-blue-chill;
		}
	}
</style>

<script>
import WnlButton from '../atoms/Button';
import WnlIcon from '../atoms/Icon';

export default {
	name: 'ArrowButton',
	components: {
		WnlButton,
		WnlIcon
	},
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
	}
};
</script>
