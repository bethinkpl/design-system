import { Value } from '../../../utils/type.utils';

export declare const CHECKBOX_SIZES: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type CheckboxSize = Value<typeof CHECKBOX_SIZES>;
export declare const CHECKBOX_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly ERROR: "error";
};
export type CheckboxState = Value<typeof CHECKBOX_STATES>;
export declare const CHECKBOX_VALUES: {
    readonly CHECKED: true;
    readonly UNCHECKED: false;
    readonly INDETERMINATE: "indeterminate";
};
export type CheckboxValue = Value<typeof CHECKBOX_VALUES>;
export declare const CHECKBOX_ELEVATIONS: {
    readonly NONE: "none";
    readonly X_SMALL: "x-small";
};
export type CheckboxElevation = Value<typeof CHECKBOX_ELEVATIONS>;
