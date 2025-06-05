import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import PasswordField from './PasswordField.vue';

const fieldId = 'form-field-v-0';
const messageId = `${fieldId}-message`;

describe('PasswordField', () => {
	it('should switch between password and text input types', async () => {
		const wrapper = mount(PasswordField);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('input').attributes('type')).toBe('password');

		const toggleButton = wrapper.find('[data-test-id="password-toggle"]');

		await toggleButton.trigger('click');

		expect(wrapper.find('input').attributes('type')).toBe('text');

		await toggleButton.trigger('click');

		expect(wrapper.find('input').attributes('type')).toBe('password');
	});

	it('should render InputField and pass props', () => {
		const wrapper = mount(PasswordField, {
			props: {
				label: 'Label',
				messageText: 'Message text',
			},
		});

		expect(wrapper.find('label').text()).toBe('Label');
		expect(wrapper.find(`#${messageId}`).text()).toBe('Message text');
	});

	it('should render InputField with slots', () => {
		const wrapper = mount(PasswordField, {
			slots: {
				labelAside: () => 'Label Aside',
				message: () => 'Message Slot',
				fieldStatus: () => 'Field Status Slot',
				help: () => h('div', { id: 'help-slot' }, 'Help Slot'),
			},
		});

		expect(wrapper.find('.ds-formField__labelAside').text()).toBe('Label Aside');
		expect(wrapper.find('.ds-formField__message').text()).toBe('Message Slot');
		expect(wrapper.find('.ds-formField__fieldStatus').text()).toBe('Field Status Slot');
		expect(wrapper.find('#help-slot').text()).toBe('Help Slot');
	});

	it('should handle value updates', async () => {
		const onUpdate = vi.fn();
		const wrapper = mount(PasswordField, {
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
});
