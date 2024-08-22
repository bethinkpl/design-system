export declare const SELECTION_CONTROL_SIZE: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export declare type SelectionControlSize = typeof SELECTION_CONTROL_SIZE[keyof typeof SELECTION_CONTROL_SIZE];
export declare const SELECTION_CONTROL_STATE: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly LOADING: "loading";
};
export declare type SelectionControlState = typeof SELECTION_CONTROL_STATE[keyof typeof SELECTION_CONTROL_STATE];
export declare const SELECTION_CONTROL_TYPE: {
    readonly RADIO_BUTTON: "radioButton";
    readonly CHECKBOX: "checkbox";
};
export declare type SelectionControlType = typeof SELECTION_CONTROL_TYPE[keyof typeof SELECTION_CONTROL_TYPE];
