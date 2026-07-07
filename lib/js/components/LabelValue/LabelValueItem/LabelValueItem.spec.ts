import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import LabelValueItem from './LabelValueItem.vue';
import Icon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { LABEL_VALUE_ITEM_STATES, LabelValueItemState } from './LabelValueItem.consts';

interface createComponentOptions {
	label?: string;
	valueText?: string;
	state?: LabelValueItemState;
}

describe('LabelValueItem', () => {
	const createComponent = ({
		label = 'random label',
		valueText = 'random value',
		state = LABEL_VALUE_ITEM_STATES.DEFAULT,
	}: createComponentOptions = {}) => {
		return mount(LabelValueItem, {
			props: {
				label,
				valueText,
				state,
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
});
