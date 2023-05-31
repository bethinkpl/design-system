import {
	SELECTION_CONTROL_SIZE,
	SELECTION_CONTROL_STATE,
} from '../SelectionControl/SelectionControl.consts';

export const CHECKBOX_SIZE = {
	...SELECTION_CONTROL_SIZE,
} as const;

export type CheckboxSize = typeof CHECKBOX_SIZE[keyof typeof CHECKBOX_SIZE];
export const CHECKBOX_STATE = {
	...SELECTION_CONTROL_STATE,
} as const;

export type CheckboxState = typeof CHECKBOX_STATE[keyof typeof CHECKBOX_STATE];
