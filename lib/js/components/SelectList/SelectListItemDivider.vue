<template>
	<div class="selectListItemDivider">
		<divider />
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';

.selectListItemDivider {
	padding: $space-xxs 0;
}
</style>

<script lang="ts">
import Divider from '../Divider/Divider.vue';

export default {
	name: 'SelectListItemDivider',
	components: {
		Divider,
	},
};
</script>
