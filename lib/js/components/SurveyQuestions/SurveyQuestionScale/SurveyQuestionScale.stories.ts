import SurveyQuestionScale from './SurveyQuestionScale.vue';
import { SURVEY_TOGGLE_MEANINGS } from '../../SurveyToggle';
import { SURVEY_QUESTION_STATES } from '../SurveyQuestion.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/SurveyQuestions/SurveyQuestionScaleTS',
	component: SurveyQuestionScale,
} as Meta<typeof SurveyQuestionScale>;

const StoryTemplate: StoryFn<typeof SurveyQuestionScale> = (argTypes) => ({
	components: { SurveyQuestionScale },
	props: Object.keys(argTypes),
	data() {
		return { selectedValue: null };
	},
	template:
		'<survey-question-scale :title="title" :scale-options="scaleOptions" :elaboration-value="elaborationValue" :elaborationLabel="elaborationLabel" :placeholder="placeholder" :selected-value="selectedValue" :state="state" @select-change="selectedValue = $event" @elaboration-change="elaborationValue = $event">' +
		'<div v-if="explanation" slot="explanation" v-html="explanation" />' +
		'</survey-question-scale>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: "Main question write here if it's long it will collapse.",
	elaborationLabel: 'Jeśli chcesz, uzasadnij lub rozwiń swoją ocenę',
	elaborationValue: '',
	explanation:
		'<h3 style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3>\n<div>Wyczerpujące materiały dają poczucie pełnego zrozumienia, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',
	placeholder: 'Wpisz swoją odpowiedź',
	scaleOptions: [
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
			label: 'Zgadzam się ',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			content: '4',
		},
		{
			value: '5',
			label: 'Nie wiem',
			meaning: SURVEY_TOGGLE_MEANINGS.NEUTRAL,
			standalone: true,
		},
	],
} as Args;

const argTypes = {
	elaborationValue: { control: { type: 'text' } },
	explanation: { control: { type: 'text' } },
	selectedValue: { control: false },
	scaleOptions: { control: { type: 'object' } },
	state: {
		control: { type: 'select', options: Object.values(SURVEY_QUESTION_STATES) },
		defaultValue: SURVEY_QUESTION_STATES.DEFAULT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739',
	},
};

const StoryLimitedWidthTemplate: StoryFn<typeof SurveyQuestionScale> = (argTypes) => ({
	components: { SurveyQuestionScale },
	props: Object.keys(argTypes),
	data() {
		return { selectedValue: null };
	},
	template:
		'<div style="max-width: 600px"><survey-question-scale :title="title" :scale-options="scaleOptions" :elaboration-value="elaborationValue" :elaborationLabel="elaborationLabel" :placeholder="placeholder" :selected-value="selectedValue" :state="state" @select-change="selectedValue = $event" @elaboration-change="elaborationValue = $event">' +
		'<div v-if="explanation" slot="explanation" v-html="explanation" />' +
		'</survey-question-scale></div>',
});

export const LimitedWidth = StoryLimitedWidthTemplate.bind({});

LimitedWidth.args = {
	title: "Main question write here if it's long it will collapse.",
	elaborationLabel: 'Jeśli chcesz, uzasadnij lub rozwiń swoją ocenę',
	elaborationValue: '',
	explanation:
		'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3>\n<div>Wyczerpujące materiały dają poczucie pełnego zrozumienia, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',
	placeholder: 'Wpisz swoją odpowiedź',
	scaleOptions: [
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
			label: 'Zgadzam się ',
			meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			content: '4',
		},
		{
			value: '5',
			label: 'Nie wiem',
			meaning: SURVEY_TOGGLE_MEANINGS.NEUTRAL,
			standalone: true,
		},
	],
} as Args;

const StorySevenOptionsTemplate: StoryFn<typeof SurveyQuestionScale> = (argTypes) => ({
	components: { SurveyQuestionScale },
	props: Object.keys(argTypes),
	data() {
		return { selectedValue: '', elaboration: '' };
	},
	created() {
		this.scaleOptions = [
			{
				value: '1',
				label: 'Nie zgadzam się',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '1',
			},
			{
				value: '2',
				label: '',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '2',
			},
			{
				value: '3',
				label: '',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '3',
			},
			{
				value: '4',
				label: 'Trochę',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '4',
			},
			{
				value: '5',
				label: '',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '5',
			},
			{
				value: '6',
				label: '',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '6',
			},
			{
				value: '7',
				label: 'Zgadzam się',
				meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
				content: '7',
			},
		];
	},
	template:
		'<survey-question-scale title="title" :scale-options="scaleOptions" elaborationLabel="elaborationLabel" :elaboration-value="elaboration" :selected-value="selectedValue" @select-change="selectedValue = $event" />',
});

export const SevenOptions = StorySevenOptionsTemplate.bind({});
