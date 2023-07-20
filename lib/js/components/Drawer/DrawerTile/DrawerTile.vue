<template>
	<div class="drawerTile">
		<ds-tile v-bind="$attrs" @click="$emit('click')" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.drawerTile {
	padding: $space-xxs 0;
}
</style>

<script lang="ts">
import Tile from '../../Tile/Tile.vue';

export default {
	name: 'DrawerTile',
	components: {
		DsTile: Tile,
	},
	emits: ['click'],
};
</script>
