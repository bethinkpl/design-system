<template>
	<div class="ds-selectListItemDivider">
		<divider />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';

.ds-selectListItemDivider {
	background-color: $color-neutral-background-ghost;
	padding: $space-2xs 0;
}
</style>

<script lang="ts">
import Divider from '../../Divider/Divider.vue';

export default {
	name: 'SelectListItemDivider',
	components: {
		Divider,
	},
};
</script>
