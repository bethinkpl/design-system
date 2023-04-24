import { ICONS } from '../Icons/Icon';
import { TILE_COLORS, TILE_STATES } from './Tile.consts';
import { Args, ArgTypes } from '@storybook/vue3';

export const template = (componentTag: string) => `
		<${componentTag}
			:additionalText="additionalText"
			:color="color"
			:eyebrow-ellipsis="eyebrowEllipsis"
			:eyebrowText="eyebrowText"
			:iconLeft="ICONS[iconLeft]"
			:iconRight="ICONS[iconRight]"
			:interactive="interactive"
			:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
			:state="state"
			:text-ellipsis="textEllipsis"
			:text="text"
		/>`;

export const data = () => ({
	ICONS: Object.freeze(ICONS),
});

export const args = {
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

export const argTypes = {
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
