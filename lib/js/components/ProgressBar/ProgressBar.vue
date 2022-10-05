<template>
	<div
		:class="{
			progressBar: true,
			'-primary': color === PROGRESS_BAR_COLORS.PRIMARY,
			'-warning': color === PROGRESS_BAR_COLORS.WARNING,
			'-fail': color === PROGRESS_BAR_COLORS.FAIL,
			'-success': color === PROGRESS_BAR_COLORS.SUCCESS,
			'-neutral': color === PROGRESS_BAR_COLORS.NEUTRAL,
			'-info': color === PROGRESS_BAR_COLORS.INFO,
			'-schemeMedium': colorScheme === PROGRESS_BAR_COLOR_SCHEMES.MEDIUM,
			'-schemeMediumNeutral': colorScheme === PROGRESS_BAR_COLOR_SCHEMES.MEDIUM_NEUTRAL,
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
				:class="{
					progressBar__result: true,
					'-secondary': range.layer === 2 && numberOfLayers === 2,
				}"
				:style="{ left: range.start + '%', width: range.length + '%' }"
			>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/shadows';

$progress-bar-height: 16px;
$progress-bar-s-height: 8px;
$progress-bar-xs-height: 4px;

$progress-bar-border-radius: 8px;

$progress-bar-label-text-max-width: 70%;
$progress-bar-label-data-max-width: 30%;

$progress-bar-layers: (
	'primary': (
		'default-color-scheme-first-layer': $color-primary-data,
		'default-color-scheme-second-layer': $color-primary-data-ghost,
		'medium-color-scheme-first-layer': $color-primary-data-medium,
		'medium-color-scheme-second-layer': $color-primary-data-weak,
		'medium-neutral-color-scheme-second-layer': $color-neutral-data-weak,
	),
	'info': (
		'default-color-scheme-first-layer': $color-info-data,
		'default-color-scheme-second-layer': $color-info-data-ghost,
		'medium-color-scheme-first-layer': $color-info-data-medium,
		'medium-color-scheme-second-layer': $color-info-data-weak,
		'medium-neutral-color-scheme-second-layer': $color-neutral-data-weak,
	),
	'neutral': (
		'default-color-scheme-first-layer': $color-neutral-data,
		'default-color-scheme-second-layer': $color-neutral-data-ghost,
		'medium-color-scheme-first-layer': $color-neutral-data-medium,
		'medium-color-scheme-second-layer': $color-neutral-data-weak,
		'medium-neutral-color-scheme-second-layer': $color-neutral-data-weak,
	),
	'success': (
		'default-color-scheme-first-layer': $color-success-data,
		'default-color-scheme-second-layer': $color-success-data-ghost,
		'medium-color-scheme-first-layer': $color-success-data-medium,
		'medium-color-scheme-second-layer': $color-success-data-weak,
		'medium-neutral-color-scheme-second-layer': $color-neutral-data-weak,
	),
	'warning': (
		'default-color-scheme-first-layer': $color-warning-data,
		'default-color-scheme-second-layer': $color-warning-data-ghost,
		'medium-color-scheme-first-layer': $color-warning-data-medium,
		'medium-color-scheme-second-layer': $color-warning-data-weak,
		'medium-neutral-color-scheme-second-layer': $color-neutral-data-weak,
	),
	'fail': (
		'default-color-scheme-first-layer': $color-fail-data,
		'default-color-scheme-second-layer': $color-fail-data-ghost,
		'medium-color-scheme-first-layer': $color-fail-data-medium,
		'medium-color-scheme-second-layer': $color-fail-data-weak,
		'medium-neutral-color-scheme-second-layer': $color-neutral-data-weak,
	),
);

