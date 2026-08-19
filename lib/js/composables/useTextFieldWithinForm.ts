import { MaybeRefOrGetter, ref, Ref } from 'vue';
import { useFormFieldWithinForm } from './useFormFieldWithinForm';

/**
 * vee-validate bridge shared by the free-text fields (`InputField`, `TextAreaField`). Validation on
 * `input` only starts once the field has been blurred, so a half-typed value is never marked
 * invalid while the user is still filling it in.
 */
export function useTextFieldWithinForm(
	name: MaybeRefOrGetter<string | undefined>,
	modelValue: Ref<string | undefined>,
) {
	const { value, errors, field } = useFormFieldWithinForm(name, modelValue);

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
		errors,
	};
}
