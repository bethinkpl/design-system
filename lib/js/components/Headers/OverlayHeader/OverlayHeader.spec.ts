import { describe, expect, it, afterEach } from 'vitest';
import { mount, enableAutoUnmount } from '@vue/test-utils';
import OverlayHeader from './OverlayHeader.vue';
import IconButton from '../../Buttons/IconButton/IconButton.vue';
import { ICON_BUTTON_STATES } from '../../Buttons/IconButton';
import { OVERLAY_HEADER_STATES } from './OverlayHeader.consts';

enableAutoUnmount(afterEach);

const createComponent = (props = {}, slots = {}) => {
	return mount(OverlayHeader, {
		props: {
			title: 'Test Title',
			...props,
		},
		slots,
	});
};

describe('OverlayHeader', () => {
	describe('areKeyboardShortcutsDisabled', () => {
		it('should emit close when Q is pressed and prop is false', () => {
			const component = createComponent({ areKeyboardShortcutsDisabled: false });

			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));

			expect(component.emitted().close).toHaveLength(1);
		});

		it('should not emit close when Q is pressed and prop is true', () => {
			const component = createComponent({ areKeyboardShortcutsDisabled: true });

			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));

			expect(component.emitted().close).toBeUndefined();
		});

		it('should not emit close when Q is pressed and prop is true (uppercase)', () => {
			const component = createComponent({ areKeyboardShortcutsDisabled: true });

			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Q' }));

			expect(component.emitted().close).toBeUndefined();
		});
	});

	describe('dropdown', () => {
		it('should highlight the dropdown button while the dropdown is open', async () => {
			const component = createComponent({}, { dropdown: '<div>Item</div>' });

			await component.findComponent(IconButton).trigger('click');

			expect(component.findComponent(IconButton).props('state')).toBe(
				ICON_BUTTON_STATES.HOVERED,
			);
		});

		it('should come back closed after loading', async () => {
			const component = createComponent({}, { dropdown: '<div>Item</div>' });
			await component.findComponent(IconButton).trigger('click');

			await component.setProps({ state: OVERLAY_HEADER_STATES.LOADING });
			await component.setProps({ state: OVERLAY_HEADER_STATES.DEFAULT });

			expect(component.findComponent(IconButton).props('state')).toBe(
				ICON_BUTTON_STATES.DEFAULT,
			);
		});
	});
});
