import { PropType, toRaw } from 'vue';
import { ICONS } from '../Icons/Icon';
import {
	TILE_ADDITIONAL_TEXT_MAX_WIDTHS,
	TILE_COLORS,
	TILE_COMPACT_LAYOUTS,
	TILE_STATES,
	TileAdditionalTextMaxWidth,
	TileBorderColors,
	TileColor,
	TileCompactLayout,
	TileState,
} from './Tile.consts';

export const props = {
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
		default: null,
	},
	additionalText: {
		type: String,
		default: null,
	},
	color: {
		type: String as PropType<TileColor>,
		default: TILE_COLORS.NEUTRAL,
		validator(color: TileColor) {
			return Object.values(TILE_COLORS).includes(color);
		},
	},
	isEyebrowTextUppercase: {
		type: Boolean,
		default: false,
	},
	state: {
		type: String as PropType<TileState>,
		default: TILE_STATES.DEFAULT,
		validator(value: TileState) {
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
	borderColor: {
		type: String as PropType<TileBorderColors>,
		default: null,
	},
	additionalTextMaxWidth: {
		type: String as PropType<TileAdditionalTextMaxWidth>,
		default: TILE_ADDITIONAL_TEXT_MAX_WIDTHS.SMALL,
		validator(value: TileAdditionalTextMaxWidth) {
			return Object.values(TILE_ADDITIONAL_TEXT_MAX_WIDTHS).includes(value);
		},
	},
	compactLayout: {
		type: String as PropType<TileCompactLayout>,
		default: TILE_COMPACT_LAYOUTS.DEFAULT,
		validator(value: TileCompactLayout) {
			return Object.values(TILE_COMPACT_LAYOUTS).includes(value);
		},
	},
};
