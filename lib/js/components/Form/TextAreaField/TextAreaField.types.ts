import { TextareaHTMLAttributes } from 'vue';
import { FormFieldProps, FormFieldSlots } from '../FormField';

export interface TextAreaFieldProps extends FormFieldProps {
	/**
	 * Forwarded to the `<textarea>`, so this is also where `rows` (default 3), `placeholder` and
	 * `maxlength` go. Overrides the defaults the component applies.
	 */
	inputProps?: TextareaHTMLAttributes;
	/**
	 * Grows the field with its content instead of showing the resize handle. `rows` stays the
	 * minimum height; there is no upper bound.
	 *
	 * @default false
	 */
	isAutoresizing?: boolean;
	/**
	 * vee-validate field name. Requires a surrounding form context, e.g. from `useForm()`.
	 */
	name?: string;
}

export type TextAreaFieldSlots = Omit<FormFieldSlots, 'field'>;
