import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Card from './Card.vue';
import { CARD_BORDER_COLORS, CARD_BORDER_POSITIONS, CARD_BORDER_SIZES } from './Card.consts';
import { LOADING_BAR_COLORS } from '../../LoadingBar';

describe('Card', () => {
	const createComponent = ({
		headerSlot = '',
		contentSlot = '',
		footerSlot = '',
		headerHasPadding = false,
		dividerUnderHeader = false,
	} = {}) => {
		return shallowMount(Card, {
			props: {
				headerHasPadding,
				dividerUnderHeader,
				hasBorder: false,
				borderSize: CARD_BORDER_SIZES.MEDIUM,
				borderColor: CARD_BORDER_COLORS.NEUTRAL_HEAVY,
				borderPosition: CARD_BORDER_POSITIONS.TOP,
				hasLoadingBar: false,
				loadingBarColor: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
				loadingBarTime: '0',
			},
			slots: {
				...(headerSlot !== '' && { header: headerSlot }),
				...(contentSlot !== '' && { content: contentSlot }),
				...(footerSlot !== '' && { footer: footerSlot }),
			},
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
		const component = createComponent({ contentSlot: content });

		expect(component.find('.ds-card__content').text()).toContain(content);
	});

	it('should render header slot', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header });

		expect(component.text()).toContain(header);
	});

	it('should render footer slot', () => {
		const footer = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ footerSlot: footer });

		expect(component.text()).toContain(footer);
	});

	it('should render header slot with padding', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header, headerHasPadding: true });

		expect(component.find('.ds-card__header').classes()).toContain('-ds-withPadding');
	});

	it('should render divider', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			headerSlot: header,
			contentSlot: 'asd',
			dividerUnderHeader: true,
		});

		expect(component.find('.ds-card__headerDivider').exists()).toBe(true);
	});

	it("doesn't render divider when no header", () => {
		const component = createComponent({ dividerUnderHeader: true });

		expect(component.find('.ds-card__headerDivider').exists()).toBe(false);
	});

	it("doesn't render divider when no content", () => {
		const component = createComponent({ headerSlot: 'test', dividerUnderHeader: true });

		expect(component.find('.ds-card__headerDivider').exists()).toBe(false);
	});

	it('should render divider with margin if headerHasPadding', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			headerSlot: header,
			contentSlot: 'asd',
			dividerUnderHeader: true,
			headerHasPadding: true,
		});

		expect(component.find('.ds-card__headerDivider').classes()).toContain(
			'-ds-withHorizontalMargin',
		);
	});
});
