import ProgressBar from './ProgressBar.vue';
import {
	PROGRESS_BAR_COLORS,
	PROGRESS_BAR_SIZES,
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_RADII,
	PROGRESS_BAR_LAYERS,
	PROGRESS_BAR_COLOR_SCHEMES,
	Range,
} from './ProgressBar.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/ProgressBar',
	component: ProgressBar,
} as Meta<typeof ProgressBar>;

const StoryTemplate: StoryFn<typeof ProgressBar> = (argTypes) => ({
	components: { ProgressBar },
	props: Object.keys(argTypes),
	template: `<ProgressBar v-bind=$props></ProgressBar>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	numberOfLayers: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_LAYERS) },
		defaultValue: PROGRESS_BAR_LAYERS.ONE,
	},
	colorScheme: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_COLOR_SCHEMES) },
		defaultValue: PROGRESS_BAR_COLOR_SCHEMES.DEFAULT,
	},
	color: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_COLORS) },
		defaultValue: PROGRESS_BAR_COLORS.INFO,
	},
	size: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_SIZES) },
		defaultValue: PROGRESS_BAR_SIZES.MEDIUM,
	},
	ranges: {
		control: { type: 'array' },
		defaultValue: [
			{
				layer: 1,
				start: 0,
				length: 30,
			} as Range,
			{
				layer: 2,
				start: 30,
				length: 10,
			} as Range,
			{
				layer: 2,
				start: 40,
				length: 10,
			} as Range,
		],
	},
	radius: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_RADII) },
		defaultValue: PROGRESS_BAR_RADII.DEFAULT,
	},
	layout: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_LAYOUTS) },
		defaultValue: PROGRESS_BAR_LAYOUTS.DEFAULT,
	},
	labelText: {
		control: { type: 'text' },
		defaultValue: 'Label text',
	},
	labelData: {
		control: { type: 'text' },
		defaultValue: '30',
	},
	labelDataSupporting: {
		control: { type: 'text' },
		defaultValue: '100',
	},
	labelDataSuffix: {
		control: { type: 'text' },
		defaultValue: '(%)',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921',
	},
};

const argTypesColorOnly = {
	color: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_COLORS) },
		defaultValue: PROGRESS_BAR_COLORS.INFO,
	},
} as ArgTypes;

export const WithoutLabels = StoryTemplate.bind({});

WithoutLabels.args = {
	color: PROGRESS_BAR_COLORS.PRIMARY,
	ranges: [
		{
			layer: 1,
			start: 0,
			length: 30,
		} as Range,
	],
} as Args;
WithoutLabels.argTypes = argTypesColorOnly;

export const TwoLayers = StoryTemplate.bind({});

TwoLayers.args = {
	color: PROGRESS_BAR_COLORS.PRIMARY,
	numberOfLayers: 2,
	ranges: [
		{
			layer: 1,
			start: 0,
			length: 30,
		} as Range,
		{
			layer: 2,
			start: 30,
			length: 30,
		} as Range,
	],
} as Args;
TwoLayers.argTypes = argTypesColorOnly;

export const WithGaps = StoryTemplate.bind({});

WithGaps.args = {
	color: PROGRESS_BAR_COLORS.PRIMARY,
	numberOfLayers: 2,
	ranges: [
		{
			layer: 1,
			start: 0,
			length: 10,
		} as Range,
		{
			layer: 2,
			start: 20,
			length: 10,
		} as Range,
		{
			layer: 1,
			start: 40,
			length: 10,
		} as Range,
		{
			layer: 2,
			start: 50,
			length: 10,
		} as Range,
		{
			layer: 1,
			start: 70,
			length: 100,
		} as Range,
	],
} as Args;
WithGaps.argTypes = argTypesColorOnly;

export const Compact = StoryTemplate.bind({});

Compact.args = {
	color: PROGRESS_BAR_COLORS.PRIMARY,
	layout: PROGRESS_BAR_LAYOUTS.COMPACT,
	ranges: [
		{
			layer: 1,
			start: 0,
			length: 30,
		} as Range,
	],
	labelText: 'Label text',
	labelData: '30',
	labelDataSupporting: '100',
	labelDataSuffix: '(%)',
} as Args;
Compact.argTypes = argTypesColorOnly;
