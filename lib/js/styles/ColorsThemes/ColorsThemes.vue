<template>
	<div class="colorsList">
		<div class="colorsList__row">
			<ol class="colorsList__categories">
				<li class="colorsDefinition__category">Theme Bodywork</li>
			</ol>
		</div>
		<div v-for="(colors, colorBodyworkCategory) in colorsListBodywork" :key="colorBodyworkCategory" class="colorsList__row">
			<h2>Theme Bodywork</h2>
			<div v-for="color in colors" :key="color.id" class='colorDefinition'>
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
	name: 'ColorsThemes',
	props: {
		colorsListBodywork: {
			type: Object,
			required: true,
		},
	},
};
</script>
