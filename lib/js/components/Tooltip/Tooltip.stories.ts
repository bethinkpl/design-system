import Tooltip from './Tooltip.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
} as Meta<typeof Tooltip>;

const StoryTemplate: StoryFn<typeof Tooltip> = (args) => ({
	components: { Tooltip },
	setup() {
		return { ...args };
	},
	data() {
		return {};
	},
	template: '<tooltip>' + '</tooltip>',
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0',
	},
};
