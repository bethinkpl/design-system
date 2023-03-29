import ProgressDonutChart from './ProgressDonutChart.vue';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue';
import {
	PROGRESS_DONUT_CHART_RANGE_COLORS,
	PROGRESS_DONUT_CHART_STATES,
	ProgressDonutChartRange,
} from './ProgressDonutChart.consts';

export default {
	title: 'Components/ProgressDonutChart',
	component: ProgressDonutChart,
} as Meta<typeof ProgressDonutChart>;

const StoryTemplate: StoryFn<typeof ProgressDonutChart> = (argTypes) => ({
	components: { ProgressDonutChart },
	props: Object.keys(argTypes),
	template: `
		<ProgressDonutChart
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
		control: { type: 'select', options: Object.values(PROGRESS_DONUT_CHART_STATES) },
		defaultValue: PROGRESS_DONUT_CHART_STATES.DEFAULT,
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
				color: PROGRESS_DONUT_CHART_RANGE_COLORS.FAIL_GHOST,
				percent: 80,
			} as ProgressDonutChartRange,
			{
				color: PROGRESS_DONUT_CHART_RANGE_COLORS.INFO,
				percent: 50,
			} as ProgressDonutChartRange,
			{
				color: PROGRESS_DONUT_CHART_RANGE_COLORS.SUCCESS,
				percent: 20,
			} as ProgressDonutChartRange,
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
