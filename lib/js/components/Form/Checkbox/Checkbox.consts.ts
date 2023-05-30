import { TOGGLE_SIZE, TOGGLE_STATE } from '../Toggle/Toggle.consts';

export const CHECKBOX_SIZE = {
	...TOGGLE_SIZE,
} as const;

export type CheckboxSize = typeof CHECKBOX_SIZE[keyof typeof CHECKBOX_SIZE];
export const CHECKBOX_STATE = {
	...TOGGLE_STATE,
} as const;

export type CheckboxState = typeof CHECKBOX_STATE[keyof typeof CHECKBOX_STATE];
