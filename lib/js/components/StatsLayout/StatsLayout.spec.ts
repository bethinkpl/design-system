import { describe, expect, it } from 'vitest';
import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { h } from 'vue';

import StatsLayout from './StatsLayout.vue';

describe('StatsLayout', () => {
	const createComponent = (options: ComponentMountingOptions<typeof StatsLayout> = {}) => {
		return mount(StatsLayout, options);
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render main layout class', () => {
		const component = createComponent();

		expect(component.find('.ds-statsLayout').exists()).toBe(true);
	});

	describe('slots', () => {
		it('should render dynamic statsItem slots', () => {
			const component = createComponent({
				slots: {
					'statsItem-0': () => [h('div', { class: 'test-item-0' }, 'Item 0')],
					'statsItem-1': () => [h('div', { class: 'test-item-1' }, 'Item 1')],
					'statsItem-2': () => [h('div', { class: 'test-item-2' }, 'Item 2')],
				},
			});

			expect(component.find('.test-item-0').exists()).toBe(true);
			expect(component.find('.test-item-1').exists()).toBe(true);
			expect(component.find('.test-item-2').exists()).toBe(true);
		});

		it('should render dividers between statsItems', () => {
			const component = createComponent({
				slots: {
					'statsItem-0': () => [h('div', 'Item 0')],
					'statsItem-1': () => [h('div', 'Item 1')],
				},
			});

			const dividers = component.findAll('.ds-statsLayout__statsDivider');
			expect(dividers.length).toBe(2);
		});
	});

	describe('props', () => {
		describe('hasGridHeader', () => {
			it('should render grid headers by default', () => {
				const component = createComponent();

				const gridHeaders = component.findAll('.ds-statsLayout__gridHeader');
				expect(gridHeaders.length).toBe(2);
			});

			it('should not render grid headers when hasGridHeader is false', () => {
				const component = createComponent({
					props: {
						hasGridHeader: false,
					},
				});

				const gridHeaders = component.findAll('.ds-statsLayout__gridHeader');
				expect(gridHeaders.length).toBe(0);
			});
		});

		describe('hasRightColumn', () => {
			it('should render right column by default', () => {
				const component = createComponent();

				const rightColumns = component.findAll('.ds-statsLayout__gridHeaderRightColumn');
				expect(rightColumns.length).toBeGreaterThan(0);
			});

			it('should not render right column when hasRightColumn is false', () => {
				const component = createComponent({
					props: {
						hasRightColumn: false,
					},
				});

				const rightColumns = component.findAll('.ds-statsLayout__gridHeaderRightColumn');
				expect(rightColumns.length).toBe(0);
			});
		});

		describe('isLoading', () => {
			it('should not show loading state by default', () => {
				const component = createComponent();

				expect(component.find('.ds-statsLayout__loading').exists()).toBe(false);
			});

			it('should show loading state when isLoading is true', () => {
				const component = createComponent({
					props: {
						isLoading: true,
					},
				});

				expect(component.find('.ds-statsLayout__loading').exists()).toBe(true);
			});

			it('should hide content when loading', () => {
				const component = createComponent({
					props: {
						isLoading: true,
					},
					slots: {
						overallStatsItem: () => [h('div', { class: 'test-content' }, 'Content')],
					},
				});

				expect(component.find('.ds-statsLayout__content').exists()).toBe(false);
				expect(component.find('.test-content').exists()).toBe(false);
			});
		});

		describe('hasError', () => {
			it('should not show error state by default', () => {
				const component = createComponent();

				expect(component.find('.ds-statsLayout__error').exists()).toBe(false);
			});

			it('should show error state when hasError is true', () => {
				const component = createComponent({
					props: {
						hasError: true,
					},
				});

				expect(component.find('.ds-statsLayout__error').exists()).toBe(true);
			});

			it('should hide content when error', () => {
				const component = createComponent({
					props: {
						hasError: true,
					},
					slots: {
						overallStatsItem: () => [h('div', { class: 'test-content' }, 'Content')],
					},
				});

				expect(component.find('.ds-statsLayout__content').exists()).toBe(false);
				expect(component.find('.test-content').exists()).toBe(false);
			});

			it('should prioritize loading over error', () => {
				const component = createComponent({
					props: {
						isLoading: true,
						hasError: true,
					},
				});

				expect(component.find('.ds-statsLayout__loading').exists()).toBe(true);
				expect(component.find('.ds-statsLayout__error').exists()).toBe(false);
			});
		});
	});
});
