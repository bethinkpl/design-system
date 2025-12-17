import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import DsMenu, { MENU_LAYOUTS } from './index';
import MenuItem from '../MenuItem';
import MenuDivider from '../MenuDivider';

export default {
	title: 'Components/Menu/Menu',
	component: DsMenu,
} as Meta<typeof DsMenu>;

const StoryTemplate: StoryFn<typeof DsMenu> = (args) => ({
	components: { DsMenu, MenuItem, MenuDivider },
	setup() {
		return args;
	},
	template: `
		<ds-menu :layout="layout" >
			<menu-item label="level 1" />
			<menu-item label="level 1" />
			<menu-divider />
			<menu-item label="level 1" />
			<menu-item label="level 1" />
			<menu-item label="level 1" />
		</ds-menu>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	layout: {
		control: 'select',
		options: Object.values(MENU_LAYOUTS),
	},
} as ArgTypes;

Interactive.args = {
	layout: MENU_LAYOUTS.DEFAULT,
} as Args;
Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=15355-7663&m=dev',
	},
};
