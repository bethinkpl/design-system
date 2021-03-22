<template>
	<div class="m-circle">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/settings/colors';

$size: 24px;

.m-circle {
	align-items: center;
	border: 2px solid $color-mischka-gray;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	height: $size;
	width: $size;

	&.-borderNavyBlue {
		border-color: $color-navy-blue;
	}

	&.-backgroundNavyBlue {
		background-color: $color-navy-blue;
	}
}
</style>
