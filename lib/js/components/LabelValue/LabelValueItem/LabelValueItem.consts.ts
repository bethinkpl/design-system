import { Value } from '../../../utils/type.utils';

export const LABEL_VALUE_ITEM_STATES = {
	DEFAULT: 'default',
	LOADING: 'loading',
} as const;

export const LABEL_VALUE_ITEM_SIZES = {
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export const LABEL_VALUE_ITEM_VALUE_COLORS = {
	NEUTRAL: 'neutral',
	PRIMARY: 'primary',
} as const;

export type LabelValueItemState = Value<typeof LABEL_VALUE_ITEM_STATES>;
export type LabelValueItemSize = Value<typeof LABEL_VALUE_ITEM_SIZES>;
export type LabelValueItemValueColor = Value<typeof LABEL_VALUE_ITEM_VALUE_COLORS>;
