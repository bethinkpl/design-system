<template>
	<div
		:class="[
			'ds-card',
			{
				'-ds-paddingLarge': paddingSize === CARD_PADDING_SIZES.LARGE,
				'-ds-leftRibbon':
					hasRibbon && !hasLoadingBar && ribbonPosition === CARD_RIBBON_POSITIONS.LEFT,
				'-ds-flat': isFlat,
				'-ds-noRadius': !hasRadius,
				'-ds-backgroundNeutral': backgroundColor === CARD_BACKGROUND_COLORS.NEUTRAL,
			},
		]"
	>
		<div v-if="hasRibbon || hasLoadingBar" class="ds-card__ribbon">
			<ds-container-ribbon
				v-if="hasRibbon && !hasLoadingBar"
				:size="ribbonSize"
				:color="ribbonColor"
				:layout="ribbonLayout"
				:radius="ribbonRadius"
			/>
			<ds-loading-bar
				v-if="hasLoadingBar"
				:time="loadingBarTime"
				:color="loadingBarColor"
				:size="ribbonSize"
			/>
		</div>

		<div
			class="ds-card__slotsWrapper"
			:class="{ '-ds-containerIsScrollable': isContentScrollable }"
		>
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
			<div
				v-if="$slots.content"
				class="ds-card__content"
				:class="{
					'-ds-scrollable': isContentScrollable,
					'-ds-withPadding': contentHasPadding,
				}"
			>
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

		&.-ds-backgroundNeutral {
			background-color: $color-neutral-background;
		}

		&.-ds-noRadius {
			border-radius: 0;
		}
	}

	&.-ds-leftRibbon {
		flex-direction: row;
	}

	&__slotsWrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
		// prevents excessive width due to child elements
		min-width: 0;

		&.-ds-containerIsScrollable {
			overflow: hidden;
		}
	}

	&__header {
		&.-ds-withPadding {
			padding: $space-8;

			#{$root}.-ds-paddingLarge & {
				padding: $space-16 $space-16 $space-8;
			}
		}
	}

	&__headerDivider {
		&.-ds-withHorizontalMargin {
			margin: 0 $space-8;

			#{$root}.-ds-paddingLarge & {
				margin: 0 $space-16;
			}
		}
	}

	&__content {
		padding: $space-8 0;

		&.-ds-withPadding {
			padding: $space-8;

			#{$root}.-ds-paddingLarge & {
				padding: $space-8 $space-16;
			}
		}

		&.-ds-scrollable {
			max-height: 100%;
			overflow-y: auto;
		}
	}

	&__footer {
		&.-ds-withPadding {
			padding: 0 $space-8 $space-8;

			#{$root}.-ds-paddingLarge & {
				padding: 0 $space-16 $space-16;
			}
		}
	}

	// the ribbon container is added to avoid adding overflow hidden to the card itself
	// which would clip floating elements rendered within the card (e.g. dropdowns)
	&__ribbon {
		display: flex;
		flex-shrink: 0;

		#{$root}:not(.-ds-flat) & {
			border-top-left-radius: $card-border-radius;
			border-top-right-radius: $card-border-radius;
			overflow: hidden;
		}

		#{$root}:not(.-ds-flat).-ds-leftRibbon & {
			border-bottom-left-radius: $card-border-radius;
			border-top-left-radius: $card-border-radius;
			border-top-right-radius: 0;
		}

		#{$root}:not(.-ds-flat).-ds-noRadius & {
			border-radius: 0;
		}

		.-ds-leftRibbon & {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
		}
	}
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';

import { RemovedProp } from '../../../utils/type.utils';
import DsDivider from '../../Divider/Divider.vue';
import DsLoadingBar, { LOADING_BAR_COLORS, LoadingBarColors } from '../../LoadingBar';
import DsContainerRibbon from '../../ContainerRibbon/ContainerRibbon.vue';
import { CONTAINER_RIBBON_LAYOUTS, CONTAINER_RIBBON_RADIUSES } from '../../ContainerRibbon';
import {
	CARD_BACKGROUND_COLORS,
	CARD_RIBBON_COLORS,
	CARD_RIBBON_POSITIONS,
	CARD_RIBBON_SIZES,
	CARD_PADDING_SIZES,
	CardBackgroundColor,
	CardRibbonColors,
	CardRibbonPositions,
	CardRibbonSizes,
	CardPaddingSize,
} from './Card.consts';

const {
	// only contentHasPadding is true by default for backward compatibility
	contentHasPadding = true,
	headerHasPadding = false,
	footerHasPadding = false,
	paddingSize = CARD_PADDING_SIZES.SMALL,
	dividerUnderHeader = false,
	hasRibbon = false,
	hasRadius = true,
	backgroundColor = CARD_BACKGROUND_COLORS.DEFAULT,
	ribbonPosition = CARD_RIBBON_POSITIONS.TOP,
	ribbonSize = CARD_RIBBON_SIZES.LARGE,
	ribbonColor = CARD_RIBBON_COLORS.NEUTRAL_HEAVY,
	hasRibbonRadius = false,
	hasLoadingBar = false,
	loadingBarColor = LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	loadingBarTime = '0',
	isFlat = false,
	isContentScrollable = false,
} = defineProps<{
	contentHasPadding?: boolean;
	headerHasPadding?: boolean;
	footerHasPadding?: boolean;
	paddingSize?: CardPaddingSize;
	dividerUnderHeader?: boolean;
	hasRibbon?: boolean;
	hasRadius?: boolean;
	backgroundColor?: CardBackgroundColor;
	ribbonPosition?: CardRibbonPositions;
	ribbonSize?: CardRibbonSizes;
	ribbonColor?: CardRibbonColors;
	hasRibbonRadius?: boolean;
	hasLoadingBar?: boolean;
	loadingBarColor?: LoadingBarColors;
	loadingBarTime?: string;
	isFlat?: boolean;
	isContentScrollable?: boolean;

	// Renamed props kept as removal markers so existing usages fail type-checking.
	/** @deprecated renamed to `hasRibbon` */
	hasBorder?: RemovedProp<'renamed to hasRibbon'>;
	/** @deprecated renamed to `ribbonPosition` */
	borderPosition?: RemovedProp<'renamed to ribbonPosition'>;
	/** @deprecated renamed to `ribbonSize` */
	borderSize?: RemovedProp<'renamed to ribbonSize'>;
	/** @deprecated renamed to `ribbonColor` */
	borderColor?: RemovedProp<'renamed to ribbonColor'>;
}>();

defineSlots<{
	header?: () => any;
	content?: () => any;
	footer?: () => any;
}>();

const ribbonLayout = computed(() => {
	const layoutMap = {
		[CARD_RIBBON_POSITIONS.TOP]: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
		[CARD_RIBBON_POSITIONS.LEFT]: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	};
	return layoutMap[ribbonPosition] || CONTAINER_RIBBON_LAYOUTS.HORIZONTAL;
});

const ribbonRadius = computed(() => {
	const ribbonPositionToRibbonRadiusMap = {
		[CARD_RIBBON_POSITIONS.TOP]: CONTAINER_RIBBON_RADIUSES.BOTTOM,
		[CARD_RIBBON_POSITIONS.LEFT]: CONTAINER_RIBBON_RADIUSES.RIGHT,
	};
	return hasRibbonRadius && (isFlat || !hasRadius)
		? ribbonPositionToRibbonRadiusMap[ribbonPosition]
		: CONTAINER_RIBBON_RADIUSES.NONE;
});
</script>
