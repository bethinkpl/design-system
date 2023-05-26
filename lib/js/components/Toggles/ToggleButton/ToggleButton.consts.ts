import { Value } from '../../../utils/type.utils';

export const TOGGLE_BUTTON_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type ToggleButtonSize = Value<typeof TOGGLE_BUTTON_SIZES>;

export const TOGGLE_BUTTON_COLORS = {
	PRIMARY: 'primary',
	NEUTRAL: 'neutral',
} as const;

export type ToggleButtonColor = Value<typeof TOGGLE_BUTTON_COLORS>;

export const TOGGLE_BUTTON_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;

export type ToggleButtonRadius = Value<typeof TOGGLE_BUTTON_RADIUSES>;
