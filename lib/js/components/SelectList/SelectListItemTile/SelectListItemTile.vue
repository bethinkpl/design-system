<template>
	<div class="ds-selectListItemTile">
		<ds-tile
			:interactive="interactive"
			:icon-left="iconLeft"
			:icon-right="iconRight"
			:text="text"
			:eyebrow-text="eyebrowText"
			:additional-text="additionalText"
			:color="color"
			:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
			:state="state"
			:eyebrow-ellipsis="eyebrowEllipsis"
			:text-ellipsis="textEllipsis"
			:has-border="hasBorder"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-selectListItemTile {
	padding: $space-xs;
}
</style>

<script lang="ts">
import Tile from '../../Tile';
import { props } from '../../Tile/Tile.shared';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SelectListItemTile',
	components: {
		DsTile: Tile,
	},
	props,
});
</script>
