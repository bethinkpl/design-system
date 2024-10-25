<template>
	<div
		:class="{
			'ds-card': true,
			[borderColorClass]: true,
			[borderSizeClass]: true,
			'-ds-top-border': hasTopBoarder,
			'-ds-left-border': hasLeftBoarder,
		}"
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
		<slot name="footer" />
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

	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-s;
	position: relative;
	width: inherit;

	&.-ds-top-border {
		border-top: $border-l transparent solid;
	}

	&.-ds-left-border {
		border-left: $border-l transparent solid;
	}

	&.-ds-border-size-small {
		border-radius: $radius-xs;
		border-top-width: $border-s;

		#{$root}__loadingBar {
			border-radius: $radius-xs $radius-xs 0 0;
			top: -$border-s;
		}
	}

	&.-ds-border-size-medium {
		border-radius: $radius-s;
		border-top-width: $border-m;

		#{$root}__loadingBar {
			border-radius: $radius-s $radius-s 0 0;
			top: -$border-m;
		}
	}

	&.-ds-border-size-large {
		border-radius: $radius-m;
		border-top-width: $border-l;

		#{$root}__loadingBar {
			border-radius: $radius-m $radius-m 0 0;
			top: -$border-l;
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
		}
	}

	&__headerDivider {
		&.-ds-withHorizontalMargin {
			margin: 0 $space-s;
		}
	}

	&__content {
		padding: $space-s;
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import DsDivider from '../../Divider/Divider.vue';
import DsLoadingBar, { LOADING_BAR_COLORS, LoadingBarColors } from '../../LoadingBar';
import {
	CARD_BORDER_COLORS,
	CARD_BORDER_POSITIONS,
	CARD_BORDER_SIZES,
	CardBorderColors,
	CardBorderPositions,
	CardBorderSizes,
} from './Card.consts';

export default defineComponent({
	name: 'Card',
	components: { DsDivider, DsLoadingBar },
	props: {
		headerHasPadding: {
			type: Boolean,
			default: false,
		},
		dividerUnderHeader: {
			type: Boolean,
			default: false,
		},
		hasBorder: {
			type: Boolean,
			default: false,
		},
		borderPosition: {
			type: String as PropType<CardBorderPositions>,
			default: CARD_BORDER_POSITIONS.TOP,
		},
		borderSize: {
			type: String as PropType<CardBorderSizes>,
			default: CARD_BORDER_SIZES.LARGE,
		},
		borderColor: {
			type: String as PropType<CardBorderColors>,
			default: CARD_BORDER_COLORS.NEUTRAL_HEAVY,
		},
		hasLoadingBar: {
			type: Boolean,
			default: false,
		},
		loadingBarColor: {
			type: String as PropType<LoadingBarColors>,
			default: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
		},
		loadingBarTime: {
			type: String,
			default: '0',
		},
	},

	computed: {
		hasLeftBoarder() {
			return (
				this.hasBorder &&
				this.borderPosition === CARD_BORDER_POSITIONS.LEFT &&
				!this.hasLoadingBar
			);
		},
		hasTopBoarder() {
			return (
				(this.hasBorder && this.borderPosition === CARD_BORDER_POSITIONS.TOP) ||
				this.hasLoadingBar
			);
		},
		borderColorClass() {
			if (this.hasLoadingBar) {
				return '-ds-border-color-transparent';
			}
			return `-ds-border-color-${this.borderColor}`;
		},
		borderSizeClass() {
			if (!this.hasBorder && !this.hasLoadingBar) {
				return '';
			}
			return `-ds-border-size-${this.borderSize}`;
		},
	},
});
</script>
