import { createLocalVue, shallowMount } from '@vue/test-utils';

import Tile from './Tile.vue';
import { ICONS } from '../Icon';
const defaultProps = {
	text: '',
	eyebrowText: '',
	interactive: true,
	additionalText: '',
	iconLeft: null,
	iconRight: null,
};
const createComponent = function ({
	text,
	eyebrowText,
	interactive,
	additionalText,
	iconLeft,
	iconRight,
}) {
	const localVue = createLocalVue();
	return shallowMount(Tile, {
		localVue,
		mocks: {},
		propsData: { text, eyebrowText, interactive, additionalText, iconLeft, iconRight },
		stubs: {},
	});
};

describe('Tile', () => {
	it('Is interactive without left icon', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconRight: ICONS.FA_ANGLE_RIGHT,
		};
		const component = createComponent({ ...defaultProps, ...props });
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(true);
		expect(component.find('.a-tile__iconLeft').exists()).toBe(false);

		expect(component.find('.a-additionalText').exists()).toBe(false);
	});
	it('Is interactive with left icon', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconRight: ICONS.FA_ANGLE_RIGHT,
			iconLeft: ICONS.FA_ARCHIVE,
		};
		const component = createComponent({ ...defaultProps, ...props });
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(true);
		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);

		expect(component.find('.a-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive without right icon and additionalText', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			interactive: false,
			iconLeft: ICONS.FA_ARCHIVE,
		};
		const component = createComponent({ ...defaultProps, ...props });
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
		expect(component.find('.a-tile__iconRight').exists()).toBe(false);
		expect(component.find('.a-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive with right and without additionalText', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			iconRight: ICONS.FA_ANGLE_RIGHT,
			interactive: false,
			iconLeft: ICONS.FA_ARCHIVE,
		};
		const component = createComponent({ ...defaultProps, ...props });
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(true);

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
		expect(component.find('.a-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive without right and with additionalText', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: false,
			iconLeft: ICONS.FA_ARCHIVE,
		};
		const component = createComponent({ ...defaultProps, ...props });
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(false);
		expect(component.find('.a-tile__additionalText').exists()).toBe(true);

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
	});
	it('Is not interactive with right and additionalText but additionalText is not visible when right is present', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconRight: ICONS.FA_ANGLE_RIGHT,
			interactive: false,
			iconLeft: ICONS.FA_ARCHIVE,
		};
		const component = createComponent({ ...defaultProps, ...props });
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight .-interactive').exists()).toBe(false);
		expect(component.find('.a-tile__additionalText').exists()).toBe(false);

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
	});
});
