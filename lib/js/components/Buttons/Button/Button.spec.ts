import { shallowMount } from '@vue/test-utils';

import Button from './Button.vue';
import {
	BUTTON_COLORS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STATES,
	BUTTON_TYPES,
} from './Button.consts';
import { ICONS } from '../../Icons/Icon';

describe('Button', () => {
	const createComponent = (props = {} as any) => {
		return shallowMount(Button, {
			props,
			slots: {
				default: 'Hello',
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		[{ props: { type: BUTTON_TYPES.OUTLINED }, expectedClass: '-outlined' }],
		[{ props: { type: BUTTON_TYPES.TEXT }, expectedClass: '-text' }],
		[{ props: { size: BUTTON_SIZES.SMALL }, expectedClass: '-small' }],
		[{ props: { size: BUTTON_SIZES.LARGE }, expectedClass: '-large' }],
		[{ props: { color: BUTTON_COLORS.PRIMARY }, expectedClass: '-color-primary' }],
		[{ props: { color: BUTTON_COLORS.DANGER }, expectedClass: '-color-danger' }],
		[{ props: { color: BUTTON_COLORS.SUCCESS }, expectedClass: '-color-success' }],
		[{ props: { radius: BUTTON_RADIUSES.ROUNDED }, expectedClass: '-rounded' }],
		[{ props: { state: BUTTON_STATES.HOVERED }, expectedClass: '-hovered' }],
		[{ props: { state: BUTTON_STATES.FOCUSED }, expectedClass: '-focused' }],
		[{ props: { state: BUTTON_STATES.LOADING }, expectedClass: '-loading' }],
		[{ props: { state: BUTTON_STATES.DISABLED }, expectedClass: '-disabled' }],
	])('correct class for props', ({ props, expectedClass }) => {
		const outlinedButton = createComponent(props);
		expect(outlinedButton.classes()).toContain(expectedClass);
	});

	it('loading should have correct text container and loading icon', () => {
		const component = createComponent({ state: BUTTON_STATES.LOADING });

		expect(component.find('.a-button__content').exists()).toBe(true);
		expect(component.find('.a-button__loadingIcon').exists()).toBe(true);
	});

	it('should render icon', () => {
		const leftIcon = createComponent({ 'icon-left': Object.freeze(ICONS.FA_XMARK) });
		expect(leftIcon.find('.a-button__icon.-left').exists()).toBe(true);
		expect(leftIcon.findComponent<typeof Button>('.a-button__icon.-left').props().icon).toEqual(
			ICONS.FA_XMARK,
		);

		const rightIcon = createComponent({ 'icon-right': Object.freeze(ICONS.FA_CLOCK) });
		expect(rightIcon.find('.a-button__icon.-right').exists()).toBe(true);
		expect(
			rightIcon.findComponent<typeof Button>('.a-button__icon.-right').props().icon,
		).toEqual(ICONS.FA_CLOCK);
	});

	it('correct slot content', () => {
		const component = createComponent({ 'icon-left': null });
		expect(component.find('.a-button__icon.-left').exists()).toBe(false);
		expect(component.find('.a-button__content').text()).toBe('Hello');
	});
});
