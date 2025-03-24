import { Value } from '../../../utils/type.utils';

export const OUTLINE_ITEM_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type OutlineItemSize = Value<typeof OUTLINE_ITEM_SIZES>;

export const OUTLINE_ITEM_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
};

export type OutlineItemState = Value<typeof OUTLINE_ITEM_STATES>;

export const OUTLINE_ITEM_BACKGROUND_COLORS = {
	NEUTRAL_WEAK: 'neutralWeak',
	NEUTRAL: 'neutral',
};

export type OutlineItemBackgroundColor = Value<typeof OUTLINE_ITEM_BACKGROUND_COLORS>;