.progressBar {
	$self: &;

	@each $color-name, $color-map in $progress-bar-layers {
		&.-#{$color-name} {
			#{$self}__result {
				background: map-get($color-map, 'default-color-scheme-first-layer');

				&.-secondary {
					background: map-get($color-map, 'default-color-scheme-second-layer');
				}
			}

			&.-schemeMedium {
				#{$self}__result {
					background: map-get($color-map, 'medium-color-scheme-first-layer');

					&.-secondary {
						background: map-get($color-map, 'medium-color-scheme-second-layer');
					}
				}
			}

			&.-schemeMediumNeutral {
				#{$self}__result {
					background: map-get($color-map, 'medium-color-scheme-first-layer');

					&.-secondary {
						background: map-get($color-map, 'medium-neutral-color-scheme-second-layer');
					}
				}
			}
		}
	}

	&.-compact {
		#{$self}__labelText {
			@include headlineXXS();
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
			box-shadow: $shadow-inset-s;
			height: $progress-bar-xs-height;
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
			margin-bottom: $space-xxs;
		}
	}

	&__labelText {
		@include headlineXXS();
		@include textBold;

		color: $color-neutral-text-heavy;
		max-width: $progress-bar-label-text-max-width;

		@media #{breakpoint-s()} {
			@include headlineS();
		}
	}

	&__labelDataWrapper {
		@include textS();
		@include textBold;

		align-items: baseline;
		color: $color-neutral-text-heavy;
		display: flex;
		margin-left: $space-xxs;
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
		@include textXS;

		color: $color-neutral-text-weak;
		margin-left: $space-xxxxs;
	}

	&__result {
		height: 100%;
		position: absolute;
		top: 0;
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	PROGRESS_BAR_COLORS,
	PROGRESS_BAR_SIZES,
	PROGRESS_BAR_RADII,
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_COLOR_SCHEMES,
	PROGRESS_BAR_LAYERS,
	Range,
} from './ProgressBar.consts';

export default {
	name: 'ProgressBar',
	props: {
		numberOfLayers: {
			type: Number,
			default: PROGRESS_BAR_LAYERS.ONE,
			validate(size) {
				return Object.values(PROGRESS_BAR_LAYERS).includes(size);
			},
		},
		colorScheme: {
			type: String,
			default: PROGRESS_BAR_COLOR_SCHEMES.DEFAULT,
			validate(size) {
				return Object.values(PROGRESS_BAR_COLOR_SCHEMES).includes(size);
			},
		},
		color: {
			type: String,
			default: PROGRESS_BAR_COLORS.INFO,
			validate(color) {
				return Object.values(PROGRESS_BAR_COLORS).includes(color);
			},
		},
		size: {
			type: String,
			default: PROGRESS_BAR_SIZES.MEDIUM,
			validate(size) {
				return Object.values(PROGRESS_BAR_SIZES).includes(size);
			},
		},
		ranges: {
			type: Array as PropType<Array<Range>>,
			required: true,
		},
		radius: {
			type: String,
			default: PROGRESS_BAR_RADII.DEFAULT,
			validate(size) {
				return Object.values(PROGRESS_BAR_RADII).includes(size);
			},
		},
		layout: {
			type: String,
			default: PROGRESS_BAR_LAYOUTS.DEFAULT,
			validate(size) {
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
	},
	data() {
		return {
			PROGRESS_BAR_COLORS: Object.freeze(PROGRESS_BAR_COLORS),
			PROGRESS_BAR_SIZES: Object.freeze(PROGRESS_BAR_SIZES),
			PROGRESS_BAR_RADII: Object.freeze(PROGRESS_BAR_RADII),
			PROGRESS_BAR_LAYOUTS: Object.freeze(PROGRESS_BAR_LAYOUTS),
			PROGRESS_BAR_LAYERS: Object.freeze(PROGRESS_BAR_LAYERS),
			PROGRESS_BAR_COLOR_SCHEMES: Object.freeze(PROGRESS_BAR_COLOR_SCHEMES),
		};
	},
	computed: {
		labelDataExists() {
			return this.labelData || this.labelDataSupporting || this.labelDataSuffix;
		},
	},
};
</script>
