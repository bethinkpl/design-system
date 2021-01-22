import Vuex, { Store } from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import TabItem, { ICONS } from './TabItem.vue';

describe('TabItem', () => {
	const createComponent = ({ isActive = false } = {}) => {
		const localVue = createLocalVue();
		localVue.use(Vuex);
		const store = new Store({
			modules: {},
		});

		return shallowMount<TabItem>(TabItem, {
			localVue,
			store,
			mocks: {},
			propsData: {
				icon: ICONS.CALENDAR,
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
