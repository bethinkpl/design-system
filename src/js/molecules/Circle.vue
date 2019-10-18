<template>
	<div class="m-circle">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';

	$size: 24px;

	.m-circle {
		align-items: center;
		border: 2px solid $color-mischka;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		height: $size;
		width: $size;

		&.-borderLightSkyBlue {
			border-color: $color-light-sky-blue;
		}
		&.-backgroundLightSkyBlue {
			background-color: $color-light-sky-blue;
		}
	}
</style>
