<template>
	<div class="colorsList">
		<div class="colorsList__row">
			<ol class="colorsList__categories">
				<li v-for="(colors, colorCategory) in tokensWNL" :key="colorCategory" class="colorsDefinition__category">
					{{ colorCategory }}
				</li>
			</ol>
		</div>
		<div v-for="(colors, colorCategory) in tokensWNL" :key="colorCategory" class="colorsList__row">
			<h2 :id="'category-' + colorCategory">{{ colorCategory }}</h2>
			<div v-for="color in colors" :key="color.id" class='colorDefinition'>
				<div class="colorDefinition__id">{{ color.label }}</div>
				<div class="colorDefinition__value">{{ color.value }}</div>
				<div class="colorDefinition__color">
					<span :style="{ background: 'var('+color.value+')' }"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import tokensWNL from '../../../styles/settings/colors/_tokens-bodywork.json'

export default {
	name: 'ColorsTokensBodywork',
	data(){
		return {
			tokensWNL,
		}
	}
};
</script>
