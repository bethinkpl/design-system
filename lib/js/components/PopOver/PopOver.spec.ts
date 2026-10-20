import { describe, expect, it } from 'vitest';
import { defineComponent, h } from 'vue';
import { flushPromises, mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot } from 'reka-ui';
import PopOver from './PopOver.vue';
import { POP_OVER_ALIGNS, POP_OVER_SIDES, POP_OVER_TRIGGER_ACTIONS } from './PopOver.consts';

const setup = (props: ComponentProps<typeof PopOver> = {}) =>
	mount(PopOver, {
		props,
		global: { stubs: { PopoverPortal: { props: ['disabled'], template: '<slot />' } } },
		slots: {
			reference: () => h('button', { class: 'reference' }, 'Reference'),
			default: () => h('p', { class: 'body' }, 'Body'),
		},
	});

// Reka mounts the panel opened through the prop on the next render.
const setupForced = async (props: ComponentProps<typeof PopOver> = {}) => {
	const wrapper = setup({ ...props, open: true });
	await flushPromises();

	return wrapper;
};

const open = async (wrapper: ReturnType<typeof setup>) => {
	await wrapper.find('.reference').trigger('click');
};

describe('PopOver', () => {
	it('should not override a type prop of the reference component', () => {
		const ReferenceWithType = defineComponent({
			name: 'ReferenceWithType',
			props: { type: { type: String, default: 'default' } },
			setup: (props) => () => h('div', { class: 'reference' }, props.type),
		});
		const wrapper = mount(PopOver, { slots: { reference: () => h(ReferenceWithType) } });

		expect(wrapper.find('.reference').text()).toBe('default');
	});

	it('should render only the reference when the trigger action is none', () => {
		const wrapper = setup({ triggerAction: POP_OVER_TRIGGER_ACTIONS.NONE, open: true });

		expect(wrapper.find('.reference').exists()).toBe(true);
		expect(wrapper.findComponent(PopoverRoot).exists()).toBe(false);
	});

	it('should open on reference click', async () => {
		const wrapper = setup();
		expect(wrapper.find('.ds-popOver').exists()).toBe(false);

		await open(wrapper);

		expect(wrapper.find('.ds-popOver .body').exists()).toBe(true);
	});

	it('should render opened when the open prop is set', async () => {
		expect((await setupForced()).find('.ds-popOver').exists()).toBe(true);
	});

	it('should emit button-click', async () => {
		const wrapper = await setupForced({ buttonText: 'OK' });

		await wrapper.find('.ds-popOver__button').trigger('click');

		expect(wrapper.emitted('button-click')).toHaveLength(1);
	});

	it.each([true, false])('should render the arrow: %s', async (isPointerVisible) => {
		const wrapper = await setupForced({ isPointerVisible });

		expect(wrapper.findComponent(PopoverArrow).exists()).toBe(isPointerVisible);
		// Reka adds the arrow's height to the offset itself.
		expect(wrapper.findComponent(PopoverContent).props('sideOffset')).toBe(4);
	});

	it.each([
		{ side: POP_OVER_SIDES.TOP, align: POP_OVER_ALIGNS.CENTER },
		{ side: POP_OVER_SIDES.RIGHT, align: POP_OVER_ALIGNS.START },
		{ side: POP_OVER_SIDES.BOTTOM, align: POP_OVER_ALIGNS.END },
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

	it('should apply rootClass to the panel', async () => {
		const wrapper = await setupForced({ rootClass: 'customRoot' });

		expect(wrapper.find('.ds-popOver').classes()).toContain('customRoot');
	});
});
