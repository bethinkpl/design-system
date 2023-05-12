<template>
	<ds-divider class="outlineDivider" :prominence="prominence" :size="size" />
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.outlineDivider {
	margin: $space-xxxs 0;
}
</style>

<script lang="ts">
import DsDivider, { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../../Divider';

export default {
	name: 'OutlineDivider',
	components: {
		DsDivider,
	},
	props: {
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
};
</script>
