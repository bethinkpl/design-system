<template>
	<div class="ds-formField">
		<div v-if="label || subLabel || $slots.labelAside" class="ds-formField__labels">
			<div class="ds-formField__labelRow">
				<div class="ds-formField__labelWrapper">
					<label v-if="label" class="ds-formField__label" :for="id">
						<span class="ds-formField__labelText">{{ label }}</span>
						<span
							v-if="isRequired"
							class="ds-formField__labelRequired"
							aria-hidden="true"
						>
							*
						</span>
						<span v-if="labelInfo" class="ds-formField__labelInfo">{{
							labelInfo
						}}</span>
					</label>
					<slot name="help"></slot>
				</div>
				<div v-if="$slots.labelAside" class="ds-formField__labelAside">
					<slot name="labelAside"></slot>
				</div>
			</div>
			<div class="ds-formField__subLabelRow">{{ subLabel }}</div>
		</div>
		<div class="ds-formField__mainRow">
			<slot name="field"></slot>
		</div>
		<div v-if="hasMessage || $slots.fieldStatus" class="ds-formField__footerRow">
			<div class="ds-formField__message">
				<slot name="message">
					<form-field-message v-if="simpleMessageText" :variant="simpleMessageVariant">
						{{ simpleMessageText }}
					</form-field-message>
				</slot>
			</div>
			<div v-if="$slots.fieldStatus" class="ds-formField__fieldStatus">
				<slot name="fieldStatus"></slot>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';

.ds-formField {
	display: flex;
	flex-direction: column;
	gap: $space-5xs;

	&__labelRow {
		align-items: center;
		display: flex;
		gap: $space-xs;
	}

	&__subLabelRow {
		@include formLabel-s-default-regular;

		align-items: center;
		color: $color-neutral-text;
		display: flex;
		gap: $space-2xs;
		padding-bottom: $space-2xs;
	}

	&__labelWrapper {
		align-items: center;
		display: flex;
		flex: 1 0 0;
		gap: $space-5xs;
		min-height: 28px;
	}

	&__label {
		align-items: center;
		display: flex;
		gap: $space-5xs;
	}

	&__labelText {
		@include formLabel-m-default-bold;

		color: $color-neutral-text-strong;
	}

	&__labelRequired {
		@include formLabel-m-default-regular;

		color: $color-danger-text;
	}

	&__labelInfo {
		@include formLabel-s-default-regular-italic;

		color: $color-neutral-text;
	}

	&__labelAside {
		align-items: center;
		display: flex;
		gap: $space-4xs;
		min-height: 28px;
	}

	&__mainRow {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 28px;
	}

	&__footerRow {
		align-items: flex-start;
		display: flex;
		gap: $space-2xs;
		padding-top: $space-4xs;
	}

	&__message {
		align-items: flex-start;
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
	}

	&__fieldStatus {
		align-items: flex-start;
		display: flex;
		gap: $space-4xs;
	}
}
</style>

<script lang="ts" setup>
import { computed, provide, useId } from 'vue';
import FormFieldMessage from './FormFieldMessage/FormFieldMessage.vue';
import { FORM_FIELD_MESSAGE_VARIANTS } from './FormFieldMessage/FormFieldMessage.consts';
import { FORM_FIELD_ID } from './FormField.consts';

const {
	label,
	isRequired = false,
	subLabel,
	labelInfo,
	fieldId,
	messageText,
	messageErrorText,
	messageSuccessText,
} = defineProps<{
	label?: string;
	isRequired?: boolean;
	labelInfo?: string;
	subLabel?: string;
	fieldId?: string;
	messageText?: string;
	messageErrorText?: string;
	messageSuccessText?: string;
}>();

const slots = defineSlots<{
	labelAside?: () => any;
	help?: () => any;
	field: () => any;
	message?: () => any;
	fieldStatus?: () => any;
}>();

const baseId = useId();
const id = computed(() => fieldId || `form-field-${baseId}`);
const { hasMessage, simpleMessageText, simpleMessageVariant } = useMessage();

provide(FORM_FIELD_ID, id);

function useMessage() {
	const hasMessage = computed(() => {
		return !!(slots.message || messageText || messageErrorText || messageSuccessText);
	});

	const simpleMessageText = computed(() => {
		return messageErrorText || messageSuccessText || messageText;
	});

	const simpleMessageVariant = computed(() => {
		if (messageErrorText) {
			return FORM_FIELD_MESSAGE_VARIANTS.ERROR;
		}
		if (messageSuccessText) {
			return FORM_FIELD_MESSAGE_VARIANTS.SUCCESS;
		}
		return FORM_FIELD_MESSAGE_VARIANTS.DEFAULT;
	});

	return {
		hasMessage,
		simpleMessageText,
		simpleMessageVariant,
	};
}
</script>
