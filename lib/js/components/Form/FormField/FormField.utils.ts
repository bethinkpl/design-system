import { FormFieldProps } from './FormField.types';
import { FORM_FIELD_STATES } from './FormField.consts';

/**
 * Extracts the properties needed for a form field component only
 */
export function extractFormFieldProps(
	{
		label,
		state,
		hasRequiredIndicator,
		labelInfo,
		subLabel,
		fieldId,
		messageText,
	}: FormFieldProps,
	errors: Array<string> = [],
) {
	return {
		label,
		state: state ?? (errors[0] ? FORM_FIELD_STATES.ERROR : undefined),
		hasRequiredIndicator,
		labelInfo,
		subLabel,
		fieldId,
		messageText: messageText ?? errors[0],
	};
}
