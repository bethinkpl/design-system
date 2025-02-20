export declare const SELECTION_TILE_TYPE: {
    readonly RADIO_BUTTON: "radioButton";
    readonly CHECKBOX: "checkbox";
};
export type SelectionTileType = typeof SELECTION_TILE_TYPE[keyof typeof SELECTION_TILE_TYPE];
export declare const SELECTION_TILE_STATE: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export type SelectionTileState = typeof SELECTION_TILE_STATE[keyof typeof SELECTION_TILE_STATE];
