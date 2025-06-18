<template>
	<div
		:class="[
			'ds-formField',
			{
				'-ds-disabled': state === FORM_FIELD_STATES.DISABLED,
			},
		]"
	>
		<div v-if="label || subLabel || $slots.labelAside" class="ds-formField__labels">
			<div class="ds-formField__labelRow">
				<div class="ds-formField__labelWrapper">
					<label v-if="label" class="ds-formField__label" :for="id">
						<span class="ds-formField__labelText">{{ label }}</span>
						<span
							v-if="hasRequiredIndicator"
							class="ds-formField__labelRequired"
							aria-hidden="true"
							>*</span
						>
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
			<div v-if="subLabel" class="ds-formField__subLabelRow">{{ subLabel }}</div>
		</div>
		<div class="ds-formField__field">
			<slot name="field" :field-id="id" :message-id="messageId"></slot>
		</div>
		<div v-if="hasMessage || $slots.fieldStatus" class="ds-formField__footerRow">
			<div class="ds-formField__message">
				<slot name="message" :message-id="messageId">
					<form-field-message v-if="messageText" :state="state" :message-id="messageId">
						{{ messageText }}
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
	$root: &;

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

		color: $color-neutral-text;
		padding-bottom: $space-2xs;

		#{$root}.-ds-disabled & {
			color: $color-neutral-text-disabled;
		}
	}

	&__labelWrapper {
		align-items: flex-start;
		display: flex;
		flex: 1 0 0;
		gap: $space-5xs;
		padding: $space-4xs 0;
	}

	&__label {
		@include formLabel-m-default-bold;
		margin: $space-5xs 0;
	}

	&__labelText {
		color: $color-neutral-text-strong;

		#{$root}.-ds-disabled & {
			color: $color-neutral-text-strong-disabled;
		}
	}

	&__labelRequired {
		@include formLabel-m-default-regular;

		color: $color-danger-text;
		margin-left: $space-5xs;

		#{$root}.-ds-disabled & {
			color: $color-danger-text-disabled;
		}
	}

	&__labelInfo {
		@include formLabel-s-default-regular-italic;

		color: $color-neutral-text;
		margin-left: $space-5xs;

		#{$root}.-ds-disabled & {
			color: $color-neutral-text-disabled;
		}
	}

	&__labelAside {
		align-items: center;
		display: flex;
		gap: $space-4xs;
		min-height: 28px;
	}

	&__field {
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
		flex: 1 0 0;
	}

	&__fieldStatus {
		align-items: flex-start;
		display: flex;
		gap: $space-4xs;
	}
}
</style>

<script lang="ts" setup>
import { computed, useId } from 'vue';
import FormFieldMessage from './FormFieldMessage/FormFieldMessage.vue';
import { FORM_FIELD_STATES } from './FormField.consts';
import { FormFieldProps, FormFieldSlots } from './FormField.types';

const {
	label,
	hasRequiredIndicator = false,
	subLabel,
	labelInfo,
	fieldId,
	messageText,
	state = FORM_FIELD_STATES.DEFAULT,
} = defineProps<FormFieldProps>();

const slots = defineSlots<FormFieldSlots>();

const baseId = useId();
const id = computed(() => fieldId || `form-field-${baseId}`);
const { hasMessage, messageId } = useMessage();

function useMessage() {
	const hasMessage = computed(() => {
		return !!(slots.message || messageText);
	});

	const messageId = computed(() => `${id.value}-message`);

	return {
		hasMessage,
		messageId,
	};
}
</script>
