export const DRAWER_LIST_ITEM_STATES = {
	DEFAULT: 'default',
	LOADING: 'loading',
} as const;

export type DrawerListItemState =
	typeof DRAWER_LIST_ITEM_STATES[keyof typeof DRAWER_LIST_ITEM_STATES];
