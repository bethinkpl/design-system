import { Value } from '../../../utils/type.utils';

export const CHECKBOX_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type CheckboxSize = Value<typeof CHECKBOX_SIZES>;

export const CHECKBOX_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	ERROR: 'error',
} as const;

export type CheckboxState = Value<typeof CHECKBOX_STATES>;

export const CHECKBOX_VALUES = {
	CHECKED: true,
	UNCHECKED: false,
	INDETERMINATE: 'indeterminate',
} as const;

export type CheckboxValue = Value<typeof CHECKBOX_VALUES>;

export const CHECKBOX_ELEVATIONS = {
	NONE: 'none',
	X_SMALL: 'x-small',
} as const;

export type CheckboxElevation = Value<typeof CHECKBOX_ELEVATIONS>;
