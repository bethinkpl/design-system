import { Value } from '../../../utils/type.utils';

export const FORM_FIELD_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	ERROR: 'error',
	SUCCESS: 'success',
} as const;

export type FormFieldState = Value<typeof FORM_FIELD_STATES>;
