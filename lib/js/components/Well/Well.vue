<template>
	<div
		class="ds-well"
		:class="[
			colorClass,
			{
				'-ds-medium': WELL_PADDINGS.MEDIUM === padding,
				'-ds-small': WELL_PADDINGS.SMALL === padding,
				'-ds-noRadius': !hasRadius,
				'-ds-hasBorder': hasBorder,
				'-ds-leftRibbon': hasRibbon && ribbonPosition === WELL_RIBBON_POSITIONS.LEFT,
			},
		]"
	>
		<div v-if="hasRibbon" class="ds-well__border">
			<ds-container-ribbon
				:size="ribbonSize"
				:color="ribbonColor"
				:layout="ribbonLayout"
				:radius="ribbonRadius"
			/>
		</div>

		<div v-if="$slots.accessory" class="ds-well__accessorySlot">
			<slot name="accessory" />
		</div>

		<div class="ds-well__content">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/borders';
@import '../../../styles/settings/colors/tokens';

.ds-well {
	$root: &;

	border-radius: $radius-m;
	display: flex;
	flex-direction: column;
	position: relative;

	&.-ds-noRadius {
		border-radius: 0;
	}

	&.-ds-leftRibbon {
		flex-direction: row;
	}

	&.-ds-hasBorder {
		border: $border-xs solid transparent;

		// when the well is square it spans edge-to-edge, so only top/bottom rules are drawn
		&.-ds-noRadius {
			border-left: 0;
			border-right: 0;
		}
	}

	&.-ds-accent {
		background-color: $color-accent-background;

		&.-ds-hasBorder {
			border-color: $color-accent-border-weak;
		}
	}
	&.-ds-primary {
		background-color: $color-primary-background;

		&.-ds-hasBorder {
			border-color: $color-primary-border-weak;
		}
	}
	&.-ds-fail {
		background-color: $color-fail-background;

		&.-ds-hasBorder {
			border-color: $color-fail-border-weak;
		}
	}
	&.-ds-info {
		background-color: $color-info-background;

		&.-ds-hasBorder {
			border-color: $color-info-border-weak;
		}
	}
	&.-ds-inverted {
		background-color: $color-default-background;

		&.-ds-hasBorder {
			border-color: $color-neutral-border-weak;
		}
	}
	&.-ds-neutral {
		background-color: $color-neutral-background;

		&.-ds-hasBorder {
			border-color: $color-neutral-border-weak;
		}
	}
	&.-ds-success {
		background-color: $color-success-background;

		&.-ds-hasBorder {
			border-color: $color-success-border-weak;
		}
	}
	&.-ds-warning {
		background-color: $color-warning-background;

		&.-ds-hasBorder {
			border-color: $color-warning-border-weak;
		}
	}

	// the border container is added to avoid adding overflow hidden to the well itself
	// which would clip the accessory slot rendered above its top edge
	&__border {
		border-top-left-radius: $radius-m;
		border-top-right-radius: $radius-m;
		display: flex;
		flex-shrink: 0;
		overflow: hidden;

		#{$root}.-ds-leftRibbon & {
			border-bottom-left-radius: $radius-m;
			border-top-left-radius: $radius-m;
			border-top-right-radius: 0;
		}

		#{$root}.-ds-noRadius & {
			border-radius: 0;
		}
	}

	&__content {
		flex: 1;
		// prevents excessive width due to child elements
		min-width: 0;
	}

	&__accessorySlot {
		display: flex;
		gap: $space-2;
		position: absolute;
		right: 0;
		top: -10px;
	}

	&.-ds-medium {
		#{$root}__content {
			padding: $space-8;
		}

		#{$root}__accessorySlot {
			right: $space-8;
		}
	}

	&.-ds-small {
		#{$root}__content {
			padding: $space-6;
		}

		#{$root}__accessorySlot {
			right: $space-6;
		}
	}
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';

import DsContainerRibbon from '../ContainerRibbon/ContainerRibbon.vue';
import { CONTAINER_RIBBON_LAYOUTS, CONTAINER_RIBBON_RADIUSES } from '../ContainerRibbon';
import {
	WELL_PADDINGS,
	WELL_COLORS,
	WELL_DEFAULT_COLOR,
	WELL_RIBBON_POSITIONS,
	WellPadding,
	WellColor,
	WellRibbonPosition,
	WellRibbonSize,
	WellRibbonColor,
	WELL_RIBBON_SIZES,
	WELL_RIBBON_COLORS,
} from './Well.consts';

const {
	padding = null,
	color = WELL_DEFAULT_COLOR,
	hasRadius = true,
	hasBorder = false,
	hasRibbon = false,
	ribbonPosition = WELL_RIBBON_POSITIONS.TOP,
	ribbonSize = WELL_RIBBON_SIZES.LARGE,
	ribbonColor = WELL_RIBBON_COLORS.NEUTRAL_HEAVY,
} = defineProps<{
	padding?: WellPadding | null;
	color?: WellColor;
	hasRadius?: boolean;
	hasBorder?: boolean;
	hasRibbon?: boolean;
	ribbonPosition?: WellRibbonPosition;
	ribbonSize?: WellRibbonSize;
	ribbonColor?: WellRibbonColor;
}>();

const colorClass = computed(() => {
	const colorMap: Record<WellColor, string> = {
		[WELL_COLORS.ACCENT]: '-ds-accent',
		[WELL_COLORS.PRIMARY]: '-ds-primary',
		[WELL_COLORS.FAIL]: '-ds-fail',
		[WELL_COLORS.INFO]: '-ds-info',
		[WELL_COLORS.INVERTED]: '-ds-inverted',
		[WELL_COLORS.NEUTRAL]: '-ds-neutral',
		[WELL_COLORS.SUCCESS]: '-ds-success',
		[WELL_COLORS.WARNING]: '-ds-warning',
	};
	return colorMap[color];
});

const ribbonLayout = computed(() => {
	const layoutMap = {
		[WELL_RIBBON_POSITIONS.TOP]: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
		[WELL_RIBBON_POSITIONS.LEFT]: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	};
	return layoutMap[ribbonPosition] || CONTAINER_RIBBON_LAYOUTS.HORIZONTAL;
});

const ribbonRadius = computed(() => {
	const ribbonPositionToRibbonRadiusMap = {
		[WELL_RIBBON_POSITIONS.TOP]: CONTAINER_RIBBON_RADIUSES.BOTTOM,
		[WELL_RIBBON_POSITIONS.LEFT]: CONTAINER_RIBBON_RADIUSES.RIGHT,
	};
	// when the well is rounded the outer corners are clipped by .ds-well__border,
	// so the ribbon only needs its own radius on the inner edge of a square well
	return hasRadius
		? CONTAINER_RIBBON_RADIUSES.NONE
		: ribbonPositionToRibbonRadiusMap[ribbonPosition];
});
</script>
