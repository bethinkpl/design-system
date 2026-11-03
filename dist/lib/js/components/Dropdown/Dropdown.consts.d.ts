import { Value } from '../../utils/type.utils';

export declare const DROPDOWN_RADIUSES: {
    readonly SINGLE_EDGE: "single-edge";
    readonly BOTH_EDGES: "both-edges";
};
export type DropdownRadius = Value<typeof DROPDOWN_RADIUSES>;
export declare const DROPDOWN_ALIGNS: {
    readonly START: "start";
    readonly END: "end";
};
export type DropdownAlign = Value<typeof DROPDOWN_ALIGNS>;
export declare const DROPDOWN_AUTOFOCUS: {
    readonly ENABLED: "enabled";
    readonly DISABLED_ON_TOUCH_DEVICES: "disabled-on-touch-devices";
};
export type DropdownAutofocus = Value<typeof DROPDOWN_AUTOFOCUS>;
