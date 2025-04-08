import { PropType, toRaw } from 'vue';
import { ICONS } from '../Icons/Icon';
import {
	TILE_ADDITIONAL_TEXT_MAX_WIDTHS,
	TILE_COLORS,
	TILE_STATES,
	TileAdditionalTextMaxWidth,
	TileBorderColors,
	TileColor,
	TileState,
} from './Tile.consts';
import { Value } from '../../utils/type.utils';

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
	isIconRightHiddenOnMobile: {
		type: Boolean,
		default: false,
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
		validator(color) {
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
};
