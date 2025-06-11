<template>
	<div
		class="ds-featureIcon"
		:class="{
			'-ds-doubleBackground': doubleBackground,
			'-ds-danger': color === FEATURE_ICON_COLOR.DANGER,
			'-ds-fail': color === FEATURE_ICON_COLOR.FAIL,
			'-ds-info': color === FEATURE_ICON_COLOR.INFO,
			'-ds-neutral': color === FEATURE_ICON_COLOR.NEUTRAL,
			'-ds-neutralWeak': color === FEATURE_ICON_COLOR.NEUTRAL_WEAK,
			'-ds-primary': color === FEATURE_ICON_COLOR.PRIMARY,
			'-ds-success': color === FEATURE_ICON_COLOR.SUCCESS,
			'-ds-warning': color === FEATURE_ICON_COLOR.WARNING,
			'-ds-xSmall': size === FEATURE_ICON_SIZES.X_SMALL,
			'-ds-small': size === FEATURE_ICON_SIZES.SMALL,
			'-ds-medium': size === FEATURE_ICON_SIZES.MEDIUM,
			'-ds-large': size === FEATURE_ICON_SIZES.LARGE,
			'-ds-xLarge': size === FEATURE_ICON_SIZES.X_LARGE,
		}"
	>
		<wnl-icon class="ds-featureIcon__icon" :icon="icon" :size="iconSize" />
	</div>
</template>

<style lang="scss">
@import '../../../../styles/components/icons';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';

$feature-icon-colors: (
	'neutral': (
		'background': $color-neutral-background-medium,
		'border': $color-neutral-background,
		'icon': $color-neutral-icon,
	),
	'neutralWeak': (
		'background': $color-neutral-background-medium,
		'border': $color-neutral-background,
		'icon': $color-neutral-icon-weak,
	),
	'primary': (
		'background': $color-primary-background-medium,
		'border': $color-primary-background,
		'icon': $color-primary-icon,
	),
	'success': (
		'background': $color-success-background-medium,
		'border': $color-success-background,
		'icon': $color-success-icon,
	),
	'danger': (
		'background': $color-danger-background-medium,
		'border': $color-danger-background,
		'icon': $color-danger-icon,
	),
	'fail': (
		'background': $color-fail-background-medium,
		'border': $color-fail-background,
		'icon': $color-fail-icon,
	),
	'warning': (
		'background': $color-warning-background-medium,
		'border': $color-warning-background,
		'icon': $color-warning-icon,
	),
	'info': (
		'background': $color-info-background-medium,
		'border': $color-info-background,
		'icon': $color-info-icon,
	),
);

$feature-icon-padding-large: 10px;

@mixin setBorderColor($border) {
	border-color: $border;
}

@mixin setFeatureIconColor($self, $background, $icon) {
	background-color: $background;
	border-color: $background;

	#{$self}__icon {
		color: $icon;
	}
}

.ds-featureIcon {
	$self: &;

	@each $color-name, $color-map in $feature-icon-colors {
		&.-ds-#{$color-name} {
			@include setFeatureIconColor(
				$self,
				map-get($color-map, 'background'),
				map-get($color-map, 'icon')
			);
		}
		&.-ds-#{$color-name}.-ds-doubleBackground {
			@include setBorderColor(map-get($color-map, 'border'));
		}
	}

	border-radius: 100%;
	border-style: solid;
	border-width: $space-3xs;
	display: inline-flex;
	padding: $space-3xs;

	&.-ds-xSmall {
		border-width: $space-5xs;
		padding: $space-5xs;
	}

	&.-ds-small {
		border-width: $space-4xs;
		padding: $space-4xs;
	}

	&.-ds-large {
		border-width: $space-3xs;
		padding: $feature-icon-padding-large;
	}

	&.-ds-xLarge {
		border-width: $space-2xs;
		padding: $space-xs;
	}
}
</style>

<script lang="ts" setup>
import WnlIcon, { ICON_SIZES, IconItem, IconSize } from '../Icon';
import {
	FEATURE_ICON_COLOR,
	FEATURE_ICON_SIZES,
	FeatureIconColor,
	FeatureIconSize,
} from './FeatureIcon.consts';
import { computed } from 'vue';

const {
	icon,
	size = FEATURE_ICON_SIZES.MEDIUM,
	color,
	doubleBackground = false,
} = defineProps<{
	icon: IconItem;
	size?: FeatureIconSize;
	color: FeatureIconColor;
	doubleBackground?: boolean;
}>();

const iconSizeMap: Record<FeatureIconSize, IconSize> = {
	[FEATURE_ICON_SIZES.X_SMALL]: ICON_SIZES.XX_SMALL,
	[FEATURE_ICON_SIZES.SMALL]: ICON_SIZES.X_SMALL,
	[FEATURE_ICON_SIZES.MEDIUM]: ICON_SIZES.MEDIUM,
	[FEATURE_ICON_SIZES.LARGE]: ICON_SIZES.LARGE,
	[FEATURE_ICON_SIZES.X_LARGE]: ICON_SIZES.X_LARGE,
};

const iconSize = computed(() => {
	return iconSizeMap[size];
});
</script>
