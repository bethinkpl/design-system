import DrawerListItemGroup from './DrawerListItemGroup.vue';

import { Meta, StoryFn } from '@storybook/vue3-vite';
import DrawerListItem from '../DrawerListItem/DrawerListItem.vue';

export default {
	title: 'Components/Drawer/DrawerListItemGroup',
	component: DrawerListItemGroup,
} as Meta<typeof DrawerListItemGroup>;

const StoryTemplate: StoryFn<typeof DrawerListItemGroup> = (args) => ({
	components: { DrawerListItemGroup, DrawerListItem },
	setup() {
		return args;
	},
	template: `
    <drawer-list-item-group>
			<drawer-list-item value-text="1" label="Item" />
			<drawer-list-item value-text="2" label="Item" />
		</drawer-list-item-group>
  `,
});

export const Static = StoryTemplate.bind({});

Static.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111079&t=PEjZUz7dUozNqntp-4',
	},
};
