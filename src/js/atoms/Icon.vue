<template>
	<i :class="faIconClass" class="a-icon" />
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/typography';

	.-sizePlus3 {
		@include textPlus3
	}

	.-sizePlus5 {
		@include textPlus5;
	}

	.-sizePlus6 {
		@include textPlus6;
	}
</style>

<script>
export default {
	props: {
		faIconClass: {
			type: String,
			required: true
		}
	}
};
</script>
