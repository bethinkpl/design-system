import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { ComputedRef, Ref } from 'vue';
import { FormMeta, useForm } from 'vee-validate';
import { ComponentProps } from 'vue-component-type-helpers';
import PinInputField from './PinInputField.vue';
import Icon, { ICONS } from '../../Icons/Icon';
import { PIN_INPUT_FIELD_STATES, PIN_INPUT_FIELD_TYPES } from './PinInputField.consts';
import { waitForExpectShort } from '../../../tests/helpers';

const fieldId = 'form-field-v-0';
const labelId = `${fieldId}-label`;
const messageId = `${fieldId}-message`;

const BOX = 'input.ds-pinInputField__item';

function setup({ props }: { props?: ComponentProps<typeof PinInputField> } = {}) {
	return mount(PinInputField, { props });
}

function boxes(wrapper: ReturnType<typeof setup>) {
	return wrapper.findAll<HTMLInputElement>(BOX);
}

function boxValues(wrapper: ReturnType<typeof setup>) {
	return boxes(wrapper).map((box) => box.element.value);
}

async function type(wrapper: ReturnType<typeof setup>, pin: string) {
	const inputs = boxes(wrapper);

	for (const [index, character] of [...pin].entries()) {
		await inputs[index].setValue(character);
	}
}

