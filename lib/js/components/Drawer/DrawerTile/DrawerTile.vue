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
import Tile from '../../Tile/Tile.vue';
import { props } from '../../Tile/Tile.shared';

export default {
	name: 'DrawerTile',
	components: {
		DsTile: Tile,
	},
	// Only allow props that are supported by Tile
	props,
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['click'],
};
</script>
