import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import { mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import { PopoverContent, PopoverRoot } from 'reka-ui';
import Dropdown from './Dropdown.vue';
import { DROPDOWN_PLACEMENTS } from './Dropdown.consts';

const setup = (props: ComponentProps<typeof Dropdown> = {}) =>
	mount(Dropdown, {
		props,
		slots: {
			reference: ({ isOpened }: { isOpened: boolean }) =>
				h('button', { class: 'reference' }, isOpened ? 'opened' : 'closed'),
			default: ({ close }: { close: () => void }) =>
				h('button', { class: 'item', onClick: close }, 'Item'),
		},
	});

const open = async (wrapper: ReturnType<typeof setup>) => {
	await wrapper.find('.reference').trigger('click');
};

const outsidePointerDown = (target: EventTarget) =>
	new CustomEvent('pointerDownOutside', {
		cancelable: true,
		detail: { originalEvent: { target } },
	});

describe('Dropdown', () => {
	it('should not render the panel while closed', () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
		expect(wrapper.find('.reference').text()).toBe('closed');
	});

	it('should open on reference click and emit show', async () => {
		const wrapper = setup();

		await open(wrapper);

		expect(wrapper.find('.ds-dropdown').exists()).toBe(true);
		expect(wrapper.find('.reference').text()).toBe('opened');
		expect(wrapper.emitted('show')).toHaveLength(1);
	});

	it('should close through the slot close function and emit hide', async () => {
		const wrapper = setup();
		await open(wrapper);

		await wrapper.find('.item').trigger('click');

		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
		expect(wrapper.emitted('hide')).toHaveLength(1);
	});

	it('should stay open when forceShow is set and Reka asks to close', async () => {
		const wrapper = setup({ forceShow: true });

		wrapper.findComponent(PopoverRoot).vm.$emit('update:open', false);
		await wrapper.vm.$nextTick();

		expect(wrapper.find('.ds-dropdown').exists()).toBe(true);
		expect(wrapper.emitted('show')).toHaveLength(1);
		expect(wrapper.emitted('hide')).toBeUndefined();
	});

	it('should emit document-click on a pointer-down outside the reference', async () => {
		const wrapper = setup();
		await open(wrapper);

		wrapper
			.findComponent(PopoverContent)
			.vm.$emit('pointerDownOutside', outsidePointerDown(document.body));

		expect(wrapper.emitted('document-click')).toHaveLength(1);
	});

	it('should not emit document-click on a pointer-down on the reference', async () => {
		const wrapper = setup();
		await open(wrapper);
		const event = outsidePointerDown(wrapper.find('.reference').element);

		wrapper.findComponent(PopoverContent).vm.$emit('pointerDownOutside', event);

		expect(wrapper.emitted('document-click')).toBeUndefined();
		expect(event.defaultPrevented).toBe(true);
	});

	it.each([
		{ placement: DROPDOWN_PLACEMENTS.BOTTOM_START, align: 'start' },
		{ placement: DROPDOWN_PLACEMENTS.BOTTOM_END, align: 'end' },
	])('should position the panel for $placement', async ({ placement, align }) => {
		const wrapper = setup({ placement });
		await open(wrapper);

		const content = wrapper.findComponent(PopoverContent);

		expect(content.props('side')).toBe('bottom');
		expect(content.props('align')).toBe(align);
	});

	it('should position the panel absolutely so a long panel extends the page', async () => {
		const wrapper = setup();
		await open(wrapper);

		expect(wrapper.findComponent(PopoverContent).props('positionStrategy')).toBe('absolute');
	});

	it('should match the reference width when sameWidth is set', async () => {
		const wrapper = setup({ sameWidth: true });
		await open(wrapper);

		expect(wrapper.find('.ds-dropdown').classes()).toContain('-ds-sameWidth');
	});

	it('should limit the scrollable height when maxHeight is set', async () => {
		const wrapper = setup({ maxHeight: '250px' });
		await open(wrapper);

		const scrollable = wrapper.find('.ds-dropdown__scrollableWrapper');

		expect(scrollable.classes()).toContain('-ds-heightLimited');
		expect(scrollable.attributes('style')).toContain('max-height: 250px');
	});
});
