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

	.m-labelWithInfo {
		justify-content: space-between;
		display: flex;

		.a-icon {
			color: $color-cadet-blue;
			cursor: pointer;
		}
	}
</style>
