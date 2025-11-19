import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ContainerRibbon from './ContainerRibbon.vue';
import {
	CONTAINER_RIBBON_SIZES,
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_RADIUSES,
} from './ContainerRibbon.consts';

describe('ContainerRibbon', () => {
	it('renders with default props', () => {
		const wrapper = mount(ContainerRibbon);
		expect(wrapper.find('.ds-container-ribbon').exists()).toBe(true);

		expect(wrapper.find('.ds-container-ribbon').classes().sort()).toEqual(
			[
				'-ds-color-neutral',
				'-ds-size-large',
				'-ds-layout-vertical',
				'ds-container-ribbon',
			].sort(),
		);
	});

	it('applies size classes correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: { size: CONTAINER_RIBBON_SIZES.SMALL },
		});
		expect(wrapper.find('.ds-container-ribbon').classes()).toContain('-ds-size-small');
	});

	it('applies color classes correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: { color: CONTAINER_RIBBON_COLORS.PRIMARY },
		});
		expect(wrapper.find('.ds-container-ribbon').classes()).toContain('-ds-color-primary');
	});

	it('applies layout classes correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: { layout: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL },
		});
		expect(wrapper.find('.ds-container-ribbon').classes()).toContain('-ds-layout-horizontal');
	});

	it('applies radius classes correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: { radius: CONTAINER_RIBBON_RADIUSES.RIGHT },
		});
		expect(wrapper.find('.ds-container-ribbon').classes()).toContain('-ds-radius-right');
	});

	it('applies multiple prop classes correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: {
				size: CONTAINER_RIBBON_SIZES.LARGE,
				color: CONTAINER_RIBBON_COLORS.SUCCESS,
				layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
				radius: CONTAINER_RIBBON_RADIUSES.RIGHT,
			},
		});
		const classes = wrapper.find('.ds-container-ribbon').classes();
		expect(classes).toContain('-ds-size-large');
		expect(classes).toContain('-ds-color-success');
		expect(classes).toContain('-ds-layout-vertical');
		expect(classes).toContain('-ds-radius-right');
	});
});
