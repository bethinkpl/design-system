import { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';

const meta: Meta<typeof FormField> = {
	title: 'Components/Form/FormField',
	component: FormField,
	render: (args) => ({
		components: { FormField, HelpButton },
		setup() {
			return {
				args,
			};
		},
		template: `<FormField v-bind="args">
			<template #help>
				<HelpButton modal-title="Help modal title">
					<template #modalContent>
						Modal
					</template>
				</HelpButton>
			</template>
			<template v-if="args.labelAside" #labelAside>
				<div v-html="args.labelAside" />
			</template>
			<template #field="{fieldId, messageId}">
				<input :id="fieldId" :aria-describedby="messageId" />
			</template>
			<template v-if="args.fieldStatus" #fieldStatus>
				<div v-html="args.fieldStatus" />
			</template>
			<template v-if="args.message" #message>
				<div v-html="args.message" />
			</template>
		</FormField>`,
	}),
	argTypes: {
		label: {
			control: 'text',
		},
		isRequired: {
			control: 'boolean',
		},
		labelInfo: {
			control: 'text',
		},
		subLabel: {
			control: 'text',
		},
		fieldId: {
			control: 'text',
		},
		labelAside: {
			control: 'text',
		},
		message: {
			control: 'text',
		},
		fieldStatus: {
			control: 'text',
		},
		messageText: {
			control: 'text',
		},
		messageErrorText: {
			control: 'text',
		},
		messageSuccessText: {
			control: 'text',
		},
	},
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Interactive: Story = {
	args: {
		label: 'Label',
		isRequired: false,
		labelInfo: '(opcjonalne)',
		subLabel: 'Sublabel write here',
		labelAside: 'Label aside',
		message: '',
		fieldStatus: 'Field status',
		messageText: '',
		messageErrorText: 'Error message text',
		messageSuccessText: '',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13267-86654&t=ezos5nMsGrZyaqmC-4',
	},
};
