<template>
	<table class="itemsListItem">
		<tr v-for="item in items" :key="item.id" class="itemsListItem__row">
			<td class="itemsListItem__id">{{ item.label }}</td>
			<td class="itemsListItem__value">{{ item.value }}</td>
			<td class="itemsListItem__color">
				<span :style="{ background: item.value }" class="itemsListItem__tile" />
			</td>
		</tr>
	</table>
</template>

<style lang="scss" scoped>
@import '../../styles/components/items-list-item';
</style>

<script lang="ts">
import { ColorToken } from './TokenTypes';
import { PropType } from 'vue';

export default {
	name: 'ItemsColor',
	props: {
		items: {
			type: Array as PropType<Array<ColorToken>>,
			required: true,
		},
	},
};
</script>
