import { Value } from '../../utils/type.utils';

export declare const TOAST_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type ToastSizes = Value<typeof TOAST_SIZES>;
export declare const TOAST_COLORS: {
    readonly NEUTRAL_HEAVY: "neutralHeavy";
    readonly NEUTRAL_STRONG: "neutralStrong";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly INFO: "info";
};
export type ToastColors = Value<typeof TOAST_COLORS>;
export declare const TOAST_POSITIONS: {
    readonly LEFT: "left";
    readonly CENTER: "center";
    readonly RIGHT: "right";
    readonly NONE: "none";
};
export type ToastPositions = Value<typeof TOAST_POSITIONS>;
