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
		<slot>
			<div v-if="!icon" class="ds-badge__content">
				<span v-if="!!label">{{ label }}</span>
			</div>
			<icon v-if="!!icon" :icon="ICONS[icon]" :size="iconSize" class="ds-badge__icon" />
		</slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';

$badge-size-xl: 30px;
$badge-size-l: 24px;
$badge-size-m: 18px;
$badge-size-s: 12px;
$badge-size-xs: 10px;

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

.ds-badge {
	$root: &;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: $radius-xl;
	background-color: $color-default-background;

	&__content {
		border-radius: $radius-xl;
		color: $color-inverted-text;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&.-ds-x-small {
		height: $badge-size-xs;
		width: $badge-size-xs;

		& #{$root}__content {
			width: $badge-content-size-xs;
			height: $badge-content-size-xs;
		}
	}

	&.-ds-small {
		height: $badge-size-s;
		width: $badge-size-s;

		& #{$root}__content {
			width: $badge-content-size-s;
			height: $badge-content-size-s;
		}
	}

	&.-ds-medium {
		height: $badge-size-m;
		width: $badge-size-m;

		& #{$root}__content {
			@include label-xs-default-bold;

			width: $badge-content-size-m;
			height: $badge-content-size-m;
		}
	}

	&.-ds-large {
		height: $badge-size-l;
		width: $badge-size-l;

		& #{$root}__content {
			@include label-xs-default-bold;

			width: $badge-content-size-l;
			height: $badge-content-size-l;
		}
	}

	&.-ds-x-large {
		height: $badge-size-xl;
		width: $badge-size-xl;

		& #{$root}__content {
			@include label-s-default-bold;

			width: $badge-content-size-xl;
			height: $badge-content-size-xl;
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

:deep(.ds-badge__accessory) {
	width: $badge-content-size-xl;
	height: $badge-content-size-xl;
}
</style>

<script lang="ts" setup>
import { BADGE_COLORS, BADGE_SIZES, BadgeColor, BadgeSize } from './Badge.consts';
import Icon, { ICON_SIZES, IconKey, ICONS } from '../Icons/Icon';
import { computed } from 'vue';

const { size } = defineProps<{
	label?: string;
	color?: BadgeColor;
	size?: BadgeSize;
	icon?: IconKey;
}>();

const iconSize = computed(() => {
	switch (size) {
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

const className = 'ds-badge__accessory';
</script>
