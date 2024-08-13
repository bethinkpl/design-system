import DrawerListItem from './DrawerListItem.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { DRAWER_LIST_ITEM_STATES } from './DrawerListItem.consts';

export default {
	title: 'Components/Drawer/DrawerListItem',
	component: DrawerListItem,
} as Meta<typeof DrawerListItem>;

const StoryTemplate: StoryFn<typeof DrawerListItem> = (args) => ({
	components: { DrawerListItem },
	setup() {
		return { ...args };
	},
	template: `<div style="height: 300px; width: 200px;">
		<drawer-list-item :label="label" :value-text="valueText" :state="state" />
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	label: 'Label',
	valueText: 'value',
	state: DRAWER_LIST_ITEM_STATES.DEFAULT,
} as Args;

const argTypes = {
	state: {
		control: 'select',
		options: Object.values(DRAWER_LIST_ITEM_STATES),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4',
	},
};
