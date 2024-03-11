import { RICH_LIST_ITEM_BORDER_COLOR, RichListItemBorderColor } from '../RichListItem';

export const GROUP_RICH_LIST_ITEM_BORDER_COLOR = {
	...RICH_LIST_ITEM_BORDER_COLOR,
} as const;

export type GroupRichListItemBorderColor = RichListItemBorderColor;
