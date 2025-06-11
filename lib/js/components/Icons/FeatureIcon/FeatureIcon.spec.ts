import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FeatureIcon from './FeatureIcon.vue';
import { FEATURE_ICON_COLOR } from './FeatureIcon.consts';
import Icon, { ICONS } from '../Icon';

describe('FeatureIcon', () => {
	it('should render', () => {
		const wrapper = mount(FeatureIcon, {
			props: {
				color: FEATURE_ICON_COLOR.PRIMARY,
				icon: ICONS.FA_TAG,
			},
		});

		expect(wrapper.findComponent<typeof Icon>('.ds-icon').props().icon).toEqual(ICONS.FA_TAG);
	});
});
