import ProgressDonutChart from './ProgressDonutChart.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	PROGRESS_DONUT_CHART_RANGE_COLORS,
	PROGRESS_DONUT_CHART_STATES,
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

const args = {
	label: '70',
	state: PROGRESS_DONUT_CHART_STATES.DEFAULT,
	ranges: [
		{
			color: PROGRESS_DONUT_CHART_RANGE_COLORS.SUCCESS,
			start: 0,
			length: 30,
		},
		{
			color: PROGRESS_DONUT_CHART_RANGE_COLORS.INFO,
			start: 30,
			length: 25,
		},
		{
			color: PROGRESS_DONUT_CHART_RANGE_COLORS.FAIL_GHOST,
			start: 55,
			length: 25,
		},
	],
} as Args;

const argTypes = {
	label: {
		control: 'text',
	},
	state: {
		control: 'select',
		options: Object.values(PROGRESS_DONUT_CHART_STATES),
	},
	ranges: {
		control: 'object',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867-97923&t=wQeUoflFyMwdW7Ne-4',
	},
};
