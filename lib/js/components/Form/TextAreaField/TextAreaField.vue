<template>
	<form-field v-bind="formFieldProps">
		<template #field="{ fieldId, messageId }">
			<div
				:class="[
					'ds-textAreaField',
					{
						'-ds-autoresizing': isAutoresizing,
						'-ds-error': formFieldProps.state === FORM_FIELD_STATES.ERROR,
						'-ds-disabled': isDisabled,
					},
				]"
			>
				<text-area-field-autosized
					v-if="isAutoresizing"
					v-bind="finalInputProps"
					:id="fieldId"
					v-model="value"
					class="ds-textAreaField__input"
					:aria-describedby="hasMessage ? messageId : undefined"
				/>
				<textarea
					v-else
					v-bind="finalInputProps"
					:id="fieldId"
					v-model="value"
					class="ds-textAreaField__input"
					:aria-describedby="hasMessage ? messageId : undefined"
				/>
			</div>
		</template>
		<!-- begin: FormField slots -->
		<template v-if="$slots.help" #help>
			<slot name="help" />
		</template>
		<template v-if="$slots.labelAside" #labelAside>
			<slot name="labelAside" />
		</template>
		<template v-if="$slots.message" #message="{ messageId }">
			<slot name="message" :message-id="messageId" />
		</template>
		<template v-if="$slots.fieldStatus" #fieldStatus>
			<slot name="fieldStatus" />
		</template>
		<!-- end: FormField slots -->
	</form-field>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/shadows';

.ds-textAreaField {
	$root: &;

	align-self: stretch;
	background: $color-default-background;
	border: $border-xs solid $color-neutral-border-strong;
	border-radius: $radius-s;
	box-shadow: $shadow-inset-m;
	display: flex;

	&__input {
		@include formText-s-default-regular;

		background: transparent;
		border: none;
		color: $color-neutral-text-heavy;
		flex: 1;
		min-width: 0;
		outline: none;
		padding: $space-4;
		resize: vertical;

		&::placeholder {
			color: $color-neutral-text-weak;
		}
	}

	&:focus-within {
		border-color: $color-primary-border;
	}

	&.-ds-error:not(:focus-within) {
		border-color: $color-danger-border;
	}

	&:hover:not(.-ds-disabled):not(:focus-within) {
		border-color: $color-neutral-border-strong-hovered;
	}

	&.-ds-autoresizing {
		#{$root}__input {
			overflow: hidden;
			resize: none;
		}
	}

	&.-ds-disabled {
		border-color: $color-neutral-border-strong-disabled;
		box-shadow: none;

		#{$root}__input {
			color: $color-neutral-text-heavy-disabled;

			&::placeholder {
				color: $color-neutral-text-weak-disabled;
			}
		}
	}
}
</style>

<script lang="ts" setup>
import { computed, TextareaHTMLAttributes } from 'vue';
import FormField, { FORM_FIELD_STATES, FormFieldProps } from '../FormField';
import { extractFormFieldProps } from '../FormField/FormField.utils';
import TextAreaFieldAutosized from './TextAreaFieldAutosized.vue';
import { TextAreaFieldProps, TextAreaFieldSlots } from './TextAreaField.types';
import { useTextFieldWithinForm } from '../../../composables/useTextFieldWithinForm';

const DEFAULT_ROWS = 3;

const { inputProps, isAutoresizing = false, name, ...rest } = defineProps<TextAreaFieldProps>();

const slots = defineSlots<TextAreaFieldSlots>();
const modelValue = defineModel<string>();

const {
	value,
	errors,
	onInput: onFormFieldInput,
	onBlur: onFormFieldBlur,
} = useTextFieldWithinForm(() => name, modelValue);

const { formFieldProps, isDisabled, hasMessage } = useFormFieldState();
const { finalInputProps } = useTextArea();

function useFormFieldState() {
	const formFieldProps = computed<FormFieldProps>(() =>
		// this is needed to avoid passing modelValue to FormField as prop
		extractFormFieldProps(rest, errors.value),
	);

	const isDisabled = computed(() => formFieldProps.value.state === FORM_FIELD_STATES.DISABLED);

	// Avoids pointing `aria-describedby` at a message element that is never rendered.
	const hasMessage = computed(() => !!(formFieldProps.value.messageText || slots.message));

	return { formFieldProps, isDisabled, hasMessage };
}

function useTextArea() {
	const finalInputProps = computed<TextareaHTMLAttributes>(() => ({
		disabled: isDisabled.value,
		rows: DEFAULT_ROWS,
		...inputProps,
		onInput: (event: Event) => {
			onFormFieldInput();
			inputProps?.onInput?.(event);
		},
		onBlur: (event: FocusEvent) => {
			onFormFieldBlur(event);
			inputProps?.onBlur?.(event);
		},
	}));

	return { finalInputProps };
}
</script>
