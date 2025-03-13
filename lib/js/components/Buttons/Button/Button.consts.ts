import { Value } from '../../../utils/type.utils';

export const BUTTON_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type ButtonSize = Value<typeof BUTTON_SIZES>;

export const BUTTON_TYPES = {
	FILLED: 'filled',
	OUTLINED: 'outlined',
	TEXT: 'text',
} as const;

export type ButtonType = Value<typeof BUTTON_TYPES>;

export const BUTTON_COLORS = {
	PRIMARY: 'primary',
	NEUTRAL: 'neutral',
	DANGER: 'danger',
	SUCCESS: 'success',
	INVERTED: 'inverted',
} as const;

export type ButtonColor = Value<typeof BUTTON_COLORS>;

export const BUTTON_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;

export type ButtonRadius = Value<typeof BUTTON_RADIUSES>;

export const BUTTON_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	FOCUSED: 'focused',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type ButtonState = Value<typeof BUTTON_STATES>;

export const BUTTON_ELEVATIONS = {
	NONE: 'none',
	X_SMALL: 'x-small',
	SMALL: 'small',
} as const;

export type ButtonElevation = Value<typeof BUTTON_ELEVATIONS>;
