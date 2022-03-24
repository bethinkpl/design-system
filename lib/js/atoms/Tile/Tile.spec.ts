import { createLocalVue, shallowMount } from '@vue/test-utils';

import Tile from './Tile.vue';
import { ICONS } from '../Icon';
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const createComponent = function ({
	text = '',
	eyebrowText = '',
	interactive = false,
	additionalText = '',
	iconLeft = null,
	iconRight = null,
}: createComponentOptions) {
	const localVue = createLocalVue();
	return shallowMount(Tile, {
		localVue,
		mocks: {},
		propsData: { text, eyebrowText, interactive, additionalText, iconLeft, iconRight },
		stubs: {},
	});
};
interface createComponentOptions {
	text: string;
	eyebrowText?: string;
	interactive?: boolean;
	additionalText?: string;
	iconRight?: IconDefinition | null;
	iconLeft?: IconDefinition | null;
}
describe('Tile', () => {
	it('Is interactive without left icon', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: true,
		};
		const component = createComponent(props);
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(true);
		expect(component.find('.a-tile__iconLeft').exists()).toBe(false);

		expect(component.find('.a-additionalText').exists()).toBe(false);
	});
	it('Is interactive with left icon', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: true,
			iconLeft: ICONS.FA_ARCHIVE,
		});
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(true);
		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);

		expect(component.find('.a-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive without right icon and additionalText', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			iconLeft: ICONS.FA_ARCHIVE,
		});
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
		expect(component.find('.a-tile__iconRight').exists()).toBe(false);
		expect(component.find('.a-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive with right and without additionalText', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			iconRight: ICONS.FA_ANGLE_RIGHT,
			iconLeft: ICONS.FA_ARCHIVE,
		});
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(true);

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
		expect(component.find('.a-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive without right and with additionalText', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconLeft: ICONS.FA_ARCHIVE,
		});
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight').exists()).toBe(false);
		expect(component.find('.a-tile__additionalText').exists()).toBe(true);

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
	});
	it('Is not interactive with right and additionalText but additionalText is not visible when right is present', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconRight: ICONS.FA_ANGLE_RIGHT,
			iconLeft: ICONS.FA_ARCHIVE,
		});
		expect(component.find('.a-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.a-tile__text').text()).toBe('text text');
		expect(component.find('.a-tile__iconRight .-interactive').exists()).toBe(false);
		expect(component.find('.a-tile__additionalText').exists()).toBe(false);

		expect(component.find('.a-tile__iconLeft').exists()).toBe(true);
	});
});
