<template>
	<div
		class="divider"
		:class="{
			'-vertical': isVertical,
			'-horizontal': !isVertical,
			'-strong': prominence === PROMINENCES.STRONG,
			'-weak': prominence === PROMINENCES.WEAK,
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
import { PROMINENCES } from './Divider.consts';

export default {
	name: 'Divider',
	props: {
		isVertical: {
			type: Boolean,
			required: true,
		},
		prominence: {
			type: String,
			default: PROMINENCES.DEFAULT,
			validator: (value: string) => Object.values(PROMINENCES).includes(value),
		},
	},
	created() {
		this.PROMINENCES = PROMINENCES;
	},
};
</script>
