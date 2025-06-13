import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import HelpButton from './HelpButton.vue';
import Modal from '../../Modals/Modal';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import Tooltip from '../../Tooltip';

function setup(
	props: ComponentProps<typeof HelpButton> = {},
	slots: ComponentSlots<typeof HelpButton> = {
		modal: ({ onClose }) => [h(Modal, { onCloseModal: onClose }, () => 'Test')],
	},
	attrs?: Record<string, unknown>,
) {
	return mount(HelpButton, {
		props,
		slots,
		attrs,
		global: {
			directives: {
				pvTooltip: () => {},
			},
		},
	});
}

describe('HelpButton', () => {
	it('should render', () => {
		const wrapper = setup();

		expect(wrapper.exists()).toBe(true);
	});

	it('should pass attributes to the button', () => {
		const wrapper = setup({}, undefined, {
			class: 'customClass',
			id: 'testId',
		});

		expect(wrapper.find('.ds-iconButton').classes()).toContain('customClass');
		expect(wrapper.find('.ds-iconButton').attributes('id')).toContain('testId');
	});

	it('should open and close the modal', async () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-modal').exists()).toBe(false);

		await wrapper.find('.ds-iconButton').trigger('click');

		expect(wrapper.find('.ds-modal').exists()).toBe(true);

		const closeButton = wrapper.find('.ds-modal__close');
		await closeButton.trigger('click');

		expect(wrapper.find('.ds-modal').exists()).toBe(false);
	});

	it('renders with tooltip', () => {
		const wrapper = setup({
			tooltipText: 'Tooltip text',
		});

		expect(wrapper.findComponent(Tooltip).props().text).toBe('Tooltip text');
	});

	it('should accept modalTitle prop and modalContent slot', async () => {
		const wrapper = setup(
			{
				modalTitle: 'Test Title',
			},
			{
				modalContent: () => [h('div', 'Test Content')],
			},
		);

		await wrapper.find('.ds-iconButton').trigger('click');

		expect(wrapper.find('.ds-modal__headerTitle').text()).toBe('Test Title');
		expect(wrapper.find('.ds-modal__slotContent').text()).toBe('Test Content');
	});
});
