import { Value } from '../../utils/type.utils';

export declare const POPOVER_COLORS: {
    readonly DEFAULT: "default";
    readonly NEUTRAL: "neutral";
};
export type PopoverColor = Value<typeof POPOVER_COLORS>;
export declare const POPOVER_SIDES: {
    readonly TOP: "top";
    readonly RIGHT: "right";
    readonly BOTTOM: "bottom";
    readonly LEFT: "left";
};
export type PopoverSide = Value<typeof POPOVER_SIDES>;
export declare const POPOVER_ALIGNS: {
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
};
export type PopoverAlign = Value<typeof POPOVER_ALIGNS>;
export declare const POPOVER_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type PopoverSize = Value<typeof POPOVER_SIZES>;
