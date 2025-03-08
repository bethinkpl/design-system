<template>
	<field-root class="fieldRoot" :invalid="!!errorText">
		<field-label class="fieldLabel">Label</field-label>
		<field-input v-model="value" v-bind="inputProps" class="fieldInput" />
		<field-helper-text v-if="helperText">
			{{ helperText }}
		</field-helper-text>
		<field-error-text>{{ errorText }}</field-error-text>
	</field-root>
</template>

<style lang="scss">
.fieldRoot {
	display: block;
}

.fieldLabel {
	display: block;
}

.fieldInput {
	padding: 4px;
	border-radius: 4px;
	border: 1px solid black;
}
</style>

<script setup lang="ts">
import {
	FieldRoot,
	FieldLabel,
	FieldInput,
	FieldHelperText,
	FieldErrorText,
	FieldInputProps,
} from '@ark-ui/vue/field';

defineProps<{
	helperText?: string;
	errorText?: string;
	inputProps?: FieldInputProps;
}>();

const value = defineModel();
</script>
