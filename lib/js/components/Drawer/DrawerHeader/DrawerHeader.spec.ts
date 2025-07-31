import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import DrawerHeader from './DrawerHeader.vue';
import { IconButton } from '../../../';

const createComponent = (props = {}) => {
	return mount(DrawerHeader, {
		props,
	});
};

describe('DrawerHeader', () => {
	describe('Back', () => {
		it('should show back button on first level when back set to true', () => {
			const component = createComponent({ back: true });

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
		it('should hide back button on first level when back set to false', () => {
			const component = createComponent({ back: false });

			const backButton = component
				.find('.ds-drawerHeader__firstLevel')
				.findComponent(IconButton);

			expect(backButton.exists()).toBeFalsy();
		});
		it('should emit backClicked when clicking on back', async () => {
			const component = createComponent({ back: true });

			const backButton = component
				.find('.ds-drawerHeader__firstLevel')
				.findComponent(IconButton);

			expect(backButton.exists()).toBeTruthy();

			await backButton.trigger('click');

			expect(component.emitted().backClicked).toHaveLength(1);
		});
	});
});
