import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import OverlayHeader from './OverlayHeader.vue';

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
		it('should emit close when Q is pressed and prop is false', async () => {
			const component = createComponent({ areKeyboardShortcutsDisabled: false });

			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
			await component.vm.$nextTick();

			expect(component.emitted().close).toHaveLength(1);
		});

		it('should not emit close when Q is pressed and prop is true', async () => {
			const component = createComponent({ areKeyboardShortcutsDisabled: true });

			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
			await component.vm.$nextTick();

			expect(component.emitted().close).toBeUndefined();
		});

		it('should not emit close when Q is pressed and prop is true (uppercase)', async () => {
			const component = createComponent({ areKeyboardShortcutsDisabled: true });

			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Q' }));
			await component.vm.$nextTick();

			expect(component.emitted().close).toBeUndefined();
		});
	});
});
