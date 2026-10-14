import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { h } from 'vue';
import { flushPromises, mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot } from 'reka-ui';
import PopOver from './PopOver.vue';
import { POP_OVER_PLACEMENTS, POP_OVER_TRIGGER_ACTIONS } from './PopOver.consts';

const setup = (props: ComponentProps<typeof PopOver> = {}) =>
	mount(PopOver, {
		props,
		slots: {
			reference: () => h('button', { class: 'reference' }, 'Reference'),
			default: () => h('p', { class: 'body' }, 'Body'),
		},
	});

// Reka mounts the forced-open panel on the next render.
const setupForced = async (props: ComponentProps<typeof PopOver> = {}) => {
	const wrapper = setup({ ...props, forceShow: true });
	await flushPromises();

	return wrapper;
};

const open = async (wrapper: ReturnType<typeof setup>) => {
	await wrapper.find('.reference').trigger('click');
};

describe('PopOver', () => {
	it('should render only the reference when the trigger action is none', () => {
		const wrapper = setup({ triggerAction: POP_OVER_TRIGGER_ACTIONS.NONE, forceShow: true });

		expect(wrapper.find('.reference').exists()).toBe(true);
		expect(wrapper.findComponent(PopoverRoot).exists()).toBe(false);
	});

	it('should open on reference click', async () => {
		const wrapper = setup();
		expect(wrapper.find('.ds-popOver').exists()).toBe(false);

		await open(wrapper);

		expect(wrapper.find('.ds-popOver .body').exists()).toBe(true);
	});

	it('should render opened when forceShow is set', async () => {
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
		{ placement: POP_OVER_PLACEMENTS.TOP, side: 'top', align: 'center' },
		{ placement: POP_OVER_PLACEMENTS.RIGHT, side: 'right', align: 'center' },
		{ placement: POP_OVER_PLACEMENTS.BOTTOM_END, side: 'bottom', align: 'end' },
	])('should position the panel for $placement', async ({ placement, side, align }) => {
		const content = (await setupForced({ placement })).findComponent(PopoverContent);

		expect(content.props('side')).toBe(side);
		expect(content.props('align')).toBe(align);
	});

	it('should position the panel absolutely so a long panel extends the page', async () => {
		const content = (await setupForced()).findComponent(PopoverContent);

		expect(content.props('positionStrategy')).toBe('absolute');
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

	describe('hover trigger', () => {
		beforeEach(() => {
			vi.useFakeTimers();
		});

		afterEach(() => {
			vi.useRealTimers();
		});

		const setupHover = () => setup({ triggerAction: POP_OVER_TRIGGER_ACTIONS.HOVER });
		const reference = (wrapper: ReturnType<typeof setup>) => wrapper.find('.reference').element;
		const pointer = async (element: Element, type: string, pointerType = 'mouse') => {
			element.dispatchEvent(Object.assign(new Event(type), { pointerType }));
			await vi.runAllTimersAsync();
		};

		it('should open on hover and close after leaving', async () => {
			const wrapper = setupHover();

			await pointer(reference(wrapper), 'pointerenter');
			expect(wrapper.find('.ds-popOver').exists()).toBe(true);

			await pointer(reference(wrapper), 'pointerleave');
			expect(wrapper.find('.ds-popOver').exists()).toBe(false);
		});

		it('should not toggle on a mouse click', async () => {
			const wrapper = setupHover();
			await pointer(reference(wrapper), 'pointerdown');

			await wrapper.find('.reference').trigger('click');

			expect(wrapper.find('.ds-popOver').exists()).toBe(false);
		});

		it('should toggle on a touch tap', async () => {
			const wrapper = setupHover();
			await pointer(reference(wrapper), 'pointerdown', 'touch');

			await wrapper.find('.reference').trigger('click');

			expect(wrapper.find('.ds-popOver').exists()).toBe(true);
		});

		it('should ignore touch pointerenter', async () => {
			const wrapper = setupHover();

			await pointer(reference(wrapper), 'pointerenter', 'touch');

			expect(wrapper.find('.ds-popOver').exists()).toBe(false);
		});
	});
});
