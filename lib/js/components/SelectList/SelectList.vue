<template>
	<div class="ds-selectList">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';

.ds-selectList {
	padding: $space-2xs 0;
}
</style>

<script lang="ts">
export default {
	name: 'SelectList',
};
</script>
