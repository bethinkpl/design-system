<template>
	<div class="ds-card__container">
		<div
			:class="[
				'ds-card',
				borderColorClass,
				borderSizeClass,
				{
					'-ds-top-border': hasTopBoarder,
					'-ds-left-border': hasLeftBoarder,
					'-ds-paddingLarge': paddingSize === CARD_PADDING_SIZES.LARGE,
					'-ds-responsive-flat': isResponsiveFlat,
				},
			]"
		>
			<ds-loading-bar
				v-if="hasLoadingBar"
				class="ds-card__loadingBar"
				:time="loadingBarTime"
				:color="loadingBarColor"
				:size="borderSize"
			/>
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
			</div> </div
	></div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/colors/tokens';

.ds-card__container {
	container-type: size;
}

.ds-card {
	$root: &;

	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-s;
	position: relative;
	width: inherit;

	@container (max-width: 459px) {
		&.-ds-responsive-flat {
			background-color: transparent;
			border-radius: 0;
			box-shadow: none;
		}
	}

	&.-ds-top-border {
		border-top: $border-l transparent solid;
	}

	&.-ds-left-border {
		border-left: $border-l transparent solid;
	}

	&.-ds-border-size-small {
		border-top-width: $border-s;

		#{$root}:not(.-ds-flat) & {
			border-radius: $radius-xs;
		}

		#{$root}__loadingBar {
			top: -$border-s;

			#{$root}:not(.-ds-flat) & {
				border-radius: $radius-xs $radius-xs 0 0;
			}
		}
	}

	&.-ds-border-size-medium {
		border-top-width: $border-m;

		#{$root}:not(.-ds-flat) & {
			border-radius: $radius-s;
		}

		#{$root}__loadingBar {
			top: -$border-m;

			#{$root}:not(.-ds-flat) & {
				border-radius: $radius-s $radius-s 0 0;
			}
		}
	}

	&.-ds-border-size-large {
		border-top-width: $border-l;

		#{$root}:not(.-ds-flat) & {
			border-radius: $radius-m;
		}

		#{$root}__loadingBar {
			top: -$border-l;

			#{$root}:not(.-ds-flat) & {
				border-radius: $radius-m $radius-m 0 0;
			}
		}
	}

	&.-ds-border-color-neutralHeavy {
		border-color: $color-neutral-border-heavy;
	}

	&.-ds-border-color-neutralStrong {
		border-color: $color-neutral-border-strong;
	}

	&.-ds-border-color-success {
		border-color: $color-success-border;
	}

	&.-ds-border-color-warning {
		border-color: $color-warning-border;
	}

	&.-ds-border-color-danger {
		border-color: $color-danger-border;
	}

	&.-ds-border-color-info {
		border-color: $color-info-border;
	}

	&__loadingBar {
		overflow: hidden;
		position: absolute;
		width: 100%;
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
	isResponsiveFlat = false,
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
	isResponsiveFlat?: boolean;
}>();

defineSlots<{
	header?: () => any;
	content?: () => any;
	footer?: () => any;
}>();

const hasLeftBoarder = computed(() => {
	return hasBorder && borderPosition === CARD_BORDER_POSITIONS.LEFT && !hasLoadingBar;
});

const hasTopBoarder = computed(() => {
	return (hasBorder && borderPosition === CARD_BORDER_POSITIONS.TOP) || hasLoadingBar;
});

const borderColorClass = computed(() => {
	if (hasLoadingBar) {
		return '-ds-border-color-transparent';
	}
	return `-ds-border-color-${borderColor}`;
});

const borderSizeClass = computed(() => {
	if (!hasBorder && !hasLoadingBar) {
		return null;
	}
	return `-ds-border-size-${borderSize}`;
});
</script>
