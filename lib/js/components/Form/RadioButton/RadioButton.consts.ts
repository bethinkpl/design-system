import {
	SELECTION_CONTROL_SIZE,
	SELECTION_CONTROL_STATE,
} from '../SelectionControl/SelectionControl.consts';

export const RADIO_BUTTON_SIZE = {
	...SELECTION_CONTROL_SIZE,
} as const;

export type RadioButtonSize = typeof RADIO_BUTTON_SIZE[keyof typeof RADIO_BUTTON_SIZE];
export const RADIO_BUTTON_STATE = {
	...SELECTION_CONTROL_STATE,
} as const;

export type RadioButtonState = typeof RADIO_BUTTON_STATE[keyof typeof RADIO_BUTTON_STATE];
