import { Value } from '../../utils/type.utils';
export declare const TOAST_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export declare type ToastSizes = Value<typeof TOAST_SIZES>;
export declare const TOAST_COLORS: {
    NEUTRAL_HEAVY: string;
    NEUTRAL_STRONG: string;
    SUCCESS: string;
    WARNING: string;
    DANGER: string;
    INFO: string;
};
export declare type ToastColors = Value<typeof TOAST_COLORS>;
export declare const TOAST_POSITIONS: {
    LEFT: string;
    CENTER: string;
    RIGHT: string;
};
export declare type ToastPositions = Value<typeof TOAST_POSITIONS>;