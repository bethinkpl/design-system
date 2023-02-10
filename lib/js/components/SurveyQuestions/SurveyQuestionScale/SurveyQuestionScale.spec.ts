import { mount } from '@vue/test-utils';

import SurveyQuestionScale from './SurveyQuestionScale.vue';
import { SURVEY_TOGGLE_MEANINGS } from '../../SurveyToggle';
import { SurveyQuestionScaleOption } from '../SurveyQuestion.domain';

describe('SurveyQuestionScale', () => {
	const createComponent = ({
		elaborationLabel = '',
		elaborationValue = '',
		title = '',
		scaleOptions = [] as Array<SurveyQuestionScaleOption>,
		explanation = '',
	} = {}) => {
		return mount(SurveyQuestionScale, {
			props: {
				scaleOptions,
				title,
				elaborationLabel,
				elaborationValue,
			},
			slots: {
				...(explanation !== '' && { explanation }),
			},
		});
	};

	const OPTIONS: Array<SurveyQuestionScaleOption> = [
		{
			value: '1',
			label: 'Nie zgadzam się',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
		},
		{
			value: '2',
			label: 'Trochę się nie zgadzam',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
		},
		{
			value: '3',
			label: 'Trochę się zgadzam',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
		},
		{
			value: '4',
		},
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

	it("Don't show explanation icon when slot is empty", async () => {
		const component = createComponent();

		expect(component.find('.surveyQuestionScale__explanation').exists()).toBe(false);
	});

	it('Show explanation icon when slot is not empty', async () => {
		const component = createComponent({ explanation: 'test' });

		expect(component.find('.surveyQuestionScale__explanation').exists()).toBe(true);
	});

	it('click on survey toggle should emit "selectChange" event', async () => {
		const component = createComponent({ scaleOptions: OPTIONS });

		await component.find('.surveyQuestionScale__toggle .surveyToggle__toggle').trigger('click');

		expect(component.emitted()?.['select-change']?.[0]).toBeDefined();
	});

	it('should render SurveyToggle for each item in scaleOptions prop', () => {
		const component = createComponent({ scaleOptions: OPTIONS });

		expect(component.findAll('.surveyToggle').length).toBe(OPTIONS.length);
	});
});
