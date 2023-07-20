<template>
	<div class="drawerTile">
		<ds-tile v-bind="props" @click="$emit('click')" />
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

const camelToKebabCase = (str) => str.replace(/[A-Z]/g, '-$&').toLowerCase();
export default {
	name: 'DrawerTile',
	components: {
		DsTile: Tile,
	},
	computed: {
		props() {
			// Only allow props that are supported by Tile
			return Object.keys(props)
				.map(camelToKebabCase)
				.reduce((newObj, property) => {
					newObj[property] = this.$attrs[property];
					return newObj;
				}, {});
		},
	},
	emits: ['click'],
};
</script>
