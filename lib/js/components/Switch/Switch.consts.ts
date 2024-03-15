import { Value } from "../../utils/type.utils";

export const SWITCH_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type SwitchSize = Value<typeof SWITCH_SIZES>;

export const SWITCH_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;

export type SwitchRadius = Value<typeof SWITCH_RADIUSES>;

export const SWITCH_STATE = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
} as const;

export type SwitchState = typeof SWITCH_STATE[keyof typeof SWITCH_STATE];

export const SWITCH_SIDE = {
	LEFT: 'left',
	RIGHT: 'right',
} as const;

export type SwitchSelection = typeof SWITCH_SIDE[keyof typeof SWITCH_SIDE];