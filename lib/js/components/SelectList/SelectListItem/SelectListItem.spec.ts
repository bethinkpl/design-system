import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import { ComponentProps } from 'vue-component-type-helpers';
import SelectListItem from './SelectListItem.vue';
import { SELECT_LIST_ITEM_SIZES, SELECT_LIST_ITEM_STATES } from './SelectListItem.consts';
import Icon, { ICONS } from '../../Icons/Icon';

const setup = (props: ComponentProps<typeof SelectListItem>, slots = {}) =>
	mount(SelectListItem, { props, slots });

describe('SelectListItem', () => {
	it('should render the label', () => {
		const wrapper = setup({ label: 'Basic listItem' });

		expect(wrapper.find('.ds-selectListItem').exists()).toBe(true);
		expect(wrapper.find('.ds-selectListItem__text').text()).toBe('Basic listItem');
		expect(wrapper.find('.ds-selectListItem').attributes('title')).toBe('Basic listItem');
	});

	it('should render the eyebrow text when provided', () => {
		const wrapper = setup({ label: 'Label', eyebrowText: 'Eyebrow' });

		expect(wrapper.find('.ds-selectListItem__eyebrowText').text()).toBe('Eyebrow');
	});

	it.each(Object.values(SELECT_LIST_ITEM_SIZES))('should render in size: %s', (size) => {
		const wrapper = setup({ label: 'Label', size });

		expect(wrapper.find('.ds-selectListItem').classes()).toContain(`-ds-${size}`);
	});

	it.each([
		{ state: SELECT_LIST_ITEM_STATES.DISABLED, expectedClass: '-ds-disabled' },
		{ state: SELECT_LIST_ITEM_STATES.LOADING, expectedClass: '-ds-loading' },
	])('should apply $expectedClass for state $state', ({ state, expectedClass }) => {
		const wrapper = setup({ label: 'Label', state });

		expect(wrapper.find('.ds-selectListItem').classes()).toContain(expectedClass);
	});

	it('should render the check icon when selected', () => {
		const wrapper = setup({ label: 'Label', isSelected: true });

		expect(
			wrapper.findComponent<typeof Icon>('.ds-selectListItem__iconRight').props().icon,
		).toEqual(ICONS.FA_CHECK_SOLID);
	});

	it('should not render the check icon when not selected', () => {
		const wrapper = setup({ label: 'Label' });

		expect(wrapper.find('.ds-selectListItem__iconRight').exists()).toBe(false);
	});

	describe('text slot', () => {
		it('should fall back to the label when the slot is not provided', () => {
			const wrapper = setup({ label: 'Fallback label' });

			expect(wrapper.find('.ds-selectListItem__text').text()).toBe('Fallback label');
		});

		it('should override the rendered label when the slot is provided', () => {
			const wrapper = setup(
				{ label: 'Prop label' },
				{ text: () => h('span', { id: 'custom-text' }, 'Slot label') },
			);

			const text = wrapper.find('.ds-selectListItem__text');

			expect(text.find('#custom-text').exists()).toBe(true);
			expect(text.text()).toBe('Slot label');
			// `label` is still used for the title attribute and typeahead fallback.
			expect(wrapper.find('.ds-selectListItem').attributes('title')).toBe('Prop label');
		});
	});
});
