import { Value } from '../../utils/type.utils';

export declare const POP_OVER_COLORS: {
    readonly DEFAULT: "default";
    readonly NEUTRAL: "neutral";
};
export type PopOverColor = Value<typeof POP_OVER_COLORS>;
export declare const POP_OVER_TRIGGER_ACTIONS: {
    readonly CLICK: "click";
    readonly HOVER: "hover";
    readonly NONE: "none";
};
export type PopOverTriggerAction = Value<typeof POP_OVER_TRIGGER_ACTIONS>;
export declare const POP_OVER_PLACEMENTS: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly BOTTOM_START: "bottom-start";
    readonly BOTTOM_END: "bottom-end";
};
export type PopOverPlacement = Value<typeof POP_OVER_PLACEMENTS>;
export declare const POP_OVER_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type PopOverSize = Value<typeof POP_OVER_SIZES>;
