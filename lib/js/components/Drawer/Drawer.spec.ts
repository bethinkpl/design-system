import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Drawer from './Drawer.vue';
import { DRAWER_BACKGROUND_COLORS, DrawerBackgroundColor } from './Drawer.consts';

const createComponent = (props = {}, slots = {}) => {
	return mount(Drawer, {
		props,
		slots,
	});
};

describe('Drawer', () => {
	describe('backgroundColor', () => {
		it.each([
			[DRAWER_BACKGROUND_COLORS.DEFAULT, '-ds-backgroundDefault'],
			[DRAWER_BACKGROUND_COLORS.NEUTRAL, '-ds-backgroundNeutral'],
		])('should set the %s background class', (backgroundColor, expectedClass) => {
			const component = createComponent({ backgroundColor });

			expect(component.find('.ds-drawer').classes()).toContain(expectedClass);
		});

		it.each([undefined, DRAWER_BACKGROUND_COLORS.NONE])(
			'should not set any background class when backgroundColor is %s',
			(backgroundColor?: DrawerBackgroundColor) => {
				const component = createComponent({ backgroundColor });

				const classes = component.find('.ds-drawer').classes();

				expect(classes).not.toContain('-ds-backgroundDefault');
				expect(classes).not.toContain('-ds-backgroundNeutral');
			},
		);
	});
});
