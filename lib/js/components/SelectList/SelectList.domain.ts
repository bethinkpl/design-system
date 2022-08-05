import { IconItem } from '../Icon';

interface SelectListItemDivider {
	type: 'divider';
}

interface SelectListItemTextBase {
	type: 'text';
	label: string;
	value: string;
}

type SelectListItemTextWithoutIcon = SelectListItemTextBase & {
	icon: null;
};

type SelectListItemTextWithIcon = SelectListItemTextBase & {
	icon: IconItem;
};

type SelectListItemText = SelectListItemTextWithoutIcon | SelectListItemTextWithIcon;

export type SelectListItem = SelectListItemDivider | SelectListItemText;
