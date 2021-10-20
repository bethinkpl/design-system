import { createLocalVue, shallowMount } from '@vue/test-utils';

import Card from './Card.vue';

describe('Card', () => {
	const createComponent = () => {
		const localVue = createLocalVue();

		return shallowMount(Card, {
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

	it('should render card class', () => {
		const component = createComponent();

		expect(component.find('.card').exists()).toBe(true);
	});
});
