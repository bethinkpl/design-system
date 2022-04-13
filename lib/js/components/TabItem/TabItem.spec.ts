import { createLocalVue, shallowMount } from '@vue/test-utils';

import TabItem from './TabItem.vue';
import { ICONS } from '../Icon';

describe('TabItem', () => {
	const createComponent = ({ isActive = false } = {}) => {
		const localVue = createLocalVue();

		return shallowMount(TabItem, {
			localVue,
			mocks: {},
			propsData: {
				icon: ICONS.FA_CALENDAR_DAYS,
				isActive,
				title: 'wpłynąłem na suchego przestwór oceanu',
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('when prop isActive is set to false component should not render "isActive" class', () => {
		const component = createComponent({ isActive: false });

		expect(component.find('.-isActive').exists()).toBe(false);
	});

	it('when prop isActive is set to true component should render "isActive" class', () => {
		const component = createComponent({ isActive: true });

		expect(component.find('.-isActive').exists()).toBe(true);
	});
});
