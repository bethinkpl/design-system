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
				<div v-if="labelDataSupporting" class="progressBar__labelDataSupporting">
					<span class="progressBar__labelDataSeparator">/</span>
					{{ labelDataSupporting }}
				</div>
				<div v-if="labelDataSuffix" class="progressBar__labelDataSuffix">{{
					labelDataSuffix
				}}</div>
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
				:style="{ left: range.percentValueFrom + '%', width: range.length + '%' }"
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

$progress-bar-layers: (
	'primary': (
		'default': $color-primary-data,
		'ghost': $color-primary-data-ghost,
		'medium': $color-primary-data-medium,
		'weak': $color-primary-data-weak,
		'neutral-weak': $color-neutral-data-weak,
	),
	'info': (
		'default': $color-info-data,
		'ghost': $color-info-data-ghost,
		'medium': $color-info-data-medium,
		'weak': $color-info-data-weak,
		'neutral-weak': $color-neutral-data-weak,
	),
	'neutral': (
		'default': $color-neutral-data,
		'ghost': $color-neutral-data-ghost,
		'medium': $color-neutral-data-medium,
		'weak': $color-neutral-data-weak,
		'neutral-weak': $color-neutral-data-weak,
	),
	'success': (
		'default': $color-success-data,
		'ghost': $color-success-data-ghost,
		'medium': $color-success-data-medium,
		'weak': $color-success-data-weak,
		'neutral-weak': $color-neutral-data-weak,
	),
	'warning': (
		'default': $color-warning-data,
		'ghost': $color-warning-data-ghost,
		'medium': $color-warning-data-medium,
		'weak': $color-warning-data-weak,
		'neutral-weak': $color-neutral-data-weak,
	),
	'fail': (
		'default': $color-fail-data,
		'ghost': $color-fail-data-ghost,
		'medium': $color-fail-data-medium,
		'weak': $color-fail-data-weak,
		'neutral-weak': $color-neutral-data-weak,
	),
);

.progressBar {
	$self: &;

	@each $color-name, $color-map in $progress-bar-layers {
		&.-#{$color-name} {
			#{$self}__result {
				background: map-get($color-map, 'default');

				&.-secondary {
					background: map-get($color-map, 'ghost');
				}
			}

			&.-schemeMedium {
				#{$self}__result {
					background: map-get($color-map, 'medium');

					&.-secondary {
						background: map-get($color-map, 'weak');
					}
				}
			}

			&.-schemeMediumNeutral {
				#{$self}__result {
					background: map-get($color-map, 'medium');

					&.-secondary {
						background: map-get($color-map, 'neutral-weak');
					}
				}
			}
		}
	}

	&.-compact {
		#{$self}__labelText {
			@include headlineXS();
		}
		#{$self}__label {
			margin-bottom: $space-xxxs;
		}
	}

	&__bar {
		background-color: $color-default-background;
		border-radius: $progress-bar-border-radius;
		box-shadow: $default-shadow-progress-m;
		height: $progress-bar-height;
		overflow: hidden;
		position: relative;

		&.-small {
			height: $progress-bar-s-height;
		}

		&.-xsmall {
			box-shadow: $default-shadow-progress-s;
			height: $progress-bar-xs-height;
		}

		&.-noRadius {
			border-radius: 0;
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
		@include headlineXS();
		@include textBold;

		color: $color-neutral-text-heavy;

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
	Ranges,
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
			type: Array as PropType<Array<Ranges>>,
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
