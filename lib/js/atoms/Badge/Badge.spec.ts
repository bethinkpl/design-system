import { createLocalVue, shallowMount } from '@vue/test-utils';

import Badge from './Badge.vue';
import { BADGE_COLORS } from './Badge.consts';

describe('Badge', () => {
	const createComponent = ({ label = '' } = {}) => {
		const localVue = createLocalVue();

		return shallowMount(Badge, {
			localVue,
			mocks: {},
			propsData: {
				label,
				color: BADGE_COLORS.MINOR,
			},
			stubs: {},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render badge class', () => {
		const component = createComponent();

		expect(component.find('.badge').exists()).toBe(true);
	});

	it.each(['test42', 'wpłynąłem na suchego przestwór oceanu'])(
		'should render text from label props',
		(label) => {
			const component = createComponent({ label });

			expect(component.find('.badge__label').text()).toContain(label);
		},
	);
});
