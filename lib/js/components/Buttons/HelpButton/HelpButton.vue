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
	<slot v-if="isOpen" name="modal" @close="onClose"></slot>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../IconButton';
import Tooltip from '../../Tooltip';
import { ICONS } from '../../Icons/Icon';

defineProps<{
	tooltipText?: string;
}>();

defineSlots<{
	modal: (props: { onClose: () => void }) => any;
}>();

defineOptions({
	inheritAttrs: false,
});

const isOpen = ref(false);

const onClose = () => {
	isOpen.value = false;
};
</script>
