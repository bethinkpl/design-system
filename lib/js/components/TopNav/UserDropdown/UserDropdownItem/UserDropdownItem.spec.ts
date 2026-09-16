import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import { mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import UserDropdownItem from './UserDropdownItem.vue';
import { SELECT_LIST_ITEM_SIZES } from '../../../SelectList/SelectListItem/SelectListItem.consts';

const setup = (props: ComponentProps<typeof UserDropdownItem>, slots = {}) =>
	mount(UserDropdownItem, { props, slots });

describe('UserDropdownItem', () => {
	it('should pin the item size the design requires', () => {
		const wrapper = setup({ label: 'Konto' });

		expect(wrapper.find('.ds-selectListItem').classes()).toContain(
			`-ds-${SELECT_LIST_ITEM_SIZES.X_SMALL}`,
		);
	});

	it('should forward the label', () => {
		expect(setup({ label: 'Konto' }).find('.ds-selectListItem__text').text()).toBe('Konto');
	});

	it('should forward href so the row renders as a real link', () => {
		const wrapper = setup({ label: 'Konto', href: '/account' });

		expect(wrapper.element.tagName).toBe('A');
		expect(wrapper.attributes('href')).toBe('/account');
	});

	it('should emit click through both wrapper levels', async () => {
		const wrapper = setup({ label: 'Wyloguj się' });

		await wrapper.find('.ds-selectListItem').trigger('click');

		expect(wrapper.emitted('click')).toHaveLength(1);
	});

	describe('conditional slot forwarding', () => {
		it('should keep the right-hand placeholder when no metadata slot is passed', () => {
			const wrapper = setup({ label: 'Konto' });

			expect(wrapper.find('.ds-selectListItem__placeholderRight').exists()).toBe(true);
		});

		it('should replace the placeholder with the metadata slot content', () => {
			const wrapper = setup(
				{ label: 'Wiadomości' },
				{ metadata: () => h('span', { class: 'custom-chip' }, '12') },
			);

			expect(wrapper.find('.custom-chip').exists()).toBe(true);
			expect(wrapper.find('.ds-selectListItem__placeholderRight').exists()).toBe(false);
		});
	});
});
