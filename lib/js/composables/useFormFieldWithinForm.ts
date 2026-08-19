import { inject, MaybeRefOrGetter, ref, Ref, toValue } from 'vue';
import { FormContextKey, useField } from 'vee-validate';

export function useFormFieldWithinForm<T>(
	name: MaybeRefOrGetter<string | undefined>,
	modelValue: Ref<T>,
) {
	const nameValue = toValue(name);
	const form = inject(FormContextKey, null);

	if (nameValue && !form) {
		throw new Error(
			`Field with name "${name}" must be used within a component that provides a FormContext, e.g. by using useForm()`,
		);
	}

	const field = nameValue ? useField<T>(nameValue, undefined) : null;

	const value: Ref<T> = field ? field.value : modelValue;

	return {
		field,
		value,
		errors: field?.errors ?? ref<Array<string>>([]),
	};
}
