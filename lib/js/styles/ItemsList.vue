<template>
	<div>
		<div v-for="itemsList in itemsLocal" :key="itemsList.title" class="itemDefinition">
			<div class="itemsList" :class="{ [itemsList.class]: itemsList.class }">
				<div class="itemsList__row">
					<h2 class="itemsList__title">{{ itemsList.title }}</h2>
					<ol class="itemsList__categories">
						<li
							v-for="(items, itemCategory) in itemsList.list"
							:key="itemCategory"
							class="itemDefinition__category"
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
					<h3 :id="'category-' + itemCategory">{{ itemCategory }}</h3>
          <item-color v-if="type === TOKENS_TYPES.COLORS" :items="items"/>

          <div v-for="item in items" v-if="type === TOKENS_TYPES.TYPOGRAPHY" :key="item.id" class="itemDefinition">
            <div v-if="item.label" class="itemDefinition__id">{{ item.label }}</div>
            <div v-if="item.value" class="itemDefinition__value">{{ item.value }}</div>
            <div v-if="item.token">{{ item.token }}</div>
            <div v-if="item.attributes">
              <div v-for="attribute in item.attributes" >{{ attribute }}</div>
            </div>
            <div v-if="item.attributes">
              <div :style="attributesAsStyle(item.attributes)">Lorem ipsum</div>
            </div>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.itemsList {
	margin: 0 auto;
	width: 80%;

	&__title {
		margin-top: 0;
	}

	&__row {
		border: 1px solid #f3f2f2;
		margin-bottom: 20px;
		padding: 20px 20px;
	}

	&__categories {
		line-height: 1.5em;
	}
}

.itemDefinition {
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;

	&__id,
	&__value,
	&__color {
		min-width: 200px;
		padding: 10px;
	}

	&__color {
		flex: 3 1 auto;
		width: 200px;
	}

	&__tile {
		box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
		display: block;
		height: 40px;
		width: 100%;
	}

	&__value {
		color: #707070;
		flex: 1 1 auto;
		width: 200px;
	}

	&__id {
		flex: 1 1 auto;
		width: 200px;
	}
}
</style>

<script lang="ts">
import { TOKENS_TYPES } from "./TokenTypes.consts";
import { Value } from "../utils/type.utils";
import ItemColor from './ItemColor.vue';
import ItemTypography from './ItemTypography.vue';

export default {
	name: 'ItemsList',
  components: {
    ItemColor,
    ItemTypography
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
	mounted() {
		this.itemsLocal.forEach((list, index) => {
			if (list.disabled) {
				for (let key in list.list) {
					if (key === list.disabled) {
						this.itemsLocal[index].list[key] = null;
						delete this.itemsLocal[index].list[key];
					}
				}
			}
		});
	},
  methods: {
    attributesAsStyle(attributes) {
      console.log(attributes);
      return 'color:red;';
    },
  }
};
</script>