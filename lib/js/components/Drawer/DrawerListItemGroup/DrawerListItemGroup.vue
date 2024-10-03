<template>
	<div class="ds-drawerListItemGroup">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.ds-drawerListItemGroup {
	padding: 0 0 $space-3xs;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'DrawerListItemGroup',
});
</script>
