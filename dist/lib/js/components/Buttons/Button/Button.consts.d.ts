import { Value } from '../../../utils/type.utils';

export declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type ButtonSize = Value<typeof BUTTON_SIZES>;
export declare const BUTTON_TYPES: {
    readonly FILLED: "filled";
    readonly OUTLINED: "outlined";
    readonly TEXT: "text";
};
export type ButtonType = Value<typeof BUTTON_TYPES>;
export declare const BUTTON_COLORS: {
    readonly PRIMARY: "primary";
    readonly NEUTRAL: "neutral";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly INVERTED: "inverted";
};
export type ButtonColor = Value<typeof BUTTON_COLORS>;
export declare const BUTTON_RADIUSES: {
    readonly CAPSULE: "capsule";
    readonly ROUNDED: "rounded";
};
export type ButtonRadius = Value<typeof BUTTON_RADIUSES>;
export declare const BUTTON_STATES: {
    readonly DEFAULT: "default";
    readonly HOVERED: "hovered";
    readonly FOCUSED: "focused";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export type ButtonState = Value<typeof BUTTON_STATES>;
export declare const BUTTON_ELEVATIONS: {
    readonly NONE: "none";
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
};
export type ButtonElevation = Value<typeof BUTTON_ELEVATIONS>;
