<template>
	<div class="sb__presentation">
		<div class="sb__row">
			<ol class="sb__list">
				<li v-for="(colors, colorCategory) in tokensWNL" :key="colorCategory" class="sb__legend">
					{{ colorCategory }}
				</li>
			</ol>
		</div>
		<div v-for="(colors, colorCategory) in tokensWNL" :key="colorCategory" class="sb__row">
			<h2 :id="'category-' + colorCategory">{{ colorCategory }}</h2>
			<div v-for="color in colors" :key="color.id" class='sb__table'>
				<div class="sb__tableId">{{ color.label }}</div>
				<div class="sb__tableValue">{{ color.value }}</div>
				<div class="sb__tableColor">
					<span class="sb__color" :style="{ background: 'var('+color.value+')' }"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import tokensWNL from '../../../styles/settings/colors/_tokens-bodywork.json'

export default {
	name: 'ColorsTokensBodywork',
	comments: {
		ColorPalette,
		ColorItem
	},
	data(){
		return {
			tokensWNL,
		}
	}
};
</script>
