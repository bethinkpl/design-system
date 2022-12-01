<template>
	<div
		class="divider"
		:class="{
			'-vertical': isVertical,
			'-horizontal': !isVertical,
			'-strong': prominence === DIVIDER_PROMINENCES.STRONG,
			'-weak': prominence === DIVIDER_PROMINENCES.WEAK,
			[sizeClass]: true,
		}"
	/>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';

.divider {
	background-color: $color-neutral-divider;

	&.-strong {
		background-color: $color-neutral-divider-strong;
	}

	&.-weak {
		background-color: $color-neutral-divider-weak;
	}

	&.-vertical {
		height: 100%;
		width: 1px;
	}

	&.-horizontal {
		height: 1px;
		width: auto;
	}

	&.-medium-vertical {
		width: 2px;
	}

	&.-large-vertical {
		width: 4px;
	}

	&.-medium-horizontal {
		height: 2px;
	}

	&.-large-horizontal {
		height: 4px;
	}
}
</style>

<script lang="ts">
import { DIVIDER_PROMINENCES, DIVIDER_SIZES } from './Divider.consts';

export default {
	name: 'Divider',
	props: {
		isVertical: {
			type: Boolean,
			default: false,
		},
		prominence: {
			type: String,
			default: DIVIDER_PROMINENCES.DEFAULT,
			validator: (value: string) => Object.values(DIVIDER_PROMINENCES).includes(value),
		},
		size: {
			type: String,
			default: DIVIDER_SIZES.S,
			validator: (value: string) => Object.values(DIVIDER_SIZES).includes(value),
		},
	},
	data() {
		return {
			DIVIDER_PROMINENCES: Object.freeze(DIVIDER_PROMINENCES),
		};
	},
	computed: {
		sizeClass() {
			return {
				[DIVIDER_SIZES.S]: '',
				[DIVIDER_SIZES.M]: '-medium-' + (this.isVertical ? 'vertical' : 'horizontal'),
				[DIVIDER_SIZES.L]: '-large-' + (this.isVertical ? 'vertical' : 'horizontal'),
			}[this.size];
		},
	},
};
</script>
