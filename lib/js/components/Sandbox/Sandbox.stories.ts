import Sandbox from './Sandbox.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Sandbox',
	component: Sandbox,
} as Meta<typeof Sandbox>;

const StoryTemplate: StoryFn<typeof Sandbox> = (args, { updateArgs }) => ({
	components: { Sandbox },
	setup() {
		return { ...args };
	},
	template: `<Sandbox />`,
});

export const Default = StoryTemplate.bind({});

Default.argTypes = {};
Default.args = {};

