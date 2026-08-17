import { FormFieldProps, FormFieldSlots } from '../FormField';
import { PinInputFieldState, PinInputFieldType } from './PinInputField.consts';

export interface PinInputFieldProps extends Omit<FormFieldProps, 'state'> {
    state?: PinInputFieldState;
    length?: number;
    otp?: boolean;
    type?: PinInputFieldType;
    name?: string;
    ariaLabel?: string;
}
export type PinInputFieldSlots = Omit<FormFieldSlots, 'field'>;
