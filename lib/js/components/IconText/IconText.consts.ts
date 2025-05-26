import { Value } from '../../utils/type.utils';

export const ICON_TEXT_COLORS = {
	NEUTRAL_WEAK: 'neutralWeak',
	NEUTRAL: 'neutral',
};

export type IconTextColor = Value<typeof ICON_TEXT_COLORS>;

export const ICON_TEXT_SIZES = {
	X_SMALL: 'xSmall',
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type IconTextSize = Value<typeof ICON_TEXT_SIZES>;

export const ICON_TEXT_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
};

export type IconTextState = Value<typeof ICON_TEXT_STATES>;
