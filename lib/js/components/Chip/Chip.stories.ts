import Chip from './Chip.vue';
import { CHIP_COLORS, CHIP_DEFAULT_COLOR, CHIP_RADIUSES, CHIP_SIZES, CHIP_STATES } from './Chip.consts';
import { ICONS } from '../Icons/Icon';
import LogoBadge from '../../../images/logo-badge.svg';
import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Chip',
	component: Chip,
} as Meta<typeof Chip>;

const StoryTemplate: StoryFn<typeof Chip> = (args) => ({
	components: { Chip, LogoBadge },
	setup() {
		return args;
	},
	template:
		'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});
const StoryTemplateWithAccessory: StoryFn<typeof Chip> = (args) => ({
	components: { Chip, LogoBadge },
	setup() {
		return args;
	},
	template:
		'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius">' +
		'<template #accessory><logo-badge :style="svgStyle" /></template>' +
		'</chip>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	computed: {
		svgStyle() {
			if (this.size === CHIP_SIZES.SMALL) {
				return { width: '12px', height: '12px' };
			}

			return { width: '8px', height: '8px' };
		},
	},
});

export const Interactive = StoryTemplate.bind({});
export const InteractiveWithAccessory = StoryTemplateWithAccessory.bind({});
const args = {
	label: 'Chip z labelem',
	isLabelUppercase: false,
	leftIcon: null,
	radius: CHIP_RADIUSES.CAPSULE,
	size: CHIP_SIZES.SMALL,
	color: CHIP_DEFAULT_COLOR,
	colorHex: '',
	isRemovable: false,
	state: CHIP_STATES.DEFAULT,
} as Args;
const argTypes = {
	leftIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	size: {
		control: 'select',
		options: Object.values(CHIP_SIZES),
	},
	color: {
		control: 'select',
		options: Object.values(CHIP_COLORS),
	},
	state: {
		control: 'select',
		options: Object.values(CHIP_STATES),
	},
	radius: {
		control: 'select',
		options: Object.values(CHIP_RADIUSES),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072',
	},
};
InteractiveWithAccessory.argTypes = argTypes;
InteractiveWithAccessory.args = args;

InteractiveWithAccessory.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072',
	},
};
