import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Toast from './Toast.vue';
import { TOAST_COLORS, TOAST_POSITIONS, TOAST_SIZES } from './Toast.consts';
import DsButton, { BUTTON_SIZES } from '../Buttons/Button';
import { ComponentProps } from 'vue-component-type-helpers';

const setup = (props: ComponentProps<typeof Toast> = {}) =>
	mount(Toast, {
		props,
		slots: {
			content: () => h('span', 'Wpłynąłem na suchego przestwór oceanu'),
		},
	});

describe('Toast', () => {
	afterEach(() => {
		vi.useRealTimers();
	});

	it('should render the content slot', () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-toast__content').text()).toBe(
			'Wpłynąłem na suchego przestwór oceanu',
		);
	});

	it.each(Object.values(TOAST_POSITIONS))('should render in position: %s', (position) => {
		const wrapper = setup({ position });

		expect(wrapper.find('.ds-toast').classes()).toContain(`-ds-position-${position}`);
	});

	it('should update the position modifier when the prop changes', async () => {
		const wrapper = setup({ position: TOAST_POSITIONS.CENTER });

		await wrapper.setProps({ position: TOAST_POSITIONS.NONE });

		expect(wrapper.find('.ds-toast').classes()).toContain('-ds-position-none');
		expect(wrapper.find('.ds-toast').classes()).not.toContain('-ds-position-center');
	});

	it.each(Object.values(TOAST_SIZES))('should render in size: %s', (size) => {
		const wrapper = setup({ size });

		expect(wrapper.find('.ds-toast').classes()).toContain(`-ds-size-${size}`);
	});

	it.each(Object.values(TOAST_COLORS))('should render in color: %s', (color) => {
		const wrapper = setup({ color });

		expect(wrapper.find('.ds-toast').classes()).toContain(`-ds-color-${color}`);
	});

	it('should render the title when provided', () => {
		const wrapper = setup({ title: 'Tytuł' });

		expect(wrapper.find('.ds-toast__title').text()).toBe('Tytuł');
	});

	it('should not render the title when not provided', () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-toast__title').exists()).toBe(false);
	});

	it.each([
		{ size: TOAST_SIZES.SMALL, expectedButtonSize: BUTTON_SIZES.SMALL },
		{ size: TOAST_SIZES.MEDIUM, expectedButtonSize: BUTTON_SIZES.MEDIUM },
		{ size: TOAST_SIZES.LARGE, expectedButtonSize: BUTTON_SIZES.MEDIUM },
	])(
		'should render $expectedButtonSize footer buttons in size $size',
		({ size, expectedButtonSize }) => {
			const wrapper = setup({
				size,
				footerPrimaryButtonText: 'primary',
				footerSecondaryButtonText: 'secondary',
			});

			const buttonSizes = wrapper
				.findAllComponents(DsButton)
				.map((button) => button.props('size'));

			expect(buttonSizes).toEqual([expectedButtonSize, expectedButtonSize]);
		},
	);

	it('should not render the footer without button texts', () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-toast__footerButtons').exists()).toBe(false);
	});

	it('should emit primary-button-click on the primary button click', async () => {
		const wrapper = setup({ footerPrimaryButtonText: 'primary' });

		await wrapper.findComponent(DsButton).trigger('click');

		expect(wrapper.emitted('primary-button-click')).toHaveLength(1);
	});

	it('should emit secondary-button-click on the secondary button click', async () => {
		const wrapper = setup({ footerSecondaryButtonText: 'secondary' });

		await wrapper.findComponent(DsButton).trigger('click');

		expect(wrapper.emitted('secondary-button-click')).toHaveLength(1);
	});

	it('should emit close after the disappearing timeout', () => {
		vi.useFakeTimers();
		const wrapper = setup({ isDisappearing: true, disappearingTimeout: '3' });

		vi.advanceTimersByTime(3 * 1000 + 100);

		expect(wrapper.emitted('close')).toHaveLength(1);
	});

	it('should not emit close when it is not disappearing', () => {
		vi.useFakeTimers();
		const wrapper = setup({ isDisappearing: false, disappearingTimeout: '3' });

		vi.advanceTimersByTime(3 * 1000 + 100);

		expect(wrapper.emitted('close')).toBeUndefined();
	});
});
