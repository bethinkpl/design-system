import SurveyQuestionScale from './SurveyQuestionScale.vue';
import { SURVEY_TOGGLE_MEANINGS } from '../../SurveyToggle';
import { SURVEY_QUESTION_SCALE_CONTAINERS, SURVEY_QUESTION_STATES } from '../SurveyQuestion.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SurveyQuestions/SurveyQuestionScale',
	component: SurveyQuestionScale,
} as Meta<typeof SurveyQuestionScale>;

const StoryTemplate: StoryFn<typeof SurveyQuestionScale> = (args, { updateArgs }) => ({
	components: { SurveyQuestionScale },
	setup() {
		return { ...args };
	},
	template:
		'<survey-question-scale :title="title" :scale-options="scaleOptions" :elaboration-value="elaborationValue" :elaborationLabel="elaborationLabel" :placeholder="placeholder" :selected-value="selectedValue" :state="state" :containers="containers" @select-change="selectedValueUpdate" @elaboration-change="elaborationUpdate">' +
		'<template v-if="explanation" #explanation><div v-html="explanation" /></template>' +
		'</survey-question-scale>',
	methods: {
		elaborationUpdate(elaborationValue) {
			updateArgs({ elaborationValue });
		},
		selectedValueUpdate(selectedValue) {
			updateArgs({ selectedValue });
		},
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: "Main question write here if it's long it will collapse.",
	elaborationLabel: 'Jeśli chcesz, uzasadnij lub rozwiń swoją ocenę',
	elaborationValue: '',
	explanation:
		'<h3 style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3>\n<div>Wyczerpujące materiały dają poczucie pełnego zrozumienia, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',
	placeholder: 'Wpisz swoją odpowiedź',
	containers: SURVEY_QUESTION_SCALE_CONTAINERS.TWO,
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
	state: SURVEY_QUESTION_STATES.DEFAULT,
} as Args;

const argTypes = {
	elaborationValue: { control: 'text' },
	selectedValue: { control: false },
	explanation: { control: 'text' },
	containers: {
		control: 'select',
		options: Object.values(SURVEY_QUESTION_SCALE_CONTAINERS),
	},
	scaleOptions: { control: 'object' },
	state: {
		control: 'select',
		options: Object.values(SURVEY_QUESTION_STATES),
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

const argTypesDisabled = {
	elaborationValue: { control: false },
	explanation: { control: false },
	selectedValue: { control: false },
	scaleOptions: { control: false },
	state: { control: false },
	placeholder: { control: false },
	elaborationLabel: { control: false },
	title: { control: false },
	'elaboration-change': { control: false },
	'select-change': { control: false },
} as ArgTypes;

const StoryLimitedWidthTemplate: StoryFn<typeof SurveyQuestionScale> = (args, { updateArgs }) => ({
	components: { SurveyQuestionScale },
	setup() {
		return { ...args };
	},
	template:
		'<div style="max-width: 600px"><survey-question-scale :title="title" :scale-options="scaleOptions" :elaboration-value="elaborationValue" :elaborationLabel="elaborationLabel" :placeholder="placeholder" :selected-value="selectedValue" :containers="containers" :state="state" @select-change="selectedValueUpdate" @elaboration-change="elaborationUpdate">' +
		'<template v-if="explanation" #explanation><div v-html="explanation" /></template>' +
		'</survey-question-scale></div>',
	methods: {
		elaborationUpdate(elaborationValue) {
			updateArgs({ elaborationValue });
		},
		selectedValueUpdate(selectedValue) {
			updateArgs({ selectedValue });
		},
	},
});

export const LimitedWidth = StoryLimitedWidthTemplate.bind({});
LimitedWidth.argTypes = {
	...argTypesDisabled,
	containers: {
		control: 'select',
		options: Object.values(SURVEY_QUESTION_SCALE_CONTAINERS),
	},
} as ArgTypes;

LimitedWidth.args = {
	title: "Main question write here if it's long it will collapse.",
	elaborationLabel: 'Jeśli chcesz, uzasadnij lub rozwiń swoją ocenę',
	elaborationValue: '',
	explanation:
		'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3>\n<div>Wyczerpujące materiały dają poczucie pełnego zrozumienia, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',
	placeholder: 'Wpisz swoją odpowiedź',
	containers: SURVEY_QUESTION_SCALE_CONTAINERS.TWO,
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

const StorySevenOptionsTemplate: StoryFn<typeof SurveyQuestionScale> = (args, { updateArgs }) => ({
	components: { SurveyQuestionScale },
	setup() {
		return { ...args };
	},
	data() {
		return { elaboration: '' };
	},
	template:
		'<survey-question-scale title="title" :scale-options="scaleOptions" elaborationLabel="elaborationLabel" :elaboration-value="elaboration" :selected-value="selectedValue" :containers="containers" @select-change="selectedValueUpdate" />',
	methods: {
		selectedValueUpdate(selectedValue) {
			updateArgs({ selectedValue });
		},
	},
});

export const SevenOptions = StorySevenOptionsTemplate.bind({});
SevenOptions.argTypes = {
	...argTypesDisabled,
	containers: {
		control: 'select',
		options: Object.values(SURVEY_QUESTION_SCALE_CONTAINERS),
	},
} as ArgTypes;

SevenOptions.args = {
	containers: SURVEY_QUESTION_SCALE_CONTAINERS.ONE,
	scaleOptions: [
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
	],
} as Args;
