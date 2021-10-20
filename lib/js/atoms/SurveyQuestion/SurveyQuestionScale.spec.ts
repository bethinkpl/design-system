import { createLocalVue, shallowMount } from '@vue/test-utils';

import SurveyQuestionScale from './SurveyQuestionScale.vue';
import SurveyToggle, { SURVEY_TOGGLE_COLORS } from '../SurveyToggle';
import Card from '../Card';

describe('SurveyQuestionScale', () => {
	const createComponent = ({
		label = '',
		title = '',
		content = '',
		options = [] as Array<unknown>,
		explanation = true,
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(SurveyQuestionScale, {
			localVue,
			mocks: {},
			propsData: {
				content,
				options,
				title,
				explanation,
				label,
			},
			stubs: {
				SurveyToggle,
				Card,
			},
		});
	};

	const OPTIONS = [
		{ id: 1, label: 'Nie zgadzam się', color: SURVEY_TOGGLE_COLORS.PRIMARY, content: '1' },
		{
			id: 2,
			label: 'Trochę się nie zgadzam',
			color: SURVEY_TOGGLE_COLORS.PRIMARY,
			content: '2',
		},
		{ id: 3, label: 'Trochę się zgadzam', color: SURVEY_TOGGLE_COLORS.PRIMARY, content: '3' },
		{ id: 4, label: 'Zgadzam się ', color: SURVEY_TOGGLE_COLORS.PRIMARY, content: '4' },
	];

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render surveyQuestionScale class', () => {
		const component = createComponent();

		expect(component.find('.surveyQuestionScale').exists()).toBe(true);
	});

	it('should render text from title prop', () => {
		const title = 'Wspłynąłem na suchego przestwór oceanu';
		const component = createComponent({ title });

		expect(component.find('.surveyQuestionScale__title').text()).toContain(title);
	});

	it.each([false, true])(
		'should render explanation button only when explanation prop is true',
		(explanation) => {
			const component = createComponent({ explanation });

			expect(component.find('.surveyQuestionScale__explanation').exists()).toContain(
				explanation,
			);
		},
	);

	it('should render elaboration section only when toggle is selected', async () => {
		const component = createComponent({ options: OPTIONS });

		// select answer
		expect(component.find('.surveyQuestionScale__elaboration').exists()).toBe(false);
		await component.find('.surveyQuestionScale__toggle .surveyToggle__toggle').trigger('click');
		expect(component.find('.surveyQuestionScale__elaboration').exists()).toBe(true);

		// unselect answer
		await component.find('.surveyQuestionScale__toggle .surveyToggle__toggle').trigger('click');
		expect(component.find('.surveyQuestionScale__elaboration').exists()).toBe(false);
	});

	it('should render SurveyToggle for each item in options prop', () => {
		const component = createComponent({ options: OPTIONS });

		expect(component.findAll('.surveyToggle').length).toBe(OPTIONS.length);
	});
});
