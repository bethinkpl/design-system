<template>
	<div class="selectList">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';

.selectList {
	padding: $space-2xs 0;
}
</style>

<script lang="ts">
export default {
	name: 'SelectList',
};
</script>
