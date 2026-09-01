import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Modal from './Modal.vue';
import Button, { BUTTON_RADIUSES } from '../../Buttons/Button';

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

	it('renders the footer buttons with the rounded radius', () => {
		const wrapper = mount(Modal, {
			props: {
				footerPrimaryButtonText: 'Primary',
				footerSecondaryButtonText: 'Secondary',
				footerTertiaryButtonText: 'Tertiary',
			},
			global: {
				stubs: {
					teleport: true,
				},
			},
		});

		const buttons = wrapper.find('.ds-modal__footer').findAllComponents(Button);

		expect(buttons).toHaveLength(3);
		buttons.forEach((button) => {
			expect(button.props('radius')).toBe(BUTTON_RADIUSES.ROUNDED);
		});
	});
});
