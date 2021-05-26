import { createLocalVue, shallowMount } from '@vue/test-utils';

import RippleWrapper from 'design-system/lib/js/utils/RippleWrapper.vue';
import Icon from 'design-system/lib/js/atoms/Icon.vue';

import Stepper from './Stepper.vue';
import { Step, STEP_TYPES } from './Stepper.types';
import { ICONS } from './Icon.vue';

describe('Stepper', () => {
	const icon = ICONS.FA_ARROW_LEFT_SOLID;

	const createComponent = ({ steps = [] as Array<Step>, forceVerticalLabels = false } = {}) => {
		const localVue = createLocalVue();

		return shallowMount<Stepper>(Stepper, {
			localVue,
			mocks: {},
			propsData: {
				steps,
				forceVerticalLabels,
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
					type: STEP_TYPES.DEFAULT,
					icon,
					name: '',
					disabled: false,
				},
			],
		});

		expect(component.text()).toContain(label);
	});

	it.each([3, 4, 42])('should render each element from steps prop', (size) => {
		const steps = Array(size).fill({
			label: '',
			icon,
			disabled: false,
			name: '',
			type: STEP_TYPES.DEFAULT,
		});

		const component = createComponent({ steps });

		expect(component.findAll('.stepper__item').length).toBe(size);
	});

	it.each([true, false])(
		'when disabled flag is true component should render -disabled class',
		(disabled) => {
			const component = createComponent({
				steps: [
					{
						label: 'Wpłynąłem na suchego przestwór oceanu',
						disabled,
						type: STEP_TYPES.DEFAULT,
						icon,
						name: '',
					},
				],
			});

			expect(component.find('.-disabled').exists()).toBe(disabled);
		},
	);

	it.each([true, false])(
		'when forceVerticalLabels flag is true component should render -forceVerticalLabels class',
		(forceVerticalLabels) => {
			const component = createComponent({
				steps: [
					{
						label: 'Wpłynąłem na suchego przestwór oceanu',
						disabled: false,
						type: STEP_TYPES.DEFAULT,
						icon,
						name: '',
					},
				],
				forceVerticalLabels,
			});

			expect(component.find('.-forceVerticalLabels').exists()).toBe(forceVerticalLabels);
		},
	);

	it.each([3, 4, 42])('should render separator between eash step', (size) => {
		const steps = Array(size).fill({
			label: '',
			name: '',
			icon,
			disabled: false,
			type: STEP_TYPES.DEFAULT,
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
					type: STEP_TYPES.DEFAULT,
					name: `${index}`,
					disabled: false,
					icon,
				}));

			const component = createComponent({ steps });
			const step = component.find(`.stepper__item:nth-of-type(${n + 1}) .a-icon`);
			await step.trigger('click');

			expect(component.emitted().stepClick?.[0]).toEqual([`${n}`]);
		},
	);

	it.each([true, false])(
		'after click on step component with disable prop set to true should NOT emit click event with proper name step.name',
		async (disabled) => {
			const steps = [
				{
					label: '',
					type: STEP_TYPES.DEFAULT,
					name: '',
					icon,
					disabled,
				},
			];

			const component = createComponent({ steps });
			const step = component.find('.stepper__item .stepper__icon');
			await step.trigger('click');

			expect(!!component.emitted().stepClick?.length).toBe(!disabled);
		},
	);
});
