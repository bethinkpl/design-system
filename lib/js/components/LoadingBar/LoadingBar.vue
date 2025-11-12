<template>
	<div class="ds-loadingBar">
		<div class="ds-loadingBar__progress" :style="loadingBarStyles">
			<ds-container-ribbon
				:size="ribbonSize"
				:color="ribbonColor"
				:layout="CONTAINER_RIBBON_LAYOUTS.HORIZONTAL"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';

.ds-loadingBar {
	background-color: $color-neutral-background;
	display: flex;
	width: 100%;

	&__progress {
		overflow: hidden;
		width: 0;
	}
}
</style>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import DsContainerRibbon from '../ContainerRibbon/ContainerRibbon.vue';
import {
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_SIZES,
} from '../ContainerRibbon';
import {
	LOADING_BAR_COLORS,
	LOADING_BAR_SIZES,
	LoadingBarColors,
	LoadingBarSizes,
} from './LoadingBar.consts';

const props = withDefaults(
	defineProps<{
		color?: LoadingBarColors;
		size?: LoadingBarSizes;
		time: string;
	}>(),
	{
		color: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
		size: LOADING_BAR_SIZES.LARGE,
	},
);

const width = ref(0);

const ribbonSize = computed(() => {
	const sizeMap = {
		[LOADING_BAR_SIZES.SMALL]: CONTAINER_RIBBON_SIZES.SMALL,
		[LOADING_BAR_SIZES.MEDIUM]: CONTAINER_RIBBON_SIZES.MEDIUM,
		[LOADING_BAR_SIZES.LARGE]: CONTAINER_RIBBON_SIZES.LARGE,
	};
	return sizeMap[props.size] || CONTAINER_RIBBON_SIZES.LARGE;
});

const ribbonColor = computed(() => {
	const colorMap = {
		[LOADING_BAR_COLORS.NEUTRAL_HEAVY]: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		[LOADING_BAR_COLORS.NEUTRAL_STRONG]: CONTAINER_RIBBON_COLORS.NEUTRAL_STRONG,
		[LOADING_BAR_COLORS.SUCCESS]: CONTAINER_RIBBON_COLORS.SUCCESS,
		[LOADING_BAR_COLORS.WARNING]: CONTAINER_RIBBON_COLORS.WARNING,
		[LOADING_BAR_COLORS.DANGER]: CONTAINER_RIBBON_COLORS.DANGER,
		[LOADING_BAR_COLORS.INFO]: CONTAINER_RIBBON_COLORS.INFO,
	};
	return colorMap[props.color] || CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY;
});

const loadingBarStyles = computed(() => ({
	width: `${width.value}%`,
	transition: `width ${props.time}s linear`,
}));

onMounted(() => {
	if (props.time === '0') {
		width.value = 100;
		return;
	}
	// without postponing the width change, the transition won't work,
	// and the loading bar is 100% width right away
	setTimeout(() => {
		width.value = 100;
	}, 0);
});
</script>
