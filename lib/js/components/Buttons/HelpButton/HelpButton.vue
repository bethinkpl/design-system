<template>
	<tooltip :text="tooltipText" :inline="true">
		<icon-button
			:icon="ICONS.FA_CIRCLE_QUESTION"
			:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
			:size="ICON_BUTTON_SIZES.X_SMALL"
			:touchable="false"
			v-bind="$attrs"
			@click="isOpen = true"
		/>
	</tooltip>
	<slot v-if="isOpen" name="modal" @close="onClose">
		<modal :header-title="modalTitle" @close-modal="onClose">
			<slot name="modalContent" />
		</modal>
	</slot>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../IconButton';
import Tooltip from '../../Tooltip';
import { ICONS } from '../../Icons/Icon';
import Modal from '../../Modals/Modal';

defineProps<{
	tooltipText?: string;
	modalTitle?: string;
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
