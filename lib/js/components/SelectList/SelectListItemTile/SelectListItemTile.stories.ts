import SelectListItemTile from './SelectListItemTile.vue';
import { TILE_STATES } from '../../Tile';

import { Args, Meta, StoryFn } from '@storybook/vue3';
import { args, argTypes, data, template } from '../../Tile/Tile.sb.shared';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/SelectList/SelectListItemTile',
	component: SelectListItemTile,
	decorators: [withActions],
} as Meta<typeof SelectListItemTile>;

const StoryTemplate: StoryFn<typeof SelectListItemTile> = (args) => ({
	components: { SelectListItemTile },
	setup() {
		return args;
	},
	template: template('select-list-item-tile'),
	data,
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5367-94239&t=GqiOb5BFRTyJrsv8-4',
	},
};

const StoryStaticTemplate: StoryFn<typeof SelectListItemTile> = (args) => ({
	components: { SelectListItemTile },
	setup() {
		return args;
	},
	template: template('select-list-item-tile'),
	data,
});

export const Static = StoryStaticTemplate.bind({});

Static.argTypes = argTypes;

Static.args = {
	...args,
	interactive: false,
	iconLeft: null,
	iconRight: null,
	text: 'this is a text text',
	eyebrowText: 'this is an eyebrowText text',
	additionalText: 'this is some additionalText',
	state: TILE_STATES.DEFAULT,
} as Args;
