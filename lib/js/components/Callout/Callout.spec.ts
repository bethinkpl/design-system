import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import { h } from 'vue';
import Callout from './Callout.vue';
import {
	CALLOUT_COLORS,
	CALLOUT_LAYOUTS,
	CALLOUT_MAIN_TEXT_COLORS,
	CALLOUT_SIZES,
} from './Callout.consts';
import DsFeatureIcon from '../Icons/FeatureIcon';
import { FEATURE_ICON_SIZES } from '../Icons/FeatureIcon/FeatureIcon.consts';
import DsTextGroup from '../TextGroup/TextGroup.vue';
import { TEXT_GROUP_ALIGNS, TEXT_GROUP_SIZES } from '../TextGroup/TextGroup.consts';
import DsButton from '../Buttons/Button';
import { BUTTON_COLORS, BUTTON_RADIUSES, BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button';
import { ICONS } from '../Icons/Icon';

type MountOptions = Omit<NonNullable<Parameters<typeof mount<typeof Callout>>[1]>, 'props'> & {
	props?: Partial<ComponentProps<typeof Callout>>;
};

const mountCallout = (options: MountOptions = {}) =>
	mount(Callout, {
		...options,
		props: { icon: ICONS.FA_COMMENT_DOTS, ...options.props },
	});

describe('Callout', () => {
	it('renders', () => {
		const wrapper = mountCallout();

		expect(wrapper.exists()).toBe(true);
	});

	it('renders the feature icon', () => {
		const wrapper = mountCallout();

		expect(wrapper.findComponent(DsFeatureIcon).exists()).toBe(true);
		expect(wrapper.findComponent(DsFeatureIcon).props('icon')).toStrictEqual(
			ICONS.FA_COMMENT_DOTS,
		);
	});

	it('passes main and supporting text to the text group', () => {
		const wrapper = mountCallout({
			props: {
				mainText: 'Main text',
				supportingText: 'Supporting text',
			},
		});

		expect(wrapper.find('.ds-callout__text').text()).toContain('Main text');
		expect(wrapper.find('.ds-callout__text').text()).toContain('Supporting text');
	});

	describe('layout', () => {
		it.each(Object.values(CALLOUT_LAYOUTS))('applies the layout class for "%s"', (layout) => {
			const wrapper = mountCallout({ props: { layout } });

			expect(wrapper.find('.ds-callout').classes()).toContain(`-ds-layout-${layout}`);
		});

		it('is vertical by default', () => {
			const wrapper = mountCallout();

			expect(wrapper.find('.ds-callout').classes()).toContain('-ds-layout-vertical');
		});

		it.each([
			[CALLOUT_LAYOUTS.VERTICAL, TEXT_GROUP_ALIGNS.CENTER],
			[CALLOUT_LAYOUTS.HORIZONTAL, TEXT_GROUP_ALIGNS.LEFT],
		])('aligns the text group for layout "%s"', (layout, expectedAlign) => {
			const wrapper = mountCallout({ props: { layout } });

			expect(wrapper.findComponent(DsTextGroup).props('align')).toBe(expectedAlign);
		});
	});

	describe('size', () => {
		it('is medium by default', () => {
			const wrapper = mountCallout();

			expect(wrapper.findComponent(DsFeatureIcon).props('size')).toBe(
				FEATURE_ICON_SIZES.MEDIUM,
			);
			expect(wrapper.findComponent(DsTextGroup).props('size')).toBe(TEXT_GROUP_SIZES.LARGE);
		});

		it.each([
			[CALLOUT_SIZES.SMALL, FEATURE_ICON_SIZES.MEDIUM, TEXT_GROUP_SIZES.MEDIUM],
			[CALLOUT_SIZES.MEDIUM, FEATURE_ICON_SIZES.MEDIUM, TEXT_GROUP_SIZES.LARGE],
			[CALLOUT_SIZES.LARGE, FEATURE_ICON_SIZES.LARGE, TEXT_GROUP_SIZES.LARGE],
		])(
			'maps size "%s" to feature icon "%s" and text group "%s"',
			(size, featureIconSize, textGroupSize) => {
				const wrapper = mountCallout({ props: { size } });

				expect(wrapper.findComponent(DsFeatureIcon).props('size')).toBe(featureIconSize);
				expect(wrapper.findComponent(DsTextGroup).props('size')).toBe(textGroupSize);
			},
		);
	});

	describe('color', () => {
		it.each(Object.values(CALLOUT_COLORS))('passes color "%s" to the feature icon', (color) => {
			const wrapper = mountCallout({ props: { color } });

			expect(wrapper.findComponent(DsFeatureIcon).props('color')).toBe(color);
		});

		it('is primary by default', () => {
			const wrapper = mountCallout();

			expect(wrapper.findComponent(DsFeatureIcon).props('color')).toBe(
				CALLOUT_COLORS.PRIMARY,
			);
		});
	});

	describe('main text color', () => {
		it.each(Object.values(CALLOUT_MAIN_TEXT_COLORS))(
			'passes main text color "%s" to the text group',
			(mainTextColor) => {
				const wrapper = mountCallout({ props: { mainTextColor } });

				expect(wrapper.findComponent(DsTextGroup).props('mainTextColor')).toBe(
					mainTextColor,
				);
			},
		);

		it('is primary by default', () => {
			const wrapper = mountCallout();

			expect(wrapper.findComponent(DsTextGroup).props('mainTextColor')).toBe(
				CALLOUT_MAIN_TEXT_COLORS.PRIMARY,
			);
		});
	});

	describe('eyebrow text', () => {
		it('does not render the eyebrow by default', () => {
			const wrapper = mountCallout();

			expect(wrapper.findComponent(DsTextGroup).props('eyebrowText')).toBe(null);
			expect(wrapper.find('.ds-textGroup__eyebrow').exists()).toBe(false);
		});

		it('renders the eyebrow when eyebrowText is provided', () => {
			const wrapper = mountCallout({ props: { eyebrowText: 'Eyebrow text' } });

			expect(wrapper.find('.ds-textGroup__eyebrow').text()).toBe('Eyebrow text');
		});

		it('never uppercases the eyebrow', () => {
			const wrapper = mountCallout({ props: { eyebrowText: 'Eyebrow text' } });

			expect(wrapper.findComponent(DsTextGroup).props('isEyebrowTextUppercase')).toBe(false);
			expect(wrapper.find('.ds-textGroup__eyebrow').classes()).not.toContain('-ds-uppercase');
		});
	});

	describe('actions', () => {
		it('renders a default primary button with the button label and icon', () => {
			const wrapper = mountCallout({
				props: {
					buttonLabel: 'Confirm',
					buttonIcon: ICONS.FA_COMMENT_DOTS,
				},
			});

			const button = wrapper.findComponent(DsButton);
			expect(button.exists()).toBe(true);
			expect(button.text()).toBe('Confirm');
			expect(button.props('iconLeft')).toStrictEqual(ICONS.FA_COMMENT_DOTS);
			expect(button.props('color')).toBe(BUTTON_COLORS.PRIMARY);
			expect(button.props('type')).toBe(BUTTON_TYPES.FILLED);
			expect(button.props('size')).toBe(BUTTON_SIZES.SMALL);
			expect(button.props('radius')).toBe(BUTTON_RADIUSES.ROUNDED);
		});

		it('turns the default button into an outlined danger button when color is danger', () => {
			const wrapper = mountCallout({
				props: {
					buttonLabel: 'Delete',
					color: CALLOUT_COLORS.DANGER,
				},
			});

			const button = wrapper.findComponent(DsButton);
			expect(button.props('color')).toBe(BUTTON_COLORS.DANGER);
			expect(button.props('type')).toBe(BUTTON_TYPES.OUTLINED);
			expect(button.props('size')).toBe(BUTTON_SIZES.SMALL);
			expect(button.props('radius')).toBe(BUTTON_RADIUSES.ROUNDED);
		});

		it.each(Object.values(CALLOUT_COLORS).filter((color) => color !== CALLOUT_COLORS.DANGER))(
			'keeps the filled primary button for color "%s"',
			(color) => {
				const wrapper = mountCallout({ props: { buttonLabel: 'Confirm', color } });

				const button = wrapper.findComponent(DsButton);
				expect(button.props('color')).toBe(BUTTON_COLORS.PRIMARY);
				expect(button.props('type')).toBe(BUTTON_TYPES.FILLED);
			},
		);

		it('emits button-clicked when the default button is clicked', async () => {
			const wrapper = mountCallout({
				props: {
					buttonLabel: 'Confirm',
				},
			});

			await wrapper.findComponent(DsButton).trigger('click');

			expect(wrapper.emitted('button-clicked')).toHaveLength(1);
		});

		it('renders the actions slot instead of the default button', () => {
			const wrapper = mountCallout({
				props: {
					buttonLabel: 'Default button',
				},
				slots: {
					actions: () => h('span', { class: 'custom-action' }, 'Custom action'),
				},
			});

			expect(wrapper.find('.custom-action').exists()).toBe(true);
			expect(wrapper.findComponent(DsButton).exists()).toBe(false);
		});

		it('does not render the actions block when there is no button label and no slot', () => {
			const wrapper = mountCallout();

			expect(wrapper.find('.ds-callout__actions').exists()).toBe(false);
			expect(wrapper.findComponent(DsButton).exists()).toBe(false);
		});

		it('renders the actions block when only the slot is provided', () => {
			const wrapper = mountCallout({
				slots: {
					actions: () => h('span', { class: 'custom-action' }, 'Custom action'),
				},
			});

			expect(wrapper.find('.ds-callout__actions').exists()).toBe(true);
		});

		it('adds the stacked actions modifier on the root when isActionVertical is set', () => {
			const wrapper = mountCallout({
				props: {
					isActionVertical: true,
				},
			});

			expect(wrapper.find('.ds-callout').classes()).toContain('-ds-actions-vertical');
		});

		it('does not add the stacked actions modifier by default', () => {
			const wrapper = mountCallout();

			expect(wrapper.find('.ds-callout').classes()).not.toContain('-ds-actions-vertical');
		});
	});
});
