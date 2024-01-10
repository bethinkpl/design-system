import RichListItem from './RichListItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/RichList/RichListItem',
	component: RichListItem,
	decorators: [
		(story) => ({
			components: { story },
			template: "<div style='display: flex;padding: 16px;'><story /></div>",
		}),
	],
} as Meta<typeof RichListItem>;

const StoryTemplate: StoryFn<typeof RichListItem> = (args) => ({
	components: { RichListItem },
	setup() {
		return { ...args };
	},
	template: `
    <rich-list-item></rich-list-item>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	layout: 'fullscreen',
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8673-2345&mode=design&t=LFrFv5yjxOpcJRzE-4',
	},
};
