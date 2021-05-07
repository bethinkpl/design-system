import { createLocalVue, shallowMount } from '@vue/test-utils';

import Stepper from './Stepper.vue';
import { Step } from './Stepper.types';

describe('Stepper', () => {
	const createComponent = ({ steps = [] as Array<Step> } = {}) => {
		const localVue = createLocalVue();

		return shallowMount<Stepper>(Stepper, {
			localVue,
			mocks: {},
			propsData: {
				steps,
				disableNotFilledSteps: false,
			},
			stubs: {},
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
					iconKey: 'FA_ARROW_LEFT_SOLID',
					name: '',
				},
			],
		});

		expect(component.text()).toContain(label);
	});

	it.each([3, 4, 42])('should render each element from steps prop', (size) => {
		const steps = Array(size).fill({
			label: '',
			isFilled: false,
			iconKey: 'FA_ARROW_LEFT_SOLID',
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
						iconKey: 'FA_ARROW_LEFT_SOLID',
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
			iconKey: 'FA_ARROW_LEFT_SOLID',
		});

		const component = createComponent({ steps });

		expect(component.findAll('.stepper__separator').length).toBe(size - 1);
	});
});
