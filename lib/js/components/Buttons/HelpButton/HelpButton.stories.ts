import { toRefs } from 'vue';
import { Meta, StoryObj } from '@storybook/vue3';
import HelpButton from './HelpButton.vue';
import Modal, { MODAL_SIZES } from '../../Modals/Modal';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import DsBanner, { BANNER_COLORS } from '../../Banner';
import { ICONS } from '../../Icons/Icon';
import { BUTTON_TYPES } from '../Button';

const meta: Meta<ComponentProps<typeof HelpButton> & ComponentSlots<typeof HelpButton>> = {
	title: 'Components/Buttons/HelpButton',
	component: HelpButton,
	render: (args) => ({
		components: { HelpButton, Modal, DsBanner },
		setup() {
			const { tooltipText, modalTitle, modalContent, modalSize, isDisabled } = toRefs(args);

			return {
				tooltipText,
				isDisabled,
				modalTitle,
				modalContent,
				modalSize,
				BANNER_COLORS,
			};
		},
		template: `<HelpButton :tooltip-text="tooltipText" :modal-title="modalTitle" :modal-size="modalSize" :is-disabled="isDisabled">
			<template v-if="modalContent || modalTitle" #modalContent>
				<div v-html="modalContent" />
			</template>
			<template v-else #modal="{onClose}">
				<modal @close-modal="onClose">test</modal>
			</template>
		</HelpButton>
		<ds-banner style="margin-top: 20px;" :color="BANNER_COLORS.WARNING" title="Uwaga, z uwagi na brak lokalizacji w DS, na Modalu (tworzonym za pomocą propsa modalTitle i slota modalContent) nie wyświetla się Button w footerze do zamykania modala. Poprawimy to w ramach LMS-2762. Jako alternatywa można skorzystać ze slota modal i wstawić do modala co się chce ;)" />`,
	}),
	argTypes: {
		modalTitle: {
			control: 'text',
		},
		modalContent: {
			control: 'text',
		},
		modalSize: {
			control: 'select',
			options: Object.values(MODAL_SIZES),
		},
		isDisabled: {
			control: 'boolean',
		},
	},
};
export default meta;

type Story = StoryObj<typeof HelpButton>;

export const Interactive: Story = {
	args: {
		tooltipText: 'Tooltip text',
		isDisabled: false,
		modalContent: '',
		modalTitle: '',
		modalSize: MODAL_SIZES.MEDIUM,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13519-192453',
	},
};
