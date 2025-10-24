import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import ProgressBarLegend from './ProgressBarLegend.vue';
import { PROGRESS_BAR_LEGEND_LAYOUTS, PROGRESS_BAR_LEGEND_SIZES } from './ProgressBarLegend.consts';
import {
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_RANGE_COLORS,
	ProgressBarRange,
} from './ProgressBar.consts';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/ProgressBar/ProgressBarLegend',
	component: ProgressBarLegend,
} as Meta<typeof ProgressBarLegend>;

const StoryTemplate: StoryFn<typeof ProgressBarLegend> = (args) => ({
	components: { ProgressBarLegend },
	setup() {
		return { args };
	},
	template: `
		<progress-bar-legend v-bind=args></progress-bar-legend>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_LEGEND_SIZES),
	},
	layout: {
		control: 'select',
		options: Object.values(PROGRESS_BAR_LEGEND_LAYOUTS),
	},
	ranges: {
		control: 'object',
	},
	hasPercentValue: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = {
	size: PROGRESS_BAR_LEGEND_SIZES.SMALL,
	layout: PROGRESS_BAR_LAYOUTS.DEFAULT,
	ranges: [
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO,
			start: 0,
			length: 30,
			label: 'First Label',
			data: 'First Data',
			icon: ICONS.FA_ADDRESS_CARD,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO_WEAK,
			start: 30,
			length: 10,
			label: 'Second Label',
			data: 'Second Data',
			icon: ICONS.FA_CARDS_BLANK,
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.INFO_GHOST,
			start: 40,
			length: 10,
			label: 'Third Label',
			data: 'Third Data',
			icon: ICONS.FA_CIRCLE_ARROW_LEFT,
		} as ProgressBarRange,
	],
	hasPercentValue: true,
} as Args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14650-3488&m=dev',
	},
};
