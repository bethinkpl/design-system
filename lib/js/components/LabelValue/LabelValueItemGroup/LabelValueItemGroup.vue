<template>
	<div class="ds-labelValueItemGroup">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.ds-labelValueItemGroup {
	padding: 0 0 $space-3;
}
</style>

<script setup lang="ts">
defineSlots<{
	default?: () => any;
}>();
</script>
