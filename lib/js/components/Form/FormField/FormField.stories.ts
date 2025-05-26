import { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';

const meta: Meta<typeof FormField> = {
	title: 'Components/Form/FormField',
	component: FormField,
	render: (args) => ({
		components: { FormField },
		setup() {
			return {
				args,
			};
		},
		template: `<FormField v-bind="args">
			<template #help>
				<div v-html="args.help" />
			</template>
			<template #labelAside>
				<div v-html="args.labelAside" />
			</template>
			<template #field="{fieldId, messageId}">
				<input :id="fieldId" :aria-describedby="messageId" />
			</template>
			<template #fieldStatus>
				<div v-html="args.fieldStatus" />
			</template>
			<template #message v-if="args.message">
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
		help: {
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
		help: 'Help',
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
