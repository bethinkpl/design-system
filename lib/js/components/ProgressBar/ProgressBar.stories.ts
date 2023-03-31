import ProgressBar from './ProgressBar.vue';
import {
	PROGRESS_BAR_RANGE_COLORS,
	PROGRESS_BAR_SIZES,
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_RADII,
	ProgressBarRange,
	PROGRESS_BAR_LABEL_TEXT_SIZES,
	PROGRESS_BAR_BADGE_COLORS,
} from './ProgressBar.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/ProgressBar',
	component: ProgressBar,
} as Meta<typeof ProgressBar>;

const StoryTemplate: StoryFn<typeof ProgressBar> = (args) => ({
	components: { ProgressBar },
	setup() {
		return { args };
	},
	template: `
			<progress-bar v-bind=args></progress-bar>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_SIZES) },
		defaultValue: PROGRESS_BAR_SIZES.SMALL,
	},
	labelTextSize: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_LABEL_TEXT_SIZES) },
		defaultValue: PROGRESS_BAR_LABEL_TEXT_SIZES.SMALL,
	},
	ranges: {
		control: { type: 'array' },
		defaultValue: [
			{
				color: PROGRESS_BAR_RANGE_COLORS.INFO,
				start: 0,
				length: 30,
			} as ProgressBarRange,
			{
				color: PROGRESS_BAR_RANGE_COLORS.INFO_WEAK,
				start: 30,
				length: 10,
			} as ProgressBarRange,
			{
				color: PROGRESS_BAR_RANGE_COLORS.INFO_GHOST,
				start: 40,
				length: 10,
			} as ProgressBarRange,
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
	badgePosition: {
		// we use `text` type, because Storybook doesn't allow empty field in `number` type which imitates null
		control: { type: 'text' },
		defaultValue: '50',
	},
	badgeColor: {
		control: { type: 'select', options: Object.values(PROGRESS_BAR_BADGE_COLORS) },
		defaultValue: PROGRESS_BAR_BADGE_COLORS.INFO,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4560%3A78921',
	},
};

export const WithoutLabels = StoryTemplate.bind({});

WithoutLabels.args = {
	ranges: [
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 0,
			length: 30,
		} as ProgressBarRange,
	],
} as Args;

export const TwoColors = StoryTemplate.bind({});

TwoColors.args = {
	ranges: [
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 0,
			length: 30,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.WARNING,
			start: 30,
			length: 30,
		} as ProgressBarRange,
	],
} as Args;

export const WithGaps = StoryTemplate.bind({});

WithGaps.args = {
	ranges: [
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 0,
			length: 10,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO_WEAK,
			start: 20,
			length: 10,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 40,
			length: 10,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO_WEAK,
			start: 50,
			length: 10,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 70,
			length: 30,
		} as ProgressBarRange,
	],
} as Args;

export const Compact = StoryTemplate.bind({});

Compact.args = {
	layout: PROGRESS_BAR_LAYOUTS.COMPACT,
	ranges: [
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 0,
			length: 30,
		} as ProgressBarRange,
	],
	labelText: 'Label text',
	labelData: '30',
	labelDataSupporting: '100',
	labelDataSuffix: '(%)',
} as Args;
