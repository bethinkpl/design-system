import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import BadgeScore from './BadgeScore.vue';
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';

describe('BadgeScore', () => {
	const createComponent = ({
		text = '',
		color = BADGE_SCORE_COLORS.SUCCESS as string,
		size = BADGE_SCORE_SIZES.MEDIUM as string,
	} = {}) => {
		return shallowMount(BadgeScore, {
			props: {
				color,
				size,
				text,
			} as any,
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it.each([
		'wpłynąłem na suchego przestwór oceanu',
		'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
		'jedziesz szwagier',
	])('should render text prop', (text) => {
		const component = createComponent({ text });

		expect(component.text()).toContain(text);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.SUCCESS} should render -success class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.SUCCESS });

		expect(component.find('.-ds-success').exists()).toBe(true);
		expect(component.find('.-ds-warning').exists()).toBe(false);
		expect(component.find('.-ds-fail').exists()).toBe(false);
		expect(component.find('.-ds-neutral').exists()).toBe(false);
		expect(component.find('.-ds-neutralWeak').exists()).toBe(false);
		expect(component.find('.-ds-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.WARNING} should render -warning class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.WARNING });

		expect(component.find('.-ds-success').exists()).toBe(false);
		expect(component.find('.-ds-warning').exists()).toBe(true);
		expect(component.find('.-ds-fail').exists()).toBe(false);
		expect(component.find('.-ds-neutral').exists()).toBe(false);
		expect(component.find('.-ds-neutralWeak').exists()).toBe(false);
		expect(component.find('.-ds-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.FAIL} should render -fail class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.FAIL });

		expect(component.find('.-ds-success').exists()).toBe(false);
		expect(component.find('.-ds-warning').exists()).toBe(false);
		expect(component.find('.-ds-fail').exists()).toBe(true);
		expect(component.find('.-ds-neutral').exists()).toBe(false);
		expect(component.find('.-ds-neutralWeak').exists()).toBe(false);
		expect(component.find('.-ds-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.INVERTED} should render -inverted class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.INVERTED });

		expect(component.find('.-ds-success').exists()).toBe(false);
		expect(component.find('.-ds-warning').exists()).toBe(false);
		expect(component.find('.-ds-fail').exists()).toBe(false);
		expect(component.find('.-ds-neutral').exists()).toBe(false);
		expect(component.find('.-ds-neutralWeak').exists()).toBe(false);
		expect(component.find('.-ds-inverted').exists()).toBe(true);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.NEUTRAL} should render -fail class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.NEUTRAL });

		expect(component.find('.-ds-success').exists()).toBe(false);
		expect(component.find('.-ds-warning').exists()).toBe(false);
		expect(component.find('.-ds-fail').exists()).toBe(false);
		expect(component.find('.-ds-neutral').exists()).toBe(true);
		expect(component.find('.-ds-neutralWeak').exists()).toBe(false);
		expect(component.find('.-ds-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.NEUTRAL_WEAK} should render -fail class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.NEUTRAL_WEAK });

		expect(component.find('.-ds-success').exists()).toBe(false);
		expect(component.find('.-ds-warning').exists()).toBe(false);
		expect(component.find('.-ds-fail').exists()).toBe(false);
		expect(component.find('.-ds-neutral').exists()).toBe(false);
		expect(component.find('.-ds-neutralWeak').exists()).toBe(true);
		expect(component.find('.-ds-inverted').exists()).toBe(false);
	});

	it(`when size is set as ${BADGE_SCORE_SIZES.SMALL} should render -small class`, () => {
		const component = createComponent({ size: BADGE_SCORE_SIZES.SMALL });

		expect(component.find('.-ds-small').exists()).toBe(true);
		expect(component.find('.-ds-xsmall').exists()).toBe(false);
	});

	it(`when size is set as ${BADGE_SCORE_SIZES.XSMALL} should render -xsmall class`, () => {
		const component = createComponent({ size: BADGE_SCORE_SIZES.XSMALL });

		expect(component.find('.-ds-small').exists()).toBe(false);
		expect(component.find('.-ds-xsmall').exists()).toBe(true);
	});
});
