<template>
	<div
		:class="[
			'ds-card',
			{
				'-ds-paddingLarge': paddingSize === CARD_PADDING_SIZES.LARGE,
				'-ds-leftBorder':
					hasBorder && !hasLoadingBar && borderPosition === CARD_BORDER_POSITIONS.LEFT,
				'-ds-flat': isFlat,
			},
		]"
	>
		<div v-if="hasBorder || hasLoadingBar" class="ds-card__border">
			<ds-container-ribbon
				v-if="hasBorder && !hasLoadingBar"
				:size="borderSize"
				:color="borderColor"
				:layout="ribbonLayout"
				:radius="ribbonRadius"
			/>
			<ds-loading-bar
				v-if="hasLoadingBar"
				:time="loadingBarTime"
				:color="loadingBarColor"
				:size="borderSize"
			/>
		</div>

		<div class="ds-card__slotsWrapper">
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
@import '../../../../styles/settings/colors/tokens';

.ds-card {
	$root: &;
	$card-border-radius: $radius-m;

	display: flex;
	flex-direction: column;
	position: relative;
	width: inherit;

	&:not(.-ds-flat) {
		background-color: $color-default-background;
		border-radius: $card-border-radius;
		box-shadow: $shadow-s;
	}

	&.-ds-leftBorder {
		flex-direction: row;
	}

	&__slotsWrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
		// prevents excessive width due to child elements
		min-width: 0;
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

	// the border container is added to avoid adding overflow hidden to the card itself
	// which would clip floating elements rendered within the card (e.g. dropdowns)
	&__border {
		display: flex;
		flex-shrink: 0;

		#{$root}:not(.-ds-flat) & {
			border-top-left-radius: $card-border-radius;
			border-top-right-radius: $card-border-radius;
			overflow: hidden;
		}

		#{$root}:not(.-ds-flat).-ds-leftBorder & {
			border-bottom-left-radius: $card-border-radius;
			border-top-left-radius: $card-border-radius;
			border-top-right-radius: 0;
		}

		.-ds-leftBorder & {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: $card-border-radius;
		}
	}
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';

import DsDivider from '../../Divider/Divider.vue';
import DsLoadingBar, { LOADING_BAR_COLORS, LoadingBarColors } from '../../LoadingBar';
import DsContainerRibbon from '../../ContainerRibbon/ContainerRibbon.vue';
import { CONTAINER_RIBBON_LAYOUTS, CONTAINER_RIBBON_RADIUSES } from '../../ContainerRibbon';
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
	hasRibbonRadius = false,
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
	hasRibbonRadius?: boolean;
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

const ribbonLayout = computed(() => {
	const layoutMap = {
		[CARD_BORDER_POSITIONS.TOP]: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
		[CARD_BORDER_POSITIONS.LEFT]: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	};
	return layoutMap[borderPosition] || CONTAINER_RIBBON_LAYOUTS.HORIZONTAL;
});

const ribbonRadius = computed(() => {
	const borderPositionToRibbonRadiusMap = {
		[CARD_BORDER_POSITIONS.TOP]: CONTAINER_RIBBON_RADIUSES.BOTTOM,
		[CARD_BORDER_POSITIONS.LEFT]: CONTAINER_RIBBON_RADIUSES.RIGHT,
	};
	return hasRibbonRadius && isFlat
		? borderPositionToRibbonRadiusMap[borderPosition]
		: CONTAINER_RIBBON_RADIUSES.NONE;
});
</script>
