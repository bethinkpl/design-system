<template>
	<div class="ds-progressDonutChart">
		<svg
			class="ds-progressDonutChart__svg"
			:width="PROGRESS_DONUT_CHART_SIZE"
			:height="PROGRESS_DONUT_CHART_SIZE"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				class="ds-progressDonutChart__circle ds-progressDonutChart__thumb"
				:cx="PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT"
				:cy="PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT"
				:r="PROGRESS_DONUT_CHART_CIRCLE_RADIUS"
			/>
			<circle
				v-if="state === PROGRESS_DONUT_CHART_STATES.LOADING"
				class="ds-progressDonutChart__circle ds-progressDonutChart__loader"
				:cx="PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT"
				:cy="PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT"
				:r="PROGRESS_DONUT_CHART_CIRCLE_RADIUS"
			/>
			<template v-else>
				<circle
					v-for="(range, index) in calculatedRanges"
					:key="`circle_${index}`"
					class="ds-progressDonutChart__circle ds-progressDonutChart__track"
					:cx="PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT"
					:cy="PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT"
					:r="PROGRESS_DONUT_CHART_CIRCLE_RADIUS"
					:style="`--length: ${range.length}; transform: rotate(${range.rotate}deg);`"
					:class="[`-ds-${range.color}`]"
				/>
			</template>
		</svg>
		<div class="ds-progressDonutChart__label">
			<div
				v-if="state === PROGRESS_DONUT_CHART_STATES.LOADING"
				class="ds-progressDonutChart__loaderText"
			/>
			<ds-icon
				v-else-if="state === PROGRESS_DONUT_CHART_STATES.DONE"
				class="ds-progressDonutChart__icon"
				:icon="ICONS.FA_CHECK_SOLID"
				:size="ICON_SIZES.X_SMALL"
			/>
			<div
				v-else-if="label"
				class="ds-progressDonutChart__labelText"
				:class="{ '-ds-hasOverage': state === PROGRESS_DONUT_CHART_STATES.OVERAGE }"
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

$progress-donut-chart-size: 40px;
$progress-donut-chart-circle-stroke-width: 4;
$pi: 3.1416;
$progress-donut-chart-circle-radius: 18; // (width / 2) - (stroke-width / 2)
$circle-circumference: 2 * $pi * $progress-donut-chart-circle-radius;
$progress-donut-chart-loading-dot-size: 2px;

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

.ds-progressDonutChart {
	box-sizing: border-box;
	height: $progress-donut-chart-size;
	margin: 0;
	padding: 0;
	position: relative;
	width: $progress-donut-chart-size;

	&__svg {
		height: $progress-donut-chart-size;
		width: $progress-donut-chart-size;
	}

	&__circle {
		fill: none;
		stroke-width: $progress-donut-chart-circle-stroke-width;
		transform: rotate(90deg);
		transform-origin: 50% 50%;
		// Disabled for v3.0
		//stroke-linecap: round;
		//stroke-linejoin: round;
		transition: all $default-transition-time ease-out;
	}

	&__thumb {
		stroke: $color-neutral-data-ghost;
	}

	&__track {
		@each $class, $color-name in $progress-donut-chart-range-colors {
			&.-ds-#{$class} {
				stroke: $color-name;
			}
		}

		stroke-dasharray: $circle-circumference;
		stroke-dashoffset: calc(
			#{$circle-circumference} - (#{$circle-circumference} * (var(--length, 0) / 100))
		);
	}

	&__loader {
		animation: a-spinAround 2s infinite linear;
		stroke: $color-neutral-background-strong;
		stroke-dasharray: $circle-circumference;
		stroke-dashoffset: #{$circle-circumference - ($circle-circumference * 0.25)};
		transform: rotate(0deg);
	}

	&__label {
		@include info-m-default-bold;

		align-items: center;
		color: $color-neutral-text;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	&__icon {
		color: $color-success-icon;
	}

	&__labelText {
		max-width: 80%;
		overflow: hidden;

		&.-ds-hasOverage {
			color: $color-success-text;
			margin-left: -$space-5xs;
		}
	}

	&__loaderText {
		animation: dot-flashing #{2 * $default-transition-time} infinite linear alternate;
		animation-delay: $default-transition-time;
		background-color: $color-neutral-text;
		border-radius: 100%;
		color: $color-neutral-text;
		height: $progress-donut-chart-loading-dot-size;
		margin-top: $space-3xs;
		position: relative;
		width: $progress-donut-chart-loading-dot-size;

		&::before,
		&::after {
			animation: dot-flashing #{2 * $default-transition-time} infinite alternate;
			background-color: $color-neutral-text;
			border-radius: 100%;
			color: $color-neutral-text;
			content: '';
			display: inline-block;
			height: $progress-donut-chart-loading-dot-size;
			position: absolute;
			top: 0;
			width: $progress-donut-chart-loading-dot-size;
		}

		&::before {
			animation-delay: 0s;
			left: -($progress-donut-chart-loading-dot-size * 2);
		}

		&::after {
			animation-delay: 2 * $default-transition-time;
			left: $progress-donut-chart-loading-dot-size * 2;
		}
	}
}
</style>

<script lang="ts">
import {
	PROGRESS_DONUT_CHART_STATES,
	ProgressDonutChartRange,
	ProgressDonutChartState,
} from './ProgressDonutChart.consts';
import { defineComponent, PropType } from 'vue';
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

const OFFSET_IN_DEGREES_OF_TRACK_START_POINT = 90; // 90 is to set starting point at the bottom
const PROGRESS_DONUT_CHART_SIZE = 40; //  keep consider with $progress-donut-chart-size
const PROGRESS_DONUT_CHART_STROKE_WIDTH = 4; // keep consider with $progress-donut-chart-circle-stroke-width
const PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT = PROGRESS_DONUT_CHART_SIZE / 2;
const PROGRESS_DONUT_CHART_CIRCLE_RADIUS =
	PROGRESS_DONUT_CHART_SIZE / 2 - PROGRESS_DONUT_CHART_STROKE_WIDTH / 2;

export default defineComponent({
	name: 'ProgressDonutChart',
	components: {
		DsIcon,
	},
	props: {
		label: { type: String, default: '' },
		state: {
			type: String as PropType<ProgressDonutChartState>,
			default: PROGRESS_DONUT_CHART_STATES.DEFAULT,
			validator(state) {
				return Object.values(PROGRESS_DONUT_CHART_STATES).includes(state);
			},
		},
		ranges: {
			type: Array as PropType<Array<ProgressDonutChartRange>>,
			required: true,
			validator(ranges) {
				return ranges.every(
					(range: ProgressDonutChartRange) =>
						range.start >= 0 && range.length >= 0 && range.start + range.length <= 100,
				);
			},
		},
	},
	data() {
		return {
			PROGRESS_DONUT_CHART_STATES: Object.freeze(PROGRESS_DONUT_CHART_STATES),
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			PROGRESS_DONUT_CHART_SIZE,
			PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
			PROGRESS_DONUT_CHART_CIRCLE_RADIUS,
		};
	},
	computed: {
		labelText() {
			return [this.state === PROGRESS_DONUT_CHART_STATES.OVERAGE && '+', this.label]
				.filter(Boolean)
				.join('');
		},
		calculatedRanges() {
			return this.ranges.map((range) => {
				return {
					...range,
					rotate: (range.start / 100) * 360 + OFFSET_IN_DEGREES_OF_TRACK_START_POINT,
				};
			});
		},
	},
});
</script>
