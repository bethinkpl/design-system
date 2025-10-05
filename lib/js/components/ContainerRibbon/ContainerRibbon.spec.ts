import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ContainerRibbon from './ContainerRibbon.vue';
import {
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_SIZES,
} from './ContainerRibbon.consts';

describe('ContainerRibbon', () => {
	it('should render with default props', () => {
		const wrapper = mount(ContainerRibbon);
		
		expect(wrapper.classes()).toContain('ds-container-ribbon');
		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_SIZES.LARGE}`);
		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY}`);
		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_LAYOUTS.VERTICAL}`);
	});

	it('should apply size class correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: {
				size: CONTAINER_RIBBON_SIZES.SMALL,
			},
		});

		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_SIZES.SMALL}`);
	});

	it('should apply color class correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: {
				color: CONTAINER_RIBBON_COLORS.PRIMARY,
			},
		});

		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_COLORS.PRIMARY}`);
	});

	it('should apply layout class correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: {
				layout: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
			},
		});

		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_LAYOUTS.HORIZONTAL}`);
	});

	it('should apply all custom props correctly', () => {
		const wrapper = mount(ContainerRibbon, {
			props: {
				size: CONTAINER_RIBBON_SIZES.MEDIUM,
				color: CONTAINER_RIBBON_COLORS.SUCCESS,
				layout: CONTAINER_RIBBON_LAYOUTS.HORIZONTAL,
			},
		});

		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_SIZES.MEDIUM}`);
		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_COLORS.SUCCESS}`);
		expect(wrapper.classes()).toContain(`ds-container-ribbon--${CONTAINER_RIBBON_LAYOUTS.HORIZONTAL}`);
	});

	it('should render all available sizes', () => {
		Object.values(CONTAINER_RIBBON_SIZES).forEach((size) => {
			const wrapper = mount(ContainerRibbon, {
				props: { size },
			});
			expect(wrapper.classes()).toContain(`ds-container-ribbon--${size}`);
		});
	});

	it('should render all available colors', () => {
		Object.values(CONTAINER_RIBBON_COLORS).forEach((color) => {
			const wrapper = mount(ContainerRibbon, {
				props: { color },
			});
			expect(wrapper.classes()).toContain(`ds-container-ribbon--${color}`);
		});
	});

	it('should render all available layouts', () => {
		Object.values(CONTAINER_RIBBON_LAYOUTS).forEach((layout) => {
			const wrapper = mount(ContainerRibbon, {
				props: { layout },
			});
			expect(wrapper.classes()).toContain(`ds-container-ribbon--${layout}`);
		});
	});
});