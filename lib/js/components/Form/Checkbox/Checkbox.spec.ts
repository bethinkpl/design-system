import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Checkbox from './Checkbox.vue';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import {
	CHECKBOX_SIZES,
	CHECKBOX_STATES,
	CHECKBOX_VALUES,
	CHECKBOX_ELEVATIONS,
} from './Checkbox.consts';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';

function setup(
	props: ComponentProps<typeof Checkbox> = {},
	slots: Partial<ComponentSlots<typeof Checkbox>> = {},
) {
	return mount(Checkbox, {
		props,
		// @ts-expect-error - it looks like a bug in vue-component-type-helpers or vue-test-utils
		slots,
		attachTo: 'body',
	});
}

describe('Checkbox', () => {
	it('should render', () => {
		const wrapper = setup();

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.ds-checkbox').exists()).toBe(true);
		expect(wrapper.find('.ds-checkbox__root').exists()).toBe(true);
		expect(wrapper.find('.ds-checkbox__indicator').exists()).toBe(true);
	});

	it('should render with label', () => {
		const wrapper = setup(
			{},
			{
				default: () => [h('span', 'Test Label')],
			},
		);

		expect(wrapper.find('.ds-checkbox__label').exists()).toBe(true);
		expect(wrapper.find('.ds-checkbox__label').text()).toBe('Test Label');
	});

	it('should not render label when no slot content provided', () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-checkbox__label').exists()).toBe(false);
	});

	describe('sizes', () => {
		it.each([
			{
				size: CHECKBOX_SIZES.X_SMALL,
				expectedClass: '-ds-x-small',
				expectedIconSize: ICON_SIZES.XX_SMALL,
			},
			{
				size: CHECKBOX_SIZES.SMALL,
				expectedClass: '-ds-small',
				expectedIconSize: ICON_SIZES.X_SMALL,
			},
			{
				size: CHECKBOX_SIZES.MEDIUM,
				expectedClass: '-ds-medium',
				expectedIconSize: ICON_SIZES.SMALL,
			},
		])('should render $size size correctly', ({ size, expectedClass, expectedIconSize }) => {
			const wrapper = setup({ size });

			expect(wrapper.find('.ds-checkbox').classes()).toContain(expectedClass);

			// Check that icon has correct size
			const iconComponent = wrapper.findComponent({ name: 'Icon' });
			if (iconComponent.exists()) {
				expect(iconComponent.props('size')).toBe(expectedIconSize);
			}
		});

		it('should default to small size', () => {
			const wrapper = setup();

			expect(wrapper.find('.ds-checkbox').classes()).toContain('-ds-small');
		});
	});

	describe('states', () => {
		it.each([
			{
				state: CHECKBOX_STATES.DISABLED,
				expectedClass: '-ds-disabled',
			},
			{
				state: CHECKBOX_STATES.ERROR,
				expectedClass: '-ds-error',
			},
			{
				state: CHECKBOX_STATES.DEFAULT,
				expectedClass: null,
			},
		])('should render $state state correctly', ({ state, expectedClass }) => {
			const wrapper = setup({ state });

			if (expectedClass) {
				expect(wrapper.find('.ds-checkbox').classes()).toContain(expectedClass);
			} else {
				expect(wrapper.find('.ds-checkbox').classes()).not.toContain('-ds-disabled');
				expect(wrapper.find('.ds-checkbox').classes()).not.toContain('-ds-error');
			}
		});

		it('should disable checkbox when state is disabled', () => {
			const wrapper = setup({ state: CHECKBOX_STATES.DISABLED });

			const checkboxRoot = wrapper.find('[role="checkbox"]');
			expect(checkboxRoot.attributes('disabled')).toBeDefined();
		});

		it('should default to default state', () => {
			const wrapper = setup();

			expect(wrapper.find('.ds-checkbox').classes()).not.toContain('-ds-disabled');
			expect(wrapper.find('.ds-checkbox').classes()).not.toContain('-ds-error');
		});
	});

	describe('elevations', () => {
		it.each([
			{
				elevation: CHECKBOX_ELEVATIONS.X_SMALL,
				expectedClass: '-ds-elevation',
			},
			{
				elevation: CHECKBOX_ELEVATIONS.NONE,
				expectedClass: null,
			},
		])('should render $elevation elevation correctly', ({ elevation, expectedClass }) => {
			const wrapper = setup({ elevation });

			if (expectedClass) {
				expect(wrapper.find('.ds-checkbox').classes()).toContain(expectedClass);
			} else {
				expect(wrapper.find('.ds-checkbox').classes()).not.toContain('-ds-elevation');
			}
		});

		it('should default to x-small elevation', () => {
			const wrapper = setup();

			expect(wrapper.find('.ds-checkbox').classes()).toContain('-ds-elevation');
		});
	});

	describe('checkbox values', () => {
		it('should display checked icon when value is checked', () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.CHECKED });

			const iconComponent = wrapper.findComponent({ name: 'Icon' });
			expect(iconComponent.props('icon')).toEqual(ICONS.FA_SQUARE_CHECK_SOLID);
		});

		it('should display unchecked icon when value is unchecked', () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.UNCHECKED });

			const iconComponent = wrapper.findComponent({ name: 'Icon' });
			expect(iconComponent.props('icon')).toEqual(ICONS.FA_SQUARE);
		});

		it('should display indeterminate icon when value is indeterminate', () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.INDETERMINATE });

			const iconComponent = wrapper.findComponent({ name: 'Icon' });
			expect(iconComponent.props('icon')).toEqual(ICONS.FA_SQUARE_MINUS);
		});
	});

	describe('user interactions', () => {
		it('should emit update:modelValue when clicked', async () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.UNCHECKED });

			await wrapper.find('label').trigger('click');

			expect(wrapper.emitted('update:modelValue')).toBeTruthy();
			expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe(CHECKBOX_VALUES.CHECKED);
		});

		it('should toggle from checked to unchecked when clicked', async () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.CHECKED });

			await wrapper.find('label').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe(CHECKBOX_VALUES.UNCHECKED);
		});

		it('should toggle from indeterminate to checked when clicked', async () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.INDETERMINATE });

			await wrapper.find('label').trigger('click');

			expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe(CHECKBOX_VALUES.CHECKED);
		});

		it('should not emit when disabled and clicked', async () => {
			const wrapper = setup({
				modelValue: CHECKBOX_VALUES.UNCHECKED,
				state: CHECKBOX_STATES.DISABLED,
			});

			await wrapper.find('label').trigger('click');

			// Should not emit because checkbox is disabled
			expect(wrapper.emitted('update:modelValue')).toBeFalsy();
		});
	});

	describe('accessibility', () => {
		it('should have proper ARIA attributes', () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.CHECKED });

			const checkboxRoot = wrapper.find('[role="checkbox"]');
			expect(checkboxRoot.attributes('role')).toBe('checkbox');
			expect(checkboxRoot.attributes('aria-checked')).toBe('true');
		});

		it('should have aria-checked="false" when unchecked', () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.UNCHECKED });

			const checkboxRoot = wrapper.find('[role="checkbox"]');
			expect(checkboxRoot.attributes('aria-checked')).toBe('false');
		});

		it('should have aria-checked="mixed" when indeterminate', () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.INDETERMINATE });

			const checkboxRoot = wrapper.find('[role="checkbox"]');
			expect(checkboxRoot.attributes('aria-checked')).toBe('mixed');
		});

		it('should be focusable when not disabled', () => {
			const wrapper = setup();

			const checkboxRoot = wrapper.find('[role="checkbox"]');

			expect(checkboxRoot.attributes('type')).toBe('button');
			expect(checkboxRoot.attributes('disabled')).toBeUndefined();
		});

		it('should not be focusable when disabled', () => {
			const wrapper = setup({ state: CHECKBOX_STATES.DISABLED });

			const checkboxRoot = wrapper.find('[role="checkbox"]');
			expect(checkboxRoot.attributes('disabled')).toBeDefined();
		});
	});

	describe('styling classes', () => {
		it('should apply multiple modifier classes correctly', () => {
			const wrapper = setup({
				size: CHECKBOX_SIZES.MEDIUM,
				state: CHECKBOX_STATES.ERROR,
				elevation: CHECKBOX_ELEVATIONS.X_SMALL,
			});

			const checkbox = wrapper.find('.ds-checkbox');
			expect(checkbox.classes()).toContain('-ds-medium');
			expect(checkbox.classes()).toContain('-ds-error');
			expect(checkbox.classes()).toContain('-ds-elevation');
		});
	});

	describe('v-model behavior', () => {
		it('should work with v-model pattern', async () => {
			const modelValue = CHECKBOX_VALUES.UNCHECKED;
			const onUpdate = vi.fn();

			const wrapper = setup({
				modelValue,
				'onUpdate:modelValue': onUpdate,
			});

			await wrapper.find('label').trigger('click');

			expect(onUpdate).toHaveBeenCalledWith(CHECKBOX_VALUES.CHECKED);
		});

		it('should update icon when modelValue changes', async () => {
			const wrapper = setup({ modelValue: CHECKBOX_VALUES.UNCHECKED });

			// Initially shows unchecked icon
			let iconComponent = wrapper.findComponent({ name: 'Icon' });
			expect(iconComponent.props('icon')).toEqual(ICONS.FA_SQUARE);

			await wrapper.find('label').trigger('click');

			// Should now show checked icon
			iconComponent = wrapper.findComponent({ name: 'Icon' });
			expect(iconComponent.props('icon')).toEqual(ICONS.FA_SQUARE_CHECK_SOLID);
		});
	});
});
