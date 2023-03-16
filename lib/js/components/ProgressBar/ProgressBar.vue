<template>
	<div
		:class="{
			progressBar: true,
			'-compact': layout === PROGRESS_BAR_LAYOUTS.COMPACT,
		}"
	>
		<div class="progressBar__label">
			<div class="progressBar__labelText">{{ labelText }}</div>
			<div v-if="labelDataExists" class="progressBar__labelDataWrapper">
				<span v-if="labelData" class="progressBar__labelData">{{ labelData }}</span>
				<span v-if="labelDataSupporting" class="progressBar__labelDataSupporting">
					<span class="progressBar__labelDataSeparator">/</span>
					{{ labelDataSupporting }}
				</span>
				<span v-if="labelDataSuffix" class="progressBar__labelDataSuffix">{{
					labelDataSuffix
				}}</span>
			</div>
		</div>
		<div
			:class="{
				progressBar__bar: true,
				'-small': size === PROGRESS_BAR_SIZES.SMALL,
				'-xsmall': size === PROGRESS_BAR_SIZES.XSMALL,
				'-noRadius': radius === PROGRESS_BAR_RADII.NONE,
			}"
		>
			<div
				v-for="(range, index) in ranges"
				:key="index"
				class="progressBar__range"
				:class="`-${range.color}`"
				:style="{ left: range.start + '%', width: range.length + '%' }"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/shadows';

$progress-bar-height: 16px;
$progress-bar-s-height: 8px;
$progress-bar-xs-height: 4px;

$progress-bar-border-radius: 8px;

$progress-bar-label-text-max-width: 70%;
$progress-bar-label-data-max-width: 30%;

$progress-bar-range-colors: (
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

.progressBar {
	$self: &;

	&.-compact {
		#{$self}__labelText {
			@include label-m-default-bold;
		}

		#{$self}__label {
			margin-bottom: $space-xxxs;
		}
	}

	&__bar {
		background-color: $color-default-background;
		border-radius: $progress-bar-border-radius;
		height: $progress-bar-height;
		overflow: hidden;
		position: relative;

		&.-small {
			height: $progress-bar-s-height;
		}

		&.-xsmall {
			height: $progress-bar-xs-height;

			&::after {
				box-shadow: $shadow-inset-s;
			}
		}

		&.-noRadius {
			border-radius: 0;
		}

		&::after {
			box-shadow: $shadow-inset-m;
			content: '';
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}
	}

	&__label {
		align-items: flex-end;
		display: flex;
		justify-content: space-between;
		margin-bottom: $space-xxxs;

		@media #{breakpoint-s()} {
			margin-bottom: $space-xxxs;
		}
	}

	&__labelText {
		@include label-m-default-bold;

		color: $color-neutral-text-heavy;
		max-width: $progress-bar-label-text-max-width;

		@media #{breakpoint-s()} {
			@include label-l-default-bold;
		}
	}

	&__labelDataWrapper {
		@include label-m-default-bold;

		align-items: baseline;
		color: $color-neutral-text-heavy;
		display: flex;
		flex-wrap: wrap;
		justify-content: right;
		margin-left: $space-xxs;
		margin-bottom: $space-xxxxxs;
		max-width: $progress-bar-label-data-max-width;
	}

	&__labelDataSupporting {
		color: $color-neutral-text;
		display: flex;
		margin-left: $space-xxxxxs;
	}

	&__labelDataSeparator {
		margin-right: $space-xxxxxs;
	}

	&__labelDataSuffix {
		@include label-s-default-regular;

		color: $color-neutral-text-weak;
		margin-left: $space-xxxxs;
	}

	&__range {
		height: 100%;
		position: absolute;
		top: 0;

		@each $class, $color-name in $progress-bar-range-colors {
			&.-#{$class} {
				background: $color-name;
			}
		}
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	PROGRESS_BAR_SIZES,
	PROGRESS_BAR_RADII,
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_LAYERS,
	ProgressBarRange,
	PROGRESS_BAR_LABEL_TEXT_SIZES,
} from './ProgressBar.consts';

export default {
	name: 'ProgressBar',
	props: {
		size: {
			type: String,
			default: PROGRESS_BAR_SIZES.MEDIUM,
			validator(size) {
				return Object.values(PROGRESS_BAR_SIZES).includes(size);
			},
		},
		// TODO style me
		labelTextSize: {
			type: String,
			default: PROGRESS_BAR_LABEL_TEXT_SIZES.SMALL,
			validator(size) {
				return Object.values(PROGRESS_BAR_LABEL_TEXT_SIZES).includes(size);
			},
		},
		ranges: {
			type: Array as PropType<Array<ProgressBarRange>>,
			required: true,
		},
		radius: {
			type: String,
			default: PROGRESS_BAR_RADII.DEFAULT,
			validator(size) {
				return Object.values(PROGRESS_BAR_RADII).includes(size);
			},
		},
		layout: {
			type: String,
			default: PROGRESS_BAR_LAYOUTS.DEFAULT,
			validator(size) {
				return Object.values(PROGRESS_BAR_LAYOUTS).includes(size);
			},
		},
		labelText: {
			type: String,
			default: null,
		},
		labelData: {
			type: String,
			default: null,
		},
		labelDataSupporting: {
			type: String,
			default: null,
		},
		labelDataSuffix: {
			type: String,
			default: null,
		},
		// TODO add badge
		badgePosition: {
			type: Number,
			default: null,
			validator(position) {
				return position >= 0 && position <= 100;
			},
		},
		// TODO style me
		badgeColor: {
			type: String,
			// TODO const
			default: 'info',
			// TODO validator
		},
	},
	data() {
		return {
			PROGRESS_BAR_SIZES: Object.freeze(PROGRESS_BAR_SIZES),
			PROGRESS_BAR_RADII: Object.freeze(PROGRESS_BAR_RADII),
			PROGRESS_BAR_LAYOUTS: Object.freeze(PROGRESS_BAR_LAYOUTS),
			PROGRESS_BAR_LAYERS: Object.freeze(PROGRESS_BAR_LAYERS),
		};
	},
	computed: {
		labelDataExists() {
			return this.labelData || this.labelDataSupporting || this.labelDataSuffix;
		},
	},
};
</script>
