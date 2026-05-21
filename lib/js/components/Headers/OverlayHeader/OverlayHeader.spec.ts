import { describe, expect, it, afterEach } from 'vitest';
import { mount, enableAutoUnmount } from '@vue/test-utils';
import OverlayHeader from './OverlayHeader.vue';

enableAutoUnmount(afterEach);

const createComponent = (props = {}) => {
	return mount(OverlayHeader, {
		props: {
			title: 'Test Title',
			...props,
		},
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
});
