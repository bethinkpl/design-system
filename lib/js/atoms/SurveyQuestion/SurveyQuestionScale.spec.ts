import { createLocalVue, shallowMount } from '@vue/test-utils';

import SurveyQuestionScale from './SurveyQuestionScale.vue';
import SurveyToggle, { SURVEY_TOGGLE_COLORS } from '../SurveyToggle';
import Card from '../Card';

describe('SurveyQuestionScale', () => {
	const createComponent = ({
		elaborationLabel = '',
		elaboration = '',
		title = '',
		content = '',
		options = [] as Array<unknown>,
		explanation = '',
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(SurveyQuestionScale, {
			localVue,
			mocks: {},
			propsData: {
				content,
				options,
				title,
				elaborationLabel,
				elaboration,
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

	it("Don't show explanation icon when slot is empty", async () => {
		const component = createComponent();

		expect(component.find('.surveyQuestionScale__explanation').exists()).toBe(false);
	});

	it('Show explanation icon when slot is not empty', async () => {
		const component = createComponent({ explanation: 'test' });

		expect(component.find('.surveyQuestionScale__explanation').exists()).toBe(true);
	});

	it('click on survey toggle should emit "selectChange" event', async () => {
		const component = createComponent({ options: OPTIONS });

		await component.find('.surveyQuestionScale__toggle .surveyToggle__toggle').trigger('click');

		expect(component.emitted()?.['select-change']?.[0]).toBeDefined();
	});

	it('should render SurveyToggle for each item in options prop', () => {
		const component = createComponent({ options: OPTIONS });

		expect(component.findAll('.surveyToggle').length).toBe(OPTIONS.length);
	});
});
