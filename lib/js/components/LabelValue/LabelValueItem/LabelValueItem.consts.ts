export const LABEL_VALUE_ITEM_STATES = {
	DEFAULT: 'default',
	LOADING: 'loading',
} as const;

export type LabelValueItemState =
	(typeof LABEL_VALUE_ITEM_STATES)[keyof typeof LABEL_VALUE_ITEM_STATES];
