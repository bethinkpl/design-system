import { createLocalVue, shallowMount } from '@vue/test-utils';

import SurveyQuestionScale from './SurveyQuestionScale.vue';
import SurveyToggle, { SURVEY_TOGGLE_MEANINGS } from '../SurveyToggle';
import Card from '../../components/Cards/Card/Card.vue';
import { SurveyQuestionScaleOption } from './SurveyQuestion.domain';

describe('SurveyQuestionScale', () => {
	const createComponent = ({
		elaborationLabel = '',
		elaborationValue = '',
		title = '',
		content = '',
		scaleOptions = [] as Array<unknown>,
		explanation = '',
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(SurveyQuestionScale, {
			localVue,
			mocks: {},
			propsData: {
				content,
				scaleOptions,
				title,
				elaborationLabel,
				elaborationValue,
			},
			slots: {
				explanation,
			},
			stubs: {
				SurveyToggle,
				Card,
			},
		});
	};

	const OPTIONS: Array<SurveyQuestionScaleOption> = [
		{
			value: '1',
			label: 'Nie zgadzam się',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			content: '1',
		},
		{
			value: '2',
			label: 'Trochę się nie zgadzam',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			content: '2',
		},
		{
			value: '3',
			label: 'Trochę się zgadzam',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			content: '3',
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
