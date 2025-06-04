<template>
	<div
		:id="messageId"
		:class="[
			'ds-formFieldMessage',
			{
				['-ds-error']: state === FORM_FIELD_STATES.ERROR,
				['-ds-success']: state === FORM_FIELD_STATES.SUCCESS,
				['-ds-disabled']: state === FORM_FIELD_STATES.DISABLED,
			},
		]"
	>
		<div v-if="stateIcon" class="ds-formFieldMessage__iconWrapper">
			<icon :icon="stateIcon" :size="ICON_SIZES.XX_SMALL" />
		</div>
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../../styles/settings/spacings';
@import '../../../../../styles/settings/typography/tokens';
@import '../../../../../styles/settings/colors/tokens';

.ds-formFieldMessage {
	// if you ever change the line-height here, make sure to also update the height of the iconWrapper
	@include formCaption-m-default-regular;

	align-items: center;
	color: $color-neutral-text;
	display: flex;
	gap: $space-4xs;

	&.-ds-error {
		color: $color-danger-text;
	}

	&.-ds-success {
		color: $color-success-text;
	}

	&.-ds-disabled {
		color: $color-neutral-text-disabled;
	}

	&__iconWrapper {
		align-items: center;
		display: flex;
		// height is equal to the line-height of the text to ensure proper alignment
		// if we ever decide to introduce different sizes for the messages, we should adjust this accordingly
		height: $typography-line-height-3xs;
	}
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
import { FORM_FIELD_STATES, FormFieldState } from '../FormField.consts';
import Icon, { ICON_SIZES, ICONS } from '../../../Icons/Icon';

const { state = FORM_FIELD_STATES.DEFAULT, messageId } = defineProps<{
	state?: FormFieldState;
	messageId: string;
}>();

defineSlots<{
	default: () => any;
}>();

const stateIcon = computed(() => {
	switch (state) {
		case FORM_FIELD_STATES.ERROR:
			return ICONS.FA_CIRCLE_EXCLAMATION;
		case FORM_FIELD_STATES.SUCCESS:
			return ICONS.FA_CIRCLE_CHECK;
		default:
			return null;
	}
});
</script>
