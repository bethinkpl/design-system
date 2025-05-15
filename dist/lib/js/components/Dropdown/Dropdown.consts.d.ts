import { Value } from '../../utils/type.utils';

export declare const DROPDOWN_TRIGGER_ACTIONS: {
    readonly CLICK: "click";
    readonly HOVER: "hover";
};
export type DropdownTriggerAction = Value<typeof DROPDOWN_TRIGGER_ACTIONS>;
export declare const DROPDOWN_RADIUSES: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly BOTH: "both";
};
export type DropdownRadius = Value<typeof DROPDOWN_RADIUSES>;
export declare const DROPDOWN_PLACEMENTS: {
    readonly BOTTOM_START: "bottom-start";
    readonly BOTTOM_END: "bottom-end";
};
export type DropdownPlacement = Value<typeof DROPDOWN_PLACEMENTS>;
