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
		<stripe-loader
			v-if="hasStripeLoader"
			class="ds-card__stripeLoader"
			:time="stripeLoaderTime"
			:color="stripeLoaderColor"
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
@import '../../../../styles/settings/colors/tokens';

.ds-card {
	$root: &;
	background-color: $color-default-background;
	border-radius: $radius-m;
	box-shadow: $shadow-s;
	position: relative;
	width: inherit;

	&.-ds-top-border {
		border-top: 6px transparent solid;
	}
	&.-ds-left-border {
		border-left: 6px transparent solid;
	}

	&.-ds-border-size-x-small {
		border-width: 2px;
		border-radius: $radius-xs;

		#{$root}__stripeLoader {
			border-radius: $radius-xs $radius-xs 0 0;
			top: -2px;
		}
	}

	&.-ds-border-size-small {
		border-width: 4px;
		border-radius: $radius-s;

		#{$root}__stripeLoader {
			border-radius: $radius-s $radius-s 0 0;
			top: -4px;
		}
	}

	&.-ds-border-size-medium {
		border-width: 6px;
		border-radius: $radius-m;

		#{$root}__stripeLoader {
			border-radius: $radius-m $radius-m 0 0;
			top: -6px;
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

	&__stripeLoader {
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
import { PropType } from 'vue';

import DsDivider from '../../Divider/Divider.vue';
import StripeLoader, { STRIPE_LOADER_COLORS, StripeLoaderColors } from '../../StripeLoadder';
import {
	CARD_BORDER_COLORS,
	CARD_BORDER_POSITIONS,
	CARD_BORDER_SIZES,
	CardBorderColors,
	CardBorderPositions,
	CardBorderSizes,
} from './Card.consts';
export default {
	name: 'Card',
	components: { DsDivider, StripeLoader },
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
			default: CARD_BORDER_SIZES.MEDIUM,
		},
		borderColor: {
			type: String as PropType<CardBorderColors>,
			default: CARD_BORDER_COLORS.NEUTRAL_HEAVY,
		},
		hasStripeLoader: {
			type: Boolean,
			default: false,
		},
		stripeLoaderColor: {
			type: String as PropType<StripeLoaderColors>,
			default: STRIPE_LOADER_COLORS.NEUTRAL_HEAVY,
		},
		stripeLoaderTime: {
			type: String,
			default: '0',
		},
	},

	computed: {
		hasLeftBoarder() {
			return (
				this.hasBorder &&
				this.borderPosition === CARD_BORDER_POSITIONS.LEFT &&
				!this.hasStripeLoader
			);
		},
		hasTopBoarder() {
			return (
				(this.hasBorder && this.borderPosition === CARD_BORDER_POSITIONS.TOP) ||
				this.hasStripeLoader
			);
		},
		borderColorClass() {
			if (this.hasStripeLoader) {
				return '-ds-border-color-transparent';
			}
			return `-ds-border-color-${this.borderColor}`;
		},
		borderSizeClass() {
			if (!this.hasBorder) {
				return '';
			}
			return `-ds-border-size-${this.borderSize}`;
		},
	},
};
</script>
