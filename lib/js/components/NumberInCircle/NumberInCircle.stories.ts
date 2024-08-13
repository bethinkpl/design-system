import NumberInCircle from './NumberInCircle.vue';
import { NUMBER_IN_CIRCLE_COLORS } from './NumberInCircle.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/NumberInCircle',
	component: NumberInCircle,
} as Meta<typeof NumberInCircle>;

const StoryTemplate: StoryFn<typeof NumberInCircle> = (args) => ({
	components: { NumberInCircle },
	setup() {
		return { ...args };
	},
	template:
		'<number-in-circle :index="index" :color="color" :medium="medium">{{slotText}}</number-in-circle>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	slotText: '1',
	index: 1,
	color: NUMBER_IN_CIRCLE_COLORS.DEFAULT,
	medium: false,
} as Args;

const argTypes = {
	color: {
		control: 'select',
		options: Object.values(NUMBER_IN_CIRCLE_COLORS),
	},
	slotText: { control: 'text' },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5151%3A82053&t=y03jPaHjasRQu2Pm-0',
	},
};
