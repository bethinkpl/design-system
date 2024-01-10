import RichListItemBasic from './RichListItemBasic.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/RichList/RichListItemBasic',
	component: RichListItemBasic,
} as Meta<typeof RichListItemBasic>;

const StoryTemplate: StoryFn<typeof RichListItemBasic> = (args) => ({
	components: { RichListItemBasic },
	setup() {
		return { ...args };
	},
	template: `
    <rich-list-item-basic></rich-list-item-basic>`,
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
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8676-4504&mode=design&t=LFrFv5yjxOpcJRzE-4',
	},
};
