export declare const TEXT_GROUP_PROMINENCE: {
    readonly DEFAULT: "default";
    readonly STRONG: "strong";
};
export declare const TEXT_GROUP_LOADING_SIZES: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
};
export declare const TEXT_GROUP_SIZES: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export declare const TEXT_GROUP_ALIGNS: {
    readonly LEFT: "left";
    readonly CENTER: "center";
};
export declare const TEXT_GROUP_MAIN_TEXT_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly PRIMARY: "primary";
};
export declare const TEXT_GROUP_STATES: {
    readonly DEFAULT: "default";
    readonly HOVERED: "hovered";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export type TextGroupProminence = (typeof TEXT_GROUP_PROMINENCE)[keyof typeof TEXT_GROUP_PROMINENCE];
export type TextGroupLoadingSize = (typeof TEXT_GROUP_LOADING_SIZES)[keyof typeof TEXT_GROUP_LOADING_SIZES];
export type TextGroupSize = (typeof TEXT_GROUP_SIZES)[keyof typeof TEXT_GROUP_SIZES];
export type TextGroupState = (typeof TEXT_GROUP_STATES)[keyof typeof TEXT_GROUP_STATES];
export type TextGroupAlign = (typeof TEXT_GROUP_ALIGNS)[keyof typeof TEXT_GROUP_ALIGNS];
export type TextGroupMainTextColor = (typeof TEXT_GROUP_MAIN_TEXT_COLORS)[keyof typeof TEXT_GROUP_MAIN_TEXT_COLORS];
