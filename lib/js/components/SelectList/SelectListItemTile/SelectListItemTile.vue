<template>
	<div class="selectListItemTile">
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
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.selectListItemTile {
	padding: $space-xs;
}
</style>

<script lang="ts">
import Tile, { TILE_COLORS, TILE_STATES } from '../../Tile';
import { ICONS } from '../../Icons/Icon';
import { toRaw } from 'vue';
import { Value } from 'utils/type.utils';

export default {
	name: 'SelectListItemTile',
	components: {
		DsTile: Tile,
	},
	props: {
		interactive: {
			type: Boolean,
			default: false,
		},
		iconLeft: {
			type: Object,
			default: null,
			validator(iconLeft) {
				return Object.values(ICONS).includes(toRaw(iconLeft));
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validator(iconRight) {
				return Object.values(ICONS).includes(toRaw(iconRight));
			},
		},
		text: {
			type: String,
			required: true,
		},
		eyebrowText: {
			type: String,
			required: true,
		},
		additionalText: {
			type: String,
			default: null,
		},
		color: {
			type: String,
			default: TILE_COLORS.NEUTRAL,
			validator(color) {
				return Object.values(TILE_COLORS).includes(color);
			},
		},
		isEyebrowTextUppercase: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String,
			default: TILE_STATES.DEFAULT,
			validator(value: Value<typeof TILE_STATES>) {
				return Object.values(TILE_STATES).includes(value);
			},
		},
		eyebrowEllipsis: {
			type: Boolean,
			default: true,
		},
		textEllipsis: {
			type: Boolean,
			default: true,
		},
	},
};
</script>
