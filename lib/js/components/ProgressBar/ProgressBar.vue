<template>
	<div
		class="ds-progressBar"
		:class="{
			'-ds-compact': layout === PROGRESS_BAR_LAYOUTS.COMPACT,
		}"
	>
		<div v-if="labelText || labelDataExists" class="ds-progressBar__label">
			<div
				class="ds-progressBar__labelText"
				:class="{
					'-ds-medium': labelTextSize === PROGRESS_BAR_LABEL_TEXT_SIZES.MEDIUM,
					'-ds-ellipsis': labelTextEllipsis,
				}"
				:title="labelTextEllipsis ? labelText : null"
			>
				{{ labelText }}
			</div>
			<div v-if="labelDataExists" class="ds-progressBar__labelDataWrapper">
				<span v-if="labelData" class="ds-progressBar__labelData">{{ labelData }}</span>
				<span v-if="labelDataSupporting" class="ds-progressBar__labelDataSupporting">
					<span class="ds-progressBar__labelDataSeparator">/</span>
					{{ labelDataSupporting }}
				</span>
				<span v-if="labelDataSuffix" class="ds-progressBar__labelDataSuffix">{{
					labelDataSuffix
				}}</span>
			</div>
		</div>
		<div
			class="ds-progressBar__barWrapper"
			:class="{
				'-ds-small': size === PROGRESS_BAR_SIZES.SMALL,
				'-ds-xsmall': size === PROGRESS_BAR_SIZES.XSMALL,
			}"
		>
			<div
				class="ds-progressBar__bar"
				:class="{
					'-ds-noRadius': radius === PROGRESS_BAR_RADII.NONE,
				}"
			>
				<div
					v-for="(range, index) in ranges"
					:key="index"
					class="ds-progressBar__range"
					:class="`-ds-${range.color}`"
					:style="{ left: range.start + '%', width: range.length + '%' }"
				/>
			</div>
			<ds-icon
				v-if="badgePosition !== null"
				class="ds-progressBar__badge"
				:class="{
					'-ds-small': size !== PROGRESS_BAR_SIZES.MEDIUM,
					[`-ds-${badgeColor}`]: true,
				}"
				:style="`left: ${badgePosition}%`"
				:icon="ICONS.FA_LOCATION_DOT"
				:size="
					size === PROGRESS_BAR_SIZES.MEDIUM ? ICON_SIZES.XX_SMALL : ICON_SIZES.XXX_SMALL
				"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use 'sass:math';

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

$progress-bar-badge-size: 24px;
$progress-bar-badge-size-small: 16px;

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

$progress-bar-badge-colors: (
	'primary': (
		'background': $color-primary-background-medium,
		'icon': $color-primary-icon,
	),
	'neutral': (
		'background': $color-neutral-background-medium,
		'icon': $color-neutral-icon,
	),
	'info': (
		'background': $color-info-background-medium,
		'icon': $color-info-icon,
	),
	'success': (
		'background': $color-success-background-medium,
		'icon': $color-success-icon,
	),
	'warning': (
		'background': $color-warning-background-medium,
		'icon': $color-warning-icon,
	),
	'fail': (
		'background': $color-fail-background-medium,
		'icon': $color-fail-icon,
	),
);

