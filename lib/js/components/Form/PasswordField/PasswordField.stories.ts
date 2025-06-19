import { Meta, StoryObj } from '@storybook/vue3';
import PasswordField from './PasswordField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { ICONS } from '../../Icons/Icon';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { reactive, toRefs } from 'vue';

const meta: Meta<typeof PasswordField> = {
	title: 'Components/Form/PasswordField',
	component: PasswordField,
	render: (args) => ({
		components: { PasswordField, HelpButton, Modal },
		setup() {
			const { help, labelAside, message, fieldStatus, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs }); // Create reactive props

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				FORM_FIELD_STATES,
				ICONS,
			};
		},
		data: () => ({
			value: '',
		}),
		template: `<PasswordField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
			<template v-if="help" #help>
				<HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED">
					<template #modal="{onClose}">
						<Modal @close-modal="onClose">Modal</Modal>
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
		</PasswordField>`,
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
	},
};
export default meta;

type Story = StoryObj<typeof PasswordField>;

export const Interactive: Story = {
	args: {
		...args,
		leftIcon: null,
		suffixText: '%',
		inputProps: {
			placeholder: 'Placeholder',
		},
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13576-21478&m=dev',
	},
};
