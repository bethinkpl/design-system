import { shallowMount } from '@vue/test-utils';

import Chip from './Chip.vue';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICONS } from '../Icons/Icon';
import { CHIP_COLORS, CHIP_SIZES } from './Chip.consts';
import Icon from '../Icons/Icon';

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
		size = CHIP_SIZES.SMALL,
		color = CHIP_COLORS.NEUTRAL,
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
		expect(component.find('.chip__leftIcon').findComponent(Icon).props().icon).toEqual(
			ICONS.FA_TAG,
		);
	});

	it("doesn't render leftIcon by default", () => {
		const component = createComponent({ isRemovable: false });

		expect(component.find('.chip__remove').exists()).toBe(false);
	});

	it('renders remove', () => {
		const component = createComponent({ isRemovable: true });

		const removeButton = component.findComponent<typeof Chip>('.chip__remove');
		expect(removeButton.exists()).toBe(true);
		expect(removeButton.props().icon).toBe(ICONS.FA_XMARK);

		removeButton.trigger('click');
		expect(component.emitted('remove')?.length).toBe(1);
	});

	it("doesn' contain x-small class by default", () => {
		const component = createComponent({ size: CHIP_SIZES.SMALL });

		expect(component.classes()).not.toContain('-x-small');
	});

	it('has size class when x-small', () => {
		const component = createComponent({ size: CHIP_SIZES.X_SMALL });

		expect(component.classes()).toContain('-x-small');
	});

	test.each([
		[CHIP_COLORS.PRIMARY, '-color-primary'],
		[CHIP_COLORS.PRIMARY_STRONG, '-color-primaryStrong'],
		[CHIP_COLORS.NEUTRAL, '-color-neutral'],
		[CHIP_COLORS.FAIL, '-color-fail'],
		[CHIP_COLORS.SUCCESS, '-color-success'],
		[CHIP_COLORS.INFO, '-color-info'],
		[CHIP_COLORS.WARNING, '-color-warning'],
		[CHIP_COLORS.INVERTED, '-color-inverted'],
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

	it("doesn't render remove when size x-small", () => {
		const component = createComponent({ isRemovable: true, size: CHIP_SIZES.X_SMALL });

		const removeButton = component.find('.chip__remove');
		expect(removeButton.exists()).toBe(false);
	});
});
