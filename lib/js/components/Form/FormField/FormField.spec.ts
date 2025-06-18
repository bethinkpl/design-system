import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import FormField from './FormField.vue';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import FormFieldMessage from './FormFieldMessage/FormFieldMessage.vue';

const fieldId = 'form-field-v-0';
const messageId = 'form-field-v-0-message';

function setup(
	props: ComponentProps<typeof FormField> = {},
	slots: Partial<ComponentSlots<typeof FormField>> = {},
) {
	return mount(FormField, {
		props,
		slots: {
			field() {
				return [h('input')];
			},
			...slots,
		},
	});
}

describe('FormField', () => {
	it('should render', () => {
		const wrapper = setup(
			{
				label: 'Label',
				labelInfo: 'Label info',
				subLabel: 'Sub Label',
				hasRequiredIndicator: true,
			},
			{
				labelAside: () => [h('span', 'Label aside')],
				message: () => [
					h(
						FormFieldMessage,
						{
							messageId,
						},
						() => 'Message',
					),
				],
				fieldStatus: () => [h('span', 'Field status')],
				help: () => [h('span', 'Help')],
			},
		);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.ds-formField__label').attributes('for')).toBe(fieldId);
		expect(wrapper.find('.ds-formField__labelText').text()).toBe('Label');
		expect(wrapper.find('.ds-formField__labelRequired').text()).toBe('*');
		expect(wrapper.find('.ds-formField__labelInfo').text()).toBe('Label info');
		expect(wrapper.find('.ds-formField__subLabelRow').text()).toBe('Sub Label');
		expect(wrapper.find('.ds-formField__field input').exists()).toBe(true);
		expect(wrapper.find('.ds-formField__labelAside').text()).toBe('Label aside');
		expect(wrapper.find(`#${messageId}`).text()).toBe('Message');
		expect(wrapper.find('.ds-formField__fieldStatus').text()).toBe('Field status');
	});

	it.each([
		{
			name: 'only label',
			props: {
				label: 'Label',
			},
			slots: {},
			expected: true,
		},
		{
			name: 'only label aside',
			props: {},
			slots: {
				labelAside: () => [h('span', 'Label aside')],
			},
			expected: true,
		},
		{
			name: 'only subLabel',
			props: {
				subLabel: 'Sub Label',
			},
			slots: {},
			expected: true,
		},
		{
			name: 'no labels wrapper',
			props: {},
			slots: {},
			expected: false,
		},
	])(`should render labels wrapper: $name`, ({ props, slots, expected }) => {
		const wrapper = setup(props, slots);

		expect(wrapper.find('.ds-formField__labels').exists()).toBe(expected);
	});

	it.each([
		{
			name: 'only message',
			props: {},
			slots: {
				message: () => [h(FormFieldMessage, { messageId }, () => 'Message')],
			},
			expected: true,
		},
		{
			name: 'only field status',
			props: {},
			slots: {
				fieldStatus: () => [h('span', 'Field status')],
			},
			expected: true,
		},
		{
			name: 'no footer row',
			props: {},
			slots: {},
			expected: false,
		},
	])('should render footer row: $name', ({ props, slots, expected }) => {
		const wrapper = setup(props, slots);

		expect(wrapper.find('.ds-formField__footerRow').exists()).toBe(expected);
	});

	it('should render message', () => {
		const messageText = 'Message text';
		const wrapper = setup({
			messageText,
		});

		expect(wrapper.find('.ds-formField__message').exists()).toBe(true);
		expect(wrapper.find(`#${messageId}`).text()).toBe(messageText);
	});
});
