import SelectListItem from './SelectListItem.vue';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	SELECT_LIST_ITEM_SELECTION_MODE,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_STATES,
} from './SelectListItem.consts';

export default {
	title: 'Components/SelectList/SelectListItem',
	component: SelectListItem,
} as Meta<typeof SelectListItem>;

const StoryTemplate: StoryFn<typeof SelectListItem> = (args) => ({
	components: { SelectListItem },
	setup() {
		return args;
	},
	template: `
			<select-list-item
					:icon-left="ICONS[iconLeft]"
					:label="label"
					:eyebrow-text="eyebrowText"
					:is-eyebrow-text-uppercase="isEyebrowTextUppercase"
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
	eyebrowText: 'Eyebrow Text',
	isEyebrowTextUppercase: false,
	state: SELECT_LIST_ITEM_STATES.DEFAULT,
	isSelected: false,
	selectionMode: SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY,
} as Args;

const argTypes = {
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	selectionMode: {
		control: 'select',
		options: Object.values(SELECT_LIST_ITEM_SELECTION_MODE),
	},
	size: {
		control: 'select',
		options: Object.values(SELECT_LIST_ITEM_SIZES),
	},
	state: {
		control: 'select',
		options: Object.values(SELECT_LIST_ITEM_STATES),
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
