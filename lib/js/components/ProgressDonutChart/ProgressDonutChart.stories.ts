import ProgressDonutChart from './ProgressDonutChart.vue';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	PROGRESS_DONUT_CHART_RANGE_COLORS,
	PROGRESS_DONUT_CHART_STATES,
	ProgressDonutChartRange,
} from './ProgressDonutChart.consts';

export default {
	title: 'Components/ProgressDonutChart',
	component: ProgressDonutChart,
} as Meta<typeof ProgressDonutChart>;

const StoryTemplate: StoryFn<typeof ProgressDonutChart> = (args) => ({
	components: { ProgressDonutChart },
	setup() {
		return { args };
	},
	template: `
			<ProgressDonutChart
					v-bind=args
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
	ranges: {
		control: { type: 'array' },
		defaultValue: [
			{
				color: PROGRESS_DONUT_CHART_RANGE_COLORS.SUCCESS,
				start: 0,
				length: 30,
			} as ProgressDonutChartRange,
			{
				color: PROGRESS_DONUT_CHART_RANGE_COLORS.INFO,
				start: 30,
				length: 25,
			} as ProgressDonutChartRange,
			{
				color: PROGRESS_DONUT_CHART_RANGE_COLORS.FAIL_GHOST,
				start: 55,
				length: 25,
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
