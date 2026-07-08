import Stepper from './Stepper.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Stepper',
	component: Stepper,
} as Meta<typeof Stepper>;

const StoryTemplate: StoryFn<typeof Stepper> = (args) => ({
	components: { Stepper },
	setup() {
		return args;
	},
	template: `
		<stepper
			:title="title"
			:counter-label="counterLabel"
			:has-counter-value="hasCounterValue"
			:total-steps="totalSteps"
			:current-step="currentStep"
		/>
		`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: 'Title here',
	counterLabel: 'Counter Label',
	hasCounterValue: true,
	totalSteps: 5,
	currentStep: 1,
} as Args;

const argTypes = {
	title: {
		control: 'text',
	},
	counterLabel: {
		control: 'text',
	},
	hasCounterValue: {
		control: 'boolean',
	},
	totalSteps: {
		control: { type: 'number', min: 1 },
	},
	currentStep: {
		control: { type: 'number', min: 0 },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=240-17773&m=dev',
	},
};
