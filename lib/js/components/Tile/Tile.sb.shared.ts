import { ICONS } from '../Icons/Icon';
import { TILE_BORDER_COLORS, TILE_COLORS, TILE_STATES } from './Tile.consts';
import { Args, ArgTypes } from '@storybook/vue3';
import DsBanner, { BANNER_COLORS } from '../Banner';

export const template = (componentTag: string) => `
<div style="display: flex; row-gap: 16px; flex-direction: column">
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
			:border-color="borderColor"
		/>
		<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja koloru komponentu z kolorem bordera jest niezgodna z design systemem!" v-if="borderColor && !allowedColorsToBorderColorsMap[color].includes(borderColor)" />
</div>
`;

export const data = () => ({
	ICONS: Object.freeze(ICONS),
	BANNER_COLORS: Object.freeze(BANNER_COLORS),
	allowedColorsToBorderColorsMap: {
		[TILE_COLORS.NEUTRAL]: [
			TILE_BORDER_COLORS.NEUTRAL,
			TILE_BORDER_COLORS.NEUTRAL_WEAK,
			TILE_BORDER_COLORS.PRIMARY,
			TILE_BORDER_COLORS.PRIMARY_WEAK,
		],
		[TILE_COLORS.NEUTRAL_WEAK]: [
			TILE_BORDER_COLORS.NEUTRAL,
			TILE_BORDER_COLORS.NEUTRAL_WEAK,
			TILE_BORDER_COLORS.PRIMARY,
			TILE_BORDER_COLORS.PRIMARY_WEAK,
		],
		[TILE_COLORS.PRIMARY]: [TILE_BORDER_COLORS.PRIMARY, TILE_BORDER_COLORS.PRIMARY_WEAK],
		[TILE_COLORS.SUCCESS]: [TILE_BORDER_COLORS.SUCCESS, TILE_BORDER_COLORS.SUCCESS_WEAK],
		[TILE_COLORS.FAIL]: [TILE_BORDER_COLORS.FAIL, TILE_BORDER_COLORS.FAIL_WEAK],
		[TILE_COLORS.DANGER]: [TILE_BORDER_COLORS.DANGER, TILE_BORDER_COLORS.DANGER_WEAK],
		[TILE_COLORS.WARNING]: [TILE_BORDER_COLORS.WARNING, TILE_BORDER_COLORS.WARNING_WEAK],
		[TILE_COLORS.INFO]: [TILE_BORDER_COLORS.INFO, TILE_BORDER_COLORS.INFO_WEAK],
	},
});

export const components = {
	DsBanner,
};

export const args = {
	interactive: true,
	color: TILE_COLORS.NEUTRAL,
	borderColor: null,
	isBorderWeak: false,
	iconLeft: null,
	iconRight: null,
	isIconRightHiddenOnMobile: false,
	eyebrowText: 'this is an eyebrowText text',
	eyebrowEllipsis: true,
	isEyebrowTextUppercase: false,
	text: 'this is a text text',
	textEllipsis: true,
	additionalText: '',
	state: TILE_STATES.DEFAULT,
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
	borderColor: {
		control: 'select',
		options: [null, ...Object.values(TILE_BORDER_COLORS)],
	},
	state: {
		control: 'select',
		options: [...Object.values(TILE_STATES)],
	},
} as ArgTypes;
