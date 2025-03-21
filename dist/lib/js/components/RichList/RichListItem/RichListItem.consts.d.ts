export declare const RICH_LIST_ITEM_TYPE: {
    readonly DEFAULT: "default";
    readonly FLAT: "flat";
};
export type RichListItemType = typeof RICH_LIST_ITEM_TYPE[keyof typeof RICH_LIST_ITEM_TYPE];
export declare const RICH_LIST_ITEM_STATE: {
    readonly DEFAULT: "default";
    readonly LOADING: "loading";
    readonly DRAG: "drag";
};
export type RichListItemState = typeof RICH_LIST_ITEM_STATE[keyof typeof RICH_LIST_ITEM_STATE];
export declare const RICH_LIST_ITEM_SIZE: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type RichListItemSize = typeof RICH_LIST_ITEM_SIZE[keyof typeof RICH_LIST_ITEM_SIZE];
export declare const RICH_LIST_ITEM_BORDER_COLOR: {
    readonly DEFAULT: "default";
    readonly PRIMARY: "primary";
    readonly PRIMARY_WEAK: "primary-weak";
    readonly NEUTRAL_HEAVY: "neutral-heavy";
    readonly NEUTRAL_STRONG: "neutral-strong";
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutral-weak";
    readonly NEUTRAL_GHOST: "neutral-ghost";
    readonly DANGER: "danger";
    readonly DANGER_WEAK: "danger-weak";
    readonly FAIL: "fail";
    readonly FAIL_WEAK: "fail-weak";
    readonly WARNING: "warning";
    readonly WARNING_WEAK: "warning-weak";
    readonly SUCCESS: "success";
    readonly SUCCESS_WEAK: "success-weak";
    readonly INFO: "info";
    readonly INFO_WEAK: "info-weak";
    readonly ACCENT: "accent";
    readonly ACCENT_WEAK: "accent-weak";
};
export type RichListItemBorderColor = typeof RICH_LIST_ITEM_BORDER_COLOR[keyof typeof RICH_LIST_ITEM_BORDER_COLOR];
export declare const RICH_LIST_ITEM_BACKGROUND_COLOR: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutral-weak";
};
export type RichListItemBackgroundColor = typeof RICH_LIST_ITEM_BACKGROUND_COLOR[keyof typeof RICH_LIST_ITEM_BACKGROUND_COLOR];
export declare const RICH_LIST_ITEM_ELEVATION: {
    readonly SMALL: "small";
};
export type RichListItemElevation = typeof RICH_LIST_ITEM_ELEVATION[keyof typeof RICH_LIST_ITEM_ELEVATION];
export declare const RICH_LIST_ITEM_LAYOUT: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
export type RichListItemLayout = typeof RICH_LIST_ITEM_LAYOUT[keyof typeof RICH_LIST_ITEM_LAYOUT];
export declare const RICH_LIST_ITEM_MEDIA_HORIZONTAL_WIDTH = 100;
export declare const RICH_LIST_ITEM_MEDIA_HORIZONTAL_HEIGHT = 80;
