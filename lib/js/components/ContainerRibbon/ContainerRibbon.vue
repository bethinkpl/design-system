<template>
	<div
		class="ds-container-ribbon"
		:class="{
			'-ds-size-small': size === CONTAINER_RIBBON_SIZES.SMALL,
			'-ds-size-medium': size === CONTAINER_RIBBON_SIZES.MEDIUM,
			'-ds-size-large': size === CONTAINER_RIBBON_SIZES.LARGE,
			'-ds-color-neutral': color === CONTAINER_RIBBON_COLORS.NEUTRAL,
			'-ds-color-neutral-heavy': color === CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
			'-ds-color-neutral-strong': color === CONTAINER_RIBBON_COLORS.NEUTRAL_STRONG,
			'-ds-color-primary': color === CONTAINER_RIBBON_COLORS.PRIMARY,
			'-ds-color-success': color === CONTAINER_RIBBON_COLORS.SUCCESS,
			'-ds-color-warning': color === CONTAINER_RIBBON_COLORS.WARNING,
			'-ds-color-danger': color === CONTAINER_RIBBON_COLORS.DANGER,
			'-ds-color-fail': color === CONTAINER_RIBBON_COLORS.FAIL,
			'-ds-color-info': color === CONTAINER_RIBBON_COLORS.INFO,
			'-ds-color-transparent': color === CONTAINER_RIBBON_COLORS.TRANSPARENT,
			'-ds-layout-vertical': layout === CONTAINER_RIBBON_LAYOUTS.VERTICAL,
			'-ds-layout-horizontal': layout === CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
			'-ds-radius-right': radius === CONTAINER_RIBBON_RADIUSES.RIGHT,
			'-ds-radius-bottom': radius === CONTAINER_RIBBON_RADIUSES.BOTTOM,
		}"
	/>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/borders';

.ds-container-ribbon {
	$root: &;

	display: flex;

	&.-ds-layout-horizontal {
		width: 100%;
	}

	// Size variants
	&.-ds-size-small {
		&.-ds-layout-vertical {
			width: $border-s;
		}

		&.-ds-layout-horizontal {
			height: $border-s;
		}
	}

	&.-ds-size-medium {
		&.-ds-layout-vertical {
			width: $border-m;
		}

		&.-ds-layout-horizontal {
			height: $border-m;
		}
	}

	&.-ds-size-large {
		&.-ds-layout-vertical {
			width: $border-l;
		}

		&.-ds-layout-horizontal {
			height: $border-l;
		}
	}

	// Color variants
	&.-ds-color-neutral {
		background-color: $color-neutral-border;
	}

	&.-ds-color-neutral-heavy {
		background-color: $color-neutral-border-heavy;
	}

	&.-ds-color-neutral-strong {
		background-color: $color-neutral-border-strong;
	}

	&.-ds-color-primary {
		background-color: $color-primary-border;
	}

	&.-ds-color-success {
		background-color: $color-success-border;
	}

	&.-ds-color-warning {
		background-color: $color-warning-border;
	}

	&.-ds-color-danger {
		background-color: $color-danger-border;
	}

	&.-ds-color-fail {
		background-color: $color-fail-border;
	}

	&.-ds-color-info {
		background-color: $color-info-border;
	}

	&.-ds-color-transparent {
		background-color: transparent;
	}

	&.-ds-radius-right {
		border-bottom-right-radius: $radius-m;
		border-top-right-radius: $radius-m;
	}

	&.-ds-radius-bottom {
		border-bottom-left-radius: $radius-m;
		border-bottom-right-radius: $radius-m;
	}
}
</style>

<script setup lang="ts">
import {
	CONTAINER_RIBBON_SIZES,
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_RADIUSES,
	type ContainerRibbonSize,
	type ContainerRibbonColor,
	type ContainerRibbonLayout,
	type ContainerRibbonRadius,
} from './ContainerRibbon.consts';

const {
	size = CONTAINER_RIBBON_SIZES.LARGE,
	color = CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
	radius = CONTAINER_RIBBON_RADIUSES.NONE,
	layout = CONTAINER_RIBBON_LAYOUTS.VERTICAL,
} = defineProps<{
	size?: ContainerRibbonSize;
	color?: ContainerRibbonColor;
	layout?: ContainerRibbonLayout;
	radius?: ContainerRibbonRadius;
}>();
</script>
