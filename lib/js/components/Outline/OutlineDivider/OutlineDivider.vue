<template>
	<div class="ds-outlineDivider">
		<ds-divider :prominence="prominence" :size="size" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-outlineDivider {
	padding: $space-3xs 0;
}
</style>

<script lang="ts">
import DsDivider, { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../../Divider';

import { defineComponent } from 'vue';

export default defineComponent({
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
});
</script>
