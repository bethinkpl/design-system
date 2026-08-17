import { TextareaHTMLAttributes } from 'vue';
import { FormFieldProps, FormFieldSlots } from '../FormField';

export interface TextAreaFieldProps extends FormFieldProps {
    inputProps?: TextareaHTMLAttributes;
    isAutoresizing?: boolean;
    name?: string;
}
export type TextAreaFieldSlots = Omit<FormFieldSlots, 'field'>;
