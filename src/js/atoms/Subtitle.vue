<template>
	<div class="a-subtitle">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/typography';

	.a-subtitle {
		@include textPlus1;
	}

</style>
