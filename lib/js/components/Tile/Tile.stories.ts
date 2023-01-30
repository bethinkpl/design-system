import Tile from './Tile.vue';
import { TILE_COLORS, TILE_STATES } from './Tile.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Tile',
	component: Tile,
} as Meta<typeof Tile>;

const StoryTemplate: StoryFn<typeof Tile> = (argTypes) => ({
	components: { Tile },
	props: Object.keys(argTypes),
	template:
		'<tile :text="text" :eyebrowText="eyebrowText" :interactive="interactive" :iconLeft="ICONS[iconLeft]" :additionalText="additionalText" :iconRight="ICONS[iconRight]" :color="color" :is-eyebrow-text-uppercase="isEyebrowTextUppercase" :state="state" :eyebrow-ellipsis="eyebrowEllipsis" :text-ellipsis="textEllipsis"/>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	interactive: true,
	iconLeft: null,
	iconRight: null,
	text: 'this is a text text',
	eyebrowText: 'this is an eyebrowText text',
	additionalText: '',
	isEyebrowTextUppercase: false,
	state: TILE_STATES.DEFAULT,
	eyebrowEllipsis: true,
	textEllipsis: true,
} as Args;

const argTypes = {
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconRight: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	color: {
		control: { type: 'select', options: [...Object.values(TILE_COLORS)] },
		defaultValue: TILE_COLORS.NEUTRAL,
	},
	state: {
		control: { type: 'select', options: [...Object.values(TILE_STATES)] },
		defaultValue: TILE_STATES.DEFAULT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1923%3A34378',
	},
};

const StoryStaticTemplate: StoryFn<typeof Tile> = (argTypes) => ({
	components: { Tile },
	props: Object.keys(argTypes),
	template:
		'<tile :text="text" :eyebrowText="eyebrowText" :interactive="interactive" :iconLeft="ICONS[iconLeft]" :additionalText="additionalText" :iconRight="ICONS[iconRight]" :color="color" :state="state" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Static = StoryStaticTemplate.bind({});

Static.argTypes = {
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconRight: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	color: {
		control: { type: 'select', options: [null, ...Object.values(TILE_COLORS)] },
		defaultValue: TILE_COLORS.NEUTRAL,
	},
	state: {
		control: { type: 'select', options: [...Object.values(TILE_STATES)] },
		defaultValue: TILE_STATES.DEFAULT,
	},
} as ArgTypes;

Static.args = {
	interactive: false,
	iconLeft: null,
	iconRight: null,
	text: 'this is a text text',
	eyebrowText: 'this is an eyebrowText text',
	additionalText: 'this is some additionalText',
	state: TILE_STATES.DEFAULT,
} as Args;
