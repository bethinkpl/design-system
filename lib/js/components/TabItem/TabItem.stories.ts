import TabItem from './TabItem.vue';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { TAB_ITEM_SIZES } from './TabItem.consts';

export default {
	title: 'Components/TabItem',
	component: TabItem,
} as Meta<typeof TabItem>;

const StoryTemplate: StoryFn<typeof TabItem> = (args) => ({
	components: { TabItem },
	setup() {
		return { ...args };
	},
	template:
		'<tab-item style="max-width: 150px" :icon="ICONS[icon]" :is-selected="isSelected" :label="label" :size="TAB_ITEM_SIZES[size]" :label-ellipsis="labelEllipsis" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			TAB_ITEM_SIZES: Object.freeze(TAB_ITEM_SIZES),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	isSelected: false,
} as Args;

const argTypes = {
	icon: {
		control: { type: 'select', options: [...Object.keys(ICONS), null] },
		defaultValue: null,
	},
	size: {
		control: { type: 'select', options: Object.keys(TAB_ITEM_SIZES) },
		defaultValue: 'MEDIUM',
	},
	label: {
		control: { type: 'text' },
		defaultValue: 'Tab item',
	},
	isSelected: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	labelEllipsis: {
		control: { type: 'boolean' },
		defaultValue: false,
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
