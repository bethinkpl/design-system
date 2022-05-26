<template>
	<div class="drawer">
		<slot name="header" />
		<slot />
		<slot name="footer" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';

.drawer {
	border-left: 1px solid $color-neutral-border-weak;
	height: 100%;
}
</style>

<script lang="ts">
export default {
	name: 'Drawer',
};
</script>
