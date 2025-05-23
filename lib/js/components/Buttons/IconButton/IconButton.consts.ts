import { BUTTON_TYPES } from '../Button/Button.consts';
import { Value } from '../../../utils/type.utils';

export const ICON_BUTTON_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type IconButtonSize = Value<typeof ICON_BUTTON_SIZES>;

export const ICON_BUTTON_TYPES = {
	ICON_ONLY: 'icon-only',
	OUTLINED: BUTTON_TYPES.OUTLINED,
	FILLED: BUTTON_TYPES.FILLED,
} as const;

export type IconButtonType = Value<typeof ICON_BUTTON_TYPES>;

export const ICON_BUTTON_COLOR_SCHEMES = {
	ALL_IN_COLOR: 'all-in-color',
	NEUTRAL_LABEL: 'neutral-label',
} as const;

export type IconButtonColorScheme = Value<typeof ICON_BUTTON_COLOR_SCHEMES>;

export const ICON_BUTTON_COLORS = {
	PRIMARY: 'primary',
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutral-weak',
	FAIL: 'fail',
	DANGER: 'danger',
	SUCCESS: 'success',
	INVERTED: 'inverted',
	WARNING: 'warning',
	INFO: 'info',
} as const;

export type IconButtonColor = Value<typeof ICON_BUTTON_COLORS>;

export const ICON_BUTTON_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	FOCUSED: 'focused',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type IconButtonState = Value<typeof ICON_BUTTON_STATES>;
