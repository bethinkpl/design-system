import { Value } from '../../../utils/type.utils';

export const SELECT_LIST_ITEM_SELECTION_MODE = {
	SELECT_ONLY: 'selectOnly',
	TOGGLE: 'toggle',
} as const;

export type SelectListItemSelectionMode = Value<typeof SELECT_LIST_ITEM_SELECTION_MODE>;

export const SELECT_LIST_ITEM_SIZES = {
	X_SMALL: 'xSmall',
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type SelectListItemSize = Value<typeof SELECT_LIST_ITEM_SIZES>;

export const SELECT_LIST_ITEM_STATES = {
	DEFAULT: 'default',
	LOADING: 'loading',
	DISABLED: 'disabled',
} as const;

export type SelectListItemState = Value<typeof SELECT_LIST_ITEM_STATES>;
