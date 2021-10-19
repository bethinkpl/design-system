import { createLocalVue, shallowMount } from '@vue/test-utils';

import SurveyToggle from './SurveyToggle.vue';

describe('SurveyToggle', () => {
	const createComponent = ({} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(SurveyToggle, {
			localVue,
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
