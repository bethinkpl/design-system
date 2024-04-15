<template>
	<div class="drawerContent">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.drawerContent {
	display: flex;
	flex-direction: column;
	gap: $space-s;
	padding: $space-2xs $space-s;
}
</style>

<script lang="ts">
export default {
	name: 'DrawerContent',
};
</script>
