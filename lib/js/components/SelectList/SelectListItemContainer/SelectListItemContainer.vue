<template>
	<div class="ds-selectListItemContainer">
		<slot />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-selectListItemContainer {
	padding: $space-4 $space-6;
}
</style>

<script setup lang="ts">
defineOptions({
	name: 'SelectListItemContainer',
});
</script>
