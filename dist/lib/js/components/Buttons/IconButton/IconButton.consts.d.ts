import { Value } from '../../../utils/type.utils';

export declare const ICON_BUTTON_SIZES: {
    readonly XX_SMALL: "xx-small";
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type IconButtonSize = Value<typeof ICON_BUTTON_SIZES>;
export declare const ICON_BUTTON_TYPES: {
    readonly ICON_ONLY: "icon-only";
    readonly OUTLINED: "outlined";
    readonly FILLED: "filled";
};
export type IconButtonType = Value<typeof ICON_BUTTON_TYPES>;
export declare const ICON_BUTTON_COLOR_SCHEMES: {
    readonly ALL_IN_COLOR: "all-in-color";
    readonly NEUTRAL_LABEL: "neutral-label";
};
export type IconButtonColorScheme = Value<typeof ICON_BUTTON_COLOR_SCHEMES>;
export declare const ICON_BUTTON_COLORS: {
    readonly PRIMARY: "primary";
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutral-weak";
    readonly FAIL: "fail";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly INVERTED: "inverted";
    readonly WARNING: "warning";
    readonly INFO: "info";
};
export type IconButtonColor = Value<typeof ICON_BUTTON_COLORS>;
export declare const ICON_BUTTON_STATES: {
    readonly DEFAULT: "default";
    readonly HOVERED: "hovered";
    readonly FOCUSED: "focused";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export type IconButtonState = Value<typeof ICON_BUTTON_STATES>;
