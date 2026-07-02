import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import ActionContent from './ActionContent.vue';
import DsFeatureIcon from '../Icons/FeatureIcon';
import DsButton from '../Buttons/Button';
import { ICONS } from '../Icons/Icon';

describe('ActionContent', () => {
	it('renders', () => {
		const wrapper = mount(ActionContent);

		expect(wrapper.exists()).toBe(true);
	});

	it('renders the feature icon when icon is provided', () => {
		const wrapper = mount(ActionContent, {
			props: {
				icon: ICONS.FA_COMMENT_DOTS,
			},
		});

		expect(wrapper.findComponent(DsFeatureIcon).exists()).toBe(true);
	});

	it('does not render the feature icon when icon is not provided', () => {
		const wrapper = mount(ActionContent);

		expect(wrapper.findComponent(DsFeatureIcon).exists()).toBe(false);
	});

	it('passes main and supporting text to the text group', () => {
		const wrapper = mount(ActionContent, {
			props: {
				mainText: 'Main text',
				supportingText: 'Supporting text',
			},
		});

		expect(wrapper.find('.ds-actionContent__text').text()).toContain('Main text');
		expect(wrapper.find('.ds-actionContent__text').text()).toContain('Supporting text');
	});

	it('renders a default primary button with the button label and icon', () => {
		const wrapper = mount(ActionContent, {
			props: {
				buttonLabel: 'Confirm',
				buttonIcon: ICONS.FA_COMMENT_DOTS,
			},
		});

		const button = wrapper.findComponent(DsButton);
		expect(button.exists()).toBe(true);
		expect(button.text()).toBe('Confirm');
		expect(button.props('iconLeft')).toStrictEqual(ICONS.FA_COMMENT_DOTS);
	});

	it('emits button-clicked when the default button is clicked', async () => {
		const wrapper = mount(ActionContent, {
			props: {
				buttonLabel: 'Confirm',
			},
		});

		await wrapper.findComponent(DsButton).trigger('click');

		expect(wrapper.emitted('button-clicked')).toHaveLength(1);
	});

	it('renders the actions slot instead of the default button', () => {
		const wrapper = mount(ActionContent, {
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

	it('adds the vertical modifier when isActionVertical is set', () => {
		const wrapper = mount(ActionContent, {
			props: {
				isActionVertical: true,
			},
		});

		expect(wrapper.find('.ds-actionContent__actions').classes()).toContain('-ds-vertical');
	});

	it('does not add the vertical modifier by default', () => {
		const wrapper = mount(ActionContent);

		expect(wrapper.find('.ds-actionContent__actions').classes()).not.toContain('-ds-vertical');
	});
});
