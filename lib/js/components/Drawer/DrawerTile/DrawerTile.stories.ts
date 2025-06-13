import DrawerTile from './DrawerTile.vue';

import { Meta, StoryFn } from '@storybook/vue3-vite';
import { args, argTypes, data, template } from '../../Tile/Tile.sb.shared';

export default {
	title: 'Components/Drawer/DrawerTile',
	component: DrawerTile,
} as Meta<typeof DrawerTile>;

const StoryTemplate: StoryFn<typeof DrawerTile> = (args) => ({
	components: { DrawerTile },
	setup() {
		return args;
	},
	template: template('drawer-tile'),
	data,
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4',
	},
};
