<template>
	<div>
		<div v-for="item in items" :key="item.id" class="itemDefinition">
			<div v-if="item.label" class="itemDefinition__label">{{ item.label }}</div>
			<div v-if="item.value" class="itemDefinition__value">{{ item.value }}</div>
			<div v-if="item.token" class="itemDefinition__token">{{ item.token }}</div>
			<div v-if="item.attributesRaw" class="itemDefinition__attributes">
				<div v-for="attribute in item.attributesRaw" :key="item.id + attribute.value">
					<strong>{{ attribute.property }}</strong
					>:
					<span>{ {{ attribute.value }} }</span>
				</div>
			</div>
			<div v-if="item.attributes" class="itemDefinition__example">
				<div :style="attributesAsStyle(item.attributesRaw)">
					Enim ullam temporibus quasi unde quam. Eaque praesentium dolor qui
					necessitatibus magnam voluptatem. Eos aut esse earum.
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/components/tokens';
</style>

<script lang="ts">
import { TypographyToken } from './TokenTypes';

export default {
	name: 'ItemsTypography',
	props: {
		items: {
			type: Array as () => Array<TypographyToken>,
			required: true,
		},
	},
	methods: {
		attributesAsStyle(attributes) {
			let result: string = '';
			attributes.forEach((item) => {
				result += item.property + ': var(--typography-' + item.value + ');';
			});

			return result;
		},
	},
};
</script>
