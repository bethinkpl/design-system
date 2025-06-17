import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Modal from './Modal.vue';

describe('Modal', () => {
	it('renders with right actions slot', () => {
		const wrapper = mount(Modal, {
			slots: {
				rightActions: () => h('button', { id: 'test-right-action' }, 'Test button'),
			},
			global: {
				stubs: {
					teleport: true,
				},
			},
		});

		expect(wrapper.find('#test-right-action').exists()).toBe(true);
	});
});
