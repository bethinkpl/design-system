<template>
	<div>
		<div v-for="itemsList in getItemsLocal" :key="itemsList.title">
			<div class="itemsList" :class="{ [itemsList.class]: itemsList.class }">
				<div class="itemsList__row">
					<h2 class="itemsList__title">{{ itemsList.title }}</h2>
					<ol class="itemsList__categories">
						<li
							v-for="(items, itemCategory) in itemsList.list"
							:key="itemCategory"
							class="itemsListItem__category"
						>
							{{ itemCategory }}
						</li>
					</ol>
				</div>
				<div
					v-for="(items, itemCategory) in itemsList.list"
					:key="itemCategory"
					class="itemsList__row"
				>
					<h3 :id="'category-' + itemCategory" class="itemsList__category">{{
						itemCategory
					}}</h3>
					<items-color v-if="type === TOKENS_TYPES.COLORS" :items="items" />
					<items-typography v-if="type === TOKENS_TYPES.TYPOGRAPHY" :items="items" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/components/items-list';
</style>

<script lang="ts">
import { TOKENS_TYPES } from './TokenTypes';
import { Value } from '../utils/type.utils';
import ItemsColor from './ItemsColor.vue';
import ItemsTypography from './ItemsTypography.vue';

export default {
	name: 'ItemsList',
	components: {
		ItemsColor,
		ItemsTypography,
	},
	props: {
		itemsLists: {
			type: Array,
			required: true,
		},
		type: {
			type: String,
			required: true,
			validator(value: Value<typeof TOKENS_TYPES>) {
				return Object.values(TOKENS_TYPES).includes(value);
			},
		},
	},
	data() {
		return {
			itemsLocal: this.itemsLists,
			TOKENS_TYPES: Object.freeze(TOKENS_TYPES),
		};
	},
	computed: {
		getItemsLocal() {
			this.itemsLocal.forEach((list, index) => {
				if (list.disabled) {
					for (let key in list.list) {
						if (key === list.disabled) {
							delete this.itemsLocal[index].list[key];
						}
					}
				}
			});

			return this.itemsLocal;
		},
	},
};
</script>
