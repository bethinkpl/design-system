import { FormFieldProps } from './FormField.types';

/**
 * Extracts the properties needed for a form field component only
 */
export function extractFormFieldProps({
	label,
	state,
	hasRequiredIndicator,
	labelInfo,
	subLabel,
	fieldId,
	messageText,
}: FormFieldProps) {
	return {
		label,
		state,
		hasRequiredIndicator,
		labelInfo,
		subLabel,
		fieldId,
		messageText,
	};
}
