import { Value } from '../../utils/type.utils';

export declare const WELL_PADDINGS: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type WellPadding = Value<typeof WELL_PADDINGS>;
export declare const WELL_COLORS: {
    readonly ACCENT: "accent";
    readonly PRIMARY: "primary";
    readonly FAIL: "fail";
    readonly INFO: "info";
    readonly INVERTED: "inverted";
    readonly NEUTRAL: "neutral";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
};
export type WellColor = Value<typeof WELL_COLORS>;
export declare const WELL_DEFAULT_COLOR: "neutral";
export declare const WELL_RIBBON_COLORS: {
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_HEAVY: "neutral-heavy";
    readonly NEUTRAL_STRONG: "neutral-strong";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly FAIL: "fail";
    readonly INFO: "info";
    readonly TRANSPARENT: "transparent";
};
export type WellRibbonColor = Value<typeof WELL_RIBBON_COLORS>;
export declare const WELL_RIBBON_SIZES: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type WellRibbonSize = Value<typeof WELL_RIBBON_SIZES>;
export declare const WELL_RIBBON_POSITIONS: {
    readonly TOP: "top";
    readonly LEFT: "left";
};
export type WellRibbonPosition = Value<typeof WELL_RIBBON_POSITIONS>;
