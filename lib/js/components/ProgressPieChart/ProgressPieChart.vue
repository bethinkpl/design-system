<template>
	<div
		:class="{
			progressPieChart: true,
		}"
	>
		<svg
			class="progressPieChart__svg"
			width="40"
			height="40"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				class="progressPieChart__circle progressPieChart__thumb"
				cx="20"
				cy="20"
				r="18"
			/>
			<circle
				v-if="state === PROGRESS_PIE_CHART_STATES.LOADING"
				class="progressPieChart__circle progressPieChart__loader"
				cx="20"
				cy="20"
				r="18"
			/>
			<template v-if="state === PROGRESS_PIE_CHART_STATES.DEFAULT">
				<circle
					v-for="(range, index) in ranges"
					:key="`circle_${index}`"
					class="progressPieChart__circle progressPieChart__track"
					cx="20"
					cy="20"
					r="18"
					:data-value="range.percent"
					:class="[`-${range.color}`]"
				/>
			</template>
		</svg>
		<div class="progressPieChart__label">
			<div
				v-if="state === PROGRESS_PIE_CHART_STATES.LOADING"
				class="progressPieChart__loaderText"
			>
				...
			</div>
			<div v-else-if="isDone && !hasOverage" class="progressPieChart__icon">
				<ds-icon :icon="ICONS.FA_CHECK_SOLID" :size="ICON_SIZES.X_SMALL" />
			</div>
			<div
				v-else-if="label"
				class="progressPieChart__labelText"
				:class="{ '-success': hasOverage }"
			>
				{{ labelText }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$progress-pie-chart-width: 40px;
$progress-pie-chart-height: 40px;
$progress-pie-chart-circle-stroke-width: 4;
$pi: 3.1416;
$progress-pie-chart-circle-radius: 18; // (width / 2) - (stroke-width / 2)
$progress-pie-chart-circle-circumference: 2 * $pi * $progress-pie-chart-circle-radius;

$progress-pie-chart-range-colors: (
	'primaryMedium': $color-primary-data-medium,
	'primary': $color-primary-data,
	'primaryWeak': $color-primary-data-weak,
	'primaryGhost': $color-primary-data-ghost,
	'neutralMedium': $color-neutral-data-medium,
	'neutral': $color-neutral-data,
	'neutralWeak': $color-neutral-data-weak,
	'neutralGhost': $color-neutral-data-ghost,
	'infoMedium': $color-info-data-medium,
	'info': $color-info-data,
	'infoWeak': $color-info-data-weak,
	'infoGhost': $color-info-data-ghost,
	'successMedium': $color-success-data-medium,
	'success': $color-success-data,
	'successWeak': $color-success-data-weak,
	'successGhost': $color-success-data-ghost,
	'warningMedium': $color-warning-data-medium,
	'warning': $color-warning-data,
	'warningWeak': $color-warning-data-weak,
	'warningGhost': $color-warning-data-ghost,
	'failMedium': $color-fail-data-medium,
	'fail': $color-fail-data,
	'failWeak': $color-fail-data-weak,
	'failGhost': $color-fail-data-ghost,
);

.progressPieChart {
	position: relative;
	width: $progress-pie-chart-width;
	height: $progress-pie-chart-height;
	padding: 0;
	margin: 0;
	overflow: hidden;
	box-sizing: border-box;

	&__svg {
		display: block;
		width: $progress-pie-chart-width;
		height: $progress-pie-chart-height;
	}

	&__circle {
		fill: none;
		stroke-width: $progress-pie-chart-circle-stroke-width;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: all $default-transition-time ease-out;
		transform: rotate(90deg);
		transform-origin: 50% 50%;
	}

	&__thumb {
		stroke: $color-neutral-data-ghost;
	}

	&__track {
		stroke-dasharray: $progress-pie-chart-circle-circumference;

		@for $i from 1 through 100 {
			&[data-value='#{$i}'] {
				stroke-dashoffset: #{$progress-pie-chart-circle-circumference -
					($progress-pie-chart-circle-circumference * ($i / 100))};
			}
		}

		@each $class, $color-name in $progress-pie-chart-range-colors {
			&.-#{$class} {
				stroke: $color-name;
			}
		}
	}

	&__loader {
		stroke-dasharray: $progress-pie-chart-circle-circumference;
		stroke: $color-neutral-background-strong;
		stroke-dashoffset: #{$progress-pie-chart-circle-circumference -
			($progress-pie-chart-circle-circumference * (25 / 100))};
		animation: a-spinAround 2s infinite linear;
		transform: rotate(0deg);
	}

	&__label {
		@include info-m-default-bold;

		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		justify-content: center;
		flex-wrap: wrap;
		align-content: center;
		color: $color-neutral-text;
	}

	&__loaderText {
		@include info-m-default-bold;

		color: $color-neutral-text;
	}

	&__icon {
		color: $color-success-text;
	}

	&__labelText {
		&.-success {
			color: $color-success-text;
		}
	}
}
</style>

<script lang="ts">
import { PROGRESS_PIE_CHART_STATES, ProgressPieChartRange } from './ProgressPieChart.consts';
import { PropType } from 'vue';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	name: 'ProgressPieChart',
	components: {
		DsIcon,
	},
	props: {
		label: { type: String, default: '' },
		state: {
			type: String,
			default: PROGRESS_PIE_CHART_STATES.DEFAULT,
			validator(state) {
				return Object.values(PROGRESS_PIE_CHART_STATES).includes(state);
			},
		},
		isDone: { type: Boolean, default: false },
		hasOverage: { type: Boolean, default: false },
		ranges: {
			type: Array as PropType<Array<ProgressPieChartRange>>,
			required: true,
			validator(ranges) {
				return ranges.every(
					(range: ProgressPieChartRange) => range.percent >= 0 && range.percent <= 100,
				);
			},
		},
	},
	data() {
		return {
			PROGRESS_PIE_CHART_STATES: Object.freeze(PROGRESS_PIE_CHART_STATES),
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {
		labelText() {
			return [this.hasOverage && '+', this.label].filter(Boolean).join('');
		},
	},
};
</script>
