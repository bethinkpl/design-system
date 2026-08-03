import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import DrawerHeader from './DrawerHeader.vue';
import { IconButton } from '../../../';
import {
	DRAWER_HEADER_BACKGROUND_COLORS,
	DrawerHeaderBackgroundColor,
} from './DrawerHeader.consts';

const createComponent = (props = {}, slots = {}) => {
	return mount(DrawerHeader, {
		props,
		slots,
	});
};

describe('DrawerHeader', () => {
	describe('hasBackButton', () => {
		it('should show back button on first level when hasBackButton set to true', () => {
			const component = createComponent({ hasBackButton: true });

			const backButton = component
				.find('.ds-drawerHeader__firstLevel')
				.findComponent(IconButton);

			expect(backButton.exists()).toBeTruthy();
		});
		it('should hide back button on first level when not set', () => {
			const component = createComponent();

			const backButton = component
				.find('.ds-drawerHeader__firstLevel')
				.findComponent(IconButton);

			expect(backButton.exists()).toBeFalsy();
		});
		it('should hide back button on first level when hasBackButton set to false', () => {
			const component = createComponent({ hasBackButton: false });

			const backButton = component
				.find('.ds-drawerHeader__firstLevel')
				.findComponent(IconButton);

			expect(backButton.exists()).toBeFalsy();
		});
		it('should emit backClicked when clicking on back', async () => {
			const component = createComponent({ hasBackButton: true });

			const backButton = component
				.find('.ds-drawerHeader__firstLevel')
				.findComponent(IconButton);

			expect(backButton.exists()).toBeTruthy();

			await backButton.trigger('click');

			expect(component.emitted().backClicked).toHaveLength(1);
		});
	});

	describe('supporting slot', () => {
		it('should render the slot content inside the header wrapper', () => {
			const component = createComponent(
				{},
				{ supporting: '<span class="supporting-content">Supporting</span>' },
			);

			const headerWrapper = component.find('.ds-drawerHeader__headerWrapper').element;

			expect(component.find('.supporting-content').element.parentElement).toBe(headerWrapper);
		});
	});

	describe('backgroundColor', () => {
		it('should set the default background class when backgroundColor is default', () => {
			const component = createComponent({
				backgroundColor: DRAWER_HEADER_BACKGROUND_COLORS.DEFAULT,
			});

			expect(component.find('.ds-drawerHeader').classes()).toContain('-ds-backgroundDefault');
		});

		it.each([undefined, DRAWER_HEADER_BACKGROUND_COLORS.NONE])(
			'should not set any background class when backgroundColor is %s',
			(backgroundColor?: DrawerHeaderBackgroundColor) => {
				const component = createComponent({ backgroundColor });

				expect(component.find('.ds-drawerHeader').classes()).not.toContain(
					'-ds-backgroundDefault',
				);
			},
		);
	});
});
