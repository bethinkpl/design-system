<template>
	<div
		class="ds-badge"
		:class="{
			'-ds-x-small': size === BADGE_SIZES.X_SMALL,
			'-ds-small': size === BADGE_SIZES.SMALL,
			'-ds-medium': size === BADGE_SIZES.MEDIUM,
			'-ds-large': size === BADGE_SIZES.LARGE,
			'-ds-x-large': size === BADGE_SIZES.X_LARGE,
			'-ds-color-primary': color === BADGE_COLORS.PRIMARY,
			'-ds-color-success': color === BADGE_COLORS.SUCCESS,
			'-ds-color-fail': color === BADGE_COLORS.FAIL,
			'-ds-color-danger': color === BADGE_COLORS.DANGER,
			'-ds-color-neutral': color === BADGE_COLORS.NEUTRAL,
		}"
	>
		<div
			:class="[
				'ds-badge__elevation',
				{
					'-no-elevation': !elevation,
					'-elevation-s': elevation === BADGE_ELEVATION_SIZES.SMALL,
				},
			]"
		>
		</div>
		<div v-if="!imageUrl && !icon" class="ds-badge__content">
			{{ label }}
		</div>
		<icon
			v-if="!imageUrl && icon"
			:icon="ICONS[icon]"
			:size="iconSize"
			class="ds-badge__icon"
		/>
		<img v-if="imageUrl" :src="imageUrl" class="ds-badge__image" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';

$badge-elevation-size-xl: 30px;
$badge-elevation-size-l: 24px;
$badge-elevation-size-m: 18px;
$badge-elevation-size-s: 12px;
$badge-elevation-size-xs: 10px;

$badge-content-size-xl: 20px;
$badge-content-size-l: 16px;
$badge-content-size-m: 12px;
$badge-content-size-s: 8px;
$badge-content-size-xs: 6px;

$badge-color-primary: $color-primary-background-strong;
$badge-color-success: $color-success-background-strong;
$badge-color-fail: $color-fail-background-strong;
$badge-color-danger: $color-danger-background-strong;
$badge-color-neutral: $color-neutral-background-heavy;

$elevation-gap-xl: ($badge-elevation-size-xl - $badge-content-size-xl) / 2;
$elevation-gap-l: ($badge-elevation-size-l - $badge-content-size-l) / 2;
$elevation-gap-m: ($badge-elevation-size-m - $badge-content-size-m) / 2;
$elevation-gap-s: ($badge-elevation-size-s - $badge-content-size-s) / 2;
$elevation-gap-xs: ($badge-elevation-size-xs - $badge-content-size-xs) / 2;

