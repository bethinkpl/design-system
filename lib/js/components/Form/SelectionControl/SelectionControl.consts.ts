export const SELECTION_CONTROL_SIZE = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type SelectionControlSize =
	typeof SELECTION_CONTROL_SIZE[keyof typeof SELECTION_CONTROL_SIZE];
export const SELECTION_CONTROL_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type SelectionControlState =
	typeof SELECTION_CONTROL_STATE[keyof typeof SELECTION_CONTROL_STATE];
