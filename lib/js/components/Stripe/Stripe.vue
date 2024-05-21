<template>
	<div class="ds-stripe" :class="[sizeClassName]">
		<span
			:class="['ds-stripe__loader', `-ds-border-color-${color.toLowerCase()}`]"
			:style="stripeLoaderStyles"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';

.ds-stripe {
	background-color: $color-neutral-background;
	display: flex;

	&.-ds-size-x-small {
		height: 2px;
	}

	&.-ds-size-small {
		height: 4px;
	}

	&.-ds-size-medium {
		height: 6px;
	}

	&__loader {
		$STRIPE_COLORS: (
			neutralheavy: $color-neutral-border-heavy,
			neautralstrong: $color-neutral-border-strong,
			success: $color-success-border,
			warning: $color-warning-border,
			danger: $color-danger-border,
			info: $color-info-border,
		);

		@each $colorName, $colorValue in $STRIPE_COLORS {
			&.-ds-border-color-#{$colorName} {
				background-color: $colorValue;
			}
		}

		width: 0;
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import { STRIPE_COLORS, STRIPE_SIZES, StripeColors, StripeSizes } from './Stripe.consts';

export default {
	name: 'Stripe',
	props: {
		color: {
			type: String as PropType<StripeColors>,
			default: STRIPE_COLORS.NEUTRAL_HEAVY,
		},
		size: {
			type: String as PropType<StripeSizes>,
			default: STRIPE_SIZES.MEDIUM,
		},
		time: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			intervalId: 0,
			width: 0,
		};
	},
	computed: {
		sizeClassName() {
			return `-ds-size-${this.size}`;
		},
		stripeLoaderStyles() {
			return {
				width: `${this.width}%`,
				transition: `width ${this.time}s linear`,
			};
		},
	},
	mounted() {
		// without postponing the width change, the transition won't work,
		// and the stripe is 100% width right away
		setTimeout(() => {
			this.width = 100;
		}, 0);
	},
};
</script>
