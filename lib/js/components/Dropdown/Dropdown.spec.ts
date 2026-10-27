import { describe, expect, it } from 'vitest';
import { defineComponent, h } from 'vue';
import { flushPromises, mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import { PopoverContent, PopoverPortal } from 'reka-ui';
import Dropdown from './Dropdown.vue';
import { DROPDOWN_ALIGNS } from './Dropdown.consts';

const setup = (props: ComponentProps<typeof Dropdown> = {}) =>
	mount(Dropdown, {
		props,
		global: { stubs: { PopoverPortal: { props: ['disabled'], template: '<slot />' } } },
		slots: {
			reference: ({ isOpen }: { isOpen: boolean }) =>
				h('button', { class: 'reference' }, isOpen ? 'opened' : 'closed'),
			default: ({ close }: { close: () => void }) =>
				h('button', { class: 'item', onClick: close }, 'Item'),
		},
	});

const open = async (wrapper: ReturnType<typeof setup>) => {
	await wrapper.find('.reference').trigger('click');
};

describe('Dropdown', () => {
	it('should not override a type prop of the reference component', () => {
		const ReferenceWithType = defineComponent({
			name: 'ReferenceWithType',
			props: { type: { type: String, default: 'default' } },
			setup: (props) => () => h('div', { class: 'reference' }, props.type),
		});
		const wrapper = mount(Dropdown, { slots: { reference: () => h(ReferenceWithType) } });

		expect(wrapper.find('.reference').text()).toBe('default');
	});

	it('should not render the panel while closed', () => {
		const wrapper = setup();

		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
		expect(wrapper.find('.reference').text()).toBe('closed');
	});

	it('should open on reference click and emit update:open', async () => {
		const wrapper = setup();

		await open(wrapper);

		expect(wrapper.find('.ds-dropdown').exists()).toBe(true);
		expect(wrapper.find('.reference').text()).toBe('opened');
		expect(wrapper.emitted('update:open')).toEqual([[true]]);
	});

	it('should close through the slot close function and emit update:open', async () => {
		const wrapper = setup();
		await open(wrapper);

		await wrapper.find('.item').trigger('click');

		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
		expect(wrapper.emitted('update:open')).toEqual([[true], [false]]);
	});

	it('should expose close to the parent', async () => {
		const wrapper = setup();
		await open(wrapper);

		wrapper.vm.close();
		await flushPromises();

		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
	});

	it('should follow the open prop', async () => {
		const wrapper = setup({ open: true });
		await flushPromises();
		expect(wrapper.find('.ds-dropdown').exists()).toBe(true);

		await wrapper.setProps({ open: false });
		await flushPromises();
		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
	});

	it('should toggle through the reference slot toggle function', async () => {
		const wrapper = mount(Dropdown, {
			global: { stubs: { PopoverPortal: { props: ['disabled'], template: '<slot />' } } },
			slots: {
				// The inner button stops its click, as DsRichListItem's actions slot does.
				reference: ({ toggle }: { toggle: () => void }) =>
					h('div', { class: 'reference' }, [
						h('button', {
							class: 'chevron',
							onClick: (event: MouseEvent) => {
								event.stopPropagation();
								toggle();
							},
						}),
					]),
				default: () => h('span', { class: 'item' }, 'Item'),
			},
		});

		await wrapper.find('.chevron').trigger('click');
		expect(wrapper.find('.ds-dropdown').exists()).toBe(true);

		await wrapper.find('.chevron').trigger('click');
		expect(wrapper.find('.ds-dropdown').exists()).toBe(false);
	});

	it.each(Object.values(DROPDOWN_ALIGNS))('should align the panel to %s', async (align) => {
		const wrapper = setup({ align });
		await open(wrapper);

		const content = wrapper.findComponent(PopoverContent);

		expect(content.props('side')).toBe('bottom');
		expect(content.props('align')).toBe(align);
	});

	it('should position the panel absolute and keep it visible when the reference scrolls out of view', async () => {
		const wrapper = setup();
		await open(wrapper);
		const content = wrapper.findComponent(PopoverContent);

		expect(content.props('positionStrategy')).toBe('absolute');
		expect(content.props('hideWhenDetached')).toBe(false);
	});

	it.each([true, false])('should pass sideFlip through: %s', async (sideFlip) => {
		const wrapper = setup({ sideFlip });
		await open(wrapper);

		expect(wrapper.findComponent(PopoverContent).props('sideFlip')).toBe(sideFlip);
	});

	it('should hide the panel when the reference scrolls out of view with hideWhenDetached', async () => {
		const wrapper = setup({ hideWhenDetached: true });
		await open(wrapper);

		expect(wrapper.findComponent(PopoverContent).props('hideWhenDetached')).toBe(true);
	});

	it.each([true, false])('should portal the panel to body: %s', async (appendToBody) => {
		const wrapper = setup({ appendToBody });
		await open(wrapper);

		expect(wrapper.findComponent(PopoverPortal).props('disabled')).toBe(!appendToBody);
	});

	it('should match the reference width when hasSameWidth is set', async () => {
		const wrapper = setup({ hasSameWidth: true });
		await open(wrapper);

		expect(wrapper.find('.ds-dropdown').classes()).toContain('-ds-hasSameWidth');
	});

	it('should limit the scrollable height when maxHeight is set', async () => {
		const wrapper = setup({ maxHeight: '250px' });
		await open(wrapper);

		const scrollable = wrapper.find('.ds-dropdown__scrollableWrapper');

		expect(scrollable.attributes('style')).toContain('max-height: 250px');
	});
});