.ds-badge {
	$root: &;

	position: relative;
	display: inline-flex;
	justify-content: center;

	&__elevation {
		border-radius: $radius-xl;
		background-color: $color-default-background;
		position: absolute;
		align-items: center;
		display: flex;
		justify-content: center;

		&.-no-elevation {
			background-color: transparent;
		}

		&.-elevation-s {
			box-shadow: $shadow-s;
		}
	}

	&__content {
		align-items: center;
		border-radius: $radius-xl;
		color: $color-inverted-text;
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	&__icon {
		position: relative;
	}

	&__image {
		position: relative;
	}

	&.-ds-x-small {
		height: $badge-content-size-xs;
		min-width: $badge-content-size-xs;

		& #{$root}__elevation {
			height: $badge-elevation-size-xs;
			width: calc(100% + 2 * $elevation-gap-xs);
			top: -$elevation-gap-xs;
			left: -$elevation-gap-xs;
			padding: $elevation-gap-xs;
		}

		& #{$root}__image {
			max-width: $badge-content-size-xs;
		}
	}

	&.-ds-small {
		height: $badge-content-size-s;
		min-width: $badge-content-size-s;

		& #{$root}__elevation {
			height: $badge-elevation-size-s;
			width: calc(100% + 2 * $elevation-gap-s);
			top: -$elevation-gap-s;
			left: -$elevation-gap-s;
			padding: $elevation-gap-s;
		}

		& #{$root}__image {
			max-width: $badge-content-size-s;
		}
	}

	&.-ds-medium {
		height: $badge-content-size-m;
		min-width: $badge-content-size-m;

		& #{$root}__elevation {
			height: $badge-elevation-size-m;
			width: calc(100% + 2 * $elevation-gap-m);
			top: -$elevation-gap-m;
			left: -$elevation-gap-m;
			padding: $elevation-gap-m;
		}

		& #{$root}__content {
			@include label-xs-default-bold;

			padding: 0 $space-5xs;
		}

		& #{$root}__image {
			max-width: $badge-content-size-m;
		}
	}

	&.-ds-large {
		height: $badge-content-size-l;
		min-width: $badge-content-size-l;

		& #{$root}__elevation {
			height: $badge-elevation-size-l;
			width: calc(100% + 2 * $elevation-gap-l);
			top: -$elevation-gap-l;
			left: -$elevation-gap-l;
			padding: $elevation-gap-l;
		}

		& #{$root}__content {
			@include label-xs-default-bold;

			padding: 0 $space-4xs;
		}

		& #{$root}__image {
			max-width: $badge-content-size-l;
		}
	}

	&.-ds-x-large {
		height: $badge-content-size-xl;
		min-width: $badge-content-size-xl;

		& #{$root}__elevation {
			height: $badge-elevation-size-xl;
			width: calc(100% + 2 * $elevation-gap-xl);
			top: -$elevation-gap-xl;
			left: -$elevation-gap-xl;
			padding: $elevation-gap-xl;
		}

		& #{$root}__content {
			@include label-s-default-bold;

			padding: 0 $space-4xs;
		}

		& #{$root}__image {
			max-width: $badge-content-size-xl;
		}
	}

	&.-ds-color-primary {
		& #{$root}__content {
			background-color: $badge-color-primary;
		}

		& #{$root}__icon {
			color: $badge-color-primary;
		}
	}

	&.-ds-color-success {
		& #{$root}__content {
			background-color: $badge-color-success;
		}

		& #{$root}__icon {
			color: $badge-color-success;
		}
	}

	&.-ds-color-fail {
		& #{$root}__content {
			background-color: $badge-color-fail;
		}

		& #{$root}__icon {
			color: $badge-color-fail;
		}
	}

	&.-ds-color-danger {
		& #{$root}__content {
			background-color: $badge-color-danger;
		}

		& #{$root}__icon {
			color: $badge-color-danger;
		}
	}

	&.-ds-color-neutral {
		& #{$root}__content {
			background-color: $badge-color-neutral;
		}

		& #{$root}__icon {
			color: $badge-color-neutral;
		}
	}
}
</style>

<script lang="ts" setup>
import {
	BADGE_COLORS,
	BADGE_SIZES,
	BADGE_ELEVATION_SIZES,
	BadgeColor,
	BadgeElevationSize,
	BadgeSize,
} from './Badge.consts';
import Icon, { ICON_SIZES, IconKey, ICONS } from '../Icons/Icon';
import { computed } from 'vue';

const {
	size = BADGE_SIZES.SMALL,
	color = BADGE_COLORS.PRIMARY,
	elevation = BADGE_ELEVATION_SIZES.X_SMALL,
} = defineProps<{
	color?: BadgeColor;
	size?: BadgeSize;
	label?: string;
	icon?: IconKey;
	imageUrl?: string;
	elevation?: BadgeElevationSize;
}>();

const iconSize = computed(() => {
	// Casting to BadgeSize to work around an IDE issue (PhpStorm incorrectly flags some case branches as unreachable)
	switch (size as BadgeSize) {
		case BADGE_SIZES.SMALL:
			return ICON_SIZES.XXX_SMALL;
		case BADGE_SIZES.MEDIUM:
			return ICON_SIZES.XX_SMALL;
		case BADGE_SIZES.LARGE:
			return ICON_SIZES.X_SMALL;
		case BADGE_SIZES.X_LARGE:
		default:
			return ICON_SIZES.SMALL;
	}
});
</script>
