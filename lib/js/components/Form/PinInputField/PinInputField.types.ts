import { FormFieldProps, FormFieldSlots } from '../FormField';
import { PinInputFieldState, PinInputFieldType } from './PinInputField.consts';

export interface PinInputFieldProps extends Omit<FormFieldProps, 'state'> {
	/**
	 * `loading` replaces the boxes with a spinner.
	 *
	 * @default 'default'
	 */
	state?: PinInputFieldState;
	/**
	 * Number of boxes.
	 *
	 * @default 6
	 */
	length?: number;
	/**
	 * reka `otp` — `autocomplete="one-time-code"` and focus jumps to the first empty box. Pass
	 * `false` for a stored PIN rather than a one-time code.
	 *
	 * @default true
	 */
	otp?: boolean;
	/**
	 * `number` sets `inputmode="numeric"`. Non-digits typed or pasted into a numeric field are
	 * silently discarded by reka — pass `'text'` for alphanumeric codes.
	 *
	 * @default 'number'
	 */
	type?: PinInputFieldType;
	/**
	 * vee-validate field name. Requires a surrounding `useForm()` context.
	 */
	name?: string;
	/**
	 * Used as `aria-label` when no visible `label` is provided, so the field always has an
	 * accessible name.
	 */
	ariaLabel?: string;
}

export type PinInputFieldSlots = Omit<FormFieldSlots, 'field'>;
