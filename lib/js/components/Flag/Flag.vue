<template>
	<div
		:class="{
			'ds-flag': true,
			'-ds-xxxs': size === FLAG_SIZES.XXXS,
			'-ds-xxs': size === FLAG_SIZES.XXS,
			'-ds-xs': size === FLAG_SIZES.XS,
			'-ds-s': size === FLAG_SIZES.S,
			'-ds-m': size === FLAG_SIZES.M,
			'-ds-l': size === FLAG_SIZES.L,
			'-ds-xl': size === FLAG_SIZES.XL,
			'-ds-xxl': size === FLAG_SIZES.XXL,
		}"
	>
		<component :is="flag" class="ds-flag__image" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/radiuses';

.ds-flag {
	border-radius: $radius-xs;
	display: inline-block;
	flex-shrink: 0;
	overflow: hidden;

	&.-ds-xxxs {
		height: 8px;
		width: 12px;
	}

	&.-ds-xxs {
		height: 12px;
		width: 18px;
	}

	&.-ds-xs {
		height: 16px;
		width: 25px;
	}

	&.-ds-s {
		height: 20px;
		width: 31px;
	}

	&.-ds-m {
		height: 24px;
		width: 37px;
	}

	&.-ds-l {
		height: 28px;
		width: 43px;
	}

	&.-ds-xl {
		height: 32px;
		width: 49px;
	}

	&.-ds-xxl {
		height: 40px;
		width: 61px;
	}

	&__image {
		display: block;
		height: 100%;
		width: 100%;
	}
}
</style>

<script setup lang="ts">
import type { Component } from 'vue';
import { FLAG_SIZES, FlagSize } from './Flag.consts';

const { flag, size = FLAG_SIZES.M } = defineProps<{
	flag: Component;
	size?: FlagSize;
}>();
</script>
