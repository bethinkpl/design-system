<template>
	<wnl-button
		class="m-buttonWithIcon"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />
		<div class="m-buttonWithIcon__icon">
			<slot name="icon" />
		</div>
	</wnl-button>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/spacings';

	.m-buttonWithIcon {
		align-items: center;
		display: inline-flex;

		&__icon {
			margin-left: $space-xxxxs;
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
