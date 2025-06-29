import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import Tile from './Tile.vue';
import { ICONS } from '../Icons/Icon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const createComponent = function ({
	text = '',
	eyebrowText = '',
	interactive = false,
	additionalText = '',
	iconLeft = null,
	iconRight = null,
	isEyebrowTextUppercase = false,
}: createComponentOptions) {
	return mount(Tile, {
		props: {
			text,
			eyebrowText,
			interactive,
			additionalText,
			iconLeft,
			iconRight,
			isEyebrowTextUppercase,
		} as any,
	});
};

interface createComponentOptions {
	text: string;
	eyebrowText?: string;
	interactive?: boolean;
	additionalText?: string;
	iconRight?: IconDefinition | null;
	iconLeft?: IconDefinition | null;
	isEyebrowTextUppercase?: boolean;
}

describe('Tile', () => {
	it('Is interactive without icons', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: true,
		};
		const component = createComponent(props);
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight').exists()).toBe(false);
		expect(component.find('.ds-tile__iconLeft').exists()).toBe(false);

		expect(component.find('.a-additionalText').exists()).toBe(false);
	});
	it('Is interactive with right icon', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: true,
			iconRight: Object.freeze(ICONS.FA_CHEVRON_RIGHT),
		};
		const component = createComponent(props);
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight').exists()).toBe(true);
		expect(component.find('.ds-tile__iconLeft').exists()).toBe(false);

		expect(component.find('.a-additionalText').exists()).toBe(false);
	});
	it('Is interactive with both icons', () => {
		const props = {
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: true,
			iconRight: Object.freeze(ICONS.FA_CHEVRON_RIGHT),
			iconLeft: Object.freeze(ICONS.FA_BOX_ARCHIVE),
		};
		const component = createComponent(props);
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight').exists()).toBe(true);
		expect(component.find('.ds-tile__iconLeft').exists()).toBe(true);

		expect(component.find('.a-additionalText').exists()).toBe(false);
	});
	it('Is interactive with left icon', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			interactive: true,
			iconLeft: Object.freeze(ICONS.FA_BOX_ARCHIVE),
		});
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight').exists()).toBe(false);
		expect(component.find('.ds-tile__iconLeft').exists()).toBe(true);

		expect(component.find('.ds-tile__additionalText').exists()).toBe(true);
	});
	it('Is not interactive without right icon and additionalText', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			iconLeft: Object.freeze(ICONS.FA_BOX_ARCHIVE),
		});
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');

		expect(component.find('.ds-tile__iconLeft').exists()).toBe(true);
		expect(component.find('.ds-tile__iconRight').exists()).toBe(false);
		expect(component.find('.ds-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive with right and without additionalText', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			iconRight: Object.freeze(ICONS.FA_ANGLE_RIGHT),
			iconLeft: Object.freeze(ICONS.FA_BOX_ARCHIVE),
		});
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight').exists()).toBe(true);

		expect(component.find('.ds-tile__iconLeft').exists()).toBe(true);
		expect(component.find('.ds-tile__additionalText').exists()).toBe(false);
	});
	it('Is not interactive without right and with additionalText', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconLeft: Object.freeze(ICONS.FA_BOX_ARCHIVE),
		});
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight').exists()).toBe(false);
		expect(component.find('.ds-tile__additionalText').exists()).toBe(true);

		expect(component.find('.ds-tile__iconLeft').exists()).toBe(true);
	});
	it('Is not interactive with right and additionalText but additionalText is not visible when right is present', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			iconRight: Object.freeze(ICONS.FA_ANGLE_RIGHT),
			iconLeft: Object.freeze(ICONS.FA_BOX_ARCHIVE),
		});
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__text').text()).toBe('text text');
		expect(component.find('.ds-tile__iconRight .-ds-interactive').exists()).toBe(false);
		expect(component.find('.ds-tile__additionalText').exists()).toBe(false);

		expect(component.find('.ds-tile__iconLeft').exists()).toBe(true);
	});

	it('Eyebrowtext is uppercased when isEyebrowTextUppercase', () => {
		const component = createComponent({
			text: 'text text',
			eyebrowText: 'eyebrowText text',
			additionalText: 'additionalText text',
			isEyebrowTextUppercase: true,
		});
		expect(component.find('.ds-tile__eyebrowText').text()).toBe('eyebrowText text');
		expect(component.find('.ds-tile__eyebrowText').classes()).toContain('-ds-uppercase');
	});
});
