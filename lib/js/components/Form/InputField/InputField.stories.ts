import { Meta, StoryObj } from '@storybook/vue3';
import InputField from './InputField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { ICONS } from '../../Icons/Icon';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';

const meta: Meta<typeof InputField> = {
	title: 'Components/Form/InputField',
	component: InputField,
	render: (args) => ({
		components: { InputField, HelpButton, Modal },
		setup() {
			return {
				args,
				ICONS,
				FORM_FIELD_STATES,
			};
		},
		data: () => ({
			value: '',
		}),
		template: `<InputField v-bind="args" :left-icon="args.leftIcon ? ICONS[args.leftIcon] : null" v-model="value">
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
			<template #action v-if="args.action">
				<div v-html="args.action" />
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
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13198-38645&t=BlkZV83eerbMSMyv-4',
	},
};
