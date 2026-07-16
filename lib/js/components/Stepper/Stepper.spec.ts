import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import Stepper from './Stepper.vue';

interface createComponentOptions {
	title?: string;
	counterLabel?: string;
	hasCounterValue?: boolean;
	totalSteps?: number;
	currentStep?: number;
}

describe('Stepper', () => {
	const createComponent = ({
		title,
		counterLabel,
		hasCounterValue,
		totalSteps = 5,
		currentStep = 1,
	}: createComponentOptions = {}) => {
		return mount(Stepper, {
			props: {
				title,
				counterLabel,
				hasCounterValue,
				totalSteps,
				currentStep,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('renders one step per total step', () => {
		const component = createComponent({ totalSteps: 4 });

		expect(component.findAll('.ds-stepper__step')).toHaveLength(4);
	});

	it('marks the steps up to the current step as active', () => {
		const component = createComponent({ totalSteps: 5, currentStep: 2 });

		const steps = component.findAll('.ds-stepper__step');
		expect(steps[0].classes()).toContain('-ds-active');
		expect(steps[1].classes()).toContain('-ds-active');
		expect(steps[2].classes()).not.toContain('-ds-active');
		expect(steps[3].classes()).not.toContain('-ds-active');
		expect(steps[4].classes()).not.toContain('-ds-active');
	});

	it('renders the title when provided', () => {
		const title = 'My title';
		const component = createComponent({ title });

		expect(component.find('.ds-stepper__title').text()).toBe(title);
	});

	it('renders the counter value with the current and total steps by default', () => {
		const component = createComponent({ totalSteps: 5, currentStep: 3 });

		expect(component.find('.ds-stepper__counterValue').text()).toBe('3/5');
	});

	it('renders the counter label when provided', () => {
		const counterLabel = 'Counter Label';
		const component = createComponent({ counterLabel });

		expect(component.find('.ds-stepper__counterLabel').text()).toBe(counterLabel);
	});

	it('does not render the counter label when it is not provided', () => {
		const component = createComponent({ counterLabel: undefined });

		expect(component.find('.ds-stepper__counterLabel').exists()).toBe(false);
	});

	it('hides only the counter value when hasCounterValue is false', () => {
		const counterLabel = 'Counter Label';
		const component = createComponent({ counterLabel, hasCounterValue: false });

		expect(component.find('.ds-stepper__counterValue').exists()).toBe(false);
		expect(component.find('.ds-stepper__counterLabel').text()).toBe(counterLabel);
	});

	it('does not render the header when there is no title, no counter label and the counter value is hidden', () => {
		const component = createComponent({
			title: undefined,
			counterLabel: undefined,
			hasCounterValue: false,
		});

		expect(component.find('.ds-stepper__header').exists()).toBe(false);
	});
});
