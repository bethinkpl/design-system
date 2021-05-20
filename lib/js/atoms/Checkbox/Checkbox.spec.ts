import { createLocalVue, shallowMount } from '@vue/test-utils';
import { VCheckbox, VLayout } from 'vuetify/lib';
import Vuetify from 'vuetify';

import Icon from '../Icon/Icon.vue';

import Checkbox from './Checkbox.vue';

describe('Checkbox', () => {
	const createComponent = ({} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(Checkbox, {
			localVue,
			mocks: {},
			propsData: {},
			stubs: {
				'v-checkbox': VCheckbox,
				// icon: Icon,
				// 'v-layout': VLayout,
			},
			vuetify: new Vuetify({}),
		});
	};

	it('should create', () => {
		const component = createComponent();

		console.log(component.html());
		expect(component.exists()).toBe(true);
	});

});
