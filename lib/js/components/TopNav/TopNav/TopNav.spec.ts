import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

import TopNav from './TopNav.vue';

describe('TopNav', () => {
	it('should create', () => {
		const component = mount(TopNav);

		expect(component.exists()).toBe(true);
		expect(component.find('.ds-topNav').exists()).toBe(true);
	});

	it('renders default slot content', () => {
		const component = mount(TopNav, {
			slots: {
				default: () => h('span', { class: 'child' }, 'Default content'),
			},
		});

		expect(component.find('.ds-topNav__default .child').text()).toBe('Default content');
	});

	it('renders the leading slot when provided', () => {
		const component = mount(TopNav, {
			slots: {
				leading: () => h('span', { class: 'child' }, 'Leading content'),
			},
		});

		expect(component.find('.ds-topNav__leading .child').text()).toBe('Leading content');
	});

	it('does not render the leading wrapper when the slot is not provided', () => {
		const component = mount(TopNav);

		expect(component.find('.ds-topNav__leading').exists()).toBe(false);
	});

	it('renders the trailing slot when provided', () => {
		const component = mount(TopNav, {
			slots: {
				trailing: () => h('span', { class: 'child' }, 'Trailing content'),
			},
		});

		expect(component.find('.ds-topNav__trailing .child').text()).toBe('Trailing content');
	});

	it('does not render the trailing wrapper when the slot is not provided', () => {
		const component = mount(TopNav);

		expect(component.find('.ds-topNav__trailing').exists()).toBe(false);
	});
});
