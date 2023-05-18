import OutlineDivider from './OutlineDivider.vue';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
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
	template: `<outline-divider :prominence="prominence" :size="size" />`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	prominence: {
		control: { type: 'select', options: Object.values(DIVIDER_PROMINENCES) },
		defaultValue: DIVIDER_PROMINENCES.DEFAULT,
	},
	size: {
		control: { type: 'select', options: Object.values(DIVIDER_SIZES) },
		defaultValue: DIVIDER_SIZES.S,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0',
	},
};
