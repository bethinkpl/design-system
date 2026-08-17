<template>
	<div
		:class="[
			'ds-card',
			{
				'-ds-paddingMedium': paddingSize === CARD_PADDING_SIZES.MEDIUM,
				'-ds-paddingLarge': paddingSize === CARD_PADDING_SIZES.LARGE,
				'-ds-leftRibbon':
					hasRibbon && !hasLoadingBar && ribbonPosition === CARD_RIBBON_POSITIONS.LEFT,
				'-ds-elevationTop': effectiveElevation === CARD_ELEVATIONS.TOP,
				'-ds-elevationNone': effectiveElevation === CARD_ELEVATIONS.NONE,
				'-ds-radiusTop': effectiveRadius === CARD_RADIUSES.TOP,
				'-ds-radiusNone': effectiveRadius === CARD_RADIUSES.NONE,
				'-ds-backgroundNeutral':
					effectiveBackgroundColor === CARD_BACKGROUND_COLORS.NEUTRAL,
				'-ds-backgroundNone': effectiveBackgroundColor === CARD_BACKGROUND_COLORS.NONE,
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

		<div v-if="$slots.experimentalContent" class="ds-card__experimentalContent">
			<slot name="experimentalContent" />
		</div>

		<div
			v-else
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

	background-color: $color-default-background;
	border-radius: $card-border-radius;
	box-shadow: $shadow-s;
	display: flex;
	flex-direction: column;
	position: relative;
	width: inherit;

	&.-ds-backgroundNeutral {
		background-color: $color-neutral-background;
	}

	&.-ds-backgroundNone {
		background-color: transparent;
	}

	&.-ds-elevationTop {
		box-shadow: $shadow-top-s;
	}

	&.-ds-elevationNone {
		box-shadow: none;
	}

	&.-ds-radiusTop {
		border-radius: $card-border-radius $card-border-radius 0 0;
	}

	&.-ds-radiusNone {
		border-radius: 0;
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

	&__experimentalContent {
		display: flex;
		flex: 1;
		flex-direction: column;
		// prevents excessive width due to child elements
		min-width: 0;
	}

	&__header {
		&.-ds-withPadding {
			padding: $space-8;

			#{$root}.-ds-paddingMedium & {
				padding: $space-12 $space-12 $space-8;
			}

			#{$root}.-ds-paddingLarge & {
				padding: $space-16 $space-16 $space-8;
			}
		}
	}

	&__headerDivider {
		&.-ds-withHorizontalMargin {
			margin: 0 $space-8;

			#{$root}.-ds-paddingMedium & {
				margin: 0 $space-12;
			}

			#{$root}.-ds-paddingLarge & {
				margin: 0 $space-16;
			}
		}
	}

	&__content {
		padding: $space-8 0;

		&.-ds-withPadding {
			padding: $space-8;

			#{$root}.-ds-paddingMedium & {
				padding: $space-8 $space-12;
			}

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

			#{$root}.-ds-paddingMedium & {
				padding: 0 $space-12 $space-12;
			}

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

		#{$root}:not(.-ds-radiusNone) & {
			border-top-left-radius: $card-border-radius;
			border-top-right-radius: $card-border-radius;
			overflow: hidden;
		}

		#{$root}:not(.-ds-radiusNone).-ds-leftRibbon & {
			border-top-left-radius: $card-border-radius;
			border-top-right-radius: 0;
		}

		// a left ribbon spans the full height of the card, so its bottom corner is
		// only rounded when the card itself is rounded at the bottom
		#{$root}:not(.-ds-radiusNone):not(.-ds-radiusTop).-ds-leftRibbon & {
			border-bottom-left-radius: $card-border-radius;
		}

		.-ds-leftRibbon & {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			// keeps the ribbon above content elements with `position: relative` and no z-index.
			// the default leaves room for content to layer within itself (1-9); override via
			// `--ds-card-ribbon-z-index` when content needs a higher stacking order.
			z-index: var(--ds-card-ribbon-z-index, 10);
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
import { RemovedProp } from '../../../utils/type.utils';
import {
	CARD_BACKGROUND_COLORS,
	CARD_ELEVATIONS,
	CARD_RADIUSES,
	CARD_RIBBON_COLORS,
	CARD_RIBBON_POSITIONS,
	CARD_RIBBON_SIZES,
	CARD_PADDING_SIZES,
	CardBackgroundColor,
	CardElevation,
	CardRadius,
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
	elevation = CARD_ELEVATIONS.DEFAULT,
	radius = CARD_RADIUSES.ALL,
	backgroundColor = CARD_BACKGROUND_COLORS.DEFAULT,
	isFlat = false,
	ribbonPosition = CARD_RIBBON_POSITIONS.TOP,
	ribbonSize = CARD_RIBBON_SIZES.MEDIUM,
	ribbonColor = CARD_RIBBON_COLORS.NEUTRAL_HEAVY,
	hasRibbonRadius = false,
	hasLoadingBar = false,
	loadingBarColor = LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	loadingBarTime = '0',
	isContentScrollable = false,
} = defineProps<{
	contentHasPadding?: boolean;
	headerHasPadding?: boolean;
	footerHasPadding?: boolean;
	paddingSize?: CardPaddingSize;
	dividerUnderHeader?: boolean;
	hasRibbon?: boolean;
	elevation?: CardElevation;
	radius?: CardRadius;
	backgroundColor?: CardBackgroundColor;
	/**
	 * Shorthand for `elevation="none"`, `radius="none"` and `background-color="none"`.
	 * An axis explicitly set to a non-default value still wins over `isFlat`,
	 * so `is-flat radius="top"` keeps the top corners rounded.
	 */
	isFlat?: boolean;
	ribbonPosition?: CardRibbonPositions;
	ribbonSize?: CardRibbonSizes;
	ribbonColor?: CardRibbonColors;
	hasRibbonRadius?: boolean;
	hasLoadingBar?: boolean;
	loadingBarColor?: LoadingBarColors;
	loadingBarTime?: string;
	isContentScrollable?: boolean;
	// Removed props kept as removal markers so existing usages fail type-checking.
	/** @deprecated renamed to `radius` (all | top | none) */
	hasRadius?: RemovedProp<'renamed to radius'>;
}>();

defineSlots<{
	header?: () => any;
	content?: () => any;
	footer?: () => any;
	experimentalContent?: () => any;
}>();

const ribbonLayout = computed(() => {
	const layoutMap = {
		[CARD_RIBBON_POSITIONS.TOP]: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
		[CARD_RIBBON_POSITIONS.LEFT]: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
	};
	return layoutMap[ribbonPosition] || CONTAINER_RIBBON_LAYOUTS.HORIZONTAL;
});

// `isFlat` is a shorthand that lowers the defaults of the three visual axes to `none`.
// An axis explicitly set to a non-default value still wins, so `isFlat` combines with
// e.g. `radius="top"`.
const effectiveElevation = computed(() =>
	isFlat && elevation === CARD_ELEVATIONS.DEFAULT ? CARD_ELEVATIONS.NONE : elevation,
);

const effectiveRadius = computed(() =>
	isFlat && radius === CARD_RADIUSES.ALL ? CARD_RADIUSES.NONE : radius,
);

const effectiveBackgroundColor = computed(() =>
	isFlat && backgroundColor === CARD_BACKGROUND_COLORS.DEFAULT
		? CARD_BACKGROUND_COLORS.NONE
		: backgroundColor,
);

const ribbonRadius = computed(() => {
	const ribbonPositionToRibbonRadiusMap = {
		[CARD_RIBBON_POSITIONS.TOP]: CONTAINER_RIBBON_RADIUSES.BOTTOM,
		[CARD_RIBBON_POSITIONS.LEFT]: CONTAINER_RIBBON_RADIUSES.RIGHT,
	};
	return hasRibbonRadius && effectiveRadius.value === CARD_RADIUSES.NONE
		? ribbonPositionToRibbonRadiusMap[ribbonPosition]
		: CONTAINER_RIBBON_RADIUSES.NONE;
});
</script>
