import { FormFieldProps, FormFieldSlots } from '../FormField';
import { IconItem } from '../../Icons/Icon';

export type SelectFieldValue = string | number;
export interface SelectFieldOption {
    value: SelectFieldValue;
    label: string;
    iconLeft?: IconItem | null;
    eyebrowText?: string;
    isDisabled?: boolean;
}
export interface SelectFieldOptionGroup {
    label?: string;
    options: Array<SelectFieldOption>;
}
export interface SelectFieldProps extends FormFieldProps {
    options: Array<SelectFieldOption | SelectFieldOptionGroup>;
    placeholder?: string;
    leftIcon?: IconItem | null;
    ariaLabel?: string;
    maxHeight?: string | number;
    name?: string;
    autocomplete?: string;
    isGroupLabelUppercase?: boolean;
}
export type SelectFieldSlots = Omit<FormFieldSlots, 'field'>;
