import { IconValue } from './Icon.types';

export const STEP_TYPES = {
	DEFAULT: 'DEFAULT',
	ACTIVE: 'ACTIVE',
	DONE: 'DONE',
} as const;
export type StepTypeKey = keyof typeof STEP_TYPES;
export type StepTypeValue = typeof STEP_TYPES[StepTypeKey];

export interface Step {
	label: string;
	icon: IconValue;
	name: string;
	type: StepTypeValue;
	disabled: boolean;
}
