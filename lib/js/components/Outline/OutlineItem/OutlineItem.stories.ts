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

const args = {} as Args;

const argTypes = {
	defaultSlot: { control: { type: 'text' }, defaultValue: '10 / 20' },
	size: {
		control: { type: 'select', options: Object.values(OUTLINE_ITEM_SIZES) },
		defaultValue: OUTLINE_ITEM_SIZES.SMALL,
	},
	backgroundColor: {
		control: { type: 'select', options: Object.values(OUTLINE_ITEM_BACKGROUND_COLORS) },
		defaultValue: OUTLINE_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK,
	},
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconRight: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconRightRotation: {
		control: { type: 'select', options: [null, 90, 180, 270] },
		defaultValue: null,
	},
	index: {
		control: { type: 'number' },
		defaultValue: null,
	},
	label: { control: { type: 'text' }, defaultValue: 'Outline Item label' },
	isLabelUppercase: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	additionalText: { control: { type: 'text' } },
	state: {
		control: { type: 'select', options: Object.values(OUTLINE_ITEM_STATES) },
		defaultValue: OUTLINE_ITEM_STATES.DEFAULT,
	},
	isSelected: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	isDone: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	hasSelectedIconsColorPrimary: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
	isSelectedInteractive: {
		control: { type: 'boolean' },
		defaultValue: false,
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
