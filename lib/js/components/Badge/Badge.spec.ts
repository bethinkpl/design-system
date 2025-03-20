import { mount } from '@vue/test-utils';
import Badge from './Badge.vue';
import { BADGE_COLORS, BADGE_ELEVATIONS, BADGE_SIZES } from './Badge.consts';
import { ICONS } from '../Icons/Icon';

describe('Badge', () => {
	it('should render with label', () => {
		const wrapper = mount(Badge, {
			props: {
				label: '1',
			},
		});

		expect(wrapper.find('.ds-badge__content').text()).toBe('1');
	});

	it('should render with icon', () => {
		const wrapper = mount(Badge, {
			props: {
				icon: ICONS.FA_BELL,
			},
		});

		expect(wrapper.find('.ds-icon .fa-bell').exists()).toBe(true);
	});

	it('does not render label if icon is present', () => {
		const wrapper = mount(Badge, {
			props: {
				label: '1',
				icon: ICONS.FA_BELL,
			},
		});

		expect(wrapper.find('.ds-badge__content').exists()).toBe(false);
	});

	it('should render image', () => {
		const imageUrl = 'https://via.placeholder.com/150';
		const wrapper = mount(Badge, {
			props: {
				imageUrl,
			},
		});

		expect(wrapper.find('.ds-badge__image').exists()).toBe(true);
		expect(wrapper.find('.ds-badge__image').attributes('src')).toBe(imageUrl);
	});

	it('should not render icon if image is present', () => {
		const wrapper = mount(Badge, {
			props: {
				icon: ICONS.FA_BELL,
				imageUrl: 'https://via.placeholder.com/150',
			},
		});

		expect(wrapper.find('.ds-badge__image').exists()).toBe(true);
		expect(wrapper.find('.ds-icon').exists()).toBe(false);
	});

	it('should not render label if image is present', () => {
		const wrapper = mount(Badge, {
			props: {
				label: '1',
				imageUrl: 'https://via.placeholder.com/150',
			},
		});

		expect(wrapper.find('.ds-badge__image').exists()).toBe(true);
		expect(wrapper.find('.ds-badge__content').exists()).toBe(false);
	});

	it.each([
		{
			size: BADGE_SIZES.X_LARGE,
			color: undefined,
			expectedClassName: '-ds-x-large',
		},
		{
			size: BADGE_SIZES.LARGE,
			color: undefined,
			expectedClassName: '-ds-large',
		},
		{
			size: BADGE_SIZES.MEDIUM,
			color: undefined,
			expectedClassName: '-ds-medium',
		},
		{
			size: BADGE_SIZES.SMALL,
			color: undefined,
			expectedClassName: '-ds-small',
		},
		{
			size: BADGE_SIZES.X_SMALL,
			color: undefined,
			expectedClassName: '-ds-x-small',
		},
		{
			size: undefined,
			color: BADGE_COLORS.PRIMARY,
			expectedClassName: '-ds-color-primary',
		},
		{
			size: undefined,
			color: BADGE_COLORS.SUCCESS,
			expectedClassName: '-ds-color-success',
		},
		{
			size: undefined,
			color: BADGE_COLORS.DANGER,
			expectedClassName: '-ds-color-danger',
		},
		{
			size: undefined,
			color: BADGE_COLORS.FAIL,
			expectedClassName: '-ds-color-fail',
		},
		{
			size: undefined,
			color: BADGE_COLORS.NEUTRAL,
			expectedClassName: '-ds-color-neutral',
		},
	])(
		'should have valid class names for size: $size, color: $color',
		({ size, color, expectedClassName }) => {
			const wrapper = mount(Badge, {
				props: {
					size,
					color,
				},
			});

			expect(wrapper.find('.ds-badge').classes()).toContain(expectedClassName);
		},
	);

	it('should have -ds-no-elevation class when elevation is none', () => {
		const wrapper = mount(Badge, {
			props: {
				elevation: BADGE_ELEVATIONS.NONE,
			},
		});

		expect(wrapper.find('.ds-badge__elevation').classes()).toContain('-ds-no-elevation');
	});

	it('should have -ds-elevation-s class when elevation is small', () => {
		const wrapper = mount(Badge, {
			props: {
				elevation: BADGE_ELEVATIONS.SMALL,
			},
		});

		expect(wrapper.find('.ds-badge__elevation').classes()).toContain('-ds-elevation-s');
	});

	it('should not have elevation modifier class when elevation is x-small', () => {
		const wrapper = mount(Badge, {
			props: {
				elevation: BADGE_ELEVATIONS.X_SMALL,
			},
		});

		expect(wrapper.find('.ds-badge__elevation').classes()).toEqual(['ds-badge__elevation']);
	});
});
