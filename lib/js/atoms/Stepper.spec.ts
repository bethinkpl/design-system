import { createLocalVue, shallowMount } from '@vue/test-utils';

import RippleWrapper from 'design-system/lib/js/utils/RippleWrapper.vue';
import Icon from 'design-system/lib/js/atoms/Icon.vue';

import Stepper from './Stepper.vue';
import { Step } from './Stepper.types';
import { ICONS } from './Icon.vue';

describe('Stepper', () => {
	const icon = ICONS.FA_ARROW_LEFT_SOLID;

	const createComponent = ({ steps = [] as Array<Step> } = {}) => {
		const localVue = createLocalVue();

		return shallowMount<Stepper>(Stepper, {
			localVue,
			mocks: {},
			propsData: {
				steps,
				disableNotFilledSteps: false,
			},
			stubs: {
				Icon,
				RippleWrapper,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render labels from steps prop', () => {
		const label = 'Wpłynąłem na suchego przestwór oceanu';
		const component = createComponent({
			steps: [
				{
					label,
					isFilled: false,
					icon,
					name: '',
					isClickable: true,
				},
			],
		});

		expect(component.text()).toContain(label);
	});

	it.each([3, 4, 42])('should render each element from steps prop', (size) => {
		const steps = Array(size).fill({
			label: '',
			isFilled: false,
			icon,
			isClickable: true,
			name: '',
		});

		const component = createComponent({ steps });

		expect(component.findAll('.stepper__item').length).toBe(size);
	});

	it.each([true, false])(
		'when isFilled flag is true component should render -isFilled class',
		(isFilled) => {
			const component = createComponent({
				steps: [
					{
						label: 'Wpłynąłem na suchego przestwór oceanu',
						isFilled,
						icon,
						isClickable: true,
						name: '',
					},
				],
			});

			expect(component.find('.-filled').exists()).toBe(isFilled);
		},
	);

	it.each([3, 4, 42])('should render separator between eash step', (size) => {
		const steps = Array(size).fill({
			label: '',
			isFilled: false,
			name: '',
			icon,
			isClickable: true,
		});

		const component = createComponent({ steps });

		expect(component.findAll('.stepper__separator').length).toBe(size - 1);
	});

	it.each([0, 1, 2])(
		'after click on step component should emit click event with proper name step.name',
		async (n) => {
			const steps = Array(3)
				.fill(null)
				.map((_, index) => ({
					label: '',
					isFilled: false,
					name: `${index}`,
					isClickable: true,
					icon,
				}));

			const component = createComponent({ steps });
			const step = component.find(`.stepper__item:nth-of-type(${n + 1}) .stepper__icon`);
			await step.trigger('click');

			expect(component.emitted().stepClick?.[0]).toEqual([`${n}`]);
		},
	);

	it.each([true, false])(
		'after click on step component with isClickable prop set to false should NOT emit click event with proper name step.name',
		async (isClickable) => {
			const steps = [
				{
					label: '',
					isFilled: false,
					name: '',
					icon,
					isClickable,
				},
			];

			const component = createComponent({ steps });
			const step = component.find('.stepper__item .stepper__icon');
			await step.trigger('click');

			expect(!!component.emitted().stepClick?.length).toBe(isClickable);
		},
	);
});
