import { shallowMount } from '@vue/test-utils';

import Chip from './Chip.vue';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon, { ICONS } from '../Icons/Icon';
import { CHIP_COLORS, CHIP_SIZES } from './Chip.consts';

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

		expect(component.find('.ds-chip__leftIcon').exists()).toBe(false);
	});

	it('renders leftIcon', () => {
		const component = createComponent({ leftIcon: Object.freeze(ICONS.FA_TAG) });

		expect(component.find('.ds-chip__leftIcon').exists()).toBe(true);
		expect(component.find('.ds-chip__leftIcon').findComponent(Icon).props().icon).toEqual(
			ICONS.FA_TAG,
		);
	});

	it("doesn't render leftIcon by default", () => {
		const component = createComponent({ isRemovable: false });

		expect(component.find('.ds-chip__remove').exists()).toBe(false);
	});

	it('renders remove', () => {
		const component = createComponent({ isRemovable: true });

		const removeButton = component.findComponent<typeof Chip>('.ds-chip__remove');
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

		expect(component.classes()).toContain('-ds-x-small');
	});

	test.each([
		[CHIP_COLORS.PRIMARY, '-ds-color-primary'],
		[CHIP_COLORS.PRIMARY_STRONG, '-ds-color-primaryStrong'],
		[CHIP_COLORS.NEUTRAL, '-ds-color-neutral'],
		[CHIP_COLORS.FAIL, '-ds-color-fail'],
		[CHIP_COLORS.DANGER, '-ds-color-danger'],
		[CHIP_COLORS.SUCCESS, '-ds-color-success'],
		[CHIP_COLORS.INFO, '-ds-color-info'],
		[CHIP_COLORS.WARNING, '-ds-color-warning'],
		[CHIP_COLORS.INVERTED, '-ds-color-inverted'],
	])(
		'correct class for color: %s prop, expectedClass: %s',
		(color: string, expectedClass: string) => {
			const colorClasses = [
				'-ds-color-primary',
				'-ds-color-primaryStrong',
				'-ds-color-neutral',
				'-ds-color-fail',
				'-ds-color-danger',
				'-ds-color-success',
				'-ds-color-info',
				'-ds-color-warning',
				'-ds-color-inverted',
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

		const removeButton = component.find('.ds-chip__remove');
		expect(removeButton.exists()).toBe(false);
	});
});
