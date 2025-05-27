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
			return {
				args,
			};
		},
		template: `<HelpButton v-bind="args">
			<template #modal="{onClose}">
				<modal @close-modal="onClose">test</modal>
			</template>
		</HelpButton>`,
	}),
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HelpButton>;

export const Interactive: Story = {
	args: {
		tooltipText: 'Tooltip text',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13519-192984&m=dev',
	},
};
