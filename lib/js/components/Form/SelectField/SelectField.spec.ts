import { afterEach, describe, expect, it, vi } from 'vitest';
import { DOMWrapper, enableAutoUnmount, mount, VueWrapper } from '@vue/test-utils';
import { ComputedRef, nextTick, Ref } from 'vue';
import { ComponentProps } from 'vue-component-type-helpers';
import { FormMeta, useForm } from 'vee-validate';
import SelectField from './SelectField.vue';
import Icon, { ICONS } from '../../Icons/Icon';
import { FORM_FIELD_STATES } from '../FormField';
import { SelectFieldOption, SelectFieldOptionGroup } from './SelectField.types';
import { waitForExpectShort } from '../../../tests/helpers';

const OPTIONS: Array<SelectFieldOption> = [
	{ value: 'pl', label: 'Poland' },
	{ value: 'de', label: 'Germany' },
	{ value: 'jp', label: 'Japan', isDisabled: true },
];

const GROUPED_OPTIONS: Array<SelectFieldOption | SelectFieldOptionGroup> = [
	{ value: 'all', label: 'All countries' },
	{ label: 'Europe', options: [{ value: 'pl', label: 'Poland' }] },
	{ label: 'Asia', options: [{ value: 'jp', label: 'Japan' }] },
];

enableAutoUnmount(afterEach);

function setup(props?: Partial<ComponentProps<typeof SelectField>>) {
	return mount(SelectField, {
		props: { options: OPTIONS, ...props } as ComponentProps<typeof SelectField>,
	});
}

/**
 * Asserts that mounting throws. A throw inside `setup()` leaves the component without a render
 * function, so Vue emits an extra "Invalid vnode type" warning on top of the error under test —
 * `warnHandler` swallows it so the run stays clean without hiding warnings elsewhere.
 */
function expectMountToThrow(props: Partial<ComponentProps<typeof SelectField>>, expected?: RegExp) {
	expect(() =>
		mount(SelectField, {
			props: { options: OPTIONS, ...props } as ComponentProps<typeof SelectField>,
			global: { config: { warnHandler: () => {} } },
		}),
	).toThrowError(expected);
}

/**
 * The dropdown is portalled to `<body>`, so it sits outside the wrapper's DOM subtree and
 * `wrapper.find*` cannot reach it. A body-scoped `DOMWrapper` keeps the Test Utils API while
 * querying the portal.
 *
 * `wrapper.findAllComponents(SelectFieldOption)` also crosses the Teleport, but it walks the
 * component tree, so it matches even while the listbox is closed — reka mounts the content into
 * an offscreen fragment — which would defeat the closed-state assertions below.
 */
const portal = () => new DOMWrapper(document.body);

const optionElements = () => portal().findAll('[role="option"]');

/** The trigger opens on `pointerdown`, which needs pointer-capture APIs jsdom lacks. */
async function open(wrapper: VueWrapper) {
	await wrapper.find('button').trigger('keydown', { key: 'ArrowDown' });
	await nextTick();
	await nextTick();
}

/** reka-ui dismisses via `onKeyStroke`, which listens on `window`. */
async function close() {
	// Triggered from <body> so the event bubbles up to that window listener.
	await portal().trigger('keydown', { key: 'Escape' });
	await nextTick();
}

