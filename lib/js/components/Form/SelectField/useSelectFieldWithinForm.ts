import { MaybeRefOrGetter, Ref } from 'vue';
import { useFormFieldWithinForm } from '../../../composables/useFormFieldWithinForm';
import { SelectFieldValue } from './SelectField.types';

/**
 * Select counterpart of `useTextFieldWithinForm`. A select has no `input` event, so closing
 * the listbox stands in for blur — that is when the field is marked touched.
 *
 * Revalidation on selection needs no handler here: vee-validate's `useField` defaults to
 * `validateOnValueUpdate: true`, so changing the value already re-runs validation.
 */
export function useSelectFieldWithinForm(
	name: MaybeRefOrGetter<string | undefined>,
	modelValue: Ref<SelectFieldValue | undefined>,
) {
	const { value, errors, field } = useFormFieldWithinForm(name, modelValue);

	const onClose = (event: Event) => {
		field?.handleBlur(event, true);
	};

	return {
		value,
		errors,
		onClose,
	};
}
