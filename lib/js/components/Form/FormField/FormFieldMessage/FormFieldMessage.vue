<template>
	<div
		:id="messageId"
		:class="[
			'ds-formFieldMessage',
			{
				['-ds-error']: variant === FORM_FIELD_MESSAGE_VARIANTS.ERROR,
				['-ds-success']: variant === FORM_FIELD_MESSAGE_VARIANTS.SUCCESS,
				['-ds-disabled']: variant === FORM_FIELD_MESSAGE_VARIANTS.DISABLED,
			},
		]"
	>
		<div v-if="variantIcon" class="ds-formFieldMessage__iconWrapper">
			<icon :icon="variantIcon" :size="ICON_SIZES.XX_SMALL" />
		</div>
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../../styles/settings/spacings';
@import '../../../../../styles/settings/typography/tokens';
@import '../../../../../styles/settings/colors/tokens';

.ds-formFieldMessage {
	$root: &;

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

		#{$root}.-ds-error & {
			color: $color-danger-icon;
		}

		#{$root}.-ds-success & {
			color: $color-success-icon;
		}
	}
}
</style>

<script lang="ts" setup>
import { FORM_FIELD_MESSAGE_VARIANTS, FormFieldMessageVariant } from './FormFieldMessage.consts';
import Icon, { ICON_SIZES, ICONS } from '../../../Icons/Icon';
import { computed } from 'vue';

const { variant = FORM_FIELD_MESSAGE_VARIANTS.DEFAULT, messageId } = defineProps<{
	variant?: FormFieldMessageVariant;
	messageId: string;
}>();

defineSlots<{
	default: () => any;
}>();

const variantIcon = computed(() => {
	switch (variant) {
		case FORM_FIELD_MESSAGE_VARIANTS.ERROR:
			return ICONS.FA_CIRCLE_EXCLAMATION;
		case FORM_FIELD_MESSAGE_VARIANTS.SUCCESS:
			return ICONS.FA_CIRCLE_CHECK;
		default:
			return null;
	}
});
</script>