describe('PinInputField', () => {
	it('should render', () => {
		const wrapper = setup({ props: { label: 'Label' } });

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.ds-pinInputField').exists()).toBe(true);
		expect(wrapper.find('label').text()).toContain('Label');
	});

	it('should render 6 boxes by default', () => {
		expect(boxes(setup())).toHaveLength(6);
	});

	it.each([1, 4, 8])('should render %s boxes', (length) => {
		expect(boxes(setup({ props: { length } }))).toHaveLength(length);
	});

	it('should fill the boxes from the model value', () => {
		const wrapper = setup({ props: { modelValue: '15' } });

		expect(boxValues(wrapper)).toEqual(['1', '5', '', '', '', '']);
	});

	it('should ignore model value characters beyond the length', () => {
		const wrapper = setup({ props: { modelValue: '123456789', length: 4 } });

		expect(boxValues(wrapper)).toEqual(['1', '2', '3', '4']);
	});

	// A shrink leaves the joined value matching the model, so only the surplus entries reveal it.
	// Keeping them would report characters that no longer have a box to edit them in.
	it('should drop the surplus characters when the length shrinks', async () => {
		const onUpdate = vi.fn();
		const wrapper = setup({ props: { modelValue: '123456', 'onUpdate:modelValue': onUpdate } });

		await wrapper.setProps({ length: 4 });

		expect(boxValues(wrapper)).toEqual(['1', '2', '3', '4']);
		expect(onUpdate).toHaveBeenLastCalledWith('1234');
	});

	it('should update the model value as the boxes are filled', async () => {
		const onUpdate = vi.fn();
		const wrapper = setup({ props: { 'onUpdate:modelValue': onUpdate } });

		await type(wrapper, '123');

		expect(onUpdate).toHaveBeenLastCalledWith('123');
	});

	// Guards the array-as-source-of-truth mapping: deriving the boxes from the joined string would
	// shift the later ones leftwards here.
	it('should not shift the remaining boxes when a middle box is cleared', async () => {
		const onUpdate = vi.fn();
		const wrapper = setup({
			props: { modelValue: '123456', 'onUpdate:modelValue': onUpdate },
		});

		await boxes(wrapper)[2].trigger('keydown', { key: 'Backspace' });

		expect(boxValues(wrapper)).toEqual(['1', '2', '', '4', '5', '6']);
		expect(onUpdate).toHaveBeenLastCalledWith('12456');
	});

	it('should distribute a pasted value across the boxes', async () => {
		const wrapper = setup();

		await boxes(wrapper)[0].trigger('paste', {
			clipboardData: { getData: () => '123456' },
		});

		expect(boxValues(wrapper)).toEqual(['1', '2', '3', '4', '5', '6']);
	});

	it('should emit complete with the joined value once every box is filled', async () => {
		const wrapper = setup();

		await type(wrapper, '12345');
		expect(wrapper.emitted('complete')).toBeUndefined();

		await type(wrapper, '123456');
		expect(wrapper.emitted('complete')).toEqual([['123456']]);
	});

	it('should render with accessible ids', () => {
		const wrapper = setup({ props: { label: 'Label', messageText: 'Message text' } });
		const group = wrapper.find('[role="group"]');

		expect(wrapper.find('label').attributes('for')).toBe(fieldId);
		expect(wrapper.find(`input#${fieldId}`).exists()).toBe(true);
		expect(group.attributes('aria-labelledby')).toBe(labelId);
		expect(group.attributes('aria-describedby')).toBe(messageId);
		expect(wrapper.find(`#${messageId}`).exists()).toBe(true);
	});

	it('should set aria-describedby only when a message is rendered', () => {
		const wrapper = setup({ props: { label: 'Label' } });

		expect(wrapper.find('[role="group"]').attributes('aria-describedby')).toBeUndefined();
	});

	it('should fall back to ariaLabel when no label is provided', () => {
		const withLabel = setup({ props: { label: 'Label', ariaLabel: 'Aria label' } });
		const withoutLabel = setup({ props: { ariaLabel: 'Aria label' } });

		expect(withLabel.find('[role="group"]').attributes('aria-label')).toBeUndefined();
		expect(withoutLabel.find('[role="group"]').attributes('aria-label')).toBe('Aria label');
	});

	it('should mark the group as required', () => {
		const wrapper = setup({ props: { label: 'Label', hasRequiredIndicator: true } });

		expect(wrapper.find(`input#${fieldId}`).attributes('required')).toBeDefined();
	});

	describe('state', () => {
		it('should render a spinner instead of the boxes when loading', () => {
			const wrapper = setup({ props: { state: PIN_INPUT_FIELD_STATES.LOADING } });
			const spinner = wrapper.findComponent<typeof Icon>('.ds-pinInputField__spinner');

			expect(boxes(wrapper)).toHaveLength(0);
			expect(wrapper.find('.ds-pinInputField').classes()).toContain('-ds-loading');
			expect(spinner.props().icon).toEqual(ICONS.FAD_SPINNER_THIRD);
			expect(spinner.props().spinning).toBe(true);
		});

		it('should keep the value while loading', async () => {
			const wrapper = setup({ props: { modelValue: '15' } });

			await wrapper.setProps({ state: PIN_INPUT_FIELD_STATES.LOADING });
			await wrapper.setProps({ state: PIN_INPUT_FIELD_STATES.DEFAULT });

			expect(boxValues(wrapper)).toEqual(['1', '5', '', '', '', '']);
		});
	});

	describe('otp and type', () => {
		it('should mark the boxes as one-time-code inputs by default', () => {
			expect(boxes(setup())[0].attributes('autocomplete')).toBe('one-time-code');
		});

		it('should not mark the boxes as one-time-code inputs when otp is false', () => {
			expect(boxes(setup({ props: { otp: false } }))[0].attributes('autocomplete')).not.toBe(
				'one-time-code',
			);
		});

		it('should use a numeric input mode by default', () => {
			const box = boxes(setup())[0];

			expect(box.attributes('inputmode')).toBe('numeric');
			expect(box.attributes('pattern')).toBe('[0-9]*');
		});

		it('should use a text input mode when type is text', () => {
			expect(
				boxes(setup({ props: { type: PIN_INPUT_FIELD_TYPES.TEXT } }))[0].attributes(
					'inputmode',
				),
			).toBe('text');
		});

		// reka stores numbers in numeric mode, so the model has to survive the mixed array.
		it('should round-trip a numeric pin through the string model', async () => {
			const onUpdate = vi.fn();
			const wrapper = setup({ props: { 'onUpdate:modelValue': onUpdate } });

			await type(wrapper, '123456');

			expect(onUpdate).toHaveBeenLastCalledWith('123456');
			expect(boxValues(wrapper)).toEqual(['1', '2', '3', '4', '5', '6']);
		});

		it('should discard non-digits in numeric mode and keep them in text mode', async () => {
			const numeric = setup();
			await boxes(numeric)[0].setValue('a');
			expect(boxValues(numeric)[0]).toBe('');

			const text = setup({ props: { type: PIN_INPUT_FIELD_TYPES.TEXT } });
			await boxes(text)[0].setValue('a');
			expect(boxValues(text)[0]).toBe('a');
		});
	});

	describe('with vee-validate', () => {
		const fieldName = 'code';
		const initialValue = '15';
		const errorMessage = 'Kod jest nieprawidłowy';

		function setupWithForm(props?: ComponentProps<typeof PinInputField>) {
			let controlledValuesRef: Ref<{ code: string }> | undefined;
			let errorsRef: ComputedRef<Partial<Record<'code', string | undefined>>> | undefined;
			let metaRef: Ref<FormMeta<{ code: string }>> | undefined;

			const FormComponent = {
				template: `
					<form novalidate @submit.prevent="onSubmit">
						<PinInputField v-bind="props" :name="name" />
					</form>
				`,
				components: { PinInputField },
				setup() {
					const { controlledValues, errors, meta, handleSubmit } = useForm({
						initialValues: {
							[fieldName]: initialValue,
						},
						validationSchema: {
							code: (val: string) => (val === '999999' ? true : errorMessage),
						},
					});

					controlledValuesRef = controlledValues;
					errorsRef = errors;
					metaRef = meta;

					return {
						name: fieldName,
						props,
						onSubmit: handleSubmit(() => {}),
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

		it('should bind the boxes to the vee-validate form values', async () => {
			const { wrapper, controlledValuesRef } = setupWithForm();

			expect(wrapper.findAll<HTMLInputElement>(BOX).map((box) => box.element.value)).toEqual([
				'1',
				'5',
				'',
				'',
				'',
				'',
			]);
			expect(controlledValuesRef?.value[fieldName]).toBe(initialValue);

			await wrapper.findAll(BOX)[2].setValue('7');

			expect(controlledValuesRef?.value[fieldName]).toBe('157');
		});

		// The gate keeps a half-typed pin from being marked invalid while the user is still filling it.
		it('should not show an error while the pin is incomplete', async () => {
			const { wrapper, errorsRef } = setupWithForm();

			await wrapper.findAll(BOX)[2].setValue('7');

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.code).toBeDefined();
			});

			expect(wrapper.find(`#${messageId}`).exists()).toBe(false);
		});

		it('should show the error once the pin is complete', async () => {
			const { wrapper, metaRef } = setupWithForm();
			const inputs = wrapper.findAll(BOX);

			for (const [index, character] of [...'123456'].entries()) {
				await inputs[index].setValue(character);
			}

			await waitForExpectShort(() => {
				expect(wrapper.find(`#${messageId}`).text()).toBe(errorMessage);
			});

			expect(metaRef?.value.touched).toBe(true);
		});

		it('should show the error once focus leaves the field', async () => {
			const { wrapper, metaRef } = setupWithForm();

			await wrapper.find('[role="group"]').trigger('focusout', { relatedTarget: null });

			await waitForExpectShort(() => {
				expect(wrapper.find(`#${messageId}`).text()).toBe(errorMessage);
			});

			expect(metaRef?.value.touched).toBe(true);
		});

		// Boxes blur on every hop between boxes, which must not count as leaving the field.
		it('should not show the error when focus moves between boxes', async () => {
			const { wrapper, metaRef } = setupWithForm();
			const inputs = wrapper.findAll(BOX);

			await inputs[0].trigger('focusout', { relatedTarget: inputs[1].element });

			expect(metaRef?.value.touched).toBe(false);
			expect(wrapper.find(`#${messageId}`).exists()).toBe(false);
		});

		// `handleSubmit` touches every field, which a component-local touched flag would have missed.
		it('should show the error after the form is submitted', async () => {
			const { wrapper } = setupWithForm();

			await wrapper.find('form').trigger('submit');

			await waitForExpectShort(() => {
				expect(wrapper.find(`#${messageId}`).text()).toBe(errorMessage);
			});
		});

		it('should clear the error once the pin is valid', async () => {
			const { wrapper, errorsRef } = setupWithForm();
			const inputs = wrapper.findAll(BOX);

			await wrapper.find('form').trigger('submit');

			await waitForExpectShort(() => {
				expect(wrapper.find(`#${messageId}`).exists()).toBe(true);
			});

			for (const [index, character] of [...'999999'].entries()) {
				await inputs[index].setValue(character);
			}

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.code).toBeUndefined();
			});

			expect(wrapper.find(`#${messageId}`).exists()).toBe(false);
		});

		it('should throw an error if used outside of a form context', () => {
			// A throw inside `setup()` leaves the component without a render function, so Vue emits
			// an extra "Invalid vnode type" warning on top of the error under test.
			expect(() =>
				mount(PinInputField, {
					props: { name: fieldName },
					global: { config: { warnHandler: () => {} } },
				}),
			).toThrowError();
		});

		it('should keep an explicit message over a vee-validate error', async () => {
			const { wrapper, errorsRef } = setupWithForm({
				messageText: 'Wpisz kod z e-maila',
			});

			await wrapper.find('form').trigger('submit');

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.code).toBe(errorMessage);
			});

			expect(wrapper.find(`#${messageId}`).text()).toBe('Wpisz kod z e-maila');
		});
	});
});
