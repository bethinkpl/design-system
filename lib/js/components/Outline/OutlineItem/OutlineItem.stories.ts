import OutlineItem from './OutlineItem.vue';
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
	components: { OutlineItem },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `<outline-item :label="label" :additional-text="additionalText" :size="size" :state="state" :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone" :is-selected="isSelected" :background-color="backgroundColor" :index="index" :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation" :is-selected-icons-color="isSelectedIconsColor"><div v-html="defaultSlot"></div></outline-item>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {
	defaultSlot: { control: { type: 'text' }, defaultValue: 'Default slot' },
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
	isSelectedIconsColor: {
		control: { type: 'boolean' },
		defaultValue: true,
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
