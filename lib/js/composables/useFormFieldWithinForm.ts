import { inject, MaybeRefOrGetter, ref, Ref, toValue } from 'vue';
import { FormContextKey, useField } from 'vee-validate';

export function useFormFieldWithinForm<T = string>(
	name: MaybeRefOrGetter<string | undefined>,
	modelValue: Ref<T | undefined>,
) {
	const nameValue = toValue(name);
	const form = inject(FormContextKey, null);

	if (nameValue && !form) {
		throw new Error(
			`Field with name "${name}" must be used within a component that provides a FormContext, e.g. by using useForm()`,
		);
	}

	const field = nameValue ? useField<Array<string>>(nameValue, undefined) : null;

	const value = field ? field.value : modelValue;

	return {
		field,
		value,
		errors: field?.errors ?? ref<Array<string>>([]),
	};
}
