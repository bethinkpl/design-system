import {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_BORDER_COLOR,
	RichListItemBackgroundColor,
	RichListItemBorderColor,
} from '../RichListItem';

export const GROUP_RICH_LIST_ITEM_BORDER_COLOR = {
	...RICH_LIST_ITEM_BORDER_COLOR,
} as const;

export type GroupRichListItemBorderColor = RichListItemBorderColor;

export const GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR = {
	...RICH_LIST_ITEM_BACKGROUND_COLOR,
} as const;

export type GroupRichListItemBackgroundColor = RichListItemBackgroundColor;
