import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import { mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import UserDropdown from './UserDropdown.vue';
import DsAvatar from '../../Avatar';
import DsDropdown from '../../Dropdown';
import DsTextGroup from '../../TextGroup';
import DsSelectListItemDivider from '../../SelectList/SelectListItemDivider/SelectListItemDivider.vue';
import { AVATAR_SIZES } from '../../Avatar/Avatar.consts';
import { DROPDOWN_PLACEMENTS, DROPDOWN_RADIUSES } from '../../Dropdown/Dropdown.consts';

const defaultProps = {
	username: 'Roman Kowalski',
	email: 'roman.kowalski@gmail.com',
};

const setup = (props: ComponentProps<typeof UserDropdown> = defaultProps, slots = {}) =>
	mount(UserDropdown, {
		props,
		slots,
		global: {
			directives: {
				pvTooltip: () => {},
			},
		},
	});

describe('UserDropdown', () => {
	it('should render the user info in the header', () => {
		const textGroup = setup().findComponent(DsTextGroup);

		expect(textGroup.props('mainText')).toBe('Roman Kowalski');
		expect(textGroup.props('supportingText')).toBe('roman.kowalski@gmail.com');
	});

	it('should not render an empty supporting row when the email is omitted', () => {
		const textGroup = setup({ username: 'Roman Kowalski' }).findComponent(DsTextGroup);

		expect(textGroup.props('supportingText')).toBeNull();
	});

	it('should render the trigger and header avatars at the sizes it owns', () => {
		const sizes = setup()
			.findAllComponents(DsAvatar)
			.map((avatar) => avatar.props('size'));

		// Order isn't asserted: vue-popperjs renders the panel before the reference wrapper.
		expect(sizes).toHaveLength(2);
		expect(sizes).toContain(AVATAR_SIZES.X_SMALL);
		expect(sizes).toContain(AVATAR_SIZES.XX_SMALL);
	});

	it('should forward avatar props to both avatars', () => {
		const avatarUrl = 'https://wiecejnizlek.pl/avatar.jpg';
		const avatars = setup({ ...defaultProps, avatarUrl }).findAllComponents(DsAvatar);

		expect(avatars).toHaveLength(2);
		avatars.forEach((avatar) => {
			expect(avatar.props('avatarUrl')).toBe(avatarUrl);
			expect(avatar.props('username')).toBe('Roman Kowalski');
		});
	});

	it('should configure the dropdown to match the design', () => {
		const dropdown = setup().findComponent(DsDropdown);

		expect(dropdown.props('placement')).toBe(DROPDOWN_PLACEMENTS.BOTTOM_END);
		expect(dropdown.props('radius')).toBe(DROPDOWN_RADIUSES.BOTTOM);
	});

	it('should render the default slot inside the panel', () => {
		const wrapper = setup(defaultProps, {
			default: () => h('div', { class: 'custom-item' }, 'Konto'),
		});

		expect(wrapper.find('.ds-userDropdown__panel .custom-item').exists()).toBe(true);
	});

	it('should render the header divider only when the default slot has content', () => {
		expect(setup().findComponent(DsSelectListItemDivider).exists()).toBe(false);

		const withItems = setup(defaultProps, { default: () => h('div', 'Konto') });

		expect(withItems.findComponent(DsSelectListItemDivider).exists()).toBe(true);
	});

	it.each(['show', 'hide'])('should re-emit %s from the dropdown', async (event) => {
		const wrapper = setup();

		wrapper.findComponent(DsDropdown).vm.$emit(event);
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted(event)).toHaveLength(1);
	});
});
