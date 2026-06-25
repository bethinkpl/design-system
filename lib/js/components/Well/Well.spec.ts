import { describe, expect, it } from 'vitest';
import { ComponentMountingOptions, mount } from '@vue/test-utils';

import Well from './Well.vue';
import { WELL_RIBBON_POSITIONS } from './Well.consts';

describe('Well', () => {
	const createComponent = (options: ComponentMountingOptions<typeof Well> = {}) => {
		return mount(Well, options);
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.find('.ds-well').exists()).toBe(true);
	});

	it('should render default slot content', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			slots: { default: () => content },
		});

		expect(component.find('.ds-well__content').text()).toContain(content);
	});

	it('should not set no-radius class by default', () => {
		const component = createComponent();

		expect(component.find('.ds-well').classes()).not.toContain('-ds-noRadius');
	});

	it('should set no-radius class when hasRadius is false', () => {
		const component = createComponent({
			props: { hasRadius: false },
		});

		expect(component.find('.ds-well').classes()).toContain('-ds-noRadius');
	});

	it('should not set border class by default', () => {
		const component = createComponent();

		expect(component.find('.ds-well').classes()).not.toContain('-ds-hasBorder');
	});

	it('should set border class when hasBorder is true', () => {
		const component = createComponent({
			props: { hasBorder: true },
		});

		expect(component.find('.ds-well').classes()).toContain('-ds-hasBorder');
	});

	it('should not render a ribbon by default', () => {
		const component = createComponent();

		expect(component.find('.ds-well__border').exists()).toBe(false);
		expect(component.find('.ds-container-ribbon').exists()).toBe(false);
	});

	it('should render a horizontal ribbon for the top position', () => {
		const component = createComponent({
			props: { hasRibbon: true, ribbonPosition: WELL_RIBBON_POSITIONS.TOP },
		});

		expect(component.find('.ds-container-ribbon').classes()).toContain('-ds-layout-horizontal');
		expect(component.find('.ds-well').classes()).not.toContain('-ds-leftRibbon');
	});

	it('should render a vertical ribbon and left-ribbon class for the left position', () => {
		const component = createComponent({
			props: { hasRibbon: true, ribbonPosition: WELL_RIBBON_POSITIONS.LEFT },
		});

		expect(component.find('.ds-container-ribbon').classes()).toContain('-ds-layout-vertical');
		expect(component.find('.ds-well').classes()).toContain('-ds-leftRibbon');
	});

	it('should not give the ribbon a radius when the well is rounded', () => {
		const component = createComponent({
			props: { hasRibbon: true, hasRadius: true },
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(false);
		expect(component.find('.-ds-radius-right').exists()).toBe(false);
	});

	it('should give a top ribbon a bottom radius when the well is square', () => {
		const component = createComponent({
			props: {
				hasRibbon: true,
				hasRadius: false,
				ribbonPosition: WELL_RIBBON_POSITIONS.TOP,
			},
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(true);
	});

	it('should give a left ribbon a right radius when the well is square', () => {
		const component = createComponent({
			props: {
				hasRibbon: true,
				hasRadius: false,
				ribbonPosition: WELL_RIBBON_POSITIONS.LEFT,
			},
		});

		expect(component.find('.-ds-radius-right').exists()).toBe(true);
	});
});
