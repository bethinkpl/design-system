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
