import { Meta, StoryObj } from '@storybook/vue3';
import TextAreaField from './TextAreaField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { reactive, toRefs } from 'vue';

const meta: Meta<typeof TextAreaField> = {
	title: 'Components/Form/TextAreaField',
	component: TextAreaField,
	render: (args) => ({
		components: { TextAreaField, HelpButton, Modal },
		setup() {
			const { help, labelAside, message, fieldStatus, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs });

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				FORM_FIELD_STATES,
			};
		},
		data: () => ({
			value: '',
		}),
		template: `<TextAreaField v-bind="props" v-model="value">
			<template v-if="help" #help>
				<HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
					<template #modalContent>
						Modal
					</template>
				</HelpButton>
			</template>
			<template #labelAside v-if="labelAside">
				<div v-html="labelAside" />
			</template>
			<template #fieldStatus v-if="fieldStatus">
				<div v-html="fieldStatus" />
			</template>
			<template #message v-if="message">
				<div v-if="message" v-html="message" />
			</template>
		</TextAreaField>`,
	}),
	argTypes: {
		...argTypes,
		inputProps: {
			control: 'object',
		},
		isAutoresizing: {
			control: 'boolean',
		},
	},
};
export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Interactive: Story = {
	args: {
		...args,
		isAutoresizing: false,
		inputProps: {
			rows: 3,
			placeholder: 'TextArea placeholder',
		},
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13216-6572',
		},
	},
};

/**
 * The field grows with its content instead of showing the resize handle. `rows` stays the minimum.
 */
export const Autoresizing: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		isAutoresizing: true,
	},
	parameters: {},
};

export const Error: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: FORM_FIELD_STATES.ERROR,
		messageText: 'Error message text',
	},
	parameters: {},
};
