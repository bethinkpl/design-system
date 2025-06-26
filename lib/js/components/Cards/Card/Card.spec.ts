import { describe, expect, it } from 'vitest';
import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { h } from 'vue';

import Card from './Card.vue';
import { CARD_PADDING_SIZES } from './Card.consts';

describe('Card', () => {
	const createComponent = (options: ComponentMountingOptions<typeof Card> = {}) => {
		return mount(Card, options);
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render card class', () => {
		const component = createComponent();

		expect(component.find('.ds-card').exists()).toBe(true);
	});

	it('should render content slot', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			slots: {
				content: () => [h('span', content)],
			},
		});

		expect(component.find('.ds-card__content').text()).toContain(content);
	});

	it('should render header slot', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			slots: {
				header: () => [h('span', header)],
			},
		});

		expect(component.text()).toContain(header);
	});

	it('should render footer slot', () => {
		const footer = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			slots: {
				footer: () => [h('span', footer)],
			},
		});

		expect(component.text()).toContain(footer);
	});

	it('should render header slot with padding', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			props: { headerHasPadding: true },
			slots: { header: () => [h('span', header)] },
		});

		expect(component.find('.ds-card__header').classes()).toContain('-ds-withPadding');
	});

	it('should render footer slot with padding', () => {
		const footer = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			props: { footerHasPadding: true },
			slots: {
				footer: () => [h('span', footer)],
			},
		});

		expect(component.find('.ds-card__footer').classes()).toContain('-ds-withPadding');
	});

	it('should render divider', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			props: {
				dividerUnderHeader: true,
			},
			slots: {
				header: () => [h('span', header)],
				content: () => [h('span', 'asd')],
			},
		});

		expect(component.find('.ds-card__headerDivider').exists()).toBe(true);
	});

	it("doesn't render divider when no header", () => {
		const component = createComponent({ props: { dividerUnderHeader: true } });

		expect(component.find('.ds-card__headerDivider').exists()).toBe(false);
	});

	it("doesn't render divider when no content", () => {
		const component = createComponent({
			props: { dividerUnderHeader: true },
			slots: { header: () => [h('span', 'test')] },
		});

		expect(component.find('.ds-card__headerDivider').exists()).toBe(false);
	});

	it('should render divider with margin if headerHasPadding', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			props: {
				dividerUnderHeader: true,
				headerHasPadding: true,
			},
			slots: {
				header: () => [h('span', header)],
				content: () => [h('span', 'asd')],
			},
		});

		expect(component.find('.ds-card__headerDivider').classes()).toContain(
			'-ds-withHorizontalMargin',
		);
	});

	it('should set large padding class', () => {
		const component = createComponent({
			props: { paddingSize: CARD_PADDING_SIZES.LARGE },
		});

		expect(component.find('.ds-card').classes()).toContain('-ds-paddingLarge');
	});

	it('should not set large padding class', () => {
		const component = createComponent({
			props: { paddingSize: CARD_PADDING_SIZES.SMALL },
		});

		expect(component.find('.ds-card').classes()).not.toContain('-ds-paddingLarge');
	});

	it('should not set flat class by default', () => {
		const component = createComponent();

		expect(component.find('.ds-card').classes()).not.toContain('-ds-flat');
	});

	it('should set flat class', () => {
		const component = createComponent({
			props: { isFlat: true },
		});

		expect(component.find('.ds-card').classes()).toContain('-ds-flat');
	});
});
