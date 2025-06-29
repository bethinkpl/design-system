import { Meta, StoryObj } from '@storybook/vue3';
import InputField from './InputField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { ICONS } from '../../Icons/Icon';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { reactive, toRefs } from 'vue';

const meta: Meta<typeof InputField> = {
	title: 'Components/Form/InputField',
	component: InputField,
	render: (args) => ({
		components: { InputField, HelpButton, Modal },
		setup() {
			const { help, labelAside, message, fieldStatus, action, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs });

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				action,
				FORM_FIELD_STATES,
				ICONS,
			};
		},
		data: () => ({
			value: '',
		}),
		template: `<InputField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
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
			<template #action v-if="action">
				<div v-html="action" />
			</template>
		</InputField>`,
	}),
	argTypes: {
		...argTypes,
		leftIcon: {
			control: 'select',
			options: [null, ...Object.keys(ICONS)],
		},
		suffixText: {
			control: 'text',
		},
		action: {
			control: 'text',
		},
	},
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Interactive: Story = {
	args: {
		...args,
		leftIcon: null,
		suffixText: '%',
		action: 'Action',
		inputProps: {
			placeholder: 'Placeholder',
		},
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13198-38645&t=BlkZV83eerbMSMyv-4',
		},
	},
};

export const Error: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: FORM_FIELD_STATES.ERROR,
		messageText: 'Error message text',
	},
};
