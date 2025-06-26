import { computed, inject, MaybeRefOrGetter, ref, Ref, toValue } from 'vue';
import { FormContextKey, useField } from 'vee-validate';

export function useInputFieldWithinForm(
	name: MaybeRefOrGetter<string | undefined>,
	modelValue: Ref<string | undefined>,
) {
	const form = inject(FormContextKey, null);
	const nameValue = toValue(name);

	// this computed property was created only for type safety so we can use it with `useField`
	const nameString = computed(() => {
		const value = toValue(name);

		if (value === undefined) {
			throw new Error('fieldName is required');
		}

		return value;
	});

	if (nameValue && !form) {
		throw new Error(
			`InputField with name "${nameValue}" must be used within a component that provides a FormContext, e.g. by using useForm()`,
		);
	}

	const field = nameValue
		? useField(nameString, undefined, {
				validateOnValueUpdate: false,
		  })
		: null;

	const value = field ? field.value : modelValue;
	const blurred = ref(false);

	const onBlur = (event: Event) => {
		field?.handleBlur(event, true);
		blurred.value = true;
	};

	const onInput = () => {
		if (blurred.value) {
			field?.validate();
		}
	};

	return {
		onBlur,
		onInput,
		value,
		errors: field?.errors ?? ref<Array<string>>([]),
	};
}
