import Layout from './Layout.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { LAYOUT_CONTENT_SIZE, LAYOUT_RIGHT_COLUMN_SIZE } from './Layout.consts';

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
		<layout :content-size='contentSize' :rightColumnSize='rightColumnSize' />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	contentSize: LAYOUT_CONTENT_SIZE.MAX_900,
	rightColumnSize: LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
} as Args;

const argTypes = {
	contentSize: {
		control: { type: 'select', options: Object.values(LAYOUT_CONTENT_SIZE) },
		defaultValue: LAYOUT_CONTENT_SIZE.MAX_900,
	},
	rightColumnSize: {
		control: { type: 'select', options: Object.values(LAYOUT_RIGHT_COLUMN_SIZE) },
		defaultValue: LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
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
