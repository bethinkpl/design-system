import { InputHTMLAttributes } from 'vue';
import { FormFieldProps, FormFieldSlots } from '../FormField';
import { IconItem } from '../../Icons/Icon';

export interface InputFieldProps extends FormFieldProps {
    inputProps?: InputHTMLAttributes;
    leftIcon?: IconItem | null;
    suffixText?: string;
}
export interface InputFieldSlots extends Omit<FormFieldSlots, 'field'> {
    action?: () => any;
}
