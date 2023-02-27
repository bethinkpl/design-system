<template>
	<div class="selectListItemDivider">
		<divider />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';

.selectListItemDivider {
	background-color: $color-neutral-background-ghost;
	padding: $space-xxs 0;
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
