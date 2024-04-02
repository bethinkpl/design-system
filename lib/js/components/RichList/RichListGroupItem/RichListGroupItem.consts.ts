import { RICH_LIST_ITEM_BORDER_COLOR, RichListItemBorderColor } from '../RichListItem';

export const RICH_LIST_GROUP_ITEM_BORDER_COLOR = {
	...RICH_LIST_ITEM_BORDER_COLOR,
} as const;

export type RichListGroupItemBorderColor = RichListItemBorderColor;
