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
					<div v-for="item in items" :key="item.id" class="itemDefinition">
						<div class="itemDefinition__id">{{ item.label }}</div>
						<div class="itemDefinition__value">{{ item.value }}</div>
						<div class="itemDefinition__color">
							<span
								:style="{ background: item.value }"
								class="itemDefinition__tile"
							/>
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
export default {
	name: 'ItemsList',
	props: {
		itemsLists: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			itemsLocal: this.itemsLists,
		};
	},
	mounted() {

    console.log(this.itemsLists);
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
		canBeDisplayed(category: string, disableDefault: boolean) {
			return !(category === 'default' && disableDefault);
		},
	},
};
</script>
