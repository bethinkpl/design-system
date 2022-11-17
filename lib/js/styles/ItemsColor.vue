<template>
	<div>
		<div v-for="item in items" :key="item.id" class="itemsListItem">
			<div class="itemsListItem__id">{{ item.label }}</div>
			<div class="itemsListItem__value">{{ item.value }}</div>
			<div class="itemsListItem__color">
				<span :style="{ background: item.value }" class="itemsListItem__tile" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/components/items-list-item';
</style>

<script lang="ts">
import { ColorToken } from './TokenTypes';

export default {
	name: 'ItemsColor',
	props: {
		items: {
			type: Array as () => Array<ColorToken>,
			required: true,
		},
	},
};
</script>
