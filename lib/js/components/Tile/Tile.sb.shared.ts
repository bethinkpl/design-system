import { ICONS } from '../Icons/Icon';
import { TILE_COLORS, TILE_STATES } from './Tile.consts';
import { Args, ArgTypes } from '@storybook/vue3';

export const template = (componentTag: string) => `
		<${componentTag}
			:additional-text="additionalText"
			:color="color"
			:eyebrow-ellipsis="eyebrowEllipsis"
			:eyebrow-text="eyebrowText"
			:icon-left="ICONS[iconLeft]"
			:icon-right="ICONS[iconRight]"
			:is-icon-right-hidden-on-mobile="isIconRightHiddenOnMobile"
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
	isIconRightHiddenOnMobile: false,
	text: 'this is a text text',
	eyebrowText: 'this is an eyebrowText text',
	additionalText: '',
	isEyebrowTextUppercase: false,
	state: TILE_STATES.DEFAULT,
	eyebrowEllipsis: true,
	textEllipsis: true,
	color: TILE_COLORS.NEUTRAL,
} as Args;

export const argTypes = {
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	color: {
		control: 'select',
		options: [...Object.values(TILE_COLORS)],
	},
	state: {
		control: 'select',
		options: [...Object.values(TILE_STATES)],
	},
} as ArgTypes;
