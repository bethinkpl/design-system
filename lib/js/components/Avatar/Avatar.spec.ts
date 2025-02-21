import { mount } from '@vue/test-utils';
import Avatar from './Avatar.vue';
import { AVATAR_SIZES } from './Avatar.consts';

describe('Avatar', () => {
	it('should render with avatar image', () => {
		const avatarUrl = 'https://wiecejnizlek.pl/avatar.jpg';
		const wrapper = mount(Avatar, {
			props: {
				size: AVATAR_SIZES.MEDIUM,
				username: 'Dariusz Chrapek',
				avatarUrl,
			},
		});
		expect(wrapper.find('img').exists()).toBe(true);
		expect(wrapper.find('img').attributes('src')).toBe(avatarUrl);
		expect(wrapper.find('img').attributes('alt')).toBe('Dariusz Chrapek');
		expect(wrapper.find('.ds-avatar').classes()).toContain('-ds-medium');
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
	])('should render `$initials` initials for `$username`', ({ username, initials }) => {
		const wrapper = mount(Avatar, {
			props: {
				size: AVATAR_SIZES.MEDIUM,
				username,
			},
		});
		expect(wrapper.find('.ds-avatar').classes()).toContain('-ds-medium');
		expect(wrapper.find('.ds-avatar').text()).toBe(initials);
	});

	it.each(Object.values(AVATAR_SIZES))('should render in size: %s', (size) => {
		const wrapper = mount(Avatar, {
			props: {
				size,
				username: 'Dariusz Chrapek',
			},
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
		const wrapper = mount(Avatar, {
			props: {
				size: AVATAR_SIZES.MEDIUM,
				username,
			},
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
});
