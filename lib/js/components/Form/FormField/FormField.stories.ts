import { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { FORM_FIELD_STATES } from './FormField.consts';
import { args, argTypes } from './FormField.stories.shared';
import { reactive, toRefs } from 'vue';

const meta: Meta<typeof FormField> = {
	title: 'Components/Form/FormField',
	component: FormField,
	render: (args) => ({
		components: { FormField, Modal, HelpButton },
		setup() {
			const { field, help, labelAside, message, fieldStatus, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs }); // Create reactive props

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				field,
				FORM_FIELD_STATES,
			};
		},
		template: `<FormField v-bind="props">
			<template #field="{fieldId, messageId}">
				<input v-if="!field" :id="fieldId" :aria-describedby="messageId" />
				<div v-else v-html="field" />
			</template>
			<template #help>
				<HelpButton v-if="!help" :is-disabled="props.state === FORM_FIELD_STATES.DISABLED">
					<template #modal="{onClose}">
						<Modal @close-modal="onClose">Modal</Modal>
					</template>
				</HelpButton>
				<div v-else v-html="help" />
			</template>
			<template #labelAside>
				<div v-html="labelAside" />
			</template>
			<template #fieldStatus>
				<div v-html="fieldStatus" />
			</template>
			<template #message>
				<div v-if="message" v-html="message" />
			</template>
		</FormField>`,
	}),
	argTypes: {
		...argTypes,
		field: {
			control: 'text',
		},
	},
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Interactive: Story = {
	args: {
		...args,
		field: '',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13267-86654&t=ezos5nMsGrZyaqmC-4',
	},
};
