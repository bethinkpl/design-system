import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { inject } from 'vue';
import CheckboxGroupField from './CheckboxGroupField.vue';
import FormField from '../FormField/FormField.vue';
import { CHECKBOX_SIZES, CHECKBOX_STATES, CHECKBOX_ELEVATIONS } from '../Checkbox/Checkbox.consts';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { CHECKBOX_GROUP_INJECTION_KEY } from './CheckboxGroupField.consts';

describe('CheckboxGroupField', () => {
	it('renders FormField with correct props', () => {
		const wrapper = mount(CheckboxGroupField, {
			props: {
				label: 'Test Label',
				state: FORM_FIELD_STATES.ERROR,
				hasRequiredIndicator: true,
				messageText: 'Test message',
			},
			slots: {
				field: '<div>Test content</div>',
			},
		});

		const formField = wrapper.findComponent(FormField);
		expect(formField.exists()).toBe(true);
		expect(formField.props('label')).toBe('Test Label');
		expect(formField.props('state')).toBe(FORM_FIELD_STATES.ERROR);
		expect(formField.props('hasRequiredIndicator')).toBe(true);
		expect(formField.props('messageText')).toBe('Test message');
	});

	it('provides context to child components', () => {
		const TestChild = {
			template: '<div>{{ size }}-{{ state }}-{{ elevation }}</div>',
			setup() {
				const context = inject(CHECKBOX_GROUP_INJECTION_KEY, null);
				return {
					size: context?.size,
					state: context?.state,
					elevation: context?.elevation,
				};
			},
		};

		const wrapper = mount(CheckboxGroupField, {
			props: {
				label: 'Test',
				size: CHECKBOX_SIZES.MEDIUM,
				state: CHECKBOX_STATES.ERROR,
				elevation: CHECKBOX_ELEVATIONS.X_SMALL,
			},
			slots: {
				field: TestChild,
			},
		});

		expect(wrapper.text()).toContain('medium-error-x-small');
	});

	it('renders all slot content correctly', () => {
		const wrapper = mount(CheckboxGroupField, {
			props: {
				label: 'Test Label',
			},
			slots: {
				labelAside: '<span>Label aside</span>',
				help: '<button>Help</button>',
				field: '<div>Field content</div>',
				message: '<span>Custom message</span>',
				fieldStatus: '<span>Status</span>',
			},
		});

		expect(wrapper.html()).toContain('Label aside');
		expect(wrapper.html()).toContain('Help');
		expect(wrapper.html()).toContain('Field content');
		expect(wrapper.html()).toContain('Custom message');
		expect(wrapper.html()).toContain('Status');
	});

	it('has correct accessibility attributes', () => {
		const wrapper = mount(CheckboxGroupField, {
			props: {
				label: 'Test Label',
				messageText: 'Test message',
			},
			slots: {
				field: '<div>Content</div>',
			},
		});

		const fieldGroup = wrapper.find('.ds-checkboxGroupField');
		expect(fieldGroup.attributes('role')).toBe('group');
		expect(fieldGroup.attributes('aria-describedby')).toBe(
			wrapper.find('.ds-formFieldMessage').attributes('id'),
		);
		expect(fieldGroup.attributes('id')).toBe(
			wrapper.find('.ds-formField__label').attributes('for'),
		);
	});
});
