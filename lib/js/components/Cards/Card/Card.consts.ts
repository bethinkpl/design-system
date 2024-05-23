import { Value } from '../../../utils/type.utils';

export const CARD_BORDER_COLORS = {
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INFO: 'info',
	TRANSPARENT: 'transparent',
};

export type CardBorderColors = Value<typeof CARD_BORDER_COLORS>;

export const CARD_BORDER_SIZES = {
	X_SMALL: 'xSmall',
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type CardBorderSizes = Value<typeof CARD_BORDER_SIZES>;

export const CARD_BORDER_POSITIONS = {
	TOP: 'top',
	LEFT: 'left',
};

export type CardBorderPositions = Value<typeof CARD_BORDER_POSITIONS>;
