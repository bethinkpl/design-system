import { IconKey } from '../Icon';

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

export type SelectListItemTextWithIcon = SelectListItemTextBase & {
	icon: IconKey;
};

type SelectListItemText = SelectListItemTextWithoutIcon | SelectListItemTextWithIcon;

export type SelectListItem = SelectListItemDivider | SelectListItemText;
