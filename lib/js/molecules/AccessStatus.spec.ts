import { createLocalVue, shallowMount } from '@vue/test-utils';

import AccessStatus from './AccessStatus.vue';

describe('AccessStatus', () => {
	const createComponent = () => {
		const localVue = createLocalVue();

		return shallowMount(AccessStatus, {
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
