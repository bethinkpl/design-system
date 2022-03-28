import { createLocalVue, shallowMount } from '@vue/test-utils';

import BlockadeStatus from './BlockadeStatus.vue';
import { COURSE_ACCESS_STATUS } from '../../consts/user';
import { ICONS } from '../Icon';

describe('BlockadeStatus', () => {
	const createComponent = (status) => {
		const localVue = createLocalVue();

		return shallowMount(BlockadeStatus, {
			localVue,
			mocks: {},
			propsData: {
				status,
			},
			stubs: {},
		});
	};

	test.each([
		{
			status: COURSE_ACCESS_STATUS.ACTIVE,
			expectedText: 'Blokada dostępu',
			expectedIcon: ICONS.FA_LOCK_ALT,
		},
		{
			status: COURSE_ACCESS_STATUS.AWAITING,
			expectedText: 'Blokada zakończona',
			expectedIcon: ICONS.FA_UNLOCK_ALT,
		},
	])('should render correct icon and text', ({ status, expectedText, expectedIcon }) => {
		const component = createComponent(status);

		expect(component.text()).toBe(expectedText);
		expect(component.find('icon-stub').props().icon).toBe(expectedIcon);
	});
});
