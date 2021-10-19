<template>
	<div class="card">
		<slot name="header"></slot>
		<slot name="content"></slot>
		<slot name="footer"></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';

.card {
	padding: $space-s;
	box-shadow: $shadow-xl;
}
</style>

<script lang="ts">
export default {
	name: 'Card',
};
</script>
