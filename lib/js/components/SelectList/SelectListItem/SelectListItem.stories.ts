import SelectListItem from './SelectListItem.vue';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';
import {
	SELECT_LIST_ITEM_STATES,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_SELECTION_MODE,
} from './SelectListItem.consts';

export default {
	title: 'Components/SelectList/SelectListItem',
	component: SelectListItem,
} as Meta<typeof SelectListItem>;

const StoryTemplate: StoryFn<typeof SelectListItem> = (argTypes) => ({
	components: { SelectListItem },
	props: Object.keys(argTypes),
	template: `
		<select-list-item
			:icon-left="ICONS[iconLeft]"
			:label="label"
			:is-selected="isSelected"
			:selection-mode="selectionMode"
			:size="size"
			:state="state"
		/>
		`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: SELECT_LIST_ITEM_SIZES.SMALL,
	iconLeft: null,
	label: 'Label',
	state: SELECT_LIST_ITEM_STATES.DEFAULT,
	isSelected: false,
	selectionMode: SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY,
} as Args;

const argTypes = {
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
	selectionMode: {
		control: { type: 'select', options: Object.values(SELECT_LIST_ITEM_SELECTION_MODE) },
	},
	size: {
		control: { type: 'select', options: Object.values(SELECT_LIST_ITEM_SIZES) },
	},
	state: {
		control: { type: 'select', options: Object.values(SELECT_LIST_ITEM_STATES) },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=854%3A20150&t=rKEt9RQrHIDsfC7p-4',
	},
};
