<template>
	<div class="m-labelWithInfo">
		<slot />
		<div>
			<slot name="info" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/spacings';

.m-labelWithInfo {
	justify-content: space-between;
	display: flex;

	.a-label {
		margin-bottom: $space-xxs;
	}

	.a-icon {
		color: $color-cadet-blue;
		cursor: pointer;
	}
}
</style>
