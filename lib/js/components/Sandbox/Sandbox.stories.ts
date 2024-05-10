import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import Sandbox from "./Sandbox.vue";

export default {
	title: 'Components/Sandbox'
} as Meta;

const StoryTemplate: StoryFn = (args) => ({
	components: {
		Sandbox
	},
	setup() {
		return { ...args };
	},
	template: `
		<div>
			<Sandbox />
		</div>
	`
});

export const Default = StoryTemplate.bind({});

Default.args = {} as Args;

const argTypes = {} as ArgTypes;
