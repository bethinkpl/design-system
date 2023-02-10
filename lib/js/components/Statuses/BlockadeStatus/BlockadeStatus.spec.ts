import { shallowMount } from '@vue/test-utils';

import BlockadeStatus from './BlockadeStatus.vue';
import { COURSE_ACCESS_STATUS } from '../../../consts/user';
import { ICONS } from '../../Icons/Icon';
import Icon from '../../Icons/Icon.vue';

describe('BlockadeStatus', () => {
	const createComponent = (status) => {
		return shallowMount(BlockadeStatus, {
			props: {
				status,
			},
		});
	};

	test.each([
		{
			status: COURSE_ACCESS_STATUS.ACTIVE,
			expectedText: 'Blokada dostępu',
			expectedIcon: ICONS.FA_LOCK_KEYHOLE,
		},
		{
			status: COURSE_ACCESS_STATUS.AWAITING,
			expectedText: 'Blokada zakończona',
			expectedIcon: ICONS.FA_UNLOCK_KEYHOLE,
		},
	])('should render correct icon and text', ({ status, expectedText, expectedIcon }) => {
		const component = createComponent(status);

		expect(component.text()).toBe(expectedText);
		expect(component.findComponent(Icon).props().icon).toBe(expectedIcon);
	});
});
