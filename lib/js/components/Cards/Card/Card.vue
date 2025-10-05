<template>
	<div
		:class="[
			'ds-card',
			{
				'-ds-paddingLarge': paddingSize === CARD_PADDING_SIZES.LARGE,
				'-ds-flat': isFlat,
				'-ds-with-ribbon': hasBorder && !hasLoadingBar,
			},
		]"
		:data-ribbon-layout="hasBorder && !hasLoadingBar ? ribbonLayout : undefined"
	>
		<!-- Container Ribbon for borders -->
		<ds-container-ribbon
			v-if="hasBorder && !hasLoadingBar"
			class="ds-card__ribbon"
			:size="ribbonSize"
			:color="ribbonColor"
			:layout="ribbonLayout"
		/>
		
		<!-- Loading Bar (replaces top border when active) -->
		<ds-loading-bar
			v-if="hasLoadingBar"
			class="ds-card__loadingBar"
			:time="loadingBarTime"
			:color="loadingBarColor"
			:size="borderSize"
		/>
		
		<div class="ds-card__body">
			<div
				v-if="$slots.header"
				class="ds-card__header"
				:class="{ '-ds-withPadding': headerHasPadding }"
			>
				<slot name="header" />
			</div>
			<ds-divider
				v-if="$slots.header && $slots.content && dividerUnderHeader"
				class="ds-card__headerDivider"
				:class="{ '-ds-withHorizontalMargin': headerHasPadding }"
			/>
			<div v-if="$slots.content" class="ds-card__content">
				<slot name="content" />
			</div>
			<div
				v-if="$slots.footer"
				class="ds-card__footer"
				:class="{ '-ds-withPadding': footerHasPadding }"
			>
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/colors/tokens';

.ds-card {
	$root: &;

	position: relative;
	width: inherit;

	&:not(.-ds-flat) {
		background-color: $color-default-background;
		border-radius: $radius-m;
		box-shadow: $shadow-s;
		overflow: hidden; // Ensures ribbon doesn't extend outside border radius
	}

	// Default layout for cards without ribbons
	&:not(.-ds-with-ribbon) {
		display: block;
	}

	// Flex layout for cards with ribbons
	&.-ds-with-ribbon {
		display: flex;
		
		// Vertical ribbon (left side) - row layout
		&[data-ribbon-layout="vertical"] {
			flex-direction: row;
			align-items: stretch; // Ensures all flex items stretch to container height
		}
		
		// Horizontal ribbon (top side) - column layout  
		&[data-ribbon-layout="horizontal"] {
			flex-direction: column;
		}
	}

	&__ribbon {
		flex-shrink: 0;
	}

	&__body {
		flex: 1;
		min-width: 0; // Prevents flex item from overflowing
	}

	&__loadingBar {
		overflow: hidden;
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 1;

		// Border radius adjustments for different sizes
		#{$root}:not(.-ds-flat) & {
			border-radius: $radius-m $radius-m 0 0;
		}

		// Adjust top position based on loading bar size
		&[data-size="small"] {
			#{$root}:not(.-ds-flat) & {
				border-radius: $radius-xs $radius-xs 0 0;
			}
		}

		&[data-size="medium"] {
			#{$root}:not(.-ds-flat) & {
				border-radius: $radius-s $radius-s 0 0;
			}
		}

		&[data-size="large"] {
			#{$root}:not(.-ds-flat) & {
				border-radius: $radius-m $radius-m 0 0;
			}
		}
	}

	&__header {
		&.-ds-withPadding {
			padding: $space-s;

			#{$root}.-ds-paddingLarge & {
				padding: $space-l $space-l $space-s;
			}
		}
	}

	&__headerDivider {
		&.-ds-withHorizontalMargin {
			margin: 0 $space-s;

			#{$root}.-ds-paddingLarge & {
				margin: 0 $space-l;
			}
		}
	}

	&__content {
		padding: $space-s;

		#{$root}.-ds-paddingLarge & {
			padding: $space-s $space-l;
		}
	}

	&__footer {
		&.-ds-withPadding {
			padding: 0 $space-s $space-s;

			#{$root}.-ds-paddingLarge & {
				padding: 0 $space-l $space-l;
			}
		}
	}
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';