describe('SelectField', () => {
	describe('closed', () => {
		it('should render the label and the placeholder when no value is selected', () => {
			const wrapper = setup({ label: 'Label', placeholder: 'Select placeholder' });

			expect(wrapper.find('.ds-selectField__trigger').exists()).toBe(true);
			expect(wrapper.find('label').text()).toContain('Label');
			expect(wrapper.find('.ds-selectField__value').text()).toBe('Select placeholder');
			expect(
				wrapper.find('.ds-selectField__value').attributes('data-placeholder'),
			).toBeDefined();
		});

		it('should render the selected option label', async () => {
			const wrapper = setup({ label: 'Label', modelValue: 'de' });

			// Options register with reka once the offscreen content fragment is mounted.
			await nextTick();

			await waitForExpectShort(() => {
				expect(wrapper.find('.ds-selectField__value').text()).toBe('Germany');
			});
			expect(
				wrapper.find('.ds-selectField__value').attributes('data-placeholder'),
			).toBeUndefined();
		});

		it('should render the left icon when provided', () => {
			const wrapper = setup({ label: 'Label', leftIcon: ICONS.FA_TAG });

			expect(
				wrapper.findComponent<typeof Icon>('.ds-selectField__leftIcon').props().icon,
			).toEqual(ICONS.FA_TAG);
		});

		it('should not render the left icon by default', () => {
			const wrapper = setup({ label: 'Label' });

			expect(wrapper.find('.ds-selectField__leftIcon').exists()).toBe(false);
		});

		it('should render a combobox trigger associated with the label', () => {
			const wrapper = setup({ label: 'Label' });

			const trigger = wrapper.find('button');
			const fieldId = wrapper.find('label').attributes('for');

			expect(trigger.attributes('role')).toBe('combobox');
			expect(trigger.attributes('id')).toBe(fieldId);
			expect(trigger.attributes('aria-expanded')).toBe('false');
		});

		it('should not render options while closed', () => {
			setup();

			expect(optionElements()).toHaveLength(0);
		});

		it.each([
			{ state: FORM_FIELD_STATES.DISABLED, expectedClass: '-ds-disabled' },
			{ state: FORM_FIELD_STATES.ERROR, expectedClass: '-ds-error' },
		])('should handle state: $state', ({ state, expectedClass }) => {
			const wrapper = setup({ state });

			expect(wrapper.find('.ds-selectField__trigger').classes()).toContain(expectedClass);
		});

		it('should disable the trigger when state is DISABLED', () => {
			const wrapper = setup({ state: FORM_FIELD_STATES.DISABLED });

			expect(wrapper.find('button').attributes('disabled')).toBeDefined();
		});

		it('should throw when an option value is an empty string', () => {
			expectMountToThrow(
				{ options: [{ value: '', label: 'Empty' }] },
				/must not be an empty string/,
			);
		});
	});

	describe('accessible name and description', () => {
		it('should set aria-describedby only when a message is rendered', () => {
			const withMessage = setup({ label: 'Label', messageText: 'Message text' });
			const messageId = `${withMessage.find('label').attributes('for')}-message`;

			expect(withMessage.find('button').attributes('aria-describedby')).toBe(messageId);
			expect(withMessage.find(`#${messageId}`).exists()).toBe(true);

			const withoutMessage = setup({ label: 'Label' });

			expect(withoutMessage.find('button').attributes('aria-describedby')).toBeUndefined();
		});

		it('should use ariaLabel as the accessible name when no visible label is given', () => {
			const wrapper = setup({ ariaLabel: 'Country' });

			expect(wrapper.find('label').exists()).toBe(false);
			expect(wrapper.find('button').attributes('aria-label')).toBe('Country');
		});

		it('should prefer the visible label over ariaLabel', () => {
			const wrapper = setup({ label: 'Label', ariaLabel: 'Country' });

			expect(wrapper.find('button').attributes('aria-label')).toBeUndefined();
		});

		it('should mark the trigger as required when hasRequiredIndicator is set', () => {
			const wrapper = setup({ label: 'Label', hasRequiredIndicator: true });

			expect(wrapper.find('button').attributes('aria-required')).toBe('true');
		});
	});

	describe('open', () => {
		it('should open on ArrowDown and render one option per entry', async () => {
			const wrapper = setup({ label: 'Label' });

			await open(wrapper);

			expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
			expect(optionElements()).toHaveLength(OPTIONS.length);
		});

		it('should expose the styling hook on the portalled content', async () => {
			const wrapper = setup({ label: 'Label' });

			await open(wrapper);

			const content = portal().find('.ds-selectField__content');

			expect(content.exists()).toBe(true);
			// Vue never forwards this component's scope id to SelectContent's element (it renders
			// through Presence's slot), which is why `.ds-selectField__content` is styled from the
			// unscoped block. Keep that in mind before moving the rule into the scoped one.
			expect(content.attributes('role')).toBe('listbox');
		});

		it.each([
			{ maxHeight: 240, expected: '240px' },
			{ maxHeight: '50vh', expected: '50vh' },
			{ maxHeight: undefined, expected: '' },
		])(
			'should resolve the max-height custom property for maxHeight: $maxHeight',
			async ({ maxHeight, expected }) => {
				const wrapper = setup({ label: 'Label', maxHeight });

				await open(wrapper);

				const content = portal().find<HTMLElement>('.ds-selectField__content');

				expect(content.element.style.getPropertyValue('--select-field-max-height')).toBe(
					expected,
				);
			},
		);

		it('should match typeahead on the label only, ignoring the eyebrow text', async () => {
			// 'Status' would win a prefix match on 's' if the eyebrow were part of `textValue`,
			// and 'z' would then match nothing.
			const wrapper = setup({
				label: 'Label',
				options: [
					{ value: 'draft', label: 'Draft', eyebrowText: 'Status' },
					{ value: 'archived', label: 'Zarchiwizowany', eyebrowText: 'Status' },
				],
			});

			await open(wrapper);

			await portal().find('.ds-selectField__content').trigger('keydown', { key: 'z' });

			// Must be the option element itself: asserting on textContent would also pass for the
			// listbox, whose text concatenates every option.
			expect(document.activeElement).toBe(optionElements()[1].element);
		});

		it('should include the eyebrow text in the accessible name', async () => {
			const wrapper = setup({
				label: 'Label',
				options: [{ value: 'draft', label: 'Draft', eyebrowText: 'Status' }],
			});

			await open(wrapper);

			// The eyebrow sits outside SelectItemText, so it would otherwise be dropped.
			expect(optionElements()[0].attributes('aria-label')).toBe('Status Draft');
		});

		it('should name each option via an aria-labelledby that resolves', async () => {
			const wrapper = setup({ label: 'Label' });

			await open(wrapper);

			optionElements().forEach((option, index) => {
				const labelledBy = option.attributes('aria-labelledby');

				expect(labelledBy).toBeTruthy();

				// Resolving an IDREF is document-scoped by definition, and `getElementById` avoids
				// having to escape reka's generated ids into a selector.
				const nameElement = document.getElementById(labelledBy as string);

				expect(nameElement).not.toBeNull();
				expect(nameElement?.textContent?.trim()).toBe(OPTIONS[index].label);
			});
		});

		it('should mark a disabled option as aria-disabled', async () => {
			const wrapper = setup({ label: 'Label' });

			await open(wrapper);

			expect(optionElements()[2].attributes('aria-disabled')).toBe('true');
		});

		it('should mark the selected option as checked', async () => {
			const wrapper = setup({ label: 'Label', modelValue: 'de' });

			await open(wrapper);

			const [poland, germany] = optionElements();

			expect(germany.attributes('aria-selected')).toBe('true');
			expect(germany.attributes('data-state')).toBe('checked');
			expect(poland.attributes('aria-selected')).toBe('false');
		});

		it('should emit update:modelValue when an option is selected with Enter', async () => {
			const onUpdate = vi.fn();
			const wrapper = setup({ label: 'Label', 'onUpdate:modelValue': onUpdate });

			await open(wrapper);

			await optionElements()[1].trigger('keydown', { key: 'Enter' });

			await waitForExpectShort(() => {
				expect(onUpdate).toHaveBeenCalledWith('de');
			});
		});

		it('should emit open-change when opening and closing', async () => {
			const wrapper = setup({ label: 'Label' });

			await open(wrapper);

			expect(wrapper.emitted('open-change')).toEqual([[true]]);

			await close();

			expect(wrapper.find('button').attributes('aria-expanded')).toBe('false');
			expect(wrapper.emitted('open-change')).toEqual([[true], [false]]);
		});
	});

	describe('grouped options', () => {
		it('should render a named group per labelled group and none for ungrouped options', async () => {
			const wrapper = setup({ label: 'Label', options: GROUPED_OPTIONS });

			await open(wrapper);

			const groups = portal().findAll('[role="group"]');

			// Only 'Europe' and 'Asia' are groups; 'All countries' is ungrouped.
			expect(groups).toHaveLength(2);

			groups.forEach((group) => {
				const labelledBy = group.attributes('aria-labelledby');

				expect(labelledBy).toBeTruthy();
				expect(document.getElementById(labelledBy as string)).not.toBeNull();
			});

			expect(
				groups.map((group) => {
					const labelledBy = group.attributes('aria-labelledby') as string;

					return document.getElementById(labelledBy)?.textContent?.trim();
				}),
			).toEqual(['Europe', 'Asia']);

			expect(optionElements()).toHaveLength(3);
		});

		it('should hide the separators between groups from assistive technology', async () => {
			const wrapper = setup({ label: 'Label', options: GROUPED_OPTIONS });

			await open(wrapper);

			const separators = portal().findAll('.ds-selectListItemDivider');

			// One before 'Europe' and one before 'Asia'.
			expect(separators).toHaveLength(2);
			separators.forEach((separator) => {
				expect(separator.attributes('aria-hidden')).toBe('true');
			});
		});
	});

	describe('with vee-validate', () => {
		const fieldName = 'country';

		function setupWithForm(props?: Partial<ComponentProps<typeof SelectField>>) {
			let errorsRef: ComputedRef<Partial<Record<'country', string | undefined>>> | undefined;
			let metaRef: Ref<FormMeta<{ country: string }>> | undefined;

			const FormComponent = {
				template: `
					<form>
						<SelectField v-bind="props" :name="name" :options="options" />
					</form>
				`,
				components: { SelectField },
				setup() {
					const { errors, meta } = useForm({
						initialValues: { [fieldName]: '' },
						validationSchema: {
							country: (val: string) => (val ? true : 'Country is required'),
						},
					});

					errorsRef = errors;
					metaRef = meta;

					return { name: fieldName, options: OPTIONS, props };
				},
			};

			return { wrapper: mount(FormComponent), errorsRef, metaRef };
		}

		it('should mark the form as touched when the listbox closes', async () => {
			const { wrapper, metaRef } = setupWithForm();

			expect(metaRef?.value.touched).toBe(false);

			await open(wrapper);
			await close();

			await waitForExpectShort(() => {
				expect(metaRef?.value.touched).toBe(true);
			});
		});

		it('should surface a validation error as the field message', async () => {
			const { wrapper, errorsRef } = setupWithForm();

			await open(wrapper);
			await close();

			await waitForExpectShort(() => {
				expect(errorsRef?.value?.country).toBe('Country is required');
			});

			expect(wrapper.find('.ds-selectField__trigger').classes()).toContain('-ds-error');
			expect(wrapper.find('.ds-formFieldMessage').text()).toBe('Country is required');
		});

		it('should throw when name is used outside a form context', () => {
			expectMountToThrow({ name: 'country' });
		});
	});
});
