import { FormFieldProps, FormFieldSlots } from '../FormField';
import { IconItem } from '../../Icons/Icon';

/**
 * reka-ui reserves the empty string for clearing the selection, so `''` must never be
 * used as an option value. `undefined` (or `''`/`null` coming from a form) renders the
 * placeholder.
 */
export type SelectFieldValue = string | number;

export interface SelectFieldOption {
	value: SelectFieldValue;
	label: string;
	iconLeft?: IconItem | null;
	eyebrowText?: string;
	isDisabled?: boolean;
}

export interface SelectFieldOptionGroup {
	/**
	 * When set, the group is rendered as an accessible `role="group"` with this text as its
	 * accessible name. Groups without a label render their options as direct children of the
	 * listbox instead.
	 */
	label?: string;
	options: Array<SelectFieldOption>;
}

export interface SelectFieldProps extends FormFieldProps {
	options: Array<SelectFieldOption | SelectFieldOptionGroup>;
	placeholder?: string;
	leftIcon?: IconItem | null;
	/**
	 * Used as `aria-label` when no visible `label` is provided, so the field always has an
	 * accessible name.
	 */
	ariaLabel?: string;
	/**
	 * Caps the dropdown height. A `number` is treated as pixels; a string is used as-is, so
	 * any CSS length works. The dropdown never exceeds the space available in the viewport
	 * regardless of this value.
	 *
	 * @default '320px'
	 */
	maxHeight?: string | number;
	/**
	 * vee-validate field name. Requires a surrounding `useForm()` context.
	 */
	name?: string;
}

export type SelectFieldSlots = Omit<FormFieldSlots, 'field'>;