import DsDivider from '../../Divider/Divider.vue';
import DsLoadingBar, { LOADING_BAR_COLORS, LoadingBarColors } from '../../LoadingBar';
import DsContainerRibbon from '../../ContainerRibbon/ContainerRibbon.vue';
import {
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_SIZES,
	type ContainerRibbonColor,
	type ContainerRibbonSize,
	type ContainerRibbonLayout,
} from '../../ContainerRibbon/ContainerRibbon.consts';
import {
	CARD_BORDER_COLORS,
	CARD_BORDER_POSITIONS,
	CARD_BORDER_SIZES,
	CARD_PADDING_SIZES,
	CardBorderColors,
	CardBorderPositions,
	CardBorderSizes,
	CardPaddingSize,
} from './Card.consts';

const {
	headerHasPadding = false,
	footerHasPadding = false,
	paddingSize = CARD_PADDING_SIZES.SMALL,
	dividerUnderHeader = false,
	hasBorder = false,
	borderPosition = CARD_BORDER_POSITIONS.TOP,
	borderSize = CARD_BORDER_SIZES.LARGE,
	borderColor = CARD_BORDER_COLORS.NEUTRAL_HEAVY,
	hasLoadingBar = false,
	loadingBarColor = LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	loadingBarTime = '0',
	isFlat = false,
} = defineProps<{
	headerHasPadding?: boolean;
	footerHasPadding?: boolean;
	paddingSize?: CardPaddingSize;
	dividerUnderHeader?: boolean;
	hasBorder?: boolean;
	borderPosition?: CardBorderPositions;
	borderSize?: CardBorderSizes;
	borderColor?: CardBorderColors;
	hasLoadingBar?: boolean;
	loadingBarColor?: LoadingBarColors;
	loadingBarTime?: string;
	isFlat?: boolean;
}>();

defineSlots<{
	header?: () => any;
	content?: () => any;
	footer?: () => any;
}>();

// Convert Card border position to ContainerRibbon layout
const ribbonLayout = computed((): ContainerRibbonLayout => {
	return borderPosition === CARD_BORDER_POSITIONS.LEFT ? 'vertical' : 'horizontal';
});

// Convert Card border size to ContainerRibbon size
const ribbonSize = computed((): ContainerRibbonSize => {
	const sizeMap: Record<CardBorderSizes, ContainerRibbonSize> = {
		[CARD_BORDER_SIZES.SMALL]: CONTAINER_RIBBON_SIZES.SMALL,
		[CARD_BORDER_SIZES.MEDIUM]: CONTAINER_RIBBON_SIZES.MEDIUM,
		[CARD_BORDER_SIZES.LARGE]: CONTAINER_RIBBON_SIZES.LARGE,
	};
	return sizeMap[borderSize];
});

// Convert Card border color to ContainerRibbon color
const ribbonColor = computed((): ContainerRibbonColor => {
	const colorMap: Record<CardBorderColors, ContainerRibbonColor> = {
		[CARD_BORDER_COLORS.NEUTRAL_HEAVY]: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		[CARD_BORDER_COLORS.NEUTRAL_STRONG]: CONTAINER_RIBBON_COLORS.NEUTRAL_STRONG,
		[CARD_BORDER_COLORS.PRIMARY]: CONTAINER_RIBBON_COLORS.PRIMARY,
		[CARD_BORDER_COLORS.SUCCESS]: CONTAINER_RIBBON_COLORS.SUCCESS,
		[CARD_BORDER_COLORS.WARNING]: CONTAINER_RIBBON_COLORS.WARNING,
		[CARD_BORDER_COLORS.DANGER]: CONTAINER_RIBBON_COLORS.DANGER,
		[CARD_BORDER_COLORS.FAIL]: CONTAINER_RIBBON_COLORS.FAIL,
		[CARD_BORDER_COLORS.INFO]: CONTAINER_RIBBON_COLORS.INFO,
		[CARD_BORDER_COLORS.TRANSPARENT]: CONTAINER_RIBBON_COLORS.TRANSPARENT,
	};
	return colorMap[borderColor];
});
</script>
