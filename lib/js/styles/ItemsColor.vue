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
