import { createLocalVue, shallowMount } from '@vue/test-utils';

import Badge, { BADGE_COLORS } from './Badge.vue';

describe('Badge', () => {
	const createComponent = ({ text = '', color = BADGE_COLORS.SUCCESS } = {}) => {
		const localVue = createLocalVue();

		return shallowMount<Badge>(Badge, {
			localVue,
			mocks: {},
			propsData: {
				text,
				color,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it.each([
		'wpłynąłem na suchego przestwór oceanu',
		'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
		'jedziesz szwagier',
	])('should render text prop', (text) => {
		const component = createComponent({ text });

		expect(component.text()).toContain(text);
	});
});
