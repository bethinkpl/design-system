import { createLocalVue, shallowMount } from '@vue/test-utils';

import BadgeWithIcon from './BadgeWithIcon.vue';
import { ICONS } from '../Icon';
import { BADGE_COLORS } from '../Badge';

describe('BadgeWithIcon', () => {
	const createComponent = () => {
		const localVue = createLocalVue();

		return shallowMount<BadgeWithIcon>(BadgeWithIcon, {
			localVue,
			mocks: {},
			propsData: {
				label: '',
				icon: ICONS.FA_CHECK_CIRCLE,
				color: BADGE_COLORS.MINOR,
			},
			stubs: {},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render badgeWithIcon class', () => {
		const component = createComponent();

		expect(component.find('.badgeWithIcon').exists()).toBe(true);
	});

	it('should render Icon component', () => {
		const component = createComponent();

		expect(component.find('icon-stub').exists()).toBe(true);
	});

	it('should render Badge component', () => {
		const component = createComponent();

		expect(component.find('badge-stub').exists()).toBe(true);
	});
});
