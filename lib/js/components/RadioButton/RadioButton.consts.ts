export const RADIO_BUTTON_SIZE = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type RadioButtonSize = typeof RADIO_BUTTON_SIZE[keyof typeof RADIO_BUTTON_SIZE];
export const RADIO_BUTTON_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type RadioButtonState = typeof RADIO_BUTTON_STATE[keyof typeof RADIO_BUTTON_STATE];
