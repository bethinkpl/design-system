import Vuex, { Store } from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import Checkbox from './Checkbox.vue';

describe('Checkbox', () => {
	const createComponent = ({} = {}) => {
		const localVue = createLocalVue();
		localVue.use(Vuex);
		const store = new Store({
			
		});

		return shallowMount<Checkbox>(Checkbox, {
			localVue,
			store,
			mocks: {},
			propsData: {},
			stubs: {},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

});
