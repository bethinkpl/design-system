import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import LabelValueItem from './LabelValueItem.vue';
import Icon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
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
}

describe('LabelValueItem', () => {
	const createComponent = ({
		label = 'random label',
		valueText = 'random value',
		state = LABEL_VALUE_ITEM_STATES.DEFAULT,
		size = LABEL_VALUE_ITEM_SIZES.MEDIUM,
		isLabelStrong = false,
		valueColor = LABEL_VALUE_ITEM_VALUE_COLORS.NEUTRAL,
	}: createComponentOptions = {}) => {
		return mount(LabelValueItem, {
			props: {
				label,
				valueText,
				state,
				size,
				isLabelStrong,
				valueColor,
			},
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
});
