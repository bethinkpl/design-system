import Vuex, { Store } from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import TabItem from './TabItem.vue';

describe('TabItem', () => {
	const createComponent = ({ arg = false } = {}) => {
		const localVue = createLocalVue();
		localVue.use(Vuex);
		const store = new Store({
			modules: {},
		});

		return shallowMount<TabItem>(TabItem, {
			localVue,
			store,
			mocks: {},
			propsData: {},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});
});
