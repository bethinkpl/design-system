import { createLocalVue, shallowMount } from '@vue/test-utils';

import SurveyQuestionScale from './SurveyQuestionScale.vue';
import SurveyToggle, { SURVEY_TOGGLE_COLORS } from '../SurveyToggle';
import Card from '../Card';

describe('SurveyQuestionScale', () => {
	const createComponent = ({
		elaborationLabel = '',
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
				elaborationLabel,
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

			expect(component.find('.surveyQuestionScale__explanation').exists()).toBe(explanation);
		},
	);

	it('click on survey toggle should emit "selectChange" event', async () => {
		const component = createComponent({ options: OPTIONS });

		await component.find('.surveyQuestionScale__toggle .surveyToggle__toggle').trigger('click');

		expect(component.emitted()?.selectChange?.[0]).toBeDefined();
	});

	it('should render SurveyToggle for each item in options prop', () => {
		const component = createComponent({ options: OPTIONS });

		expect(component.findAll('.surveyToggle').length).toBe(OPTIONS.length);
	});
});
