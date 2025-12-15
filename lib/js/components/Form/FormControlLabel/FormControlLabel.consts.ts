import { Value } from '../../../utils/type.utils';

export const FORM_CONTROL_SIZE = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type FormControlSize = Value<typeof FORM_CONTROL_SIZE>;

export const FORM_CONTROL_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
};

export type FormControlState = Value<typeof FORM_CONTROL_STATE>;
