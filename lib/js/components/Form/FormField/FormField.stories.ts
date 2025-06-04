import { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { FORM_FIELD_STATES } from './FormField.consts';
import { args, argTypes } from './FormField.stories.shared';

const meta: Meta<typeof FormField> = {
	title: 'Components/Form/FormField',
	component: FormField,
	render: (args) => ({
		components: { FormField, Modal, HelpButton },
		setup() {
			return {
				args,
				FORM_FIELD_STATES,
			};
		},
		template: `<FormField v-bind="args">
			<template #field="{fieldId, messageId}">
				<input :id="fieldId" :aria-describedby="messageId" />
			</template>
			<template #help>
				<HelpButton :is-disabled="args.state === FORM_FIELD_STATES.DISABLED">
					<template #modal="{onClose}">
						<Modal @close-modal="onClose">Modal</Modal>
					</template>
				</HelpButton>
			</template>
			<template #labelAside>
				<div v-html="args.labelAside" />
			</template>
			<template #fieldStatus>
				<div v-html="args.fieldStatus" />
			</template>
			<template #message>
				<div v-if="args.message" v-html="args.message" />
			</template>
		</FormField>`,
	}),
	argTypes,
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Interactive: Story = {
	args,
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13267-86654&t=ezos5nMsGrZyaqmC-4',
	},
};
