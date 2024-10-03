import { Value } from '../../../utils/type.utils';

export declare const TOGGLE_BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export declare type ToggleButtonSize = Value<typeof TOGGLE_BUTTON_SIZES>;
export declare const TOGGLE_BUTTON_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_STRONG: "neutralStrong";
    readonly NEUTRAL_HEAVY: "neutralHeavy";
    readonly PRIMARY: "primary";
};
export declare type ToggleButtonColor = Value<typeof TOGGLE_BUTTON_COLORS>;
export declare const TOGGLE_BUTTON_RADIUSES: {
    readonly CAPSULE: "capsule";
    readonly ROUNDED: "rounded";
};
export declare type ToggleButtonRadius = Value<typeof TOGGLE_BUTTON_RADIUSES>;
export declare const TOGGLE_BUTTON_LABEL_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export declare type ToggleButtonLabelSize = Value<typeof TOGGLE_BUTTON_LABEL_SIZES>;
export declare const TOGGLE_BUTTON_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export declare type ToggleButtonState = Value<typeof TOGGLE_BUTTON_STATES>;
