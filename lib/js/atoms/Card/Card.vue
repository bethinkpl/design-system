<template>
	<div class="card">
		<slot name="header"></slot>
		<slot name="content"></slot>
		<slot name="footer"></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';

.card {
	padding: $space-s;
	box-shadow: 0 1px 2px rgba(12, 23, 38, 0.06), 0 0 4px rgba(12, 23, 38, 0.06),
		0 1px 8px 2px rgba(12, 23, 38, 0.12);
}
</style>

<script lang="ts">
export default {
	name: 'Card',
};
</script>
