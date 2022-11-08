<template>
	<div>
		<!-- @todo fill component -->
		<div v-for="item in items" :key="item.id" class="itemDefinition"> </div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/settings/colors/tokens';
</style>

<script lang="ts">
export default {
	name: 'ItemTypography',
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>
