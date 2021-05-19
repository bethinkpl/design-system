import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import { VSelect } from 'vuetify/lib';

import Select from './Select.vue';
import Icon from '../Icon/Icon.vue';
import { IconItem, ICONS } from '../Icon';

describe('Select', () => {
	const text = 'Wpłynąłem na suchego przestwór oceanu';

	const createComponent = ({
		label = '',
		labelAddition = '',
		helpMessage = '',
		errorMessage = '',
		leftIcon = undefined as IconItem | undefined,
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(Select, {
			localVue,
			mocks: {},
			propsData: {
				label,
				labelAddition,
				helpMessage,
				errorMessage,
				leftIcon,
			},
			stubs: {
				'v-select': VSelect,
				icon: Icon,
			},
			vuetify: new Vuetify({}),
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render a-select', () => {
		const component = createComponent();

		expect(component.find('.a-select').exists()).toBe(true);
	});

	it('should render v-select', () => {
		const component = createComponent();

		expect(component.find('.v-select').exists()).toBe(true);
	});

	it('should render text from label prop', () => {
		const label = text;
		const component = createComponent({ label });

		expect(component.find('.v-select').text()).toContain(label);
	});

	it('should render text from labelAddition prop', () => {
		const labelAddition = text;
		const component = createComponent({ labelAddition });

		expect(component.find('.a-select .a-select__labelAddition').text()).toContain(
			labelAddition,
		);
	});

	it('should render text from helpMessage prop', () => {
		const helpMessage = text;
		const component = createComponent({ helpMessage });

		expect(component.find('.a-select__helpMessage').text()).toContain(helpMessage);
	});

	it('should render icon from leftIcon prop', () => {
		const leftIcon = ICONS.FA_CHART_BAR;
		const component = createComponent({ leftIcon });

		expect(component.find('.a-icon').props().icon).toEqual(leftIcon);
	});

	describe('errorMessage', () => {
		it('should render text from errorMessage prop', () => {
			const errorMessage = text;
			const component = createComponent({ errorMessage });

			expect(component.find('.a-select__helpMessage').text()).toContain(errorMessage);
		});

		it('when component has errorMessage prop component should be in error state', () => {
			const errorMessage = text;
			const component = createComponent({ errorMessage, label: 'label' });

			expect(component.find('.a-select.-error').exists()).toBe(true);
			expect(component.find('.v-input.error--text').exists()).toBe(true);
			expect(component.find('.v-messages.error--text').exists()).toBe(true);
		});
	});
});