.ds-progressBar {
	$self: &;

	&.-ds-compact {
		#{$self}__labelText {
			@include label-m-default-bold;

			&.-ds-medium {
				@include label-l-default-bold;
			}
		}

		#{$self}__label {
			margin-bottom: $space-3xs;
		}
	}

	&__barWrapper {
		height: $progress-bar-height;
		position: relative;

		&.-ds-small {
			height: $progress-bar-s-height;
		}

		&.-ds-xsmall {
			height: $progress-bar-xs-height;

			#{$self}__bar::after {
				box-shadow: $shadow-inset-s;
			}
		}
	}

	&__bar {
		background-color: $color-default-background;
		border-radius: $progress-bar-border-radius;
		height: 100%;
		overflow: hidden;
		position: relative;

		&.-ds-noRadius {
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
		margin-bottom: $space-3xs;

		@media #{breakpoint-s()} {
			margin-bottom: $space-3xs;
		}
	}

	&__labelText {
		@include label-m-default-bold;

		color: $color-neutral-text-heavy;
		max-width: $progress-bar-label-text-max-width;

		@media #{breakpoint-s()} {
			@include label-l-default-bold;
		}

		&.-ds-medium {
			@include label-l-default-bold;

			@media #{breakpoint-s()} {
				@include label-xl-default-bold;
			}
		}

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__labelDataWrapper {
		@include label-m-default-bold;

		align-items: baseline;
		color: $color-neutral-text-heavy;
		display: flex;
		flex-wrap: wrap;
		justify-content: right;
		margin-bottom: $space-5xs;
		margin-left: $space-2xs;
		max-width: $progress-bar-label-data-max-width;
	}

	&__labelDataSupporting {
		color: $color-neutral-text;
		display: flex;
		margin-left: $space-5xs;
	}

	&__labelDataSeparator {
		margin-right: $space-5xs;
	}

	&__labelDataSuffix {
		@include label-s-default-regular;

		color: $color-neutral-text-weak;
		margin-left: $space-4xs;
	}

	&__range {
		@each $class, $color-name in $progress-bar-range-colors {
			&.-ds-#{$class} {
				background: $color-name;
			}
		}

		height: 100%;
		position: absolute;
		top: 0;
	}

	&__badge {
		@each $class, $colors-map in $progress-bar-badge-colors {
			&.-ds-#{$class} {
				background: map-get($colors-map, 'background');
				color: map-get($colors-map, 'icon');
			}
		}

		align-items: center;
		border: 1px solid $color-inverted-border;
		border-radius: 50%;
		display: flex;
		height: $progress-bar-badge-size;
		justify-content: center;
		margin-left: math.div(-$progress-bar-badge-size, 2);
		margin-top: math.div(-$progress-bar-badge-size, 2);
		position: absolute;
		top: 50%;
		width: $progress-bar-badge-size;

		&.-ds-small {
			height: $progress-bar-badge-size-small;
			margin-left: math.div(-$progress-bar-badge-size-small, 2);
			margin-top: math.div(-$progress-bar-badge-size-small, 2);
			width: $progress-bar-badge-size-small;
		}
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	PROGRESS_BAR_BADGE_COLORS,
	PROGRESS_BAR_LABEL_TEXT_SIZES,
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_RADII,
	PROGRESS_BAR_SIZES,
	ProgressBarRange,
} from './ProgressBar.consts';

import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	name: 'ProgressBar',
	components: {
		DsIcon,
	},
	props: {
		size: {
			type: String,
			default: PROGRESS_BAR_SIZES.SMALL,
			validator(size) {
				return Object.values(PROGRESS_BAR_SIZES).includes(size);
			},
		},
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
			validator(ranges) {
				return ranges.every(
					(range: ProgressBarRange) =>
						range.start >= 0 && range.length >= 0 && range.start + range.length <= 100,
				);
			},
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
		labelTextEllipsis: {
			type: Boolean,
			default: false,
		},
		badgePosition: {
			type: Number,
			default: null,
			validator(position) {
				return position >= 0 && position <= 100;
			},
		},
		badgeColor: {
			type: String,
			default: PROGRESS_BAR_BADGE_COLORS.INFO,
			validator(color) {
				return Object.values(PROGRESS_BAR_BADGE_COLORS).includes(color);
			},
		},
	},
	data() {
		return {
			PROGRESS_BAR_SIZES: Object.freeze(PROGRESS_BAR_SIZES),
			PROGRESS_BAR_RADII: Object.freeze(PROGRESS_BAR_RADII),
			PROGRESS_BAR_LAYOUTS: Object.freeze(PROGRESS_BAR_LAYOUTS),
			PROGRESS_BAR_LABEL_TEXT_SIZES: Object.freeze(PROGRESS_BAR_LABEL_TEXT_SIZES),
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {
		labelDataExists() {
			return this.labelData || this.labelDataSupporting || this.labelDataSuffix;
		},
	},
};
</script>
