import { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions/decorator';
import { computed } from 'vue';
import PinInputField from './PinInputField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import {
	PIN_INPUT_FIELD_DEFAULT_LENGTH,
	PIN_INPUT_FIELD_STATES,
	PIN_INPUT_FIELD_TYPES,
	PinInputFieldState,
} from './PinInputField.consts';

const meta: Meta<typeof PinInputField> = {
	title: 'Components/Form/PinInputField',
	component: PinInputField,
	decorators: [withActions],
	render: (args) => ({
		components: { PinInputField, HelpButton, Modal },
		setup() {
			const props = computed(() => {
				const { help, labelAside, message, fieldStatus, ...rest } = args;
				return rest;
			});

			return {
				props,
				args,
				PIN_INPUT_FIELD_STATES,
			};
		},
		data: () => ({
			value: '',
		}),
		template: `<PinInputField v-bind="props" v-model="value">
			<template v-if="args.help" #help>
				<HelpButton modal-title="Help modal title">
					<template #modalContent>
						Modal
					</template>
				</HelpButton>
			</template>
			<template #labelAside v-if="args.labelAside">
				<div v-html="args.labelAside" />
			</template>
			<template #fieldStatus v-if="args.fieldStatus">
				<div v-html="args.fieldStatus" />
			</template>
			<template #message v-if="args.message">
				<div v-html="args.message" />
			</template>
		</PinInputField>`,
	}),
	argTypes: {
		...argTypes,
		state: {
			control: 'select',
			options: Object.values(PIN_INPUT_FIELD_STATES),
		},
		length: {
			control: 'number',
		},
		otp: {
			control: 'boolean',
		},
		type: {
			control: 'select',
			options: Object.values(PIN_INPUT_FIELD_TYPES),
		},
		ariaLabel: {
			control: 'text',
		},
	},
};
export default meta;

type Story = StoryObj<typeof PinInputField>;

const actionsParameters = {
	actions: {
		handles: ['complete'],
	},
};

export const Interactive: Story = {
	args: {
		...args,
		state: PIN_INPUT_FIELD_STATES.DEFAULT as PinInputFieldState,
		length: PIN_INPUT_FIELD_DEFAULT_LENGTH,
		otp: true,
		type: PIN_INPUT_FIELD_TYPES.NUMBER,
	},
	parameters: {
		...actionsParameters,
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201---E-commerce?node-id=1763-34732&m=dev',
		},
	},
};

export const Error: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: PIN_INPUT_FIELD_STATES.ERROR,
		messageText: 'Kod jest nieprawidłowy',
	},
	parameters: actionsParameters,
};

export const Loading: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: PIN_INPUT_FIELD_STATES.LOADING,
	},
	parameters: actionsParameters,
};

/**
 * Both `otp` and `type` default on, which suits a numeric one-time code. An alphanumeric code has to
 * opt out of `type: 'number'` — reka silently discards non-digits otherwise.
 */
export const Alphanumeric: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		otp: false,
		type: PIN_INPUT_FIELD_TYPES.TEXT,
	},
	parameters: actionsParameters,
};
