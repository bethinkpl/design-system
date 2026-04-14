import SelectListItemContainer from './SelectListItemContainer.vue';
import Tile, { TILE_STATES } from '../../Tile';

import { Args, Meta, StoryFn } from '@storybook/vue3';
import { args, argTypes, data, components } from '../../Tile/Tile.sb.shared';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/SelectList/SelectListItemContainer',
	component: SelectListItemContainer,
	decorators: [withActions],
} as Meta<typeof SelectListItemContainer>;

const tileTemplate = `
<select-list-item-container>
	<ds-tile
		:additional-text="additionalText"
		:color="color"
		:eyebrow-ellipsis="eyebrowEllipsis"
		:eyebrow-text="eyebrowText"
		:icon-left="ICONS[iconLeft]"
		:icon-right="ICONS[iconRight]"
		:interactive="interactive"
		:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
		:state="state"
		:text-ellipsis="textEllipsis"
		:text="text"
		:border-color="borderColor"
		:compact-layout="compactLayout"
	/>
</select-list-item-container>
`;

const StoryTemplate: StoryFn<typeof SelectListItemContainer> = (args) => ({
	components: { SelectListItemContainer, DsTile: Tile, ...components },
	setup() {
		return args;
	},
	template: tileTemplate,
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

export const Static = StoryTemplate.bind({});

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
