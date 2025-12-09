import { FormFieldProps, FormFieldSlots } from '../FormField';
import { CheckboxElevation, CheckboxSize, CheckboxState } from '../Checkbox';

export interface CheckboxGroupFieldProps extends FormFieldProps {
    size?: CheckboxSize;
    state?: CheckboxState;
    elevation?: CheckboxElevation;
    name?: string;
}
export type CheckboxGroupFieldSlots = Omit<FormFieldSlots, 'field'> & {
    field: () => any;
};
