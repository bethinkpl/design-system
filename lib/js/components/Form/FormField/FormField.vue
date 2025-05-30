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
			<slot name="field" :field-id="id" :message-id="messageId"></slot>
		</div>
		<div v-if="$slots.message || $slots.fieldStatus" class="ds-formField__footerRow">
			<div v-if="$slots.message" class="ds-formField__message">
				<slot name="message" :message-id="messageId"></slot>
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
import { computed, useId } from 'vue';

const {
	label,
	isRequired = false,
	subLabel,
	labelInfo,
	fieldId,
} = defineProps<{
	label?: string;
	isRequired?: boolean;
	labelInfo?: string;
	subLabel?: string;
	fieldId?: string;
}>();

defineSlots<{
	labelAside?: () => any;
	help?: () => any;
	field: (props: { fieldId: string; messageId: string }) => any;
	message?: (props: { messageId: string }) => any;
	fieldStatus?: () => any;
}>();

const baseId = useId();
const id = computed(() => fieldId || `form-field-${baseId}`);
const messageId = computed(() => `${id.value}-message`);
</script>
