<template>
	<div
		class="featureIcon"
		:class="{
			'-doubleBackground': doubleBackground,
			'-danger': color === FEATURE_ICON_COLOR.DANGER,
			'-info': color === FEATURE_ICON_COLOR.INFO,
			'-neutral': color === FEATURE_ICON_COLOR.NEUTRAL,
			'-neutralWeak': color === FEATURE_ICON_COLOR.NEUTRAL_WEAK,
			'-primary': color === FEATURE_ICON_COLOR.PRIMARY,
			'-success': color === FEATURE_ICON_COLOR.SUCCESS,
			'-warning': color === FEATURE_ICON_COLOR.WARNING,
			'-small': size === FEATURE_ICON_SIZES.SMALL,
			'-medium': size === FEATURE_ICON_SIZES.MEDIUM,
			'-large': size === FEATURE_ICON_SIZES.LARGE,
			'-xLarge': size === FEATURE_ICON_SIZES.X_LARGE,
		}"
	>
		<span v-if="doubleBackground" class="featureIcon__doubleBackground"></span>
		<wnl-icon class="featureIcon__icon" :icon="icon" :size="iconSize" />
	</div>
</template>

<style lang="scss">
@import '../../../../styles/components/icons';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';

$feature-icon-colors: (
	'neutral': (
		'background': $color-neutral-background,
		'secondBackground': $color-neutral-background-medium,
		'icon': $color-neutral-icon,
	),
	'neutralWeak': (
		'background': $color-neutral-background,
		'secondBackground': $color-neutral-background-medium,
		'icon': $color-neutral-icon-weak,
	),
	'primary': (
		'background': $color-primary-background,
		'secondBackground': $color-primary-background-medium,
		'icon': $color-primary-icon,
	),
	'success': (
		'background': $color-success-background,
		'secondBackground': $color-success-background-medium,
		'icon': $color-success-icon,
	),
	'danger': (
		'background': $color-danger-background,
		'secondBackground': $color-danger-background-medium,
		'icon': $color-danger-icon,
	),
	'warning': (
		'background': $color-warning-background,
		'secondBackground': $color-warning-background-medium,
		'icon': $color-warning-icon,
	),
	'info': (
		'background': $color-info-background,
		'secondBackground': $color-info-background-medium,
		'icon': $color-info-icon,
	),
);

$feature-icon-xl-size: 88px;
$feature-icon-xl-second-background-size: 72px;
$feature-icon-l-size: 64px;
$feature-icon-l-second-background-size: 52px;
$feature-icon-m-size: 48px;
$feature-icon-m-second-background-size: 36px;
$feature-icon-s-size: 32px;
$feature-icon-s-second-background-size: 24px;

@mixin setSecondBackgroundColor($self, $background, $doubleBackground) {
	background-color: $background;

	#{$self}__doubleBackground {
		background-color: $doubleBackground;
	}
}

@mixin setFeatureIconColor($self, $background, $icon) {
	background-color: $background;

	#{$self}__icon {
		color: $icon;
	}
}

.featureIcon {
	$self: &;

	@each $color-name, $color-map in $feature-icon-colors {
		&.-#{$color-name} {
			@include setFeatureIconColor(
				$self,
				map-get($color-map, 'secondBackground'),
				map-get($color-map, 'icon')
			);
		}
		&.-#{$color-name}.-doubleBackground {
			@include setSecondBackgroundColor(
				$self,
				map-get($color-map, 'background'),
				map-get($color-map, 'secondBackground')
			);
		}
	}

	position: relative;
	align-items: center;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	width: $feature-icon-m-size;
	height: $feature-icon-m-size;

	&__doubleBackground {
		display: block;
		width: $feature-icon-m-second-background-size;
		height: $feature-icon-m-second-background-size;
		position: absolute;
		border-radius: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	&__icon {
		position: relative;
	}

	&.-small {
		width: $feature-icon-s-size;
		height: $feature-icon-s-size;
		#{$self}__doubleBackground {
			width: $feature-icon-s-second-background-size;
			height: $feature-icon-s-second-background-size;
		}
	}

	&.-large {
		width: $feature-icon-l-size;
		height: $feature-icon-l-size;
		#{$self}__doubleBackground {
			width: $feature-icon-l-second-background-size;
			height: $feature-icon-l-second-background-size;
		}
	}

	&.-xLarge {
		width: $feature-icon-xl-size;
		height: $feature-icon-xl-size;
		#{$self}__doubleBackground {
			width: $feature-icon-xl-second-background-size;
			height: $feature-icon-xl-second-background-size;
		}
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';
import WnlIcon, { ICONS, ICON_SIZES } from '../Icon';
import { FEATURE_ICON_SIZES, FEATURE_ICON_COLOR } from './FeatureIcon.consts';

export default {
	name: 'FeatureIcon',
	components: {
		WnlIcon,
	},
	props: {
		icon: {
			type: Object,
			default: null,
			validator(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		size: {
			type: String,
			default: FEATURE_ICON_SIZES.MEDIUM,
			validator: (value: string) => Object.values(FEATURE_ICON_SIZES).includes(value),
		},
		color: {
			type: String,
			required: true,
			validator(color: string) {
				return Object.values(FEATURE_ICON_COLOR).includes(color);
			},
		},
		doubleBackground: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			FEATURE_ICON_COLOR: Object.freeze(FEATURE_ICON_COLOR),
			FEATURE_ICON_SIZES: Object.freeze(FEATURE_ICON_SIZES),
		};
	},
	computed: {
		iconSize(): string {
			if (this.size === FEATURE_ICON_SIZES.SMALL) {
				return ICON_SIZES.X_SMALL;
			}

			if (this.size === FEATURE_ICON_SIZES.LARGE) {
				return ICON_SIZES.LARGE;
			}

			if (this.size === FEATURE_ICON_SIZES.X_LARGE) {
				return ICON_SIZES.X_LARGE;
			}

			return ICON_SIZES.MEDIUM;
		},
	},
};
</script>
