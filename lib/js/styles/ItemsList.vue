<template>
	<div>
		<div v-for="itemsList in filteredItemsLists" :key="itemsList.title">
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
@import '../../styles/settings/spacings';

.itemsList {
	margin: 0 auto;
	width: 80%;

	&__title {
		margin-top: 0;
	}

	&__category {
		font-size: var(--typography-font-size-2xl);
		font-weight: var(--typography-font-weight-bold);
		line-height: var(--typography-line-height-3xl);
	}

	&__row {
		border: 1px solid var(--raw-gray-100);
		margin-bottom: $space-m;
		padding: $space-m;
	}

	&__categories {
		line-height: var(--typography-line-height-xl);
	}
}
</style>

<script lang="ts">
import { ItemsListsItem, TOKENS_TYPES } from './TokenTypes';
import { Value } from '../utils/type.utils';
import ItemsColor from './ItemsColor.vue';
import ItemsTypography from './ItemsTypography.vue';
import { PropType } from 'vue';

export default {
	name: 'ItemsList',
	components: {
		ItemsColor,
		ItemsTypography,
	},
	props: {
		itemsLists: {
			type: Array as PropType<Array<ItemsListsItem>>,
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
			TOKENS_TYPES: Object.freeze(TOKENS_TYPES),
		};
	},
	computed: {
		filteredItemsLists() {
			let itemsLocal: Array<ItemsListsItem> = [];
			this.itemsLists.forEach((list, index) => {
				if (list.disabled) {
					for (let key in list.list) {
						if (key !== list.disabled) {
							itemsLocal.push(this.itemsLists[index]);
						}
					}
				} else {
					itemsLocal.push(this.itemsLists[index]);
				}
			});

			return itemsLocal;
		},
	},
};
</script>
