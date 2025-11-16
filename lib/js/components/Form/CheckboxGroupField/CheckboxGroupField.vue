<template>
	<checkbox-group-root v-model="modelValue">
		<form-field v-bind="formFieldProps">
			<template #field="{ fieldId, messageId }">
				<div
					:id="fieldId"
					class="ds-checkboxGroupField"
					role="group"
					:aria-describedby="messageId"
				>
					<slot name="field"></slot>
				</div>
			</template>
			<!-- begin: FormField slots -->
			<template v-if="$slots.labelAside" #labelAside>
				<slot name="labelAside" />
			</template>
			<template v-if="$slots.help" #help>
				<slot name="help" />
			</template>
			<template v-if="$slots.message" #message="{ messageId }">
				<slot name="message" :message-id="messageId" />
			</template>
			<template v-if="$slots.fieldStatus" #fieldStatus>
				<slot name="fieldStatus" />
			</template>
			<!-- end: FormField slots -->
		</form-field>
	</checkbox-group-root>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-checkboxGroupField {
	display: flex;
	flex-direction: column;
	gap: $space-2xs;
}
</style>

<script setup lang="ts">
import { CheckboxGroupRoot } from 'reka-ui';
import { provide, computed, toRef } from 'vue';
import FormField from '../FormField/FormField.vue';
import { FormFieldProps } from '../FormField/FormField.types';
import { extractFormFieldProps } from '../FormField/FormField.utils';
import {
	CHECKBOX_SIZES,
	CHECKBOX_ELEVATIONS,
	type CheckboxState,
	CHECKBOX_STATES,
} from '../Checkbox/Checkbox.consts';
import { CHECKBOX_GROUP_INJECTION_KEY } from './CheckboxGroupField.consts';
import { FORM_FIELD_STATES, FormFieldState } from '../FormField';
import { CheckboxGroupFieldProps, CheckboxGroupFieldSlots } from './CheckboxGroupField.types';

const {
	size = CHECKBOX_SIZES.SMALL,
	elevation = CHECKBOX_ELEVATIONS.NONE,
	...rest
} = defineProps<CheckboxGroupFieldProps>();

defineSlots<CheckboxGroupFieldSlots>();

const modelValue = defineModel<Array<string>>({
	default: [],
});

const formFieldProps = computed<FormFieldProps>(() => {
	return extractFormFieldProps(rest);
});

const mappedState = computed(() => {
	const stateMap: Record<FormFieldState, CheckboxState> = {
		[FORM_FIELD_STATES.DEFAULT]: CHECKBOX_STATES.DEFAULT,
		[FORM_FIELD_STATES.ERROR]: CHECKBOX_STATES.ERROR,
		[FORM_FIELD_STATES.DISABLED]: CHECKBOX_STATES.DISABLED,
		[FORM_FIELD_STATES.SUCCESS]: CHECKBOX_STATES.DEFAULT,
	};

	return stateMap[formFieldProps.value.state || CHECKBOX_STATES.DEFAULT];
});

// Provide context for child checkboxes
provide(CHECKBOX_GROUP_INJECTION_KEY, {
	size: toRef(() => size),
	state: mappedState,
	elevation: toRef(() => elevation),
});
</script>
