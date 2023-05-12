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
		return { ...args };
	},
	data() {
		return {
			DIVIDER_SIZES: Object.freeze(DIVIDER_SIZES),
		};
	},
	template: `<outline-divider :prominence="prominence" :size="DIVIDER_SIZES[size]" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	defaultSlot: null,
} as Args;

const argTypes = {
	prominence: {
		control: { type: 'select', options: Object.keys(DIVIDER_PROMINENCES) },
		defaultValue: 'DEFAULT',
	},
	size: {
		control: { type: 'select', options: Object.keys(DIVIDER_SIZES) },
		defaultValue: 'S',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0',
	},
};
