<template>
	<div class="sb__presentation">
		<div class="sb__row">
			<ol class="sb__list">
				<li v-for="(colors, colorCategory) in rawColors" :key="colorCategory" class="sb__legend">
					{{ colorCategory }}
				</li>
			</ol>
		</div>
		<div v-for="(colors, colorCategory) in rawColors" :key="colorCategory" class="sb__row">
			<h2>{{ colorCategory }}</h2>
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

<style lang="scss">
.sb {
	&__presentation {
		width: 80%;
		margin: 0 auto;

		h2 {
			margin-top: 0;
		}
	}

	&__row {
		border: 1px solid #f3f2f2;
		padding: 20px  20px;
		margin-bottom: 20px;
	}

	&__table {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		div {
			padding: 10px;
			min-width: 200px;
		}
	}

	&__color {
		display: block;
		height: 40px;
		width: 100%;
		box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
	}

	&__tableColor {
		flex: 3 1 auto;
		width: 200px;
	}

	&__tableValue {
		flex: 1 1 auto;
		width: 200px;
		color: #707070;
	}

	&__tableId {
		flex: 1 1 auto;
		width: 200px;
	}
	&__list {
		line-height:1.5em;
	}
}
</style>

<script lang="ts">

import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import rawColors from '../../../styles/settings/colors/_raw.json'

export default {
	name: 'Colors',
	comments: {
		ColorPalette,
		ColorItem
	},
	data(){
		return {
			rawColors: rawColors
		}
	}
};
</script>
