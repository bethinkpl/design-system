import { toRefs } from 'vue';
import { Meta, StoryObj } from '@storybook/vue3';
import HelpButton from './HelpButton.vue';
import Modal from '../../Modals/Modal';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';

const meta: Meta<ComponentProps<typeof HelpButton> & ComponentSlots<typeof HelpButton>> = {
	title: 'Components/Buttons/HelpButton',
	component: HelpButton,
	render: (args) => ({
		components: { HelpButton, Modal },
		setup() {
			const { tooltipText, modalTitle, modalContent } = toRefs(args);

			return {
				tooltipText,
				modalTitle,
				modalContent,
			};
		},
		template: `<HelpButton :tooltip-text="tooltipText" :modal-title="modalTitle">
			<template v-if="modalContent || modalTitle" #modalContent>
				<div v-html="modalContent" />
			</template>
			<template v-else #modal="{onClose}">
				<modal @close-modal="onClose">test</modal>
			</template>
		</HelpButton>`,
	}),
	argTypes: {
		modalTitle: {
			control: 'text',
		},
		modalContent: {
			control: 'text',
		},
	},
};
export default meta;

type Story = StoryObj<typeof HelpButton>;

export const Interactive: Story = {
	args: {
		tooltipText: 'Tooltip text',
		modalContent: '',
		modalTitle: '',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13519-192984&m=dev',
	},
};
