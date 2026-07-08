import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

import TopNavBranding from './TopNavBranding.vue';

describe('TopNavBranding', () => {
	const createComponent = (props = {}, slots = {}) =>
		mount(TopNavBranding, {
			props: {
				title: 'Title',
				...props,
			},
			slots,
		});

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
		expect(component.find('.ds-topNavBranding').exists()).toBe(true);
	});

	it('renders the title', () => {
		const component = createComponent({ title: 'Kurs do LEK' });

		expect(component.find('.ds-topNavBranding__title').text()).toBe('Kurs do LEK');
	});

	it('renders the logo slot when provided', () => {
		const component = createComponent(
			{},
			{ logo: () => h('span', { class: 'child' }, 'Logo') },
		);

		expect(component.find('.ds-topNavBranding__logo .child').text()).toBe('Logo');
	});

	it('does not render the logo wrapper when the slot is not provided', () => {
		const component = createComponent();

		expect(component.find('.ds-topNavBranding__logo').exists()).toBe(false);
	});

	it('renders the accessory slot when provided', () => {
		const component = createComponent(
			{},
			{ accessory: () => h('span', { class: 'child' }, 'Accessory') },
		);

		expect(component.find('.ds-topNavBranding__accessory .child').text()).toBe('Accessory');
	});

	it('does not render the accessory wrapper when the slot is not provided', () => {
		const component = createComponent();

		expect(component.find('.ds-topNavBranding__accessory').exists()).toBe(false);
	});
});
