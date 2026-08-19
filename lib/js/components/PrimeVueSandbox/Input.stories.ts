import { Meta, StoryFn } from '@storybook/vue3';
import PrimeInputText from 'primevue/inputtext';

export default {
	title: 'Components/PrimeVue Sandbox/InputText',
} as Meta;

const StoryTemplate: StoryFn = (args) => ({
	components: { PrimeInputText },
	data() {
		return { args };
	},
	template: `
		<prime-input-text v-bind="args"/>`,
});

export const Default = StoryTemplate.bind({});

Default.argTypes = {
	modelValue: {
		control: {
			type: 'text',
		},
		name: 'initial value',
		defaultValue: 'Default text',
	},
	placeholder: {
		control: {
			type: 'text',
		},
		defaultValue: 'Placeholder text',
	},
	size: {
		control: {
			type: 'select',
			labels: {
				small: 'small',
				null: 'medium',
				large: 'large',
			},
		},
		options: ['small', null, 'large'],
		defaultValue: null,
	},
	invalid: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	variant: {
		control: {
			type: 'select',
		},
		options: ['filled', 'outlined'],
		defaultValue: 'outlined',
	},
	readonly: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
	disabled: {
		control: {
			type: 'boolean',
		},
		defaultValue: false,
	},
};
Default.args = {};
