import { Value } from '../../utils/type.utils';

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
