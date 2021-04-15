import { createLocalVue, shallowMount } from '@vue/test-utils';

import Vue from 'vue';
import Vuetify from 'vuetify';

import AccessStatus from './AccessStatus.vue';

Vue.use(Vuetify);

describe('AccessStatus', () => {
	const createComponent = () => {
		const localVue = createLocalVue();

		return shallowMount<AccessStatus>(AccessStatus, {
			localVue,
			mocks: {},
			propsData: {
				status: '',
			},
			stubs: {},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});
});
