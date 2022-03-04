<template>
	<div class="sb__presentation">
		<div class="sb__row">
			<ol class="sb__list">
				<li class="sb__legend">Theme WNL</li>
				<li class="sb__legend">Theme Bodywork</li>
			</ol>
		</div>

		<div v-for="(colors, colorWNLCategory) in WNLThemeWNLColors" :key="colorWNLCategory" class="sb__row">
			<h2>Theme WNL</h2>
			<div v-for="color in colors" :key="color.id" class='sb__table'>
				<div class="sb__tableId">{{ color.label }}</div>
				<div class="sb__tableValue">{{ color.value }}</div>
				<div class="sb__tableColor">
					<span class="sb__color" :style="{ background: color.value }"></span>
				</div>
			</div>
		</div>

		<div v-for="(colors, colorBodyworkCategory) in BodyworkThemeColors" :key="colorBodyworkCategory" class="sb__row">
			<h2>Theme Bodywork</h2>
			<div v-for="color in colors" :key="color.id" class='sb__table'>
				<div class="sb__tableId">{{ color.label }}</div>
				<div class="sb__tableValue">{{ color.value }}</div>
				<div class="sb__tableColor">
					<span class="sb__color" :style="{ background: color.value }"></span>
				</div>
			</div>
		</div>

	</div>
</template>


<script lang="ts">

import themeWNL from '../../../styles/settings/colors/_raw.json'
import themeBodywork from '../../../styles/settings/colors/_raw-bodywork.json'

export default {
	name: 'ColorsThemes',
	data(){
		return {
			WNLThemeWNLColors: themeWNL,
			BodyworkThemeColors: themeBodywork,
		}
	}
};
</script>
