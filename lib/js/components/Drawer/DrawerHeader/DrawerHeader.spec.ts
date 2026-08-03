import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import DrawerHeader from './DrawerHeader.vue';
import { IconButton } from '../../../';

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
		it('should not render anything when the slot is not provided', () => {
			const component = createComponent({ hasDivider: true });

			const children = Array.from(component.element.children) as Array<Element>;

			expect(children).toHaveLength(2);
			expect(children[0].classList.contains('ds-drawerHeader__titleWrapper')).toBeTruthy();
		});

		it('should render the slot content between the title wrapper and the divider', () => {
			const component = createComponent(
				{ hasDivider: true },
				{ supporting: '<span class="supporting-content">Supporting</span>' },
			);

			const supporting = component.find('.supporting-content');

			expect(supporting.exists()).toBeTruthy();
			expect(supporting.text()).toBe('Supporting');

			const children = Array.from(component.element.children) as Array<Element>;
			const titleWrapperIndex = children.findIndex((child) =>
				child.classList.contains('ds-drawerHeader__titleWrapper'),
			);
			const supportingIndex = children.indexOf(supporting.element);

			expect(supportingIndex).toBe(titleWrapperIndex + 1);
			expect(supportingIndex).toBe(children.length - 2);
		});
	});
});
