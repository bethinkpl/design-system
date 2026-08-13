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

// A keyframe animation carries its own start value, so — unlike a transition — it needs no resolved
// *before-change* style and runs from the first style pass the element gets. That is what makes it
// the right tool here: the bar is mounted and animated in the same breath, and the previous
// `width: 0 -> 100%` transition (flipped from JS just after mount) could lose the race against the
// browser's first style pass. When it did, the freshly inserted node went straight to its final
// width with nothing to interpolate from, and the bar snapped to full instead of filling.
// Only the duration is set from JS, inline. The animation *name* has to stay in this block so that
// `scoped` rewrites it together with the keyframes — Vue does not rewrite inline styles.
@keyframes ds-loading-bar-fill {
	from {
		width: 0;
	}

	to {
		width: 100%;
	}
}

.ds-loadingBar {
	background-color: $color-neutral-background;
	display: flex;
	width: 100%;

	&__progress {
		animation-fill-mode: forwards;
		animation-name: ds-loading-bar-fill;
		animation-timing-function: linear;
		overflow: hidden;
		width: 0;
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
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

// The fill is driven entirely by the `ds-loading-bar-fill` keyframes in this component's styles, so
// there is nothing to start from JS — no mounted hook, no timer, no frame juggling. `'0'` opts out
// of the animation altogether and shows a full bar right away.
const loadingBarStyles = computed(() =>
	props.time === '0'
		? { animation: 'none', width: '100%' }
		: { animationDuration: `${props.time}s` },
);
</script>
