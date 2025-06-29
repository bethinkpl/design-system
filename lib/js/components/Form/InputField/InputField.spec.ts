import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import InputField from './InputField.vue';
import Icon, { ICONS } from '../../Icons/Icon';
import { h } from 'vue';
import { FORM_FIELD_STATES } from '../FormField';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';

const fieldId = 'form-field-v-0';
const messageId = `${fieldId}-message`;

function setup({
	props,
	slots,
}: {
	props?: ComponentProps<typeof InputField>;
	slots?: ComponentSlots<typeof InputField>;
} = {}) {
	return mount(InputField, {
		props,
		slots: {
			action() {
				return [];
			},
			...slots,
		},
	});
}

describe('InputField', () => {
	it('should render', () => {
		const wrapper = setup({
			props: {
				label: 'Label',
				messageText: 'Message text',
				suffixText: 'Suffix text',
				leftIcon: ICONS.FA_TAG,
			},
			slots: {
				action: () => [h('button', { id: 'test-action' }, () => 'Action Button')],
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.ds-inputField__suffixText').text()).toBe('Suffix text');
		expect(wrapper.findComponent<typeof Icon>('.ds-inputField__leftIcon').props().icon).toEqual(
			ICONS.FA_TAG,
		);
		expect(wrapper.find('#test-action').exists()).toBe(true);
	});

	it('should handle value updates', async () => {
		const onUpdate = vi.fn();
		const wrapper = setup({
			props: {
				label: 'Label',
				modelValue: 'initial value',
				'onUpdate:modelValue': onUpdate,
			},
		});

		const input = wrapper.find<HTMLInputElement>('input');
		expect(input.element.value).toBe('initial value');

		await input.setValue('updated value');

		expect(onUpdate).toHaveBeenCalledWith('updated value');
		expect(input.element.value).toBe('updated value');
	});

	it('should render with accessible ids', () => {
		const wrapper = setup({
			props: {
				label: 'Label',
				messageText: 'Message text',
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('label').attributes('for')).toBe(fieldId);

		const input = wrapper.find('input');

		expect(input.attributes('id')).toBe(fieldId);
		expect(input.attributes('aria-describedby')).toBe(messageId);
		expect(wrapper.find(`#${messageId}`).exists()).toBe(true);
	});

	it('should pass inputProps to the input element', () => {
		const inputProps = {
			placeholder: 'Enter text',
			disabled: true,
			'aria-label': 'Input field',
		};

		const wrapper = setup({
			props: {
				label: 'Label',
				inputProps,
			},
		});

		const input = wrapper.find('input');
		expect(input.attributes('placeholder')).toBe(inputProps.placeholder);
		expect(input.attributes('disabled')).toBeDefined();
		expect(input.attributes('aria-label')).toBe(inputProps['aria-label']);
	});

	it.each([
		{
			state: FORM_FIELD_STATES.DISABLED,
			expectedClass: '-ds-disabled',
		},
		{
			state: FORM_FIELD_STATES.ERROR,
			expectedClass: '-ds-error',
		},
	])('should handle state: $state', ({ state, expectedClass }) => {
		const wrapper = setup({
			props: {
				state,
			},
		});
		expect(wrapper.find('.ds-inputField').classes()).toContain(expectedClass);
	});

	it('should make input disabled when state is DISABLED', () => {
		const wrapper = setup({
			props: {
				state: FORM_FIELD_STATES.DISABLED,
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('disabled')).toBeDefined();
	});
});
