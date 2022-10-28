import { IconItem } from '../Icon';
interface SelectListItemDivider {
    type: 'divider';
}
interface SelectListItemTextBase {
    type: 'text';
    label: string;
    value: string;
}
declare type SelectListItemTextWithoutIcon = SelectListItemTextBase & {
    icon: null;
};
declare type SelectListItemTextWithIcon = SelectListItemTextBase & {
    icon: IconItem;
};
declare type SelectListItemText = SelectListItemTextWithoutIcon | SelectListItemTextWithIcon;
export declare type SelectListItem = SelectListItemDivider | SelectListItemText;
export {};
