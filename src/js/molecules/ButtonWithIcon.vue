<template>
	<wnl-button
		v-bind="$attrs"
		class="m-buttonWithIcon"
		v-on="$listeners"
	>
		<slot name="text" />
		<div class="m-buttonWithIcon__icon">
			<slot name="icon" />
		</div>
	</wnl-button>
</template>

<style lang="scss" scoped>
	.m-buttonWithIcon {
		align-items: center;
		display: inline-flex;

		&__icon {
			margin-left: 15px;
		}
	}
</style>

<script>
import WnlButton from 'js/components/global/styleguide/atoms/Button';

export default {
	components: {
		WnlButton,
	},
};
</script>
