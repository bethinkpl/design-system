<template>
	<div>
		<div v-for="colorList in colorsLists" :key="colorList.title" class="colorDefinition">
			<div class="colorsList">
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
								v-if="isHex(color.value)"
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
		};
	},
	methods: {
		isHex(color: string) {
			return String(color).match(this.hasHash);
		},
	},
};
</script>
