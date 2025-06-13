import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Banner from './Banner.vue';
import { BANNER_COLORS, BANNER_SIZES } from './Banner.consts';
import { ICONS } from '../Icons/Icon';
import { h } from 'vue';

describe('Banner', () => {
	it('renders', () => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
			},
			slots: {
				defaultText: () => h('span', 'Default content goes here'),
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('.ds-banner__defaultText').text()).toBe('Default content goes here');
	});

	it('renders in medium size with icon', () => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
				size: BANNER_SIZES.MEDIUM,
				icon: ICONS.FA_CIRCLE_CHECK,
			},
		});

		expect(wrapper.find('.ds-banner__inner').classes()).not.toContain('-ds-small');
		expect(wrapper.find('.ds-banner__iconWrapper').exists()).toBe(true);
		expect(wrapper.find('.ds-banner__iconWrapperSmall').exists()).toBe(false);
	});

	it('renders in small size with icon', () => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
				size: BANNER_SIZES.SMALL,
				icon: ICONS.FA_CIRCLE_CHECK,
			},
		});

		expect(wrapper.find('.ds-banner__inner').classes()).toContain('-ds-small');
		expect(wrapper.find('.ds-banner__iconWrapperSmall').exists()).toBe(true);
		expect(wrapper.find('.ds-banner__iconWrapper').exists()).toBe(false);
	});

	it.each([
		{
			color: BANNER_COLORS.DEFAULT,
			expectedClass: '-ds-default',
		},
		{
			color: BANNER_COLORS.NEUTRAL,
			expectedClass: '-ds-neutral',
		},
		{
			color: BANNER_COLORS.INFO,
			expectedClass: '-ds-info',
		},
		{
			color: BANNER_COLORS.SUCCESS,
			expectedClass: '-ds-success',
		},
		{
			color: BANNER_COLORS.WARNING,
			expectedClass: '-ds-warning',
		},
		{
			color: BANNER_COLORS.FAIL,
			expectedClass: '-ds-fail',
		},
		{
			color: BANNER_COLORS.DANGER,
			expectedClass: '-ds-danger',
		},
	])('renders with color $color', ({ color, expectedClass }) => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
				color,
			},
		});

		expect(wrapper.find('.ds-banner__inner').classes()).toContain(expectedClass);
	});

	it('handles closable', async () => {
		const onClose = vi.fn();
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
				closable: true,
				onClose,
			},
		});

		await wrapper.find('.ds-banner__close > *').trigger('click');
		expect(onClose).toHaveBeenCalled();
	});

	it('handles expanded state', async () => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
			},
			slots: {
				expandedText: () => h('span', 'Expanded content goes here'),
			},
		});

		await wrapper.find('.ds-banner__expander > *').trigger('click');
		expect(wrapper.find('.ds-banner__expandedText').text()).toBe('Expanded content goes here');

		await wrapper.find('.ds-banner__expander > *').trigger('click');
		expect(wrapper.find('.ds-banner__expandedText').exists()).toBe(false);
	});

	it('is expanded by default when expanded prop is true', () => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
				isExpanded: true,
			},
			slots: {
				expandedText: () => h('span', 'Expanded content goes here'),
			},
		});

		expect(wrapper.find('.ds-banner__expandedText').text()).toBe('Expanded content goes here');
	});

	it('renders right slot content', () => {
		const wrapper = mount(Banner, {
			props: {
				title: 'Test Banner',
			},
			slots: {
				rightSlot: () => h('span', 'Right slot content'),
			},
		});

		expect(wrapper.find('.ds-banner__rightSlot').text()).toBe('Right slot content');
	});
});
