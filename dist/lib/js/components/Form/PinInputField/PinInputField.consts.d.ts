import { Value } from '../../../utils/type.utils';

export declare const PIN_INPUT_FIELD_STATES: {
    readonly DEFAULT: "default";
    readonly ERROR: "error";
    readonly LOADING: "loading";
};
export type PinInputFieldState = Value<typeof PIN_INPUT_FIELD_STATES>;
export declare const PIN_INPUT_FIELD_TYPES: {
    readonly TEXT: "text";
    readonly NUMBER: "number";
};
export type PinInputFieldType = Value<typeof PIN_INPUT_FIELD_TYPES>;
export declare const PIN_INPUT_FIELD_DEFAULT_LENGTH = 6;
