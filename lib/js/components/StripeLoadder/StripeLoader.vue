<template>
	<div class="ds-stripe" :class="[sizeClassName]">
		<span
			:class="['ds-stripe__loader', `-ds-border-color-${color}`]"
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
		width: 0;

		&.-ds-border-color-neutralHeavy {
			background-color: $color-neutral-border-heavy;
		}

		&.-ds-border-color-neutralStrong {
			background-color: $color-neutral-border-strong;
		}

		&.-ds-border-color-success {
			background-color: $color-success-border;
		}

		&.-ds-border-color-warning {
			background-color: $color-warning-border;
		}

		&.-ds-border-color-danger {
			background-color: $color-danger-border;
		}

		&.-ds-border-color-info {
			background-color: $color-info-border;
		}
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	STRIPE_LOADER_COLORS,
	STRIPE_LOADER_SIZES,
	StripeLoaderColors,
	StripeLoaderSizes,
} from './StripeLoader.consts';

export default {
	name: 'StripeLoader',
	props: {
		color: {
			type: String as PropType<StripeLoaderColors>,
			default: STRIPE_LOADER_COLORS.NEUTRAL_HEAVY,
		},
		size: {
			type: String as PropType<StripeLoaderSizes>,
			default: STRIPE_LOADER_SIZES.MEDIUM,
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
