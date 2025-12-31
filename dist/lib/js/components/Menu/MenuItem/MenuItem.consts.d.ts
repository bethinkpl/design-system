import { Value } from '../../../utils/type.utils';
import { InjectionKey } from 'vue';

export declare const MENU_ITEM_SIZES: {
    SMALL: string;
    MEDIUM: string;
};
export type MenuItemSize = Value<typeof MENU_ITEM_SIZES>;
export declare const MENU_ITEM_STATES: {
    DEFAULT: string;
    DISABLED: string;
};
export type MenuItemState = Value<typeof MENU_ITEM_STATES>;
export declare const MENU_ITEM_BACKGROUND_COLORS: {
    NEUTRAL_WEAK: string;
    NEUTRAL: string;
};
export type MenuItemBackgroundColor = Value<typeof MENU_ITEM_BACKGROUND_COLORS>;
export declare const MENU_ITEM_ACCESSORY_STATES: {
    DOT: string;
};
export type MenuItemAccessoryState = Value<typeof MENU_ITEM_ACCESSORY_STATES>;
export declare const MENU_ITEM_LEVEL_INJECTION_KEY: InjectionKey<number>;
