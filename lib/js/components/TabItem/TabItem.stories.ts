import TabItem from './TabItem.vue';
import { ICONS } from '../Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/TabItem',
	component: TabItem,
} as Meta<typeof TabItem>;

const StoryTemplate: StoryFn<typeof TabItem> = (argTypes) => ({
	components: { TabItem },
	props: Object.keys(argTypes),
	template: '<tab-item :icon="ICONS[icon]" :is-active="isActive" :title="title" />',
	created() {
		this.ICONS = ICONS;
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	isActive: false,
	title: 'Lorem ipsum dolor sit amet',
} as Args;

const argTypes = {
	icon: {
		control: { type: 'select', options: Object.keys(ICONS) },
		defaultValue: 'FA_CALENDAR_DAYS',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34956',
	},
};
