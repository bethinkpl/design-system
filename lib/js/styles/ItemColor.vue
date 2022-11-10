<template>
	<div>
		<div v-for="item in items" :key="item.id" class="itemDefinition">
			<div class="itemDefinition__id">{{ item.label }}</div>
			<div class="itemDefinition__value">{{ item.value }}</div>
			<div class="itemDefinition__color">
				<span :style="{ background: item.value }" class="itemDefinition__tile" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/components/tokens';
</style>

<script lang="ts">
export default {
	name: 'ItemColor',
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>
