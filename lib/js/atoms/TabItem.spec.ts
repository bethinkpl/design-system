import { createLocalVue, shallowMount } from '@vue/test-utils';

import Vue from 'vue';
import Vuetify from 'vuetify';

import TabItem, { ICONS } from './TabItem.vue';

Vue.use(Vuetify);

describe('TabItem', () => {
	const createComponent = ({ isActive = false } = {}) => {
		const localVue = createLocalVue();

		return shallowMount<TabItem>(TabItem, {
			localVue,
			mocks: {},
			propsData: {
				icon: ICONS.FA_CALENDAR_ALT,
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
