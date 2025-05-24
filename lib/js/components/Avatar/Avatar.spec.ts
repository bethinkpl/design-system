import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Avatar from './Avatar.vue';
import { AVATAR_ACCESS_STATUSES, AVATAR_ACTIVITY_STATUSES, AVATAR_SIZES } from './Avatar.consts';
import { ICONS } from '../Icons/Icon';
import { ComponentProps } from 'vue-component-type-helpers';

const avatarUrl = 'https://wiecejnizlek.pl/avatar.jpg';

const setup = (props: ComponentProps<typeof Avatar>) =>
	mount(Avatar, {
		props,
		global: {
			directives: {
				pvTooltip: () => {},
			},
		},
	});

describe('Avatar', () => {
	it('should render avatar without badges', () => {
		const wrapper = setup({
			size: AVATAR_SIZES.MEDIUM,
			username: 'Dariusz Chrapek',
			avatarUrl,
		});
		expect(wrapper.find('img').exists()).toBe(true);
		expect(wrapper.find('img').attributes('src')).toBe(avatarUrl);
		expect(wrapper.find('img').attributes('alt')).toBe('Dariusz Chrapek');
		expect(wrapper.find('.ds-avatar').classes()).toContain('-ds-medium');
		expect(wrapper.find('.ds-avatar__activityStatus').exists()).toBe(false);
		expect(wrapper.find('.ds-avatar__accessStatus').exists()).toBe(false);
	});

	it.each([
		{
			username: 'Dariusz Chrapek',
			initials: 'DC',
		},
		{
			username: 'Dariusz',
			initials: 'DA',
		},
		{
			username: 'x',
			initials: 'X',
		},
		{
			username: 'dariusz chrapek',
			initials: 'DC',
		},
		{
			username: 'kamil ślimak',
			initials: 'KŚ',
		},
		{
			username: 'łucja ósma',
			initials: 'ŁÓ',
		},
		{
			username: 'Podwójna  Spacja',
			initials: 'PS',
		},
	])('should render `$initials` initials for `$username`', ({ username, initials }) => {
		const wrapper = setup({
			size: AVATAR_SIZES.MEDIUM,
			username,
		});
		expect(wrapper.find('.ds-avatar').classes()).toContain('-ds-medium');
		expect(wrapper.find('.ds-avatar').text()).toBe(initials);
	});

	it.each(Object.values(AVATAR_SIZES))('should render in size: %s', (size) => {
		const wrapper = setup({
			size,
			username: 'Dariusz Chrapek',
		});
		expect(wrapper.find('.ds-avatar').classes()).toContain(`-ds-${size}`);
	});

	it.each([
		{
			username: 'Arkadiusz Kowalski',
			color: '#1abc9c',
		},
		{
			username: 'Bartosz Nowak',
			color: '#2ecc71',
		},
		{
			username: 'Cezary Kowalczyk',
			color: '#3498db',
		},
		{
			username: 'Dariusz Chrapek',
			color: '#9b59b6',
		},
		{
			username: 'Edward Nowak',
			color: '#34495e',
		},
		{
			username: 'Feliks Kowalski',
			color: '#16a085',
		},
		{
			username: 'Grzegorz Nowak',
			color: '#27ae60',
		},
		{
			username: 'Henryk Kowalczyk',
			color: '#2980b9',
		},
		{
			username: 'Ireneusz Nowak',
			color: '#8e44ad',
		},
		{
			username: 'Jacek Kowalski',
			color: '#2c3e50',
		},
	])('should render `$username` with background color `$color`', ({ username, color }) => {
		const wrapper = setup({
			size: AVATAR_SIZES.MEDIUM,
			username,
		});

		const hexToRgb = (hex: string) => {
			const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

			if (!result) {
				throw new Error('Invalid hex color');
			}

			return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
				result[3],
				16,
			)})`;
		};

		expect(wrapper.find('.ds-avatar__content').attributes('style')).toContain(
			`background-color: ${hexToRgb(color)};`,
		);
	});

	it.each([
		{
			activityStatus: AVATAR_ACTIVITY_STATUSES.ACTIVE,
			expectedColorClass: '-ds-color-success',
		},
		{
			activityStatus: AVATAR_ACTIVITY_STATUSES.INACTIVE,
			expectedColorClass: '-ds-color-neutral',
		},
	])(
		'should render activity status: $activityStatus',
		({ activityStatus, expectedColorClass }) => {
			const wrapper = setup({
				size: AVATAR_SIZES.MEDIUM,
				username: 'Dariusz Chrapek',
				avatarUrl,
				activityStatus,
			});

			const activityStatusElement = wrapper.find('.ds-avatar__activityStatus');
			expect(activityStatusElement.exists()).toBe(true);
			expect(activityStatusElement.find('.ds-badge').classes()).toContain(expectedColorClass);
		},
	);

	it.each([
		{
			accessStatus: AVATAR_ACCESS_STATUSES.ACTIVE,
			expectedIcon: ICONS.FA_UNLOCK_KEYHOLE,
		},
		{
			accessStatus: AVATAR_ACCESS_STATUSES.INACTIVE,
			expectedIcon: ICONS.FA_LOCK_KEYHOLE,
		},
		{
			accessStatus: AVATAR_ACCESS_STATUSES.AWAITING,
			expectedIcon: ICONS.FA_HOURGLASS_START,
		},
		{
			accessStatus: AVATAR_ACCESS_STATUSES.BLOCKED,
			expectedIcon: ICONS.FA_LOCK_KEYHOLE,
		},
	])('should render access status: $accessStatus', ({ accessStatus, expectedIcon }) => {
		const wrapper = setup({
			size: AVATAR_SIZES.MEDIUM,
			username: 'Dariusz Chrapek',
			avatarUrl,
			accessStatus,
		});

		const accessStatusElement = wrapper.find('.ds-avatar__accessStatus');
		expect(accessStatusElement.exists()).toBe(true);
		expect(accessStatusElement.find('svg').attributes('data-icon')).toBe(expectedIcon.iconName);
	});

	it('should render team member image', () => {
		const teamMemberImageUrl = 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg';
		const wrapper = setup({
			size: AVATAR_SIZES.MEDIUM,
			username: 'Dariusz Chrapek',
			avatarUrl,
			accessStatus: AVATAR_ACCESS_STATUSES.TEAM_MEMBER,
			teamMemberImageUrl,
		});

		const accessStatusElement = wrapper.find('.ds-avatar__accessStatus');
		expect(accessStatusElement.exists()).toBe(true);
		expect(accessStatusElement.find('img').attributes('src')).toBe(teamMemberImageUrl);
	});

	it('should pass activityStatusTooltip to the tooltip component', () => {
		const tooltipText = 'Active now';
		const wrapper = setup({
			size: AVATAR_SIZES.MEDIUM,
			username: 'Dariusz Chrapek',
			activityStatus: AVATAR_ACTIVITY_STATUSES.ACTIVE,
			activityStatusTooltip: tooltipText,
		});

		const tooltip = wrapper.findComponent({ name: 'Tooltip' });
		expect(tooltip.exists()).toBe(true);
		expect(tooltip.props('text')).toBe(tooltipText);
	});
});
