import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Menu from './Menu.vue';
import { MENU_LAYOUT_INJECTION_KEY, MENU_LAYOUTS } from './Menu.consts';

describe('Menu', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(Menu);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.element.tagName).toBe('UL');
		expect(wrapper.classes()).toContain('ds-menu');
	});

	it('renders slot content', () => {
		const slotContent = 'Menu items go here';
		const wrapper = mount(Menu, {
			slots: {
				default: () => h('li', slotContent),
			},
		});

		expect(wrapper.text()).toContain(slotContent);
		expect(wrapper.find('li').exists()).toBe(true);
	});

	describe('layout prop', () => {
		it('applies default layout when no layout prop is provided', () => {
			const wrapper = mount(Menu);

			expect(wrapper.classes()).toContain('ds-menu');
			expect(wrapper.classes()).not.toContain('-ds-extensive');
		});

		it('applies default layout when layout prop is explicitly set to default', () => {
			const wrapper = mount(Menu, {
				props: {
					layout: MENU_LAYOUTS.DEFAULT,
				},
			});

			expect(wrapper.classes()).toContain('ds-menu');
			expect(wrapper.classes()).not.toContain('-ds-extensive');
		});

		it('applies extensive layout when layout prop is set to extensive', () => {
			const wrapper = mount(Menu, {
				props: {
					layout: MENU_LAYOUTS.EXTENSIVE,
				},
			});

			expect(wrapper.classes()).toContain('ds-menu');
			expect(wrapper.classes()).toContain('-ds-extensive');
		});
	});

	describe('layout injection', () => {
		it('uses injected layout when no layout prop is provided', () => {
			const wrapper = mount(Menu, {
				global: {
					provide: {
						[MENU_LAYOUT_INJECTION_KEY]: MENU_LAYOUTS.EXTENSIVE,
					},
				},
			});

			expect(wrapper.classes()).toContain('ds-menu');
			expect(wrapper.classes()).toContain('-ds-extensive');
		});

		it('prioritizes layout prop over injected layout', () => {
			const wrapper = mount(Menu, {
				props: {
					layout: MENU_LAYOUTS.DEFAULT,
				},
				global: {
					provide: {
						[MENU_LAYOUT_INJECTION_KEY]: MENU_LAYOUTS.EXTENSIVE,
					},
				},
			});

			expect(wrapper.classes()).toContain('ds-menu');
			expect(wrapper.classes()).not.toContain('-ds-extensive');
		});
	});

	describe('layout provision', () => {
		it('provides layout value to child components', () => {
			let providedLayout: string | null = null;

			const ChildComponent = {
				setup() {
					const { inject } = require('vue');
					providedLayout = inject(MENU_LAYOUT_INJECTION_KEY, null);
					return () => h('div', 'child');
				},
			};

			mount(Menu, {
				props: {
					layout: MENU_LAYOUTS.EXTENSIVE,
				},
				slots: {
					default: () => h(ChildComponent),
				},
			});

			expect(providedLayout).toBe(MENU_LAYOUTS.EXTENSIVE);
		});

		it('provides default layout when no layout prop is set', () => {
			let providedLayout: string | null = null;

			const ChildComponent = {
				setup() {
					const { inject } = require('vue');
					providedLayout = inject(MENU_LAYOUT_INJECTION_KEY, null);
					return () => h('div', 'child');
				},
			};

			mount(Menu, {
				slots: {
					default: () => h(ChildComponent),
				},
			});

			expect(providedLayout).toBe(MENU_LAYOUTS.DEFAULT);
		});
	});
});
