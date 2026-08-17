import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import TextAreaField from './TextAreaField.vue';
import TextAreaFieldAutosized from './TextAreaFieldAutosized.vue';
import { ComputedRef, Ref } from 'vue';
import { FORM_FIELD_STATES } from '../FormField';
import { ComponentProps } from 'vue-component-type-helpers';
import { FormMeta, useForm } from 'vee-validate';
import { waitForExpectShort } from '../../../tests/helpers';

const fieldId = 'form-field-v-0';
const messageId = `${fieldId}-message`;

function setup({ props }: { props?: ComponentProps<typeof TextAreaField> } = {}) {
	return mount(TextAreaField, { props });
}

describe('TextAreaField', () => {
	it('should render', () => {
		const wrapper = setup({
			props: {
				label: 'Label',
				messageText: 'Message text',
			},
		});

		expect(wrapper.find('.ds-textAreaField').exists()).toBe(true);
		expect(wrapper.find('textarea').exists()).toBe(true);
		expect(wrapper.find('label').text()).toContain('Label');
		expect(wrapper.find(`#${messageId}`).text()).toBe('Message text');
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

		const textarea = wrapper.find<HTMLTextAreaElement>('textarea');
		expect(textarea.element.value).toBe('initial value');

		await textarea.setValue('updated value');

		expect(onUpdate).toHaveBeenCalledWith('updated value');
		expect(textarea.element.value).toBe('updated value');
	});

	it('should render with accessible ids', () => {
		const wrapper = setup({
			props: {
				label: 'Label',
				messageText: 'Message text',
			},
		});

		expect(wrapper.find('label').attributes('for')).toBe(fieldId);

		const textarea = wrapper.find('textarea');

		expect(textarea.attributes('id')).toBe(fieldId);
		expect(textarea.attributes('aria-describedby')).toBe(messageId);
		expect(wrapper.find(`#${messageId}`).exists()).toBe(true);
	});

	it('should set aria-describedby only when a message is rendered', () => {
		const wrapper = setup({
			props: {
				label: 'Label',
			},
		});

		expect(wrapper.find('textarea').attributes('aria-describedby')).toBeUndefined();
	});

	it('should pass inputProps to the textarea element', () => {
		const inputProps = {
			placeholder: 'Enter text',
			disabled: true,
			maxlength: 500,
			'aria-label': 'Text area field',
		};

		const wrapper = setup({
			props: {
				label: 'Label',
				inputProps,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('placeholder')).toBe(inputProps.placeholder);
		expect(textarea.attributes('disabled')).toBeDefined();
		expect(textarea.attributes('maxlength')).toBe('500');
		expect(textarea.attributes('aria-label')).toBe(inputProps['aria-label']);
	});

	it('should render 3 rows by default', () => {
		const wrapper = setup();

		expect(wrapper.find('textarea').attributes('rows')).toBe('3');
	});

	it('should let inputProps override the default rows', () => {
		const wrapper = setup({
			props: {
				inputProps: {
					rows: 6,
				},
			},
		});

		expect(wrapper.find('textarea').attributes('rows')).toBe('6');
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
		expect(wrapper.find('.ds-textAreaField').classes()).toContain(expectedClass);
	});

	it('should make textarea disabled when state is DISABLED', () => {
		const wrapper = setup({
			props: {
				state: FORM_FIELD_STATES.DISABLED,
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('disabled')).toBeDefined();
	});

	describe('autoresizing', () => {
		it('should render a plain textarea by default', () => {
			const wrapper = setup();

			expect(wrapper.findComponent(TextAreaFieldAutosized).exists()).toBe(false);
			expect(wrapper.find('.ds-textAreaField').classes()).not.toContain('-ds-autoresizing');
			expect(wrapper.find('textarea').exists()).toBe(true);
		});

		it('should render the autosized textarea when isAutoresizing', () => {
			const wrapper = setup({
				props: {
					isAutoresizing: true,
				},
			});

			expect(wrapper.findComponent(TextAreaFieldAutosized).exists()).toBe(true);
			expect(wrapper.find('.ds-textAreaField').classes()).toContain('-ds-autoresizing');
		});

		it('should keep the field plumbing when autoresizing', async () => {
			const onUpdate = vi.fn();
			const wrapper = setup({
				props: {
					label: 'Label',
					messageText: 'Message text',
					isAutoresizing: true,
					inputProps: {
						rows: 4,
					},
					'onUpdate:modelValue': onUpdate,
				},
			});

			const textarea = wrapper.find('textarea');
			expect(textarea.attributes('id')).toBe(fieldId);
			expect(textarea.attributes('aria-describedby')).toBe(messageId);
			expect(textarea.attributes('rows')).toBe('4');
			expect(textarea.classes()).toContain('ds-textAreaField__input');

			await textarea.setValue('updated value');

			expect(onUpdate).toHaveBeenCalledWith('updated value');
		});
	});

	describe('with vee-validate', () => {
		const fieldName = 'siema';
		const initialValue = 'siemanko!';
		function setupWithForm(props?: ComponentProps<typeof TextAreaField>) {
			let controlledValuesRef: Ref<{ siema: string }> | undefined;
			let errorsRef: ComputedRef<Partial<Record<'siema', string | undefined>>> | undefined;
			let metaRef: Ref<FormMeta<{ siema: string }>> | undefined;

			const FormComponent = {
				template: `
				<form>
					<TextAreaField
						v-bind="props"
						:name="name"
					/>
				</form>
			`,
				components: { TextAreaField },
				setup() {
					const { controlledValues, errors, meta } = useForm({
						initialValues: {
							[fieldName]: initialValue,
						},
						validationSchema: {
							siema: (val: string) => (val.length < 5 ? 'Too short' : true),
						},
					});

					controlledValuesRef = controlledValues;
					errorsRef = errors;
					metaRef = meta;

					return {
						name: fieldName,
						props,
					};
				},
			};

			return {
				wrapper: mount(FormComponent),
				controlledValuesRef,
				errorsRef,
				metaRef,
			};
		}

		it('should bind textarea value with vee-validate form values', async () => {
			const { wrapper, controlledValuesRef } = setupWithForm();

			const textarea = wrapper.find('textarea');

			expect(textarea.element.value).toBe(initialValue);
			expect(controlledValuesRef?.value[fieldName]).toBe(initialValue);

			const newValue = 'no cześć!';
			await textarea.setValue(newValue);

			expect(textarea.element.value).toBe(newValue);
			expect(controlledValuesRef?.value[fieldName]).toBe(newValue);
		});

		it('should call onBlur and mark form as touched on blur', async () => {
			const onBlur = vi.fn();
			const { wrapper, metaRef } = setupWithForm({
				inputProps: {
					onBlur,
				},
			});
			expect(metaRef?.value.touched).toBe(false);

			const textarea = wrapper.find('textarea');
			await textarea.trigger('blur');

			expect(onBlur).toHaveBeenCalled();
			expect(metaRef?.value.touched).toBe(true);
		});

		it('should call onInput and show error message', async () => {
			const onInput = vi.fn();
			const { wrapper, errorsRef } = setupWithForm({
				inputProps: {
					onInput,
				},
			});

			const textarea = wrapper.find('textarea');
			await textarea.setValue('test');

			expect(onInput).toHaveBeenCalled();

			await textarea.trigger('blur');

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.siema).toBeDefined();
			});

			expect(wrapper.find('.ds-textAreaField').classes()).toContain('-ds-error');
			expect(wrapper.find(`#${messageId}`).text()).toBe('Too short');

			await textarea.setValue('valid value');

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.siema).toBeUndefined();
			});
		});

		it('should bind the autosized textarea with vee-validate form values', async () => {
			const { wrapper, controlledValuesRef } = setupWithForm({ isAutoresizing: true });

			const textarea = wrapper.find('textarea');
			expect(textarea.element.value).toBe(initialValue);

			const newValue = 'no cześć!';
			await textarea.setValue(newValue);

			expect(controlledValuesRef?.value[fieldName]).toBe(newValue);
		});

		it('should throw an error if used outside of a form context', () => {
			expect(() => {
				setup({
					props: {
						name: 'siema',
					},
				});
			}).toThrowError();
		});

		it('should keep an explicit state and message over a vee-validate error', async () => {
			const { wrapper, errorsRef } = setupWithForm({
				state: FORM_FIELD_STATES.SUCCESS,
				messageText: 'Success message',
			});

			const textarea = wrapper.find('textarea');
			await textarea.setValue('test');

			await textarea.trigger('blur');

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.siema).toBeDefined();
			});

			expect(wrapper.find(`#${messageId}`).classes()).toContain('-ds-success');
			expect(wrapper.find(`#${messageId}`).text()).toBe('Success message');
		});
	});
});
