import { BUTTON_ICON_COLORS, BUTTON_TYPES } from '../Button/Button.consts';

export const ICON_BUTTON_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export const ICON_BUTTON_TYPES = {
	ICON_ONLY: 'icon-only',
	OUTLINED: BUTTON_TYPES.OUTLINED,
	FILLED: BUTTON_TYPES.FILLED,
} as const;

export const ICON_BUTTON_COLOR_SCHEMES = {
	ALL_IN_COLOR: 'all-in-color',
	NEUTRAL_LABEL: 'neutral-label',
} as const;

export const ICON_BUTTON_COLORS = {
	...BUTTON_ICON_COLORS,
} as const;

export const ICON_BUTTON_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	FOCUSED: 'focused',
	DISABLED: 'disabled',
} as const;
