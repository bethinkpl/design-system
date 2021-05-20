import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import { VCheckbox, VLayout } from 'vuetify/lib';
import Vuetify from 'vuetify';

import Icon from '../Icon/Icon.vue';

import Checkbox from './Checkbox.vue';
import { CHECKBOX_SIZES, CheckboxSizeValue } from './Checkbox.consts';

describe('Checkbox', () => {
	const text = 'Wpłynąłem na suchego przestwór oceanu';

	const createComponent = ({
		label = '',
		labelAddition = '',
		helpMessage = '',
		errorMessage = '',
		size = CHECKBOX_SIZES.MEDIUM as CheckboxSizeValue,
	} = {}) => {
		const localVue = createLocalVue();
		// https://github.com/vuetifyjs/vuetify/issues/6046#issuecomment-578201806
		Vue.use(Vuetify);

		return shallowMount(Checkbox, {
			localVue,
			mocks: {},
			propsData: {
				label,
				labelAddition,
				helpMessage,
				size,
				errorMessage,
			},
			stubs: {
				'v-checkbox': VCheckbox,
				icon: Icon,
				'v-layout': VLayout,
			},
			vuetify: new Vuetify({}),
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render a-checkbox', () => {
		const component = createComponent();

		expect(component.find('.a-checkbox').exists()).toBe(true);
	});

	it('should render v-input', () => {
		const component = createComponent();

		expect(component.find('.v-input').exists()).toBe(true);
	});

	it('should render text from label prop', () => {
		const label = text;
		const component = createComponent({ label });

		expect(component.find('.a-checkbox .a-checkbox__label').text()).toContain(label);
	});

	it('should render text from labelAddition prop', () => {
		const labelAddition = text;
		const component = createComponent({ labelAddition });

		expect(component.find('.a-checkbox .a-checkbox__labelAddition').text()).toContain(
			labelAddition,
		);
	});

	it('should render text from helpMessage prop', () => {
		const helpMessage = text;
		const component = createComponent({ helpMessage });

		expect(component.find('.a-checkbox__helpMessage').text()).toContain(helpMessage);
	});

	describe('errorMessage', () => {
		it('should render text from errorMessage prop', () => {
			const errorMessage = text;
			const component = createComponent({ errorMessage });

			expect(component.find('.a-checkbox__helpMessage').text()).toContain(errorMessage);
		});

		it('when component has errorMessage prop component should be in error state', () => {
			const errorMessage = text;
			const component = createComponent({ errorMessage, label: 'label' });

			expect(component.find('.a-checkbox.-error').exists()).toBe(true);
			expect(component.find('.error--text').exists()).toBe(true);
		});
	});

	describe('size', () => {
		it('when size prop is set to MEDIUM component should render -medium class modifier', () => {
			const component = createComponent({ size: CHECKBOX_SIZES.MEDIUM });

			expect(component.find('.a-checkbox.-medium').exists()).toBe(true);
			expect(component.find('.a-checkbox.-small').exists()).toBe(false);
			expect(component.find('.a-checkbox.-xsmall').exists()).toBe(false);
		});

		it('when size prop is set to SMALL component should render -small class modifier', () => {
			const component = createComponent({ size: CHECKBOX_SIZES.SMALL });

			expect(component.find('.a-checkbox.-small').exists()).toBe(true);
			expect(component.find('.a-checkbox.-medium').exists()).toBe(false);
			expect(component.find('.a-checkbox.-xsmall').exists()).toBe(false);
		});

		it('when size prop is set to Medium component should render -medium class modifier', () => {
			const component = createComponent({ size: CHECKBOX_SIZES.X_SMALL });

			expect(component.find('.a-checkbox.-xsmall').exists()).toBe(true);
			expect(component.find('.a-checkbox.-medium').exists()).toBe(false);
			expect(component.find('.a-checkbox.-small').exists()).toBe(false);
		});
	});
});
