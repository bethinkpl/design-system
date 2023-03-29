<template>
	<div
		:class="{
			progressDonutChart: true,
		}"
	>
		<svg
			class="progressDonutChart__svg"
			width="40"
			height="40"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				class="progressDonutChart__circle progressDonutChart__thumb"
				cx="20"
				cy="20"
				r="18"
			/>
			<circle
				v-if="state === PROGRESS_DONUT_CHART_STATES.LOADING"
				class="progressDonutChart__circle progressDonutChart__loader"
				cx="20"
				cy="20"
				r="18"
			/>
			<template v-if="state === PROGRESS_DONUT_CHART_STATES.DEFAULT">
				<circle
					v-for="(range, index) in ranges"
					:key="`circle_${index}`"
					class="progressDonutChart__circle progressDonutChart__track"
					cx="20"
					cy="20"
					r="18"
					:data-value="range.percent"
					:class="[`-${range.color}`]"
				/>
			</template>
		</svg>
		<div class="progressDonutChart__label">
			<div
				v-if="state === PROGRESS_DONUT_CHART_STATES.LOADING"
				class="progressDonutChart__loaderText"
			/>
			<div v-else-if="isDone && !hasOverage" class="progressDonutChart__icon">
				<ds-icon :icon="ICONS.FA_CHECK_SOLID" :size="ICON_SIZES.X_SMALL" />
			</div>
			<div
				v-else-if="label"
				class="progressDonutChart__labelText"
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
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography/tokens';

$progress-donut-chart-width: 40px;
$progress-donut-chart-height: 40px;
$progress-donut-chart-circle-stroke-width: 4;
$pi: 3.1416;
$progress-donut-chart-circle-radius: 18; // (width / 2) - (stroke-width / 2)
$progress-donut-chart-circle-circumference: 2 * $pi * $progress-donut-chart-circle-radius;

$progress-donut-chart-range-colors: (
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

@keyframes dot-flashing {
	0% {
		background-color: $color-neutral-text;
	}

	50%,
	100% {
		background-color: transparent;
	}
}

.progressDonutChart {
	position: relative;
	width: $progress-donut-chart-width;
	height: $progress-donut-chart-height;
	padding: 0;
	margin: 0;
	overflow: hidden;
	box-sizing: border-box;

	&__svg {
		display: block;
		width: $progress-donut-chart-width;
		height: $progress-donut-chart-height;
	}

	&__circle {
		fill: none;
		stroke-width: $progress-donut-chart-circle-stroke-width;
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
		@for $i from 1 through 100 {
			&[data-value='#{$i}'] {
				stroke-dashoffset: #{$progress-donut-chart-circle-circumference -
					($progress-donut-chart-circle-circumference * ($i / 100))};
			}
		}

		@each $class, $color-name in $progress-donut-chart-range-colors {
			&.-#{$class} {
				stroke: $color-name;
			}
		}

		stroke-dasharray: $progress-donut-chart-circle-circumference;
	}

	&__loader {
		stroke-dasharray: $progress-donut-chart-circle-circumference;
		stroke: $color-neutral-background-strong;
		stroke-dashoffset: #{$progress-donut-chart-circle-circumference -
			($progress-donut-chart-circle-circumference * (25 / 100))};
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

	&__icon {
		color: $color-success-text;
	}

	&__labelText {
		&.-success {
			color: $color-success-text;
		}
	}

	&__loaderText {
		position: relative;
		width: 2px;
		height: 2px;
		margin-top: $space-xxxs;
		border-radius: 100%;
		background-color: $color-neutral-text;
		color: $color-neutral-text;
		animation: dot-flashing 1s infinite linear alternate;
		animation-delay: 0.5s;

		&::before,
		&::after {
			content: '';
			display: inline-block;
			position: absolute;
			top: 0;
		}

		&::before {
			left: -4px;
			width: 2px;
			height: 2px;
			border-radius: 100%;
			background-color: $color-neutral-text;
			color: $color-neutral-text;
			animation: dot-flashing 1s infinite alternate;
			animation-delay: 0s;
		}

		&::after {
			left: 4px;
			width: 2px;
			height: 2px;
			border-radius: 100%;
			background-color: $color-neutral-text;
			color: $color-neutral-text;
			animation: dot-flashing 1s infinite alternate;
			animation-delay: 1s;
		}
	}
}
</style>

<script lang="ts">
import { PROGRESS_DONUT_CHART_STATES, ProgressDonutChartRange } from './ProgressDonutChart.consts';
import { PropType } from 'vue';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	name: 'ProgressDonutChart',
	components: {
		DsIcon,
	},
	props: {
		label: { type: String, default: '' },
		state: {
			type: String,
			default: PROGRESS_DONUT_CHART_STATES.DEFAULT,
			validator(state) {
				return Object.values(PROGRESS_DONUT_CHART_STATES).includes(state);
			},
		},
		isDone: { type: Boolean, default: false },
		hasOverage: { type: Boolean, default: false },
		ranges: {
			type: Array as PropType<Array<ProgressDonutChartRange>>,
			required: true,
			validator(ranges) {
				return ranges.every(
					(range: ProgressDonutChartRange) => range.percent >= 0 && range.percent <= 100,
				);
			},
		},
	},
	data() {
		return {
			PROGRESS_DONUT_CHART_STATES: Object.freeze(PROGRESS_DONUT_CHART_STATES),
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
