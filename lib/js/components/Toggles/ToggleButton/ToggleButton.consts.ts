import { Value } from '../../../utils/type.utils';

export const TOGGLE_BUTTON_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type ToggleButtonSize = Value<typeof TOGGLE_BUTTON_SIZES>;

export const TOGGLE_BUTTON_COLORS = {
	NEUTRAL: 'neutral',
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	PRIMARY: 'primary',
} as const;

export type ToggleButtonColor = Value<typeof TOGGLE_BUTTON_COLORS>;

export const TOGGLE_BUTTON_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;

export type ToggleButtonRadius = Value<typeof TOGGLE_BUTTON_RADIUSES>;

export const TOGGLE_BUTTON_LABEL_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type ToggleButtonLabelSize = Value<typeof TOGGLE_BUTTON_LABEL_SIZES>;

export const TOGGLE_BUTTON_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
} as const;

export type ToggleButtonState = Value<typeof TOGGLE_BUTTON_STATES>;
