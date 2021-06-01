import { createLocalVue, MountOptions, shallowMount } from '@vue/test-utils';
import Vuetify, { VTextField } from 'vuetify/lib';

import Input from './Input.vue';
import { IconItem, ICONS } from '../Icon/Icon.consts';
import Vue from 'vue';

describe('Input', () => {
	const text = 'Wpłynąłem na suchego przestwór oceanu';
	const createComponent = ({
		error = false,
		errorMessage = '',
		helpMessage = '',
		label = '',
		labelAddition = '',
		leftIcon = undefined as IconItem | undefined,
		rightIcon = undefined as IconItem | undefined,
	} = {}) => {
		Vue.use(Vuetify);
		const localVue = createLocalVue();

		return shallowMount(Input, {
			localVue,
			mocks: {},
			propsData: {
				error,
				errorMessage,
				helpMessage,
				label,
				labelAddition,
				leftIcon,
				rightIcon,
			},
			stubs: {
				'v-text-field': VTextField,
			},
			vuetify: new Vuetify({}),
		} as MountOptions<Vue>);
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render a-input', () => {
		const component = createComponent();

		expect(component.find('.a-input').exists()).toBe(true);
	});

	it('should render v-text-field', () => {
		const component = createComponent();

		expect(component.find('.v-text-field').exists()).toBe(true);
	});

	it('should render text from label prop', () => {
		const label = text;
		const component = createComponent({ label });

		expect(component.find('.v-label').text()).toContain(label);
	});

	it('should render text from labelAddition prop', () => {
		const labelAddition = text;
		const component = createComponent({ labelAddition });

		expect(component.find('.v-label .a-input__labelAddition').text()).toContain(labelAddition);
	});

	it('should render text from helpMessage prop', () => {
		const helpMessage = text;
		const component = createComponent({ helpMessage });

		expect(component.find('.v-messages__message').text()).toContain(helpMessage);
	});

	it('when component has set error prop to true component should be in error state', () => {
		const component = createComponent({ error: true, label: 'label' });

		expect(component.find('.a-input.-error').exists()).toBe(true);
		expect(component.find('.v-input.error--text').exists()).toBe(true);
		expect(component.find('.v-messages.error--text').exists()).toBe(true);
	});

	describe('icons', () => {
		it('should render icon from leftIcon prop', () => {
			const leftIcon = ICONS.FA_CHART_BAR;
			const component = createComponent({ leftIcon });

			expect(component.find('icon-stub').props().icon).toEqual(leftIcon);
		});

		it('should render icon from rightIcon prop', () => {
			const rightIcon = ICONS.FA_CHART_BAR;
			const component = createComponent({ rightIcon });

			expect(component.find('icon-stub').props().icon).toEqual(rightIcon);
		});
	});

	describe('errorMessage', () => {
		it('should render text from errorMessage prop', () => {
			const errorMessage = text;
			const component = createComponent({ errorMessage });

			expect(component.find('.v-messages__message').text()).toContain(text);
		});

		it('when component has errorMessage prop component should be in error state', () => {
			const errorMessage = text;
			const component = createComponent({ errorMessage, label: 'label' });

			expect(component.find('.a-input.-error').exists()).toBe(true);
			expect(component.find('.v-input.error--text').exists()).toBe(true);
			expect(component.find('.v-messages.error--text').exists()).toBe(true);
		});

		it('when component has errorMessage and helpMessage prop component should render ONLY errorMessage', () => {
			const helpMessage = 'example help message';
			const errorMessage = text;
			const component = createComponent({ errorMessage, helpMessage });

			expect(component.find('.v-messages__message').text()).toContain(text);
			expect(component.find('.v-messages__message').text()).not.toContain(helpMessage);
		});
	});
});
