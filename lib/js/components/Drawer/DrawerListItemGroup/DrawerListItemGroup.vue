<template>
	<div class="drawerListItemGroup">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.drawerListItemGroup {
	padding: 0 0 $space-xxs;
}
</style>

<script lang="ts">
export default {
	name: 'DrawerListItemGroup',
};
</script>
