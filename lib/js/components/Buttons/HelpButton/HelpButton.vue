<template>
	<tooltip :text="tooltipText" :inline="true">
		<icon-button
			:icon="ICONS.FA_CIRCLE_QUESTION"
			:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
			:size="size"
			:state="isDisabled ? ICON_BUTTON_STATES.DISABLED : ICON_BUTTON_STATES.DEFAULT"
			:touchable="false"
			v-bind="$attrs"
			@click="isOpen = true"
		/>
	</tooltip>
	<slot v-if="isOpen" name="modal" :on-close="onClose">
		<modal
			:header-title="modalTitle"
			:size="modalSize"
			:footer-primary-button-text="t('ds.globals.confirmation')"
			@close-modal="onClose"
			@primary-button-click="onClose"
		>
			<slot name="modalContent" />
		</modal>
	</slot>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconButton, {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
	IconButtonSize,
} from '../IconButton';
import Tooltip from '../../Tooltip';
import { ICONS } from '../../Icons/Icon';
import Modal, { ModalSize } from '../../Modals/Modal';
import { useLegacyI18n } from '../../../composables/useLegacyI18n';

const { t } = useLegacyI18n();

const {
	tooltipText,
	isDisabled,
	modalTitle,
	modalSize,
	size = ICON_BUTTON_SIZES.X_SMALL,
} = defineProps<{
	tooltipText?: string;
	isDisabled?: boolean;
	modalTitle?: string;
	modalSize?: ModalSize;
	size?: IconButtonSize;
}>();

defineSlots<{
	modal?: (props: { onClose: () => void }) => any;
	modalContent?: () => any;
}>();

defineOptions({
	inheritAttrs: false,
});

const isOpen = ref(false);

const onClose = () => {
	isOpen.value = false;
};
</script>
