export declare const TEXT_GROUP_COLORS: {
    readonly NEUTRAL: "neutral";
};
export declare const TEXT_GROUP_LOADING_SIZES: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
};
export declare const TEXT_GROUP_SIZES: {
    SMALL: string;
    MEDIUM: string;
};
export declare const TEXT_GROUP_STATES: {
    readonly DEFAULT: "default";
    readonly HOVERED: "hovered";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export type TextGroupColor = typeof TEXT_GROUP_COLORS[keyof typeof TEXT_GROUP_COLORS];
export type TextGroupLoadingSize = typeof TEXT_GROUP_LOADING_SIZES[keyof typeof TEXT_GROUP_LOADING_SIZES];
export type TextGroupSize = typeof TEXT_GROUP_SIZES[keyof typeof TEXT_GROUP_SIZES];
export type TextGroupState = typeof TEXT_GROUP_STATES[keyof typeof TEXT_GROUP_STATES];
