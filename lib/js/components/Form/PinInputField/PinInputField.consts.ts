import { Value } from '../../../utils/type.utils';

export const PIN_INPUT_FIELD_STATES = {
	DEFAULT: 'default',
	ERROR: 'error',
	LOADING: 'loading',
} as const;

export type PinInputFieldState = Value<typeof PIN_INPUT_FIELD_STATES>;

export const PIN_INPUT_FIELD_TYPES = {
	TEXT: 'text',
	NUMBER: 'number',
} as const;

export type PinInputFieldType = Value<typeof PIN_INPUT_FIELD_TYPES>;

export const PIN_INPUT_FIELD_DEFAULT_LENGTH = 6;
