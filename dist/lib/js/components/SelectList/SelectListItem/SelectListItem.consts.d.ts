import { Value } from '../../../utils/type.utils';

export declare const SELECT_LIST_ITEM_SELECTION_MODE: {
    readonly SELECT_ONLY: "selectOnly";
    readonly TOGGLE: "toggle";
};
export type SelectListItemSelectionMode = Value<typeof SELECT_LIST_ITEM_SELECTION_MODE>;
export declare const SELECT_LIST_ITEM_SIZES: {
    readonly X_SMALL: "xSmall";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type SelectListItemSize = Value<typeof SELECT_LIST_ITEM_SIZES>;
export declare const SELECT_LIST_ITEM_STATES: {
    readonly DEFAULT: "default";
    readonly LOADING: "loading";
    readonly DISABLED: "disabled";
};
export type SelectListItemState = Value<typeof SELECT_LIST_ITEM_STATES>;
