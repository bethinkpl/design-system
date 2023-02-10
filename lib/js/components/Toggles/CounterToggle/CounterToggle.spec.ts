import { shallowMount } from '@vue/test-utils';

import CounterToggle from './CounterToggle.vue';
import { COUNTER_TOGGLE_COLORS } from './CounterToggle.consts';
import { ICONS } from '../../Icon';

const DEFAULT_ICON = ICONS.FA_XMARK;

describe('CounterToggle', () => {
	const createComponent = (props = {}) => {
		return shallowMount(CounterToggle, {
			props: { icon: DEFAULT_ICON, ...props },
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		[{ props: { color: COUNTER_TOGGLE_COLORS.INVERTED }, expectedClass: '-color-inverted' }],
		[
			{
				props: { color: COUNTER_TOGGLE_COLORS.NEUTRAL_STRONG },
				expectedClass: '-color-neutralStrong',
			},
		],
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
		let iconElement = icon.findComponent<typeof CounterToggle>('.counterToggle__icon');
		expect(iconElement.exists()).toBe(true);
		expect(iconElement.props().icon).toEqual(ICONS.FA_XMARK);
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
		const counterElement = counterToggle.find('.counterToggle__counter');
		expect(counterElement.exists()).toBe(expectedToExist);
		if (expectedToExist) {
			expect(counterElement.text()).toBe(expectedText);
		}
	});
});
