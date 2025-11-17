import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { inject, defineComponent } from 'vue';
import { useForm } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import CheckboxGroupField from './CheckboxGroupField.vue';
import FormField from '../FormField/FormField.vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import { CHECKBOX_SIZES, CHECKBOX_STATES, CHECKBOX_ELEVATIONS } from '../Checkbox/Checkbox.consts';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { CHECKBOX_GROUP_INJECTION_KEY } from './CheckboxGroupField.consts';
import { waitForExpectShort } from '../../../tests/helpers';

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
		expect(fieldGroup.attributes('aria-labelledby')).toBe(
			wrapper.find('.ds-formField__label').attributes('id'),
		);
	});

	describe('vee-validate integration', () => {
		it('integrates with vee-validate form context and reflects initial values', async () => {
			// eslint-disable-next-line vue/one-component-per-file
			const TestForm = defineComponent({
				name: 'TestForm',
				components: {
					CheckboxGroupField,
					Checkbox,
				},
				setup() {
					useForm({
						initialValues: {
							preferences: ['option2'],
						},
					});

					return {};
				},
				template: `
					<form>
						<CheckboxGroupField 
							name="preferences" 
							label="Select your preferences"
						>
							<template #field>
								<Checkbox value="option1">Option 1</Checkbox>
								<Checkbox value="option2">Option 2</Checkbox>
								<Checkbox value="option3">Option 3</Checkbox>
							</template>
						</CheckboxGroupField>
					</form>
				`,
			});

			const wrapper = mount(TestForm);

			const checkboxes = wrapper.findAll('button[role="checkbox"]');

			expect(checkboxes[0]?.attributes('data-state')).toBe('unchecked');
			expect(checkboxes[1]?.attributes('data-state')).toBe('checked');
			expect(checkboxes[2]?.attributes('data-state')).toBe('unchecked');
		});

		it('displays validation errors on form submission with invalid data', async () => {
			const validationSchema = toTypedSchema(
				z.object({
					preferences: z
						.array(z.string())
						.min(1, { message: 'Please select at least one option' }),
				}),
			);

			// eslint-disable-next-line vue/one-component-per-file
			const TestForm = defineComponent({
				name: 'TestForm',
				components: {
					CheckboxGroupField,
					Checkbox,
				},
				setup() {
					const { handleSubmit } = useForm({
						validationSchema,
						initialValues: {
							preferences: [],
						},
					});

					const onSubmit = handleSubmit((values) => {
						// This won't be called if validation fails
					});

					return {
						onSubmit,
					};
				},
				template: `
					<form @submit="onSubmit">
						<CheckboxGroupField 
							name="preferences" 
							label="Select your preferences"
						>
							<template #field>
								<Checkbox value="option1">Option 1</Checkbox>
								<Checkbox value="option2">Option 2</Checkbox>
							</template>
						</CheckboxGroupField>
						<button type="submit">Submit</button>
					</form>
				`,
			});

			const wrapper = mount(TestForm);
			const formField = wrapper.findComponent(FormField);

			const group = wrapper.find('[role="group"]');
			const describedby = group.attributes('aria-describedby');
			const message = wrapper.find(`#${describedby}`);

			// Initially, there should be no error message
			expect(message.exists()).toBe(false);

			const form = wrapper.find('form');
			await form.trigger('submit');

			await waitForExpectShort(() => {
				const group = wrapper.find('[role="group"]');
				const describedby = group.attributes('aria-describedby');
				const message = wrapper.find(`#${describedby}`);
				expect(message.text()).toBe('Please select at least one option');
				expect(formField.props('state')).toBe(FORM_FIELD_STATES.ERROR);
			});
		});

		it('works without vee-validate form context using v-model', async () => {
			// eslint-disable-next-line vue/one-component-per-file
			const TestComponent = defineComponent({
				name: 'TestComponent',
				components: {
					CheckboxGroupField,
					Checkbox,
				},
				data() {
					return {
						selectedValues: ['option1'],
					};
				},
				template: `
					<CheckboxGroupField 
						v-model="selectedValues"
						label="Select your preferences"
					>
						<template #field>
							<Checkbox value="option1">Option 1</Checkbox>
							<Checkbox value="option2">Option 2</Checkbox>
						</template>
					</CheckboxGroupField>
				`,
			});

			const wrapper = mount(TestComponent);

			const checkboxes = wrapper.findAll('button[role="checkbox"]');

			expect(checkboxes[0]?.attributes('data-state')).toBe('checked');
			expect(checkboxes[1]?.attributes('data-state')).toBe('unchecked');
		});

		it('throws error when name is provided but no form context exists', () => {
			expect(() => {
				mount(CheckboxGroupField, {
					props: {
						name: 'preferences',
						label: 'Test Label',
					},
					slots: {
						field: '<div>test</div>',
					},
				});
			}).toThrow();
		});
	});
});
