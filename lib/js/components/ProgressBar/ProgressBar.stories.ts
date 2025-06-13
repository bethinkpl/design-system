import ProgressBar from './ProgressBar.vue';
import {
	PROGRESS_BAR_BADGE_COLORS,
	PROGRESS_BAR_LABEL_TEXT_SIZES,
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_RADII,
	PROGRESS_BAR_RANGE_COLORS,
	PROGRESS_BAR_SIZES,
	ProgressBarRange,
} from './ProgressBar.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';

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
		control: 'select',
		options: Object.values(PROGRESS_BAR_SIZES),
	},
	labelTextSize: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_LABEL_TEXT_SIZES),
	},
	ranges: {
		control: 'object',
	},
	radius: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_RADII),
	},
	layout: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_LAYOUTS),
	},
	labelText: {
		control: 'text',
	},
	labelData: {
		control: 'text',
	},
	labelDataSupporting: {
		control: 'text',
	},
	labelDataSuffix: {
		control: 'text',
	},
	badgePosition: {
		// we use `text` type, because Storybook doesn't allow empty field in `number` type which imitates null
		control: 'text',
	},
	badgeColor: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_BADGE_COLORS),
	},
	labelTextEllipsis: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = {
	size: PROGRESS_BAR_SIZES.SMALL,
	labelTextSize: PROGRESS_BAR_LABEL_TEXT_SIZES.SMALL,
	ranges: [
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
	radius: PROGRESS_BAR_RADII.DEFAULT,
	layout: PROGRESS_BAR_LAYOUTS.DEFAULT,
	labelText: 'Label text',
	labelData: '30',
	labelDataSupporting: '100',
	labelDataSuffix: '(%)',
	badgePosition: '50',
	badgeColor: PROGRESS_BAR_BADGE_COLORS.INFO,
	labelTextEllipsis: false,
} as Args;

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
	labelTextEllipsis: false,
} as Args;
