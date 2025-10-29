<template>
	<div
		class="ds-progressBarLegendItem"
		:class="{ '-ds-small': size === PROGRESS_BAR_LEGEND_SIZES.SMALL }"
	>
		<template v-if="size === PROGRESS_BAR_LEGEND_SIZES.MEDIUM">
			<div class="ds-progressBarLegendItem__label">{{ label }}</div>
			<div class="ds-progressBarLegendItem__wrapper">
				<div
					class="ds-progressBarLegendItem__dataIndicator"
					:class="{ '-ds-hasIcon': !!icon, [`-ds-${color}`]: true }"
				>
					<ds-icon
						v-if="icon"
						class="ds-progressBarLegendItem__icon"
						:size="ICON_SIZES.XX_SMALL"
						:icon="icon"
					/>
				</div>
				<div class="ds-progressBarLegendItem__dataWrapper">
					<span class="ds-progressBarLegendItem__data">{{ data }}</span>
					<span
						v-if="renderedPercentValue"
						class="ds-progressBarLegendItem__percentValue"
					>
						{{ renderedPercentValue }}
					</span>
				</div>
			</div>
		</template>
		<template v-else>
			<div class="ds-progressBarLegendItem__wrapper">
				<div
					class="ds-progressBarLegendItem__dataIndicator"
					:class="{ '-ds-hasIcon': !!icon, [`-ds-${color}`]: true }"
				>
					<ds-icon
						v-if="icon"
						class="ds-progressBarLegendItem__icon"
						:size="ICON_SIZES.XXX_SMALL"
						:icon="icon"
					/>
				</div>
				<div class="ds-progressBarLegendItem__label">{{ label }}</div>
				<div class="ds-progressBarLegendItem__dataWrapper">
					<span class="ds-progressBarLegendItem__data">{{ data }}</span>
					<span
						v-if="renderedPercentValue"
						class="ds-progressBarLegendItem__percentValue"
					>
						{{ renderedPercentValue }}
					</span>
				</div>
			</div>
		</template>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';

$progress-bar-legend-item-colors: (
	'primaryMedium': (
		'background': $color-primary-data-medium,
		'iconColor': $color-inverted-icon,
	),
	'primary': (
		'background': $color-primary-data,
		'iconColor': $color-inverted-icon,
	),
	'primaryWeak': (
		'background': $color-primary-data-weak,
		'iconColor': $color-inverted-icon,
	),
	'primaryGhost': (
		'background': $color-primary-data-ghost,
		'iconColor': $color-primary-icon,
	),
	'neutralMedium': (
		'background': $color-neutral-data-medium,
		'iconColor': $color-inverted-icon,
	),
	'neutral': (
		'background': $color-neutral-data,
		'iconColor': $color-inverted-icon,
	),
	'neutralWeak': (
		'background': $color-neutral-data-weak,
		'iconColor': $color-inverted-icon,
	),
	'neutralGhost': (
		'background': $color-neutral-data-ghost,
		'iconColor': $color-neutral-icon,
	),
	'infoMedium': (
		'background': $color-info-data-medium,
		'iconColor': $color-inverted-icon,
	),
	'info': (
		'background': $color-info-data,
		'iconColor': $color-inverted-icon,
	),
	'infoWeak': (
		'background': $color-info-data-weak,
		'iconColor': $color-inverted-icon,
	),
	'infoGhost': (
		'background': $color-info-data-ghost,
		'iconColor': $color-info-icon,
	),
	'successMedium': (
		'background': $color-success-data-medium,
		'iconColor': $color-inverted-icon,
	),
	'success': (
		'background': $color-success-data,
		'iconColor': $color-inverted-icon,
	),
	'successWeak': (
		'background': $color-success-data-weak,
		'iconColor': $color-inverted-icon,
	),
	'successGhost': (
		'background': $color-success-data-ghost,
		'iconColor': $color-success-icon,
	),
	'warningMedium': (
		'background': $color-warning-data-medium,
		'iconColor': $color-inverted-icon,
	),
	'warning': (
		'background': $color-warning-data,
		'iconColor': $color-inverted-icon,
	),
	'warningWeak': (
		'background': $color-warning-data-weak,
		'iconColor': $color-inverted-icon,
	),
	'warningGhost': (
		'background': $color-warning-data-ghost,
		'iconColor': $color-warning-icon,
	),
	'failMedium': (
		'background': $color-fail-data-medium,
		'iconColor': $color-inverted-icon,
	),
	'fail': (
		'background': $color-fail-data,
		'iconColor': $color-inverted-icon,
	),
	'failWeak': (
		'background': $color-fail-data-weak,
		'iconColor': $color-inverted-icon,
	),
	'failGhost': (
		'background': $color-fail-data-ghost,
		'iconColor': $color-fail-icon,
	),
);

.ds-progressBarLegendItem {
	$self: &;

	align-items: flex-start;
	display: inline-flex;
	flex-direction: column;
	gap: $space-4xs;

	&__label {
		@include label-xs-extensive-bold-uppercase;

		color: $color-neutral-text;
	}

	&__wrapper {
		align-items: center;
		display: flex;
		gap: $space-4xs;
	}

	&__dataIndicator {
		@each $class, $color-map in $progress-bar-legend-item-colors {
			&.-ds-#{$class} {
				background: map-get($color-map, 'background');
				color: map-get($color-map, 'iconColor');
				fill: map-get($color-map, 'iconColor');
			}
		}

		align-items: center;
		border-radius: 100px;
		display: flex;
		height: $space-m;
		justify-content: center;
		margin-right: $space-5xs;
		width: $space-m;
	}

	&__dataWrapper {
		align-items: baseline;
		display: flex;
		gap: $space-5xs;
	}

	&__data {
		@include text-s-default-bold;

		color: $color-neutral-text-strong;
	}

	&__percentValue {
		@include info-s-default-regular;

		color: $color-neutral-text;
	}

	&.-ds-small {
		#{$self}__label {
			@include label-m-default-regular;
		}

		#{$self}__dataIndicator {
			height: $space-s;
			width: $space-s;
		}
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import DsIcon, { ICON_SIZES, IconItem } from '../Icons/Icon';
import { ProgressBarRangeColor } from './ProgressBar.consts';
import { PROGRESS_BAR_LEGEND_SIZES, ProgressBarLegendSize } from './ProgressBarLegend.consts';

const {
	size = PROGRESS_BAR_LEGEND_SIZES.SMALL,
	color,
	icon = null,
	label = '',
	data = '',
	percentValue = '',
} = defineProps<{
	size?: ProgressBarLegendSize;
	color: ProgressBarRangeColor;
	icon?: IconItem | null;
	label?: string;
	data?: string;
	percentValue?: string;
}>();

const renderedPercentValue = computed(() => {
	if (!percentValue) {
		return undefined;
	}

	return `(${percentValue}%)`;
});
</script>
