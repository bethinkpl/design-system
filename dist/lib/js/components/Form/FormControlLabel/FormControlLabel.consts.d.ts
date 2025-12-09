import { Value } from '../../../utils/type.utils';

export declare const FORM_CONTROL_SIZE: {
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type FormControlSize = Value<typeof FORM_CONTROL_SIZE>;
export declare const FORM_CONTROL_STATE: {
    DEFAULT: string;
    DISABLED: string;
};
export type FormControlState = Value<typeof FORM_CONTROL_STATE>;
