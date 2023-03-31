import { createLocalVue, shallowMount } from '@vue/test-utils';

import ProgressDonutChart from './ProgressDonutChart.vue';
import {
	PROGRESS_DONUT_CHART_RANGE_COLORS,
	PROGRESS_DONUT_CHART_STATES,
	ProgressDonutChartRange,
	ProgressDonutChartState,
} from './ProgressDonutChart.consts';

const localVue = createLocalVue();
const createComponent = function ({
	label = '',
	state = PROGRESS_DONUT_CHART_STATES.DEFAULT,
	ranges = [],
}: createComponentOptions) {
	return shallowMount(ProgressDonutChart, {
		localVue,
		propsData: {
			label,
			state,
			ranges,
		},
	});
};

const rangesMock = [
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
];

interface createComponentOptions {
	label: string;
	state?: ProgressDonutChartState;
	ranges?: Array<ProgressDonutChartRange>;
}

describe('ProgressDonutChart', () => {
	it('should render loading', () => {
		const component = createComponent({
			label: 'test',
			state: PROGRESS_DONUT_CHART_STATES.LOADING,
			ranges: rangesMock,
		});

		expect(component.find('.progressDonutChart__loader').exists()).toBeTruthy();
		expect(component.find('.progressDonutChart__track').exists()).toBeFalsy();
	});

	it('should render icon when done', async () => {
		const component = createComponent({
			label: 'test',
			state: PROGRESS_DONUT_CHART_STATES.DONE,
			ranges: rangesMock,
		});

		expect(component.find('ds-icon-stub').exists()).toBeTruthy();
	});

	it('should render + sign when overage', () => {
		const component = createComponent({
			label: 'test',
			state: PROGRESS_DONUT_CHART_STATES.OVERAGE,
			ranges: rangesMock,
		});

		expect(component.find('.progressDonutChart__track.-success').exists()).toBeTruthy();
		expect(component.find('.progressDonutChart__labelText').exists()).toBeTruthy();
		expect(component.find('.progressDonutChart__labelText').text()).toBe('+test');
	});

	it('should calculate track rotation based on start and length', () => {
		const component = createComponent({
			label: 'test',
			state: PROGRESS_DONUT_CHART_STATES.DEFAULT,
			ranges: rangesMock,
		});
		const tracks = component.findAll('.progressDonutChart__track');
		expect(tracks.length).toBe(3);
		expect(tracks.at(0).attributes('style')).toBe('transform: rotate(90deg);');
		expect(tracks.at(1).attributes('style')).toBe('transform: rotate(198deg);');
		expect(tracks.at(2).attributes('style')).toBe('transform: rotate(288deg);');
	});
});
