<template>
	<div class="colorsList">
		<div class="colorsList__row">
			<ol class="colorsList__categories">
				<li v-for="(colors, colorCategory) in colorsList" :key="colorCategory">
					{{ colorCategory }}
				</li>
			</ol>
		</div>
		<div
			v-for="(colors, colorCategory) in colorsList"
			:key="colorCategory"
			class="colorsList__row"
		>
			<h2>{{ colorCategory }}</h2>
			<div v-for="color in colors" :key="color.id" class="colorDefinition">
				<div class="colorDefinition__id">{{ color.label }}</div>
				<div class="colorDefinition__value">{{ color.value }}</div>
				<div class="colorDefinition__color">
					<span :style="{ background: color.value }"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Colors',
	props: {
		colorsList: {
			type: Object,
			required: true,
		},
	},
};
</script>
