import { computed, inject } from 'vue';
import { FORM_FIELD_ID } from './FormField.consts';

export function useFormField() {
	const id = inject(FORM_FIELD_ID);

	if (!id) {
		throw new Error("useFormField must be used within a FormField's child component.");
	}

	const messageId = computed(() => `${id.value}-message`);

	return {
		id,
		messageId,
	};
}
