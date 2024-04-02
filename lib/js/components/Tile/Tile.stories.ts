import Tile from './Tile.vue';
import { TILE_STATES } from './Tile.consts';

import { Args, Meta, StoryFn } from '@storybook/vue3';
import { args, argTypes, data, template } from './Tile.sb.shared';

export default {
	title: 'Components/Tile',
	component: Tile,
} as Meta<typeof Tile>;

const StoryTemplate: StoryFn<typeof Tile> = (args) => ({
	components: { Tile },
	setup() {
		return { ...args };
	},
	template: template('tile'),
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
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1923%3A34378',
	},
};

const StoryStaticTemplate: StoryFn<typeof Tile> = (args) => ({
	components: { Tile },
	setup() {
		return { ...args };
	},
	template: template('tile'),
	data,
});

export const Static = StoryStaticTemplate.bind({});

Static.argTypes = argTypes;

Static.args = {
	interactive: false,
	iconLeft: null,
	iconRight: null,
	text: 'this is a text text',
	eyebrowText: 'this is an eyebrowText text',
	additionalText: 'this is some additionalText',
	state: TILE_STATES.DEFAULT,
} as Args;
