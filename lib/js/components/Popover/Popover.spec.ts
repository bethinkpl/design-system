import { describe, expect, it } from 'vitest';
import { defineComponent, h } from 'vue';
import { flushPromises, mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot } from 'reka-ui';
import Popover from './Popover.vue';
import { POPOVER_ALIGNS, POPOVER_SIDES } from './Popover.consts';

const setup = (props: ComponentProps<typeof Popover> = {}) =>
	mount(Popover, {
		props,
		global: { stubs: { PopoverPortal: { props: ['disabled'], template: '<slot />' } } },
		slots: {
			reference: () => h('button', { class: 'reference' }, 'Reference'),
			default: () => h('p', { class: 'body' }, 'Body'),
		},
	});

// Reka mounts the panel opened through the prop on the next render.
const setupForced = async (props: ComponentProps<typeof Popover> = {}) => {
	const wrapper = setup({ ...props, open: true });
	await flushPromises();

	return wrapper;
};

const open = async (wrapper: ReturnType<typeof setup>) => {
	await wrapper.find('.reference').trigger('click');
};

describe('Popover', () => {
	it('should not override a type prop of the reference component', () => {
		const ReferenceWithType = defineComponent({
			name: 'ReferenceWithType',
			props: { type: { type: String, default: 'default' } },
			setup: (props) => () => h('div', { class: 'reference' }, props.type),
		});
		const wrapper = mount(Popover, { slots: { reference: () => h(ReferenceWithType) } });

		expect(wrapper.find('.reference').text()).toBe('default');
	});

	it('should render only the reference when disabled', () => {
		const wrapper = setup({ disabled: true, open: true });

		expect(wrapper.find('.reference').exists()).toBe(true);
		expect(wrapper.findComponent(PopoverRoot).exists()).toBe(false);
	});

	it('should close when disabled while open', async () => {
		const wrapper = setup();
		await open(wrapper);

		await wrapper.setProps({ disabled: true });
		await wrapper.setProps({ disabled: false });

		expect(wrapper.find('.ds-popover').exists()).toBe(false);
		expect(wrapper.emitted('update:open')).toEqual([[true], [false]]);
	});

	it('should open on reference click', async () => {
		const wrapper = setup();
		expect(wrapper.find('.ds-popover').exists()).toBe(false);

		await open(wrapper);

		expect(wrapper.find('.ds-popover .body').exists()).toBe(true);
	});

	it.each(['openAutoFocus', 'closeAutoFocus'])('should not move focus on %s', async (event) => {
		const focusEvent = new Event('focus', { cancelable: true });

		(await setupForced()).findComponent(PopoverContent).vm.$emit(event, focusEvent);

		expect(focusEvent.defaultPrevented).toBe(true);
	});

	it('should render opened when the open prop is set', async () => {
		expect((await setupForced()).find('.ds-popover').exists()).toBe(true);
	});

	it('should ignore reference clicks in manual mode', async () => {
		const wrapper = setup({ manual: true });
		await open(wrapper);
		expect(wrapper.emitted('update:open')).toBeUndefined();
		expect(wrapper.find('.ds-popover').exists()).toBe(false);
	});

	it('should follow model updates and allow explicit close in manual mode', async () => {
		const wrapper = setup({ manual: true });
		await wrapper.setProps({ open: true });
		await flushPromises();
		expect(wrapper.find('.ds-popover').exists()).toBe(true);
		await open(wrapper);
		expect(wrapper.emitted('update:open')).toBeUndefined();
		wrapper.vm.close();
		expect(wrapper.emitted('update:open')).toEqual([[false]]);
		await wrapper.setProps({ open: false });
		await flushPromises();
		expect(wrapper.find('.ds-popover').exists()).toBe(false);
	});

	it.each(['escapeKeyDown', 'interactOutside'])(
		'should prevent %s only in manual mode',
		async (eventName) => {
			for (const manual of [false, true]) {
				const wrapper = await setupForced({ manual });
				const event = new Event(eventName, { cancelable: true });
				wrapper.findComponent(PopoverContent).vm.$emit(eventName, event);
				expect(event.defaultPrevented).toBe(manual);
				wrapper.unmount();
			}
		},
	);

	it('should emit button-click', async () => {
		const wrapper = await setupForced({ buttonText: 'OK' });

		await wrapper.find('.ds-popover__button').trigger('click');

		expect(wrapper.emitted('button-click')).toHaveLength(1);
	});

	it.each([true, false])('should render the arrow: %s', async (isPointerVisible) => {
		const wrapper = await setupForced({ isPointerVisible });

		expect(wrapper.findComponent(PopoverArrow).exists()).toBe(isPointerVisible);
		// Reka adds the arrow's height to the offset itself.
		expect(wrapper.findComponent(PopoverContent).props('sideOffset')).toBe(4);
	});

	it.each([
		{ side: POPOVER_SIDES.TOP, align: POPOVER_ALIGNS.CENTER },
		{ side: POPOVER_SIDES.RIGHT, align: POPOVER_ALIGNS.START },
		{ side: POPOVER_SIDES.BOTTOM, align: POPOVER_ALIGNS.END },
	])('should position the panel on $side / $align', async ({ side, align }) => {
		const content = (await setupForced({ side, align })).findComponent(PopoverContent);

		expect(content.props('side')).toBe(side);
		expect(content.props('align')).toBe(align);
	});

	it('should position the panel fixed and hide it when the reference scrolls out of view', async () => {
		const content = (await setupForced()).findComponent(PopoverContent);

		expect(content.props('positionStrategy')).toBe('fixed');
		expect(content.props('hideWhenDetached')).toBe(true);
	});

	it('should pass sideFlip through', async () => {
		const content = (await setupForced({ sideFlip: false })).findComponent(PopoverContent);

		expect(content.props('sideFlip')).toBe(false);
	});

	it.each([true, false])('should portal the panel to body: %s', async (appendToBody) => {
		const portal = (await setupForced({ appendToBody })).findComponent(PopoverPortal);

		expect(portal.props('disabled')).toBe(!appendToBody);
	});
});
