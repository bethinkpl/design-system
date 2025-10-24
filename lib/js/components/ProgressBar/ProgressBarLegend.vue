<template>
	<div
		class="ds-progressBarLegend"
		:class="{ '-ds-compact': layout === PROGRESS_BAR_LEGEND_LAYOUTS.COMPACT }"
	>
		<progress-bar-legend-item
			v-for="(data, index) in ranges"
			:key="index"
			:size
			:color="data.color"
			:data="data.data"
			:label="data.label"
			:icon="data.icon"
			:percent-value="hasPercentValue ? data.length?.toString() : undefined"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';

.ds-progressBarLegend {
	align-content: flex-start;
	align-items: flex-start;
	display: inline-flex;
	flex-wrap: wrap;
	gap: $space-xs $space-m;
	padding-top: $space-2xs;

	&.-ds-compact {
		gap: $space-2xs $space-s;
	}
}
</style>

<script setup lang="ts">
import {
	PROGRESS_BAR_LEGEND_LAYOUTS,
	PROGRESS_BAR_LEGEND_SIZES,
	ProgressBarLegendLayout,
	ProgressBarLegendSize,
} from './ProgressBarLegend.consts';
import ProgressBarLegendItem from './ProgressBarLegendItem.vue';
import { ProgressBarRange } from './ProgressBar.consts';

const {
	layout = PROGRESS_BAR_LEGEND_LAYOUTS.DEFAULT,
	ranges,
	size = PROGRESS_BAR_LEGEND_SIZES.SMALL,
	hasPercentValue = true,
} = defineProps<{
	layout?: ProgressBarLegendLayout;
	ranges: Array<ProgressBarRange>;
	size?: ProgressBarLegendSize;
	hasPercentValue?: boolean;
}>();
</script>
