import { describe, expect, it, test, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';

import Button from './Button.vue';
import {
	BUTTON_COLORS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STATES,
	BUTTON_TYPES,
} from './Button.consts';
import { GRADIENT_MAGIC_ICON_DISABLED_ID, GRADIENT_MAGIC_ICON_ID } from './useMagicGradient';
import Icon, { ICONS } from '../../Icons/Icon';

describe('Button', () => {
	const createComponent = (props = {} as any) => {
		return shallowMount(Button, {
			props,
			slots: {
				default: 'Hello',
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		[{ props: { type: BUTTON_TYPES.OUTLINED }, expectedClass: '-ds-outlined' }],
		[{ props: { type: BUTTON_TYPES.TEXT }, expectedClass: '-ds-text' }],
		[{ props: { size: BUTTON_SIZES.SMALL }, expectedClass: '-ds-small' }],
		[{ props: { size: BUTTON_SIZES.LARGE }, expectedClass: '-ds-large' }],
		[{ props: { color: BUTTON_COLORS.PRIMARY }, expectedClass: '-ds-color-primary' }],
		[{ props: { color: BUTTON_COLORS.DANGER }, expectedClass: '-ds-color-danger' }],
		[{ props: { color: BUTTON_COLORS.SUCCESS }, expectedClass: '-ds-color-success' }],
		[
			{
				props: { color: BUTTON_COLORS.MAGIC, type: BUTTON_TYPES.OUTLINED },
				expectedClass: '-ds-color-magic',
			},
		],
		[{ props: { radius: BUTTON_RADIUSES.ROUNDED }, expectedClass: '-ds-rounded' }],
		[{ props: { state: BUTTON_STATES.HOVERED }, expectedClass: '-ds-hovered' }],
		[{ props: { state: BUTTON_STATES.FOCUSED }, expectedClass: '-ds-focused' }],
		[{ props: { state: BUTTON_STATES.LOADING }, expectedClass: '-ds-loading' }],
		[{ props: { state: BUTTON_STATES.DISABLED }, expectedClass: '-ds-disabled' }],
	])('correct class for props', ({ props, expectedClass }) => {
		const outlinedButton = createComponent(props);
		expect(outlinedButton.classes()).toContain(expectedClass);
	});

	it('magic button fills with the magic gradient', () => {
		const component = createComponent({ color: BUTTON_COLORS.MAGIC });

		expect(component.element.style.getPropertyValue('--ds-magic-fill')).toBe(
			`url(#${GRADIENT_MAGIC_ICON_ID})`,
		);
	});

	it('disabled magic button fills with the disabled magic gradient', () => {
		const component = createComponent({
			color: BUTTON_COLORS.MAGIC,
			state: BUTTON_STATES.DISABLED,
		});

		expect(component.element.style.getPropertyValue('--ds-magic-fill')).toBe(
			`url(#${GRADIENT_MAGIC_ICON_DISABLED_ID})`,
		);
	});

	it('non-magic button has no magic fill style', () => {
		const component = createComponent({
			color: BUTTON_COLORS.PRIMARY,
			state: BUTTON_STATES.DISABLED,
		});

		expect(component.element.style.getPropertyValue('--ds-magic-fill')).toBe('');
	});

	it('loading should have correct text container and loading icon', () => {
		const component = createComponent({ state: BUTTON_STATES.LOADING });

		expect(component.find('.ds-button__content').exists()).toBe(true);
		expect(component.find('.ds-button__loadingIcon').exists()).toBe(true);
	});

	it('should render icon', () => {
		const leftIcon = createComponent({ 'icon-left': Object.freeze(ICONS.FA_XMARK) });
		expect(leftIcon.find('.ds-button__icon.-ds-left').exists()).toBe(true);
		expect(
			leftIcon.findComponent<typeof Icon>('.ds-button__icon.-ds-left').props().icon,
		).toEqual(ICONS.FA_XMARK);

		const rightIcon = createComponent({ 'icon-right': Object.freeze(ICONS.FA_CLOCK) });
		expect(rightIcon.find('.ds-button__icon.-ds-right').exists()).toBe(true);
		expect(
			rightIcon.findComponent<typeof Icon>('.ds-button__icon.-ds-right').props().icon,
		).toEqual(ICONS.FA_CLOCK);
	});

	it('correct slot content', () => {
		const component = createComponent({ 'icon-left': null });
		expect(component.find('.ds-button__icon.-ds-left').exists()).toBe(false);
		expect(component.find('.ds-button__content').text()).toBe('Hello');
	});

	it('renders as span by default', () => {
		const component = createComponent();
		expect(component.element.tagName).toBe('SPAN');
	});

	it('renders as button if "as" prop is set to "button"', () => {
		const component = createComponent({ as: 'button' });
		expect(component.element.tagName).toBe('BUTTON');
	});

	it('renders as anchor if "as" prop is set to "a"', () => {
		const component = createComponent({ as: 'a' });
		expect(component.element.tagName).toBe('A');
	});

	// Enter in a form field submits the form through its button whatever the CSS says -
	// only the native `disabled` attribute prevents a loading or disabled button from submitting
	test.each([BUTTON_STATES.LOADING, BUTTON_STATES.DISABLED])(
		'sets the native disabled attribute on a button in the %s state',
		(state) => {
			const component = createComponent({ as: 'button', state });
			expect(component.attributes('disabled')).toBeDefined();
		},
	);

	test.each([BUTTON_STATES.DEFAULT, BUTTON_STATES.HOVERED, BUTTON_STATES.FOCUSED])(
		'leaves a button in the %s state enabled',
		(state) => {
			const component = createComponent({ as: 'button', state });
			expect(component.attributes('disabled')).toBeUndefined();
		},
	);

	it('does not set the disabled attribute on elements other than a button', () => {
		const component = createComponent({ as: 'a', state: BUTTON_STATES.LOADING });
		expect(component.attributes('disabled')).toBeUndefined();
	});

	it('marks a loading button as busy', () => {
		expect(
			createComponent({ as: 'button', state: BUTTON_STATES.LOADING }).attributes('aria-busy'),
		).toBe('true');
		expect(createComponent({ as: 'button' }).attributes('aria-busy')).toBeUndefined();
	});

	it('does not submit its form while loading', async () => {
		const onSubmit = vi.fn((event: Event) => event.preventDefault());
		const form = document.createElement('form');
		form.addEventListener('submit', onSubmit);
		document.body.appendChild(form);

		const component = mount(Button, {
			props: { as: 'button', state: BUTTON_STATES.LOADING },
			attachTo: form,
		});

		// implicit submission (Enter in a field) activates the form's default button like a click does
		const button = component.element as HTMLButtonElement;

		button.click();
		expect(onSubmit).not.toHaveBeenCalled();

		await component.setProps({ state: BUTTON_STATES.DEFAULT });
		button.click();
		expect(onSubmit).toHaveBeenCalledTimes(1);

		component.unmount();
		form.remove();
	});
});
