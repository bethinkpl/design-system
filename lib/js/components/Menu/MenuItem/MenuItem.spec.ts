import { describe, expect, it, test } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { h } from 'vue';
import MenuItem from './MenuItem.vue';
import {
	MENU_ITEM_ACCESSORY_STATES,
	MENU_ITEM_BACKGROUND_COLORS,
	MENU_ITEM_LEVEL_INJECTION_KEY,
	MENU_ITEM_SIZES,
	MENU_ITEM_STATES,
} from './MenuItem.consts';
import { ICONS } from '../../Icons/Icon';

describe('MenuItem', () => {
	const createComponent = (props = {} as any, options = {}) => {
		return shallowMount(MenuItem, {
			props: {
				label: 'Test MenuItem',
				...props,
			},
			...options,
		});
	};

	describe('Basic rendering', () => {
		it('renders as span by default', () => {
			const wrapper = createComponent();
			expect(wrapper.find('.ds-menuItem').element.tagName).toBe('SPAN');
		});

		it('renders label correctly', () => {
			const wrapper = createComponent({ label: 'Test Label' });
			expect(wrapper.find('.ds-menuItem__label').text()).toBe('Test Label');
		});

		it('renders additional text when provided', () => {
			const wrapper = createComponent({
				additionalText: 'Additional Info',
			});
			expect(wrapper.find('.ds-menuItem__additionalText').text()).toBe('Additional Info');
		});

		it('renders index when provided', () => {
			const wrapper = createComponent({
				index: 5,
			});
			expect(wrapper.find('.ds-menuItem__index').text()).toBe('5.');
		});
	});

	describe('Component type rendering', () => {
		it('renders as anchor when href is provided', () => {
			const wrapper = createComponent({ href: 'https://example.com' });
			const menuItem = wrapper.find('.ds-menuItem');

			expect(menuItem.element.tagName).toBe('A');
			expect(menuItem.attributes('href')).toBe('https://example.com');
		});

		it('renders as router-link when to prop is provided', () => {
			const wrapper = createComponent({ to: '/test-route' });

			expect(wrapper.find('.ds-menuItem').element.tagName).toBe('ROUTER-LINK');
		});

		it('prioritizes href over to prop', () => {
			const wrapper = createComponent({
				href: 'https://example.com',
				to: '/test-route',
			});
			const menuItem = wrapper.find('.ds-menuItem');

			expect(menuItem.element.tagName).toBe('A');
			expect(menuItem.attributes('href')).toBe('https://example.com');
		});
	});

	describe('Size variations', () => {
		test.each([
			[MENU_ITEM_SIZES.SMALL, false],
			[MENU_ITEM_SIZES.MEDIUM, true],
		])('applies correct size class for %s', (size, shouldHaveMediumClass) => {
			const wrapper = createComponent({ size });
			const menuItem = wrapper.find('.ds-menuItem');

			if (shouldHaveMediumClass) {
				expect(menuItem.classes()).toContain('-ds-medium');
			} else {
				expect(menuItem.classes()).not.toContain('-ds-medium');
			}
		});
	});

	describe('State variations', () => {
		it('applies disabled class when state is disabled', () => {
			const wrapper = createComponent({ state: MENU_ITEM_STATES.DISABLED });

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-disabled');
		});

		it('does not apply disabled class for default state', () => {
			const wrapper = createComponent({ state: MENU_ITEM_STATES.DEFAULT });

			expect(wrapper.find('.ds-menuItem').classes()).not.toContain('-ds-disabled');
		});
	});

	describe('Selection state', () => {
		it('applies selected class when isSelected is true', () => {
			const wrapper = createComponent({ isSelected: true });

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-selected');
		});

		it('applies hoverable class when not selected', () => {
			const wrapper = createComponent({ isSelected: false });

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-hoverable');
		});

		it('applies hoverable class when selected but interactive', () => {
			const wrapper = createComponent({
				isSelected: true,
				isSelectedInteractive: true,
			});

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-hoverable');
		});

		it('does not apply hoverable class when selected and not interactive', () => {
			const wrapper = createComponent({
				isSelected: true,
				isSelectedInteractive: false,
			});

			expect(wrapper.find('.ds-menuItem').classes()).not.toContain('-ds-hoverable');
		});

		it('applies active class to index when selected', () => {
			const wrapper = createComponent({
				index: 1,
				isSelected: true,
			});

			expect(wrapper.find('.ds-menuItem__index').classes()).toContain('-ds-active');
		});
	});

	describe('Background colors', () => {
		test.each([
			[MENU_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK, false],
			[MENU_ITEM_BACKGROUND_COLORS.NEUTRAL, true],
		])('applies correct background class for %s', (backgroundColor, shouldHaveNeutralClass) => {
			const wrapper = createComponent({ backgroundColor });
			const menuItem = wrapper.find('.ds-menuItem');

			if (shouldHaveNeutralClass) {
				expect(menuItem.classes()).toContain('-ds-backgroundNeutral');
			} else {
				expect(menuItem.classes()).not.toContain('-ds-backgroundNeutral');
			}
		});
	});

	describe('Icons', () => {
		it('renders right icon when provided', () => {
			const wrapper = createComponent({ iconRight: ICONS.FA_CHEVRON_RIGHT });

			expect(wrapper.find('.ds-menuItem__rightContent').exists()).toBe(true);
		});

		it('renders done icon when isDone is true', () => {
			const wrapper = createComponent({ isDone: true });

			expect(wrapper.find('.ds-menuItem__rightContent').exists()).toBe(true);
		});

		it('renders right content when iconLeft is provided', () => {
			const wrapper = createComponent({ iconLeft: ICONS.FA_CHEVRON_RIGHT });

			expect(wrapper.find('.ds-menuItem__icon').exists()).toBe(true);
		});
	});

	describe('Accessory state', () => {
		it('does not render accessory when accessoryState is null', () => {
			const wrapper = createComponent({ accessoryState: null });

			expect(wrapper.find('.ds-menuItem__accessory').exists()).toBe(false);
		});

		it('renders dot accessory when accessoryState is dot', () => {
			const wrapper = createComponent({
				accessoryState: MENU_ITEM_ACCESSORY_STATES.DOT,
			});

			expect(wrapper.find('.ds-menuItem__accessory').exists()).toBe(true);
		});
	});

	describe('Label variations', () => {
		it('applies uppercase class when isLabelUppercase is true', () => {
			const wrapper = createComponent({
				label: 'Test Label',
				isLabelUppercase: true,
			});

			expect(wrapper.find('.ds-menuItem__label').classes()).toContain('-ds-uppercase');
		});

		it('does not apply uppercase class when isLabelUppercase is false', () => {
			const wrapper = createComponent({
				label: 'Test Label',
				isLabelUppercase: false,
			});

			expect(wrapper.find('.ds-menuItem__label').classes()).not.toContain('-ds-uppercase');
		});
	});

	describe('Slots', () => {
		it('renders labelSlot when provided and prioritizes labelSlot over label prop', () => {
			const wrapper = mount(MenuItem, {
				props: { label: 'Default Label' },
				slots: {
					labelSlot: '<strong>Custom Label</strong>',
				},
			});

			expect(wrapper.find('.ds-menuItem__label').html()).toContain(
				'<strong>Custom Label</strong>',
			);
		});

		it('renders default slot content', () => {
			const wrapper = mount(MenuItem, {
				props: { label: 'Test Label' },
				slots: {
					default: '<span class="custom-content">Custom Content</span>',
				},
			});

			const rightContent = wrapper.find('.ds-menuItem__rightContent');
			expect(rightContent.exists()).toBe(true);
			expect(rightContent.html()).toContain('Custom Content');
		});

		it('renders children slot', () => {
			const wrapper = mount(MenuItem, {
				props: { label: 'Test Label' },
				slots: {
					children: '<ul class="nested-menu">Nested Menu</ul>',
				},
			});

			expect(wrapper.html()).toContain('<ul class="nested-menu">Nested Menu</ul>');
		});

		it('applies centered content class when default slot is present', () => {
			const wrapper = mount(MenuItem, {
				props: { label: 'Test Label' },
				slots: {
					default: 'Content',
				},
			});

			expect(wrapper.find('.ds-menuItem__rightContent').classes()).toContain(
				'-ds-centeredContent',
			);
		});
	});

	describe('Level handling', () => {
		it('applies default level 1 when no level provided', () => {
			const wrapper = createComponent();

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-level1');
		});

		it('applies specified level class', () => {
			const wrapper = createComponent({ level: 3 });

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-level3');
		});

		it('caps level at 6', () => {
			const wrapper = createComponent({ level: 10 });
			const menuItem = wrapper.find('.ds-menuItem');

			expect(menuItem.classes()).toContain('-ds-level6');
			expect(menuItem.classes()).not.toContain('-ds-level10');
		});

		it('uses injected level when no level prop provided', () => {
			const wrapper = shallowMount(MenuItem, {
				props: { label: 'Test Label' },
				global: {
					provide: {
						[MENU_ITEM_LEVEL_INJECTION_KEY]: 4,
					},
				},
			});

			expect(wrapper.find('.ds-menuItem').classes()).toContain('-ds-level4');
		});

		it('prioritizes level prop over injected level', () => {
			const wrapper = shallowMount(MenuItem, {
				props: {
					label: 'Test Label',
					level: 2,
				},
				global: {
					provide: {
						[MENU_ITEM_LEVEL_INJECTION_KEY]: 4,
					},
				},
			});
			const menuItem = wrapper.find('.ds-menuItem');

			expect(menuItem.classes()).toContain('-ds-level2');
			expect(menuItem.classes()).not.toContain('-ds-level4');
		});

		it('provides incremented level to children', () => {
			let providedLevel: number | null = null;

			const ChildComponent = {
				setup() {
					const { inject } = require('vue');
					providedLevel = inject(MENU_ITEM_LEVEL_INJECTION_KEY, null);
					return () => h('div', 'child');
				},
			};

			mount(MenuItem, {
				props: {
					label: 'Test Label',
					level: 2,
				},
				slots: {
					children: () => h(ChildComponent),
				},
			});

			expect(providedLevel).toBe(3);
		});
	});

	describe('Conditional rendering', () => {
		it('does not render when no content is provided', () => {
			const wrapper = shallowMount(MenuItem, {
				props: {
					label: '',
					additionalText: '',
					index: null,
					iconLeft: null,
					accessoryState: null,
				},
			});

			expect(wrapper.find('.ds-menuItem').exists()).toBe(false);
		});

		it('renders when label is provided', () => {
			const wrapper = createComponent({ label: 'Test' });
			expect(wrapper.find('.ds-menuItem').exists()).toBe(true);
		});

		it('renders when additionalText is provided', () => {
			const wrapper = createComponent({
				label: '',
				additionalText: 'Additional',
			});
			expect(wrapper.find('.ds-menuItem').exists()).toBe(true);
		});

		it('renders when index is provided', () => {
			const wrapper = createComponent({
				label: '',
				index: 1,
			});
			expect(wrapper.find('.ds-menuItem').exists()).toBe(true);
		});

		it('renders when iconLeft is provided with label', () => {
			const wrapper = createComponent({
				label: 'Test',
				iconLeft: ICONS.FA_CHEVRON_RIGHT,
			});
			// Component should render when iconLeft is provided with label
			expect(wrapper.find('.ds-menuItem').exists()).toBe(true);
		});

		it('renders when accessoryState is provided', () => {
			const wrapper = createComponent({
				label: '',
				accessoryState: MENU_ITEM_ACCESSORY_STATES.DOT,
			});
			expect(wrapper.find('.ds-menuItem').exists()).toBe(true);
		});

		it('renders right content section when needed', () => {
			// Should not render right content by default
			const wrapper1 = createComponent();
			expect(wrapper1.find('.ds-menuItem__rightContent').exists()).toBe(false);

			// Should render when isDone is true
			const wrapper2 = createComponent({ isDone: true });
			expect(wrapper2.find('.ds-menuItem__rightContent').exists()).toBe(true);

			// Should render when iconRight is provided
			const wrapper3 = createComponent({ iconRight: ICONS.FA_CHEVRON_RIGHT });
			expect(wrapper3.find('.ds-menuItem__rightContent').exists()).toBe(true);

			// Should render when default slot is provided
			const wrapper4 = mount(MenuItem, {
				props: { label: 'Test' },
				slots: { default: 'Content' },
			});
			expect(wrapper4.find('.ds-menuItem__rightContent').exists()).toBe(true);
		});
	});
});
