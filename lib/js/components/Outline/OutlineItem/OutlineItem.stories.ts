import OutlineItem from './OutlineItem.vue';
import DsChip from '../../Chip/Chip.vue';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';
import {
	OUTLINE_ITEM_BACKGROUND_COLORS,
	OUTLINE_ITEM_SIZES,
	OUTLINE_ITEM_STATES,
} from './OutlineItem.consts';

export default {
	title: 'Components/Outline/OutlineItem',
	component: OutlineItem,
} as Meta<typeof OutlineItem>;

const StoryTemplate: StoryFn<typeof OutlineItem> = (args) => ({
	components: { OutlineItem, DsChip },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<outline-item :label="label" :additional-text="additionalText" :size="size" :state="state"
									:icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
									:is-selected="isSelected" :background-color="backgroundColor" :index="index"
									:is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
									:has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
									:is-selected-interactive="isSelectedInteractive">
			<template #default v-if="defaultSlot.length > 0">
				<ds-chip :label="defaultSlot" />
			</template>
		</outline-item>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	defaultSlot: '10 / 20',
	size: OUTLINE_ITEM_SIZES.SMALL,
	backgroundColor: OUTLINE_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK,
	iconLeft: null,
	iconRight: null,
	iconRightRotation: null,
	index: null,
	label: 'Outline Item label',
	isLabelUppercase: false,
	state: OUTLINE_ITEM_STATES.DEFAULT,
	isSelected: false,
	isDone: false,
	hasSelectedIconsColorPrimary: true,
	isSelectedInteractive: false,
} as Args;

const argTypes = {
	defaultSlot: { control: 'text' },
	size: {
		control: 'select',
		options: Object.values(OUTLINE_ITEM_SIZES),
	},
	backgroundColor: {
		control: 'select',
		options: Object.values(OUTLINE_ITEM_BACKGROUND_COLORS),
	},
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRightRotation: {
		control: 'select',
		options: [null, 90, 180, 270],
	},
	index: {
		control: { type: 'number' },
	},
	label: { control: 'text' },
	isLabelUppercase: {
		control: 'boolean',
	},
	additionalText: { control: 'text' },
	state: {
		control: 'select',
		options: Object.values(OUTLINE_ITEM_STATES),
	},
	isSelected: {
		control: 'boolean',
	},
	isDone: {
		control: 'boolean',
	},
	hasSelectedIconsColorPrimary: {
		control: 'boolean',
	},
	isSelectedInteractive: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0',
	},
};
