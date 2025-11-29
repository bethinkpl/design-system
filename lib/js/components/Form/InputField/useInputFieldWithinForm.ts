import { MaybeRefOrGetter, ref, Ref } from 'vue';
import { useFormFieldWithinForm } from '../../../composables/useFormFieldWithinForm';

export function useInputFieldWithinForm(
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
