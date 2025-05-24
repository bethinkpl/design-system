import { describe, expect, it, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import CounterToggle from './CounterToggle.vue';
import { COUNTER_TOGGLE_COLORS } from './CounterToggle.consts';
import { ICONS } from '../../Icons/Icon';

const DEFAULT_ICON = Object.freeze(ICONS.FA_XMARK);

describe('CounterToggle', () => {
	const createComponent = (props = {}) => {
		return shallowMount(CounterToggle, {
			props: { icon: DEFAULT_ICON, ...props } as any,
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		[{ props: { color: COUNTER_TOGGLE_COLORS.INVERTED }, expectedClass: '-ds-color-inverted' }],
		[
			{
				props: { color: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG },
				expectedClass: '-ds-color-neutralStrong',
			},
		],
		[{ props: { color: COUNTER_TOGGLE_COLORS.NEUTRAL }, expectedClass: '-ds-color-neutral' }],
		[{ props: { color: COUNTER_TOGGLE_COLORS.PRIMARY }, expectedClass: '-ds-color-primary' }],
		[{ props: { isSelected: true }, expectedClass: '-ds-selected' }],
		[{ props: { isDisabled: true }, expectedClass: '-ds-disabled' }],
	])('correct class for props', ({ props, expectedClass }) => {
		const outlinedCounterToggle = createComponent(props);
		expect(outlinedCounterToggle.classes()).toContain(expectedClass);
	});

	it('should render icon', () => {
		const icon = createComponent({ icon: Object.freeze(ICONS.FA_XMARK) });
		let iconElement = icon.findComponent<typeof CounterToggle>('.ds-counterToggle__icon');
		expect(iconElement.exists()).toBe(true);
		expect(iconElement.props().icon).toEqual(Object.freeze(ICONS.FA_XMARK));
	});

	test.each([
		[{ props: { counter: null }, expectedText: '', expectedToExist: false }],
		[{ props: { counter: 0 }, expectedText: '0', expectedToExist: true }],
		[{ props: { counter: 1 }, expectedText: '1', expectedToExist: true }],
		[{ props: { counter: '0' }, expectedText: '0', expectedToExist: true }],
		[{ props: { counter: '42' }, expectedText: '42', expectedToExist: true }],
		[{ props: { counter: '99+' }, expectedText: '99+', expectedToExist: true }],
		[{ props: { counter: '1024' }, expectedText: '1024', expectedToExist: true }],
		[{ props: { counter: 'test' }, expectedText: 'test', expectedToExist: true }],
	])('correct counter', ({ props, expectedText, expectedToExist }) => {
		const counterToggle = createComponent(props);
		const counterElement = counterToggle.find('.ds-counterToggle__counter');
		expect(counterElement.exists()).toBe(expectedToExist);
		if (expectedToExist) {
			expect(counterElement.text()).toBe(expectedText);
		}
	});
});
