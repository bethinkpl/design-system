<template>
	<div
		class="divider"
		:class="{
			'-vertical': isVertical,
			'-horizontal': !isVertical,
			'-strong': prominence === DIVIDER_PROMINENCES.STRONG,
			'-weak': prominence === DIVIDER_PROMINENCES.WEAK,
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
		width: 100%;
	}
}
</style>

<script lang="ts">
import { DIVIDER_PROMINENCES } from './Divider.consts';

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
	},
	created() {
		this.DIVIDER_PROMINENCES = DIVIDER_PROMINENCES;
	},
};
</script>
