// SB8.0 Good code to copy when creating a new story - this code use new API

import Tile from './Tile.vue';
import { TILE_STATES } from './Tile.consts';

import type { Args, Meta, StoryObj } from '@storybook/vue3';
import { args, argTypes, data, template } from './Tile.sb.shared';
import type { ComponentProps } from 'vue-component-type-helpers';

type TileProps = ComponentProps<typeof Tile>;

const meta: Meta<TileProps> = {
	title: 'Components/Tile',
	component: Tile,
	render: (args) => ({
		components: { Tile },
		setup() {
			return args;
		},
		data,
		template: template('tile'),
	}),
	argTypes,
	parameters: {
		actions: {
			handles: ['click'],
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1923%3A34378',
		},
	},
};
export default meta;

type Story = StoryObj<TileProps>;

export const Interactive: Story = {
	args,
};

export const Static: Story = {
	args: {
		...args,
		interactive: false,
		iconLeft: null,
		iconRight: null,
		text: 'this is a text text',
		eyebrowText: 'this is an eyebrowText text',
		additionalText: 'this is some additionalText',
		state: TILE_STATES.DEFAULT,
	} as Args,
};
