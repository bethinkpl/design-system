import { createLocalVue, shallowMount } from '@vue/test-utils';

import TabItem from './TabItem.vue';
import { ICONS } from '../Icons/Icon';
import { TAB_ITEM_SIZES } from './TabItem.consts';

describe('TabItem', () => {
	const createComponent = ({ isSelected = false } = {}) => {
		const localVue = createLocalVue();

		return shallowMount(TabItem, {
			localVue,
			mocks: {},
			propsData: {
				icon: ICONS.FA_CALENDAR_DAYS,
				isSelected,
				label: 'Lorem ipsum dolor sit amet',
				size: TAB_ITEM_SIZES.MEDIUM,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('when prop isSelected is set to false component should not render "isSelected" class', () => {
		const component = createComponent({ isSelected: false });

		expect(component.find('.-isSelected').exists()).toBe(false);
	});

	it('when prop isSelected is set to true component should render "isSelected" class', () => {
		const component = createComponent({ isSelected: true });

		expect(component.find('.-isSelected').exists()).toBe(true);
	});
});
