import { computed, MaybeRefOrGetter, Ref } from 'vue';
import { useFormFieldWithinForm } from '../../../composables/useFormFieldWithinForm';

/**
 * Pin counterpart of `useTextFieldWithinForm`. A pin has no single blur — its boxes blur on every
 * hop between boxes — so the field is marked touched when the pin is completed or when focus leaves
 * the field entirely.
 */
export function usePinInputFieldWithinForm(
	name: MaybeRefOrGetter<string | undefined>,
	modelValue: Ref<string | undefined>,
) {
	const { value, errors, field } = useFormFieldWithinForm(name, modelValue);

	const markTouched = (event: Event) => {
		field?.handleBlur(event, true);
	};

	// `meta.touched` covers both callers below and `handleSubmit`, so a half-typed pin is never
	// marked invalid but a submitted incomplete one still shows its error.
	const visibleErrors = computed(() => (field?.meta.touched ? errors.value : []));

	return {
		value,
		errors: visibleErrors,
		onComplete: markTouched,
		onBlur: markTouched,
	};
}
