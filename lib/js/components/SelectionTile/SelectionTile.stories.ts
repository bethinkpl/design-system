import SelectionTile from './SelectionTile.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { SELECTION_TILE_STATE, SELECTION_TILE_TYPE } from './SelectionTile.consts';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/SelectionTile',
	component: SelectionTile,
} as Meta<typeof SelectionTile>;

const StoryTemplate: StoryFn<typeof SelectionTile> = (args) => ({
	components: { SelectionTile },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<SelectionTile
			:title="title"
			:supporting-text="supportingText"
			:type="type"
			:icon="ICONS[icon]"
			:is-selected="isSelected"
			:state="state"
		/>`,
});

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = {
	type: {
		control: { type: 'select', options: Object.values(SELECTION_TILE_TYPE) },
		defaultValue: SELECTION_TILE_TYPE.RADIO_BUTTON,
	},
	title: { control: { type: 'text' } },
	supportingText: { control: { type: 'text' } },
	icon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
	isSelected: { control: { type: 'boolean' } },
	state: {
		control: { type: 'select', options: Object.values(SELECTION_TILE_STATE) },
		defaultValue: SELECTION_TILE_STATE.DEFAULT,
	},
} as ArgTypes;

Interactive.args = {
	type: SELECTION_TILE_TYPE.RADIO_BUTTON,
	title: 'Example title',
	supportingText: '',
	icon: null,
	isSelected: false,
	state: SELECTION_TILE_STATE.DEFAULT,
} as Args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6085-110808&t=QdcqN4Bz8t78w7Lh-0',
	},
};
