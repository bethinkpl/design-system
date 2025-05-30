import { mount } from '@vue/test-utils';
import { h } from 'vue';
import FormField from './FormField.vue';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';

function setup(
	props: ComponentProps<typeof FormField> = {},
	slots: Partial<ComponentSlots<typeof FormField>> = {},
) {
	return mount(FormField, {
		props,
		slots: {
			field({ fieldId, messageId }) {
				return [
					h('input', {
						id: fieldId,
						'aria-describedby': messageId,
					}),
				];
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
				isRequired: true,
			},
			{
				labelAside: () => [h('span', 'Label aside')],
				message: ({ messageId }) => [h('div', { id: messageId })],
				fieldStatus: () => [h('span', 'Field status')],
				help: () => [h('span', 'Help')],
			},
		);

		const fieldId = 'form-field-v-0';
		const messageId = 'form-field-v-0-message';

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.ds-formField__label').attributes('for')).toBe(fieldId);
		expect(wrapper.find('.ds-formField__labelText').text()).toBe('Label');
		expect(wrapper.find('.ds-formField__labelRequired').text()).toBe('*');
		expect(wrapper.find('.ds-formField__labelInfo').text()).toBe('Label info');
		expect(wrapper.find('.ds-formField__subLabelRow').text()).toBe('Sub Label');
		expect(wrapper.find('.ds-formField__mainRow input').attributes()).toEqual({
			id: fieldId,
			'aria-describedby': messageId,
		});
		expect(wrapper.find('.ds-formField__labelAside').text()).toBe('Label aside');
		expect(wrapper.find(`#${messageId}`).exists()).toBe(true);
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
				message: ({ messageId }) => [h('div', { id: messageId }, 'Message')],
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
});
