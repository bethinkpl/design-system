import { Value } from '../../utils/type.utils';

export declare const CHIP_SIZES: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
};
export type ChipSize = Value<typeof CHIP_SIZES>;
export declare const CHIP_COLORS: {
    readonly PRIMARY: "primary";
    readonly PRIMARY_STRONG: "primaryStrong";
    readonly NEUTRAL: "neutral";
    readonly FAIL: "fail";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly INVERTED: "inverted";
    readonly WARNING: "warning";
    readonly INFO: "info";
};
export declare const CHIP_DEFAULT_COLOR: "neutral";
export type ChipColor = Value<typeof CHIP_COLORS>;
export declare const CHIP_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
};
export type ChipState = Value<typeof CHIP_STATES>;
export declare const CHIP_RADIUSES: {
    readonly CAPSULE: "capsule";
    readonly ROUNDED: "rounded";
};
export type ChipRadius = Value<typeof CHIP_RADIUSES>;
