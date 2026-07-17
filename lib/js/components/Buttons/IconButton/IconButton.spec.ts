import { afterEach, describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';

import IconButton from './IconButton.vue';
import {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
	ICON_BUTTON_TYPES,
} from './IconButton.consts';
import Button, { BUTTON_TYPES } from '../Button';
import Icon, { ICONS } from '../../Icons/Icon';
import { GRADIENT_MAGIC_ICON_ID } from '../Button/useMagicGradient';

describe('IconButton', () => {
	const createComponent = (props = {} as any) => {
		return mount(IconButton, {
			props: {
				icon: ICONS.FA_XMARK,
				...props,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		[{ props: { size: ICON_BUTTON_SIZES.X_SMALL }, expectedClass: '-ds-x-small' }],
		[{ props: { size: ICON_BUTTON_SIZES.SMALL }, expectedClass: '-ds-small' }],
		[{ props: { size: ICON_BUTTON_SIZES.LARGE }, expectedClass: '-ds-large' }],
		[{ props: { state: ICON_BUTTON_STATES.HOVERED }, expectedClass: '-ds-hovered' }],
		[{ props: { state: ICON_BUTTON_STATES.FOCUSED }, expectedClass: '-ds-focused' }],
		[{ props: { state: ICON_BUTTON_STATES.DISABLED }, expectedClass: '-ds-disabled' }],
		[{ props: { state: ICON_BUTTON_STATES.LOADING }, expectedClass: '-ds-loading' }],
		[{ props: { color: ICON_BUTTON_COLORS.PRIMARY }, expectedClass: '-ds-color-primary' }],
		[{ props: { color: ICON_BUTTON_COLORS.MAGIC }, expectedClass: '-ds-color-magic' }],
		[{ props: { color: ICON_BUTTON_COLORS.ACCENT }, expectedClass: '-ds-color-accent' }],
	])('correct class for props', ({ props, expectedClass }) => {
		const component = createComponent(props);
		expect(component.classes()).toContain(expectedClass);
	});

	it('renders the icon', () => {
		const component = createComponent({ icon: ICONS.FA_CLOCK });

		const icon = component.findComponent<typeof Icon>('.ds-iconButton__icon');
		expect(icon.exists()).toBe(true);
		expect(icon.props().icon).toEqual(ICONS.FA_CLOCK);
	});

	it('renders the spinner icon when loading', () => {
		const component = createComponent({ state: ICON_BUTTON_STATES.LOADING });

		const icon = component.findComponent<typeof Icon>('.ds-iconButton__icon');
		expect(icon.props().icon).toEqual(ICONS.FAD_SPINNER_THIRD);
		expect(icon.props().spinning).toBe(true);
	});

	test.each([
		[{ type: ICON_BUTTON_TYPES.ICON_ONLY, expectedButtonType: BUTTON_TYPES.OUTLINED }],
		[{ type: ICON_BUTTON_TYPES.OUTLINED, expectedButtonType: BUTTON_TYPES.OUTLINED }],
		[{ type: ICON_BUTTON_TYPES.FILLED, expectedButtonType: BUTTON_TYPES.FILLED }],
	])('maps type to inner button type', ({ type, expectedButtonType }) => {
		const component = createComponent({ type });

		const button = component.findComponent<typeof Button>('.ds-iconButton__button');
		expect(button.props().type).toBe(expectedButtonType);
	});

	it('marks the inner button as icon-only for the icon-only type', () => {
		const component = createComponent({ type: ICON_BUTTON_TYPES.ICON_ONLY });

		const button = component.findComponent<typeof Button>('.ds-iconButton__button');
		expect(button.classes()).toContain('-ds-iconOnly');
	});

	describe('magic color', () => {
		afterEach(() => {
			document.getElementById(GRADIENT_MAGIC_ICON_ID)?.remove();
		});

		it('passes the magic color through to the inner button', () => {
			const component = createComponent({
				color: ICON_BUTTON_COLORS.MAGIC,
				type: ICON_BUTTON_TYPES.OUTLINED,
			});

			const button = component.findComponent<typeof Button>('.ds-iconButton__button');
			expect(button.props().color).toBe(ICON_BUTTON_COLORS.MAGIC);
		});

		it('injects the shared gradient paint server into the document when color is magic', () => {
			createComponent({ color: ICON_BUTTON_COLORS.MAGIC });

			expect(document.getElementById(GRADIENT_MAGIC_ICON_ID)).not.toBeNull();
		});

		it('does not inject the gradient paint server for non-magic colors', () => {
			createComponent({ color: ICON_BUTTON_COLORS.PRIMARY });

			expect(document.getElementById(GRADIENT_MAGIC_ICON_ID)).toBeNull();
		});
	});
});
