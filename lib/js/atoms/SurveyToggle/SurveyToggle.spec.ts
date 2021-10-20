import { createLocalVue, shallowMount } from '@vue/test-utils';

import SurveyToggle from './SurveyToggle.vue';
import { SURVEY_TOGGLE_COLORS } from './SurveyToggle.consts';

describe('SurveyToggle', () => {
	const createComponent = ({
		isActive = false,
		label = '',
		content = '',
		color = SURVEY_TOGGLE_COLORS.PRIMARY,
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(SurveyToggle, {
			localVue,
			mocks: {},
			propsData: {
				label,
				color,
				isActive,
				content,
			},
			stubs: {},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render surveyToggle class', () => {
		const component = createComponent();

		expect(component.find('.surveyToggle').exists()).toBe(true);
	});

	it('should render text from label prop', () => {
		const label = 'Wspłynąłem na suchego przestwór oceanu';
		const component = createComponent({ label });

		expect(component.find('.surveyToggle__label').text()).toContain(label);
	});

	it('after click on toggle component should emit "click" event', async () => {
		const component = createComponent();

		await component.find('.surveyToggle__toggle').trigger('click');

		expect(component.emitted()?.click?.[0]).toBeDefined();
	});

	it.each([true, false])(
		'when isActive prop is set to true component should render icon',
		(isActive) => {
			const component = createComponent({ isActive });

			expect(component.find('icon-stub').exists()).toBe(isActive);
		},
	);

	it('when isActive prop is set to true component should render icon', () => {
		const component = createComponent({ isActive: true });

		expect(component.find('icon-stub').exists()).toBeTruthy();
	});

	it('when isActive prop is false and color is primary component should render', () => {
		const content = 'Wspłynąłem na suchego przestwór oceanu';
		const component = createComponent({
			isActive: false,
			color: SURVEY_TOGGLE_COLORS.PRIMARY,
			content,
		});
		expect(component.find('.surveyToggle__content').text()).toContain(content);
	});
});
