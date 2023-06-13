export const SELECTION_TILE_TYPE = {
	RADIO_BUTTON: 'radioButton',
	CHECKBOX: 'checkbox',
} as const;

export type SelectionTileType = typeof SELECTION_TILE_TYPE[keyof typeof SELECTION_TILE_TYPE];
export const SELECTION_TILE_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type SelectionTileState = typeof SELECTION_TILE_STATE[keyof typeof SELECTION_TILE_STATE];
