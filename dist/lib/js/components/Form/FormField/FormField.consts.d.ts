import { Value } from '../../../utils/type.utils';

export declare const FORM_FIELD_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
    readonly ERROR: "error";
    readonly SUCCESS: "success";
};
export type FormFieldState = Value<typeof FORM_FIELD_STATES>;
