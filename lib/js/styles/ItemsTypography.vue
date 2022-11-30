<template>
	<div>
		<div v-for="item in items" :key="item.id" class="itemsListItem">
			<div v-if="item.label" class="itemsListItem__label">{{ item.label }}</div>
			<div v-if="item.value" class="itemsListItem__value">{{ item.value }}</div>
			<div v-if="item.ratio" class="itemsListItem__value">{{ item.ratio }}</div>
			<div v-if="item.token" class="itemsListItem__token">{{ item.token }}</div>
			<div v-if="item.attributesRaw" class="itemsListItem__attributes">
				<div v-for="attribute in item.attributesRaw" :key="item.id + attribute.value">
					<strong>{{ attribute.property }}</strong
					>:
					<span>{ {{ attribute.value }} = {{ variableToValue(attribute.value) }} }</span>
				</div>
			</div>
			<div v-if="item.attributes" class="itemsListItem__example">
				<div :style="attributesAsStyle(item.attributesRaw)">
					Enim ullam temporibus quasi unde quam. Eaque praesentium dolor qui
					necessitatibus magnam voluptatem. Eos aut esse earum.
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/components/items-list-item';
</style>

<script lang="ts">
import { PropType } from 'vue';
import { TypographyToken } from './TokenTypes';
import variables from '../../styles/settings/typography/_variables-css.json';
import { IResultJsonObject } from '../../../tools/importers/helpers/structures';

export default {
	name: 'ItemsTypography',
	props: {
		items: {
			type: Array as PropType<Array<TypographyToken>>,
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
		variableToValue(variable) {
			let result: string = '';

			(Object.values(variables) as Array<Array<IResultJsonObject>>).forEach((value) => {
				value.every((singleVariable) => {
					if (singleVariable.label === 'typography-' + variable) {
						result = singleVariable.value;
						return false;
					}
					return true;
				});
			});

			return result;
		},
	},
};
</script>
