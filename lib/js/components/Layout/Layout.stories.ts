import Layout from './Layout.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { LAYOUT_CONTENT } from './Layout.consts';

export default {
	title: 'Components/Layout',
	component: Layout,
} as Meta<typeof Layout>;

const StoryTemplate: StoryFn<typeof Layout> = (args) => ({
	components: { Layout },
	setup() {
		return { ...args };
	},
	template: `
		<div style='height: 100%; width: 100%; display: flex; min-height: 100vh; border: 1px solid gray;'>
		<layout :content='content' />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	content: LAYOUT_CONTENT.MAX_900,
} as Args;

const argTypes = {
	content: {
		control: { type: 'select', options: Object.values(LAYOUT_CONTENT) },
		defaultValue: LAYOUT_CONTENT.MAX_900,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/AYTmGtcujVq9subNrTpHnX/Layout---nowa-koncepcja?type=design&node-id=1-7&t=ANHJptt0VBE6JEs4-4',
	},
};
