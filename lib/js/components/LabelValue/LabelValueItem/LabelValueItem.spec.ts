import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import LabelValueItem from './LabelValueItem.vue';
import Icon, { ICON_SIZES, ICONS, IconItem } from '../../Icons/Icon';
import {
	LABEL_VALUE_ITEM_SIZES,
	LABEL_VALUE_ITEM_STATES,
	LABEL_VALUE_ITEM_VALUE_COLORS,
	LabelValueItemSize,
	LabelValueItemState,
	LabelValueItemValueColor,
} from './LabelValueItem.consts';

interface createComponentOptions {
	label?: string;
	valueText?: string;
	state?: LabelValueItemState;
	size?: LabelValueItemSize;
	isLabelStrong?: boolean;
	valueColor?: LabelValueItemValueColor;
	icon?: IconItem | null;
	slots?: Record<string, string>;
}

describe('LabelValueItem', () => {
	const createComponent = ({
		label = 'random label',
		valueText = 'random value',
		state = LABEL_VALUE_ITEM_STATES.DEFAULT,
		size = LABEL_VALUE_ITEM_SIZES.MEDIUM,
		isLabelStrong = false,
		valueColor = LABEL_VALUE_ITEM_VALUE_COLORS.NEUTRAL,
		icon = null,
		slots = {},
	}: createComponentOptions = {}) => {
		return mount(LabelValueItem, {
			props: {
				label,
				valueText,
				state,
				size,
				isLabelStrong,
				valueColor,
				icon,
			},
			slots,
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('renders label', () => {
		const label = 'Mam labela';
		const component = createComponent({ label });

		expect(component.find('.ds-labelValueItem__label').text()).toBe(label);
	});

	it('renders valueText by default', () => {
		const valueText = 'Mam wartość';
		const component = createComponent({ valueText });

		expect(component.find('.ds-labelValueItem__value').text()).toBe(valueText);
	});

	it('does not render the spinner in the default state', () => {
		const component = createComponent({ state: LABEL_VALUE_ITEM_STATES.DEFAULT });

		expect(component.findComponent(Icon).exists()).toBe(false);
		expect(component.find('.ds-labelValueItem__value').exists()).toBe(true);
	});

	it('renders the spinner instead of the value in the loading state', () => {
		const component = createComponent({ state: LABEL_VALUE_ITEM_STATES.LOADING });

		expect(component.find('.ds-labelValueItem__value').exists()).toBe(false);

		const icon = component.findComponent(Icon);
		expect(icon.exists()).toBe(true);
		expect(icon.props().icon).toEqual(ICONS.FAD_SPINNER_THIRD);
		expect(icon.props().size).toBe(ICON_SIZES.XX_SMALL);
		expect(icon.props().spinning).toBe(true);
	});

	it('applies the medium size by default', () => {
		const component = createComponent();

		expect(component.find('.ds-labelValueItem').classes()).not.toContain('-ds-large');
	});

	it('applies the large size modifier when size is large', () => {
		const component = createComponent({ size: LABEL_VALUE_ITEM_SIZES.LARGE });

		expect(component.find('.ds-labelValueItem').classes()).toContain('-ds-large');
	});

	it('does not make the label strong by default', () => {
		const component = createComponent();

		expect(component.find('.ds-labelValueItem__label').classes()).not.toContain('-ds-strong');
	});

	it('makes the label strong when isLabelStrong is true', () => {
		const component = createComponent({ isLabelStrong: true });

		expect(component.find('.ds-labelValueItem__label').classes()).toContain('-ds-strong');
	});

	it('uses the neutral value color by default', () => {
		const component = createComponent();

		expect(component.find('.ds-labelValueItem__value').classes()).not.toContain(
			'-ds-color-primary',
		);
	});

	it('applies the primary value color modifier when valueColor is primary', () => {
		const component = createComponent({
			valueColor: LABEL_VALUE_ITEM_VALUE_COLORS.PRIMARY,
		});

		expect(component.find('.ds-labelValueItem__value').classes()).toContain(
			'-ds-color-primary',
		);
	});

	it('does not render the icon by default', () => {
		const component = createComponent();

		expect(component.find('.ds-labelValueItem__icon').exists()).toBe(false);
	});

	it('renders the icon when the icon prop is set', () => {
		const component = createComponent({ icon: ICONS.FA_CIRCLE_INFO });

		const icon = component.findComponent(Icon);
		expect(icon.exists()).toBe(true);
		expect(icon.props().icon).toEqual(ICONS.FA_CIRCLE_INFO);
		expect(icon.props().size).toBe(ICON_SIZES.XX_SMALL);
	});

	it('does not render the accessory slot content when the slot is empty', () => {
		const component = createComponent();

		expect(component.find('.accessory-content').exists()).toBe(false);
	});

	it('renders the accessory slot content', () => {
		const component = createComponent({
			slots: { accessory: '<span class="accessory-content">chip</span>' },
		});

		expect(component.find('.accessory-content').text()).toBe('chip');
	});

	it('renders the accessory slot in the loading state', () => {
		const component = createComponent({
			state: LABEL_VALUE_ITEM_STATES.LOADING,
			slots: { accessory: '<span class="accessory-content">chip</span>' },
		});

		expect(component.find('.accessory-content').exists()).toBe(true);
	});
});
