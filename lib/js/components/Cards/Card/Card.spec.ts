import { describe, expect, it } from 'vitest';
import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { h } from 'vue';

import Card from './Card.vue';
import {
	CARD_BACKGROUND_COLORS,
	CARD_ELEVATIONS,
	CARD_PADDING_SIZES,
	CARD_RADIUSES,
	CardBackgroundColor,
	CardElevation,
	CardPaddingSize,
	CardRadius,
} from './Card.consts';

describe('Card', () => {
	const createComponent = (options: ComponentMountingOptions<typeof Card> = {}) => {
		return mount(Card, options);
	};

	// asserts that exactly one modifier out of a variant group is applied
	const expectOnlyModifier = (
		classes: Array<string>,
		modifiers: Array<string>,
		expectedModifier: string | null,
	) => {
		modifiers.forEach((modifier) => {
			if (modifier === expectedModifier) {
				expect(classes).toContain(modifier);
			} else {
				expect(classes).not.toContain(modifier);
			}
		});
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

	it('should render experimentalContent slot', () => {
		const experimentalContent = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			slots: {
				experimentalContent: () => [h('span', experimentalContent)],
			},
		});

		expect(component.find('.ds-card__experimentalContent').exists()).toBe(true);
		expect(component.find('.ds-card__experimentalContent').text()).toContain(
			experimentalContent,
		);
	});

	it('should skip standard slots when experimentalContent is used', () => {
		const component = createComponent({
			slots: {
				header: () => [h('span', 'header')],
				content: () => [h('span', 'content')],
				footer: () => [h('span', 'footer')],
				experimentalContent: () => [h('span', 'experimental')],
			},
		});

		expect(component.find('.ds-card__header').exists()).toBe(false);
		expect(component.find('.ds-card__content').exists()).toBe(false);
		expect(component.find('.ds-card__footer').exists()).toBe(false);
	});

	it('should not render the slotsWrapper when experimentalContent is used', () => {
		const component = createComponent({
			slots: {
				experimentalContent: () => [h('span', 'experimental')],
			},
		});

		expect(component.find('.ds-card__slotsWrapper').exists()).toBe(false);
	});

	it('should still render the ribbon when experimentalContent is used', () => {
		const component = createComponent({
			props: { hasRibbon: true },
			slots: {
				experimentalContent: () => [h('span', 'experimental')],
			},
		});

		expect(component.find('.ds-card__ribbon').exists()).toBe(true);
	});

	it('should render content slot with padding by default', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			slots: {
				content: () => [h('span', content)],
			},
		});

		expect(component.find('.ds-card__content').classes()).toContain('-ds-withPadding');
	});

	it('should render content slot without padding if contentHasPadding is false', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			props: { contentHasPadding: false },
			slots: {
				content: () => [h('span', content)],
			},
		});

		expect(component.find('.ds-card__content').classes()).not.toContain('-ds-withPadding');
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

	const PADDING_MODIFIERS = ['-ds-paddingMedium', '-ds-paddingLarge'];

	it.each<[CardPaddingSize, string | null]>([
		[CARD_PADDING_SIZES.SMALL, null],
		[CARD_PADDING_SIZES.MEDIUM, '-ds-paddingMedium'],
		[CARD_PADDING_SIZES.LARGE, '-ds-paddingLarge'],
	])('should set the padding class for paddingSize %s', (paddingSize, expectedModifier) => {
		const component = createComponent({ props: { paddingSize } });

		expectOnlyModifier(
			component.find('.ds-card').classes(),
			PADDING_MODIFIERS,
			expectedModifier,
		);
	});

	it('should not set any padding class by default', () => {
		const component = createComponent();

		expectOnlyModifier(component.find('.ds-card').classes(), PADDING_MODIFIERS, null);
	});

	const ELEVATION_MODIFIERS = ['-ds-elevationTop', '-ds-elevationNone'];

	it.each<[CardElevation, string | null]>([
		[CARD_ELEVATIONS.DEFAULT, null],
		[CARD_ELEVATIONS.TOP, '-ds-elevationTop'],
		[CARD_ELEVATIONS.NONE, '-ds-elevationNone'],
	])('should set the elevation class for elevation %s', (elevation, expectedModifier) => {
		const component = createComponent({ props: { elevation } });

		expectOnlyModifier(
			component.find('.ds-card').classes(),
			ELEVATION_MODIFIERS,
			expectedModifier,
		);
	});

	it('should not set any elevation class by default', () => {
		const component = createComponent();

		expectOnlyModifier(component.find('.ds-card').classes(), ELEVATION_MODIFIERS, null);
	});

	const RADIUS_MODIFIERS = ['-ds-radiusTop', '-ds-radiusNone'];

	it.each<[CardRadius, string | null]>([
		[CARD_RADIUSES.ALL, null],
		[CARD_RADIUSES.TOP, '-ds-radiusTop'],
		[CARD_RADIUSES.NONE, '-ds-radiusNone'],
	])('should set the radius class for radius %s', (radius, expectedModifier) => {
		const component = createComponent({ props: { radius } });

		expectOnlyModifier(
			component.find('.ds-card').classes(),
			RADIUS_MODIFIERS,
			expectedModifier,
		);
	});

	it('should not set any radius class by default', () => {
		const component = createComponent();

		expectOnlyModifier(component.find('.ds-card').classes(), RADIUS_MODIFIERS, null);
	});

	const BACKGROUND_MODIFIERS = ['-ds-backgroundNeutral', '-ds-backgroundNone'];

	it.each<[CardBackgroundColor, string | null]>([
		[CARD_BACKGROUND_COLORS.DEFAULT, null],
		[CARD_BACKGROUND_COLORS.NEUTRAL, '-ds-backgroundNeutral'],
		[CARD_BACKGROUND_COLORS.NONE, '-ds-backgroundNone'],
	])(
		'should set the background class for backgroundColor %s',
		(backgroundColor, expectedModifier) => {
			const component = createComponent({ props: { backgroundColor } });

			expectOnlyModifier(
				component.find('.ds-card').classes(),
				BACKGROUND_MODIFIERS,
				expectedModifier,
			);
		},
	);

	it('should not set any background class by default', () => {
		const component = createComponent();

		expectOnlyModifier(component.find('.ds-card').classes(), BACKGROUND_MODIFIERS, null);
	});

	it('should set the none modifiers of all three visual axes when isFlat is true', () => {
		const classes = createComponent({ props: { isFlat: true } })
			.find('.ds-card')
			.classes();

		expectOnlyModifier(classes, ELEVATION_MODIFIERS, '-ds-elevationNone');
		expectOnlyModifier(classes, RADIUS_MODIFIERS, '-ds-radiusNone');
		expectOnlyModifier(classes, BACKGROUND_MODIFIERS, '-ds-backgroundNone');
	});

	it('should not change the padding when isFlat is true', () => {
		const component = createComponent({ props: { isFlat: true } });

		expectOnlyModifier(component.find('.ds-card').classes(), PADDING_MODIFIERS, null);
	});

	it('should let an explicit elevation override isFlat', () => {
		const component = createComponent({
			props: { isFlat: true, elevation: CARD_ELEVATIONS.TOP },
		});

		expectOnlyModifier(
			component.find('.ds-card').classes(),
			ELEVATION_MODIFIERS,
			'-ds-elevationTop',
		);
	});

	it('should let an explicit radius override isFlat', () => {
		const component = createComponent({
			props: { isFlat: true, radius: CARD_RADIUSES.TOP },
		});

		expectOnlyModifier(component.find('.ds-card').classes(), RADIUS_MODIFIERS, '-ds-radiusTop');
	});

	it('should let an explicit backgroundColor override isFlat', () => {
		const component = createComponent({
			props: { isFlat: true, backgroundColor: CARD_BACKGROUND_COLORS.NEUTRAL },
		});

		expectOnlyModifier(
			component.find('.ds-card').classes(),
			BACKGROUND_MODIFIERS,
			'-ds-backgroundNeutral',
		);
	});

	it('should not give the ribbon a radius when only hasRibbonRadius is set', () => {
		const component = createComponent({
			props: { hasRibbon: true, hasRibbonRadius: true },
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(false);
	});

	it('should give the ribbon a radius when hasRibbonRadius and card has no radius', () => {
		const component = createComponent({
			props: { hasRibbon: true, hasRibbonRadius: true, radius: CARD_RADIUSES.NONE },
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(true);
	});

	it('should not give the ribbon a radius when radius is none but hasRibbonRadius is false', () => {
		const component = createComponent({
			props: { hasRibbon: true, hasRibbonRadius: false, radius: CARD_RADIUSES.NONE },
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(false);
	});

	it('should not give the ribbon a radius when the card is rounded at the top', () => {
		const component = createComponent({
			props: { hasRibbon: true, hasRibbonRadius: true, radius: CARD_RADIUSES.TOP },
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(false);
	});

	it('should give the ribbon a radius when hasRibbonRadius and the card is flat', () => {
		const component = createComponent({
			props: { hasRibbon: true, hasRibbonRadius: true, isFlat: true },
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(true);
	});

	it('should not give the ribbon a radius when a flat card is overridden with radius top', () => {
		const component = createComponent({
			props: {
				hasRibbon: true,
				hasRibbonRadius: true,
				isFlat: true,
				radius: CARD_RADIUSES.TOP,
			},
		});

		expect(component.find('.-ds-radius-bottom').exists()).toBe(false);
	});
});
