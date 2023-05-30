import { TOGGLE_SIZE, TOGGLE_STATE } from '../Toggle/Toggle.consts';

export const RADIO_BUTTON_SIZE = {
	...TOGGLE_SIZE,
} as const;

export type RadioButtonSize = typeof RADIO_BUTTON_SIZE[keyof typeof RADIO_BUTTON_SIZE];
export const RADIO_BUTTON_STATE = {
	...TOGGLE_STATE,
} as const;

export type RadioButtonState = typeof RADIO_BUTTON_STATE[keyof typeof RADIO_BUTTON_STATE];
