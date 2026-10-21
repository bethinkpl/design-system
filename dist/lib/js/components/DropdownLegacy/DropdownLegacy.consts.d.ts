import { Value } from '../../utils/type.utils';

export declare const DROPDOWN_LEGACY_TRIGGER_ACTIONS: {
    readonly CLICK: "click";
    readonly HOVER: "hover";
};
export type DropdownLegacyTriggerAction = Value<typeof DROPDOWN_LEGACY_TRIGGER_ACTIONS>;
export declare const DROPDOWN_LEGACY_RADIUSES: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly BOTH: "both";
};
export type DropdownLegacyRadius = Value<typeof DROPDOWN_LEGACY_RADIUSES>;
export declare const DROPDOWN_LEGACY_PLACEMENTS: {
    readonly BOTTOM_START: "bottom-start";
    readonly BOTTOM_END: "bottom-end";
};
export type DropdownLegacyPlacement = Value<typeof DROPDOWN_LEGACY_PLACEMENTS>;
