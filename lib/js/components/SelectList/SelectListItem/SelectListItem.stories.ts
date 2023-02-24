import SelectListItem from './SelectListItem.vue';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';
import { SELECT_LIST_ITEM_STATES, SELECT_LIST_SIZES } from '../SelectList.consts';

export default {
	title: 'Components/SelectList/SelectListItem',
	component: SelectListItem,
} as Meta<typeof SelectListItem>;

const StoryTemplate: StoryFn<typeof SelectListItem> = (argTypes) => ({
	components: { SelectListItem },
	props: Object.keys(argTypes),
	template: `
		<select-list-item
			:icon-left="ICONS[$props.iconLeft]"
			:label="label"
			:size="size"
			:is-selected="isSelected"
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
	size: SELECT_LIST_SIZES.SMALL,
	iconLeft: null,
	label: 'Label',
	state: SELECT_LIST_ITEM_STATES.DEFAULT,
	isSelected: false,
} as Args;

const argTypes = {
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
	size: {
		control: { type: 'select', options: Object.values(SELECT_LIST_SIZES) },
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
