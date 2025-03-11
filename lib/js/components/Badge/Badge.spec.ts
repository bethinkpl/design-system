import { mount } from '@vue/test-utils';
import Badge from './Badge.vue';
import { ICONS } from '../Icons/Icon';
import { exists } from 'node:fs';
import { BADGE_COLORS, BADGE_SIZES } from './Badge.consts';

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
				icon: 'FA_BELL',
			},
		});

		expect(wrapper.find('.ds-icon .fa-bell').exists()).toBe(true);
	});

	it('does not render label if icon is present', () => {
		const wrapper = mount(Badge, {
			props: {
				label: '1',
				icon: 'FA_BELL',
			},
		});

		expect(wrapper.find('.ds-badge__content').exists()).toBe(false);
	});

	it('should render with accessory', () => {
		const wrapper = mount(Badge, {
			slots: {
				default: '<div data-accessory>Accessory content</div>',
			},
		});

		expect(wrapper.find('[data-accessory]').exists()).toBe(true);
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
});
