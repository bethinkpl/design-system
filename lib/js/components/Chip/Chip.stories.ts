import Chip from './Chip.vue';
import { PILL_COLORS, PILL_RADIUSES, PILL_SIZES, PILL_STATES } from './Chip.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Chip',
	component: Chip,
} as Meta<typeof Chip>;

const StoryTemplate: StoryFn<typeof Chip> = (args) => ({
	components: { Chip },
	setup() {
		return { ...args };
	},
	template:
		'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius">' +
		'<template #accessory v-if="accessory"><span style="display: flex" v-html="accessory" /></template>' +
		'</chip>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});
const args = {
	label: 'Chip z labelem',
	isLabelUppercase: false,
	leftIcon: null,
	isRemovable: false,
	size: PILL_SIZES.SMALL,
	color: PILL_COLORS.NEUTRAL,
	colorHex: null,
	accessory:
		'<img style="height: 12px; width: 12px;" src="https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg" />',
} as Args;
const argTypes = {
	leftIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
	size: {
		control: { type: 'select', options: Object.values(PILL_SIZES) },
	},
	color: {
		control: { type: 'select', options: Object.values(PILL_COLORS) },
	},
	state: {
		control: { type: 'select', options: Object.values(PILL_STATES) },
		defaultValue: PILL_STATES.DEFAULT,
	},
	radius: {
		control: { type: 'select', options: Object.values(PILL_RADIUSES) },
		defaultValue: PILL_RADIUSES.CAPSULE,
	},
	accessory: {
		control: { type: 'text' },
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
