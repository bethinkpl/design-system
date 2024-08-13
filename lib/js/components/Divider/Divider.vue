<template>
	<div
		class="ds-divider"
		:class="{
			'-ds-vertical': isVertical,
			'-ds-horizontal': !isVertical,
			'-ds-strong': prominence === DIVIDER_PROMINENCES.STRONG,
			'-ds-weak': prominence === DIVIDER_PROMINENCES.WEAK,
			[sizeClass]: true,
		}"
	/>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';

.ds-divider {
	background-color: $color-neutral-divider;

	&.-ds-strong {
		background-color: $color-neutral-divider-strong;
	}

	&.-ds-weak {
		background-color: $color-neutral-divider-weak;
	}

	&.-ds-vertical {
		height: 100%;
		width: 1px;
	}

	&.-ds-horizontal {
		height: 1px;
		width: auto;
	}

	&.-ds-medium-vertical {
		width: 2px;
	}

	&.-ds-large-vertical {
		width: 4px;
	}

	&.-ds-medium-horizontal {
		height: 2px;
	}

	&.-ds-large-horizontal {
		height: 4px;
	}
}
</style>

<script lang="ts">
import { DIVIDER_PROMINENCES, DIVIDER_SIZES } from './Divider.consts';

import { defineComponent } from 'vue';

export default defineComponent({
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
				[DIVIDER_SIZES.M]: '-ds-medium-' + (this.isVertical ? 'vertical' : 'horizontal'),
				[DIVIDER_SIZES.L]: '-ds-large-' + (this.isVertical ? 'vertical' : 'horizontal'),
			}[this.size];
		},
	},
});
</script>
