import OutlineDivider from './OutlineDivider.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../../Divider';

export default {
	title: 'Components/Outline/OutlineDivider',
	component: OutlineDivider,
} as Meta<typeof OutlineDivider>;

const StoryTemplate: StoryFn<typeof OutlineDivider> = (args) => ({
	components: { OutlineDivider },
	setup() {
		return args;
	},
	template: `
		<outline-divider :prominence="prominence" :size="size" />`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	prominence: {
		control: 'select',
		options: Object.values(DIVIDER_PROMINENCES),
	},
	size: {
		control: 'select',
		options: Object.values(DIVIDER_SIZES),
	},
} as ArgTypes;

Interactive.args = {
	prominence: DIVIDER_PROMINENCES.DEFAULT,
	size: DIVIDER_SIZES.S,
} as Args;
Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0',
	},
};
