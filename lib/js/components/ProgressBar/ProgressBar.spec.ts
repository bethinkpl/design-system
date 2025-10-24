import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';
import {
	PROGRESS_BAR_LAYOUTS,
	PROGRESS_BAR_RANGE_COLORS,
	ProgressBarRange,
} from './ProgressBar.consts';
import ProgressBarLegend from './ProgressBarLegend.vue';
import ProgressBarLegendItem from './ProgressBarLegendItem.vue';

const defaultProps = {
	layout: PROGRESS_BAR_LAYOUTS.DEFAULT,
	ranges: [
		{
			color: PROGRESS_BAR_RANGE_COLORS.SUCCESS,
			start: 0,
			length: 30,
			label: 'First Label',
			data: 'First Data',
		} as ProgressBarRange,
		{
			color: PROGRESS_BAR_RANGE_COLORS.WARNING,
			start: 30,
			length: 10,
			label: 'Second Label',
			data: 'Second Data',
		} as ProgressBarRange,
	],
	labelText: 'Label text',
	labelData: '30',
	labelDataSupporting: '100',
	labelDataSuffix: '(%)',
	labelTextEllipsis: false,
	hasLegend: false,
};

const createComponent = (props = defaultProps) => {
	return mount(ProgressBar, {
		props,
	});
};

describe('ProgressBar', () => {
	describe('Legend', () => {
		it('should not display legend if hasLegend is set to false', () => {
			const component = createComponent();

			expect(component.findComponent(ProgressBarLegend).exists()).toBeFalsy();
		});

		it('should display legend if hasLegend is set to true and contain provided labels in ranges', () => {
			const component = createComponent({ ...defaultProps, hasLegend: true });

			const legend = component.findComponent(ProgressBarLegend);
			expect(legend.exists()).toBeTruthy();

			const legendItems = legend.findAllComponents(ProgressBarLegendItem);
			expect(legendItems.length).toEqual(defaultProps.ranges.length);

			defaultProps.ranges.forEach((range: ProgressBarRange, index: number) => {
				const legendItem = legendItems[index];

				expect(legendItem.text()).toEqual(`${range.label}${range.data}(${range.length}%)`);
			});
		});
	});
});
