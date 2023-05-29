export const CHECKBOX_SIZE = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type CheckboxSize = typeof CHECKBOX_SIZE[keyof typeof CHECKBOX_SIZE];
export const CHECKBOX_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type CheckboxState = typeof CHECKBOX_STATE[keyof typeof CHECKBOX_STATE];
