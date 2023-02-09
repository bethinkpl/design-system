import { shallowMount } from '@vue/test-utils';

import Pill from './Pill.vue';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICONS } from '../Icon';
import { PILL_COLORS, PILL_SIZES } from './Pill.consts';

interface createComponentOptions {
	label?: string;
	leftIcon?: IconDefinition | null;
	hasDelete?: boolean;
	size?: string;
	color?: string;
}

describe('Pill', () => {
	const createComponent = ({
		label = 'random label',
		leftIcon = null,
		hasDelete = false,
		size = PILL_SIZES.SMALL,
		color = PILL_COLORS.NEUTRAL,
	}: createComponentOptions = {}) => {
		return shallowMount(Pill, {
			props: {
				label,
				leftIcon,
				hasDelete,
				size,
				color,
			},
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

		expect(component.find('.pill__leftIcon').exists()).toBe(false);
	});

	it('renders leftIcon', () => {
		const component = createComponent({ leftIcon: ICONS.FA_TAG });

		expect(component.find('.pill__leftIcon').exists()).toBe(true);
		expect(component.findComponent<typeof Pill>('.pill__leftIcon').props().icon).toEqual(
			ICONS.FA_TAG,
		);
	});

	it("doesn't render leftIcon by default", () => {
		const component = createComponent({ hasDelete: false });

		expect(component.find('.pill__delete').exists()).toBe(false);
	});

	it('renders delete', () => {
		const component = createComponent({ hasDelete: true });

		const deleteButton = component.findComponent<typeof Pill>('.pill__delete');
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
		const component = createComponent({ hasDelete: true, size: PILL_SIZES.X_SMALL });

		const deleteButton = component.find('.pill__delete');
		expect(deleteButton.exists()).toBe(false);
	});
});
