import SelectListItem from './SelectListItem.vue';
import { ICONS } from '../../Icons/Icon';
import SlotPlaceholder, {
	SLOT_PLACEHOLDER_SIZES,
} from '../../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';

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
	components: { SelectListItem, SlotPlaceholder },
	setup() {
		return {
			args,
			ICONS,
			SLOT_PLACEHOLDER_SIZES,
		};
	},
	template: `
			<select-list-item
					:icon-left="ICONS[args.iconLeft]"
					:label="args.label"
					:eyebrow-text="args.eyebrowText"
					:is-eyebrow-text-uppercase="args.isEyebrowTextUppercase"
					:is-selected="args.isSelected"
					:selection-mode="args.selectionMode"
					:size="args.size"
					:state="args.state"
			>
				<template v-if="args.accessorySlot" #accessory>
					<slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" :label="args.accessorySlot" />
				</template>
			</select-list-item>
    `,
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
	accessorySlot: 'accessory',
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
	accessorySlot: {
		control: 'text',
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
