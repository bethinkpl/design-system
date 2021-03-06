import { createLocalVue, shallowMount } from '@vue/test-utils';

import BadgeScore from './BadgeScore.vue';
import { BADGE_SCORE_COLORS, BADGE_SCORE_SIZES } from './BadgeScore.consts';

describe('BadgeScore', () => {
	const createComponent = ({
		text = '',
		color = BADGE_SCORE_COLORS.SUCCESS as string,
		size = BADGE_SCORE_SIZES.MEDIUM as string,
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(BadgeScore, {
			localVue,
			mocks: {},
			propsData: {
				color,
				size,
				text,
			},
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

		expect(component.find('.-success').exists()).toBe(true);
		expect(component.find('.-warning').exists()).toBe(false);
		expect(component.find('.-danger').exists()).toBe(false);
		expect(component.find('.-minor').exists()).toBe(false);
		expect(component.find('.-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.WARNING} should render -warning class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.WARNING });

		expect(component.find('.-success').exists()).toBe(false);
		expect(component.find('.-warning').exists()).toBe(true);
		expect(component.find('.-danger').exists()).toBe(false);
		expect(component.find('.-minor').exists()).toBe(false);
		expect(component.find('.-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.DANGER} should render -danger class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.DANGER });

		expect(component.find('.-success').exists()).toBe(false);
		expect(component.find('.-warning').exists()).toBe(false);
		expect(component.find('.-danger').exists()).toBe(true);
		expect(component.find('.-minor').exists()).toBe(false);
		expect(component.find('.-inverted').exists()).toBe(false);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.INVERTED} should render -danger class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.INVERTED });

		expect(component.find('.-success').exists()).toBe(false);
		expect(component.find('.-warning').exists()).toBe(false);
		expect(component.find('.-danger').exists()).toBe(false);
		expect(component.find('.-minor').exists()).toBe(false);
		expect(component.find('.-inverted').exists()).toBe(true);
	});

	it(`when color is set as ${BADGE_SCORE_COLORS.MINOR} should render -danger class`, () => {
		const component = createComponent({ color: BADGE_SCORE_COLORS.MINOR });

		expect(component.find('.-success').exists()).toBe(false);
		expect(component.find('.-warning').exists()).toBe(false);
		expect(component.find('.-danger').exists()).toBe(false);
		expect(component.find('.-minor').exists()).toBe(true);
		expect(component.find('.-inverted').exists()).toBe(false);
	});

	it(`when size is set as ${BADGE_SCORE_SIZES.SMALL} should render -small class`, () => {
		const component = createComponent({ size: BADGE_SCORE_SIZES.SMALL });

		expect(component.find('.-small').exists()).toBe(true);
		expect(component.find('.-xsmall').exists()).toBe(false);
	});

	it(`when size is set as ${BADGE_SCORE_SIZES.XSMALL} should render -xsmall class`, () => {
		const component = createComponent({ size: BADGE_SCORE_SIZES.XSMALL });

		expect(component.find('.-small').exists()).toBe(false);
		expect(component.find('.-xsmall').exists()).toBe(true);
	});
});
