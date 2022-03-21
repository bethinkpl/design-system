<template>
	<div>
		<div v-for="colorList in colors" :key="colorList.title" class="colorDefinition">
			<div class="colorsList" :class="{ [colorList.class]: true }">
				<div class="colorsList__row">
					<h2>{{ colorList.title }}</h2>
					<ol class="colorsList__categories">
						<li
							v-for="(colors, colorCategory) in colorList.list"
							:key="colorCategory"
							class="colorsDefinition__category"
						>
							{{ colorCategory }}
						</li>
					</ol>
				</div>
				<div
					v-for="(colors, colorCategory) in colorList.list"
					:key="colorCategory"
					class="colorsList__row"
				>
					<h3 :id="'category-' + colorCategory">{{ colorCategory }}</h3>
					<div v-for="color in colors" :key="color.id" class="colorDefinition">
						<div class="colorDefinition__id">{{ color.label }}</div>
						<div class="colorDefinition__value">{{ color.value }}</div>
						<div class="colorDefinition__color">
							<span
								v-if="isHexOrRGBA(color.value)"
								:style="{ background: color.value }"
							></span>
							<span v-else :style="{ background: 'var(' + color.value + ')' }"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.colorsList {
	margin: 0 auto;
	width: 80%;

	h2 {
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

.colorDefinition {
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;

	div {
		min-width: 200px;
		padding: 10px;
	}

	&__color {
		flex: 3 1 auto;
		width: 200px;

		span {
			box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
			display: block;
			height: 40px;
			width: 100%;
		}
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
	name: 'ColorsList',
	props: {
		colorsLists: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			hasHash: /#/i,
			hasRGBA: /rgba/i,
			colors: this.colorsLists,
		};
	},
	mounted() {
		this.colors.forEach((list, index) => {
			if (list.disableDefault) {
				for (let key in list.list) {
					if (key === 'default') {
						this.colors[index].list[key] = null;
						delete this.colors[index].list[key];
					}
				}
			}
		});
	},
	methods: {
		canBeDisplayed(category: string, disableDefault: boolean) {
			return !(category === 'default' && disableDefault);
		},
		isHexOrRGBA(color: string) {
			return color.match(this.hasHash) || color.match(this.hasRGBA);
		},
	},
};
</script>
