import ProgressPieChart from './ProgressPieChart.vue';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue';
import {
	PROGRESS_PIE_CHART_RANGE_COLORS,
	PROGRESS_PIE_CHART_STATES,
	ProgressPieChartRange,
} from './ProgressPieChart.consts';

export default {
	title: 'Components/ProgressPieChart',
	component: ProgressPieChart,
} as Meta<typeof ProgressPieChart>;

const StoryTemplate: StoryFn<typeof ProgressPieChart> = (argTypes) => ({
	components: { ProgressPieChart },
	props: Object.keys(argTypes),
	template: `
		<ProgressPieChart
			v-bind=$props
		/>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
	label: {
		control: { type: 'text' },
		defaultValue: '70',
	},
	state: {
		control: { type: 'select', options: Object.values(PROGRESS_PIE_CHART_STATES) },
		defaultValue: PROGRESS_PIE_CHART_STATES.DEFAULT,
	},
	isDone: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	hasOverage: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	ranges: {
		control: { type: 'array' },
		defaultValue: [
			{
				color: PROGRESS_PIE_CHART_RANGE_COLORS.FAIL_GHOST,
				percent: 80,
			} as ProgressPieChartRange,
			{
				color: PROGRESS_PIE_CHART_RANGE_COLORS.INFO,
				percent: 50,
			} as ProgressPieChartRange,
			{
				color: PROGRESS_PIE_CHART_RANGE_COLORS.SUCCESS,
				percent: 20,
			} as ProgressPieChartRange,
		],
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867-97923&t=wQeUoflFyMwdW7Ne-4',
	},
};
