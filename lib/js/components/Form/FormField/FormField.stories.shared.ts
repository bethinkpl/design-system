import { FORM_FIELD_STATES } from './FormField.consts';
import { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';

export const argTypes: Meta<typeof FormField>['argTypes'] = {
	label: {
		control: 'text',
	},
	state: {
		control: 'select',
		options: Object.values(FORM_FIELD_STATES),
	},
	hasRequiredIndicator: {
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
	help: {
		control: 'boolean',
	},
	messageText: {
		control: 'text',
	},
};

export const args: StoryObj<typeof FormField>['args'] = {
	label: 'Label',
	state: FORM_FIELD_STATES.ERROR,
	hasRequiredIndicator: false,
	labelInfo: '(opcjonalne)',
	subLabel: 'Sublabel write here',
	labelAside: 'Label aside',
	message: '',
	help: true,
	fieldStatus: 'Field status',
	messageText: 'Error message text',
};
