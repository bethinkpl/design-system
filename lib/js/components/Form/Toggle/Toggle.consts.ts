export const TOGGLE_SIZE = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type ToggleSize = typeof TOGGLE_SIZE[keyof typeof TOGGLE_SIZE];
export const TOGGLE_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type ToggleState = typeof TOGGLE_STATE[keyof typeof TOGGLE_STATE];
