import { shallowMount } from '@vue/test-utils';

import Chip from './Chip.vue';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICONS } from '../Icons/Icon';
import { PILL_COLORS, PILL_SIZES } from './Chip.consts';

interface createComponentOptions {
	label?: string;
	leftIcon?: IconDefinition | null;
	isRemovable?: boolean;
	size?: string;
	color?: string;
}

describe('Chip', () => {
	const createComponent = ({
		label = 'random label',
		leftIcon = null,
		isRemovable = false,
		size = PILL_SIZES.SMALL,
		color = PILL_COLORS.NEUTRAL,
	}: createComponentOptions = {}) => {
		return shallowMount(Chip, {
			props: {
				label,
				leftIcon,
				isRemovable,
				size,
				color,
			} as any,
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('renders label', () => {
		const label = 'Mam labela';
		const component = createComponent({ label });

		expect(component.text()).toBe(label);
	});

	it("doesn't render leftIcon by default", () => {
		const component = createComponent({ leftIcon: null });

		expect(component.find('.chip__leftIcon').exists()).toBe(false);
	});

	it('renders leftIcon', () => {
		const component = createComponent({ leftIcon: Object.freeze(ICONS.FA_TAG) });

		expect(component.find('.chip__leftIcon').exists()).toBe(true);
		expect(component.findComponent<typeof Chip>('.chip__leftIcon .a-icon').props().icon).toEqual(
			ICONS.FA_TAG,
		);
	});

	it("doesn't render leftIcon by default", () => {
		const component = createComponent({ isRemovable: false });

		expect(component.find('.chip__remove').exists()).toBe(false);
	});

	it('renders delete', () => {
		const component = createComponent({ isRemovable: true });

		const deleteButton = component.findComponent<typeof Chip>('.chip__remove');
		expect(deleteButton.exists()).toBe(true);
		expect(deleteButton.props().icon).toBe(ICONS.FA_XMARK);

		deleteButton.trigger('click');
		expect(component.emitted('delete')?.length).toBe(1);
	});

	it("doesn' contain x-small class by default", () => {
		const component = createComponent({ size: PILL_SIZES.SMALL });

		expect(component.classes()).not.toContain('-x-small');
	});

	it('has size class when x-small', () => {
		const component = createComponent({ size: PILL_SIZES.X_SMALL });

		expect(component.classes()).toContain('-x-small');
	});

	test.each([
		[PILL_COLORS.PRIMARY, '-color-primary'],
		[PILL_COLORS.PRIMARY_STRONG, '-color-primaryStrong'],
		[PILL_COLORS.NEUTRAL, '-color-neutral'],
		[PILL_COLORS.FAIL, '-color-fail'],
		[PILL_COLORS.SUCCESS, '-color-success'],
		[PILL_COLORS.INFO, '-color-info'],
		[PILL_COLORS.WARNING, '-color-warning'],
		[PILL_COLORS.INVERTED, '-color-inverted'],
	])(
		'correct class for color: %s prop, expectedClass: %s',
		(color: string, expectedClass: string) => {
			const colorClasses = [
				'-color-primary',
				'-color-primaryStrong',
				'-color-neutral',
				'-color-fail',
				'-color-success',
				'-color-info',
				'-color-warning',
				'-color-inverted',
			];
			const component = createComponent({ color });
			const componentClasses = component.classes();
			expect(componentClasses).toContain(expectedClass);

			colorClasses.forEach((colorClass) => {
				if (colorClass === expectedClass) {
					return;
				}
				expect(componentClasses).not.toContain(colorClass);
			});
		},
	);

	it("doesn't render delete when size x-small", () => {
		const component = createComponent({ isRemovable: true, size: PILL_SIZES.X_SMALL });

		const deleteButton = component.find('.chip__remove');
		expect(deleteButton.exists()).toBe(false);
	});
});
