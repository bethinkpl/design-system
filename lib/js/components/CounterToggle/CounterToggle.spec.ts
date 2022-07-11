import { shallowMount } from '@vue/test-utils';

import CounterToggle from './CounterToggle.vue';
import {
	COUNTER_TOGGLE_COLORS,
} from './CounterToggle.consts';
import { ICONS } from '../Icon';

const DEFAULT_ICON = ICONS.FA_XMARK;

describe('CounterToggle', () => {
	const createComponent = (props = {}) => {
		return shallowMount(CounterToggle, {
			propsData: { icon: DEFAULT_ICON, ...props },
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		[{ props: { color: COUNTER_TOGGLE_COLORS.INVERTED }, expectedClass: '-color-inverted' }],
		[{ props: { color: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG }, expectedClass: '-color-neutralStrong' }],
		[{ props: { color: COUNTER_TOGGLE_COLORS.NEUTRAL }, expectedClass: '-color-neutral' }],
		[{ props: { color: COUNTER_TOGGLE_COLORS.PRIMARY }, expectedClass: '-color-primary' }],
		[{ props: { isSelected: true }, expectedClass: '-selected' }],
		[{ props: { isDisabled: true }, expectedClass: '-disabled' }],
	])('correct class for props', ({ props, expectedClass }) => {
		const outlinedCounterToggle = createComponent(props);
		expect(outlinedCounterToggle.classes()).toContain(expectedClass);
	});

	it('should render icon', () => {
		const icon = createComponent({ icon: ICONS.FA_XMARK });
		expect(icon.find('.counterToggle__icon').exists()).toBe(true);
		expect(icon.find('.counterToggle__icon').props().icon).toBe(ICONS.FA_XMARK);
	});

	test.each([
		[{ props: { counter: null }, expectedText: '', expectedToExists: false }],
		[{ props: { counter: 0 }, expectedText: '0', expectedToExists: true }],
		[{ props: { counter: 1 }, expectedText: '1', expectedToExists: true }],
		[{ props: { counter: '0' }, expectedText: '0', expectedToExists: true }],
		[{ props: { counter: '42' }, expectedText: '42', expectedToExists: true }],
		[{ props: { counter: '99+' }, expectedText: '99+', expectedToExists: true }],
		[{ props: { counter: '1024' }, expectedText: '1024', expectedToExists: true }],
		[{ props: { counter: 'test' }, expectedText: 'test', expectedToExists: true }],
	])('correct counter', ({ props, expectedText, expectedToExists }) => {
		const counterToggle = createComponent(props);
		expect(counterToggle.find('.counterToggle__counter').exists()).toBe(expectedToExists);
		if (counterToggle.find('.counterToggle__counter').exists()) {
			expect(counterToggle.find('.counterToggle__counter').text()).toBe(expectedText);
		}
	});
});
