import Ripple from './Ripple.vue';
import { RIPPLE_COLORS } from './Ripple.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Utils/Ripple',
	component: Ripple,
} as Meta<typeof Ripple>;

const StoryTemplate: StoryFn<typeof Ripple> = (argTypes) => ({
	components: { Ripple },
	props: Object.keys(argTypes),
	template:
		'<ripple :color="color" :disable="disable">' +
		'<div style="background-color: #ccc; cursor: pointer; display: flex; align-items: center; justify-content: center; height: 50px; width: 100%;">Click me</div>' +
		'</ripple>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	color: RIPPLE_COLORS.DEFAULT,
	disable: false,
} as Args;

const argTypes = {
	color: {
		control: { type: 'select', options: Object.values(RIPPLE_COLORS) },
		defaultValue: RIPPLE_COLORS.DEFAULT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;
