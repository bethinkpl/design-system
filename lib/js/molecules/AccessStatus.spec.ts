import { createLocalVue, shallowMount } from '@vue/test-utils';

import AccessStatus from './AccessStatus.vue';
import { COURSE_ACCESS_STATUS } from '../consts/user';
import { ICONS } from '../atoms/Icon';

describe('AccessStatus', () => {
	const createComponent = (status) => {
		const localVue = createLocalVue();

		return shallowMount(AccessStatus, {
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
			expectedText: 'Aktywny',
			expectedIcon: ICONS.FA_UNLOCK_KEYHOLE,
		},
		{
			status: COURSE_ACCESS_STATUS.AWAITING,
			expectedText: 'Oczekujący',
			expectedIcon: ICONS.FA_HOURGLASS_START,
		},
		{
			status: COURSE_ACCESS_STATUS.EXPIRED,
			expectedText: 'Zakończony',
			expectedIcon: ICONS.FA_LOCK_KEYHOLE,
		},
		{
			status: COURSE_ACCESS_STATUS.SUSPENDED,
			expectedText: 'Zawieszony',
			expectedIcon: ICONS.FA_LOCK_KEYHOLE,
		},
	])('should render correct icon and text', ({ status, expectedText, expectedIcon }) => {
		const component = createComponent(status);

		expect(component.text()).toBe(expectedText);
		expect(component.find('icon-stub').props().icon).toBe(expectedIcon);
	});
});
