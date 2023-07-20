<template>
	<div class="drawerTile">
		<ds-tile v-bind="$props" @click="$emit('click')" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';

.drawerTile {
	padding: $space-xxs 0;
}
</style>

<script lang="ts">
import Tile, { props } from '../../Tile/Tile.vue';

export default {
	name: 'DrawerTile',
	components: {
		DsTile: Tile,
	},
	// Only allow props that are supported by Tile
	props,
	emits: ['click'],
};
</script>
