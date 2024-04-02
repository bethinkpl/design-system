<template>
	<div class="drawerDivider">
		<ds-divider :prominence="prominence" :size="size" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.drawerDivider {
	padding: $space-xxs 0;
}
</style>

<script lang="ts">
import Divider, { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../../Divider';

export default {
	name: 'DrawerDivider',
	components: {
		DsDivider: Divider,
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
