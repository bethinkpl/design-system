import { Value } from '../../utils/type.utils';

export declare const SWITCH_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type SwitchSize = Value<typeof SWITCH_SIZES>;
export declare const SWITCH_RADIUSES: {
    readonly CAPSULE: "capsule";
    readonly ROUNDED: "rounded";
};
export type SwitchRadius = Value<typeof SWITCH_RADIUSES>;
export declare const SWITCH_STATE: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
};
export type SwitchState = typeof SWITCH_STATE[keyof typeof SWITCH_STATE];
export declare const SWITCH_SIDE: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export type SwitchSelection = typeof SWITCH_SIDE[keyof typeof SWITCH_SIDE];
