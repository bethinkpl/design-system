import { COLORS } from '../../../consts/colors';
import { BUTTON_COLORS, BUTTON_TYPES } from '../Button';

export const ICON_BUTTON_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export const ICON_BUTTON_TYPES = {
	FILLED: BUTTON_TYPES.FILLED,
	OUTLINED: BUTTON_TYPES.OUTLINED,
	ICON_ONLY: 'icon-only',
} as const;

export const ICON_BUTTON_COLOR_SCHEMES = {
	ALL_IN_COLOR: 'all-in-color',
	MINOR_ICON: 'minor-icon',
	MINOR_LABEL: 'minor-label',
} as const;

export const ICON_BUTTON_COLORS = {
	...COLORS,
	...BUTTON_COLORS,
} as const;
