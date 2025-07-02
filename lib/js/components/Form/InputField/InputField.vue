<template>
	<form-field v-bind="formFieldProps">
		<template #field="{ fieldId, messageId }">
			<div
				:class="[
					'ds-inputField',
					{
						'-ds-error': formFieldProps.state === FORM_FIELD_STATES.ERROR,
						'-ds-disabled': formFieldProps.state === FORM_FIELD_STATES.DISABLED,
					},
				]"
			>
				<icon
					v-if="leftIcon"
					:icon="leftIcon"
					class="ds-inputField__leftIcon"
					:size="ICON_SIZES.X_SMALL"
				/>
				<input
					v-bind="finalInputProps"
					:id="fieldId"
					v-model="value"
					class="ds-inputField__input"
					:aria-describedby="messageId"
				/>
				<div v-if="suffixText" class="ds-inputField__suffixText">
					{{ suffixText }}
				</div>
				<slot name="action" />
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

.ds-inputField {
	$root: &;

	align-items: center;
	align-self: stretch;
	background: $color-default-background;
	border: $border-xs solid $color-neutral-border-strong;
	border-radius: $radius-s;
	box-shadow: $shadow-inset-m;
	display: flex;
	gap: $space-2xs;
	height: 32px;
	padding: 0 $space-2xs;

	&:focus-within {
		border-color: $color-primary-border;
	}

	&.-ds-error:not(:focus-within) {
		border-color: $color-danger-border;
	}

	&:hover:not(.-ds-disabled) {
		border-color: $color-neutral-border-strong-hovered;
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

		#{$root}__leftIcon {
			color: $color-neutral-icon-weak-disabled;
		}
	}

	&__input {
		@include formLabel-m-default-regular;

		background: transparent;
		// hacky solution to override default browser styles for autofill
		background-clip: text !important;
		border: none;
		color: $color-neutral-text-heavy;
		flex: 1;
		height: 100%;
		// override default browser min-width
		min-width: 0;
		outline: none;

		&::placeholder {
			color: $color-neutral-text-weak;
		}
	}

	&__leftIcon {
		color: $color-neutral-icon-weak;
	}

	&__suffixText {
		@include formLabel-m-default-regular;

		color: $color-neutral-text;
	}
}
</style>

<script lang="ts" setup>
import { computed, InputHTMLAttributes } from 'vue';
import FormField, { FORM_FIELD_STATES, FormFieldProps } from '../FormField';
import Icon, { ICON_SIZES } from '../../Icons/Icon';
import { extractFormFieldProps } from '../FormField/FormField.utils';
import { InputFieldProps, InputFieldSlots } from './InputField.types';
import { useInputFieldWithinForm } from './useInputFieldWithinForm';

const { inputProps, leftIcon, suffixText, name, ...rest } = defineProps<InputFieldProps>();
defineSlots<InputFieldSlots>();
const modelValue = defineModel<string>();

const {
	value,
	errors,
	onInput: onFormFieldInput,
	onBlur: onFormFieldBlur,
} = useInputFieldWithinForm(() => name, modelValue);

const formFieldProps = computed<FormFieldProps>(() => {
	// this is needed to avoid passing modelValue to FormField as prop
	const extractedProps = extractFormFieldProps(rest);

	return {
		...extractedProps,
		messageText: extractedProps.messageText ?? errors.value[0],
		state: extractedProps.state ?? (errors.value[0] ? FORM_FIELD_STATES.ERROR : undefined),
	};
});

const finalInputProps = computed<InputHTMLAttributes>(() => {
	return {
		disabled: formFieldProps.value.state === FORM_FIELD_STATES.DISABLED,
		...inputProps,
		onInput: (event: Event) => {
			onFormFieldInput();
			inputProps?.onInput?.(event);
		},
		onBlur: (event: FocusEvent) => {
			onFormFieldBlur(event);
			inputProps?.onBlur?.(event);
		},
	};
});
</script>
