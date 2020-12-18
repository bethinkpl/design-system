import { createLocalVue, shallowMount } from '@vue/test-utils';

import BadgeScore, { BADGE_SCORE_COLORS } from './BadgeScore.vue';

describe('BadgeScore', () => {
	const createComponent = ({ text = '', color = BADGE_SCORE_COLORS.SUCCESS } = {}) => {
		const localVue = createLocalVue();

		return shallowMount<BadgeScore>(BadgeScore, {
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
