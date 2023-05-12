import OutlineSectionHeader from './OutlineSectionHeader.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Outline/OutlineSectionHeader',
	component: OutlineSectionHeader,
} as Meta<typeof OutlineSectionHeader>;

const StoryTemplate: StoryFn<typeof OutlineSectionHeader> = (args) => ({
	components: { OutlineSectionHeader },
	setup() {
		return { ...args };
	},
	data() {
		return {};
	},
	template: `<outline-section-header :title="title" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {
	title: {
		control: { type: 'text' },
		defaultValue: 'section header all caps',
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
