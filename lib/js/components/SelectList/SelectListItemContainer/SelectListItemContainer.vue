<template>
	<div class="ds-selectListItemContainer">
		<slot />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-selectListItemContainer {
	padding: $space-xs;
}
</style>

<script setup lang="ts">
defineOptions({
	name: 'SelectListItemContainer',
});
</script>
