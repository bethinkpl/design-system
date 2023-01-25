import SurveyQuestionOpenEnded from './SurveyQuestionOpenEnded.vue';
import { SURVEY_QUESTION_STATES } from '../SurveyQuestion.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SurveyQuestions/SurveyQuestionOpenEnded',
	component: SurveyQuestionOpenEnded,
} as Meta<typeof SurveyQuestionOpenEnded>;

const StoryTemplate: StoryFn<typeof SurveyQuestionOpenEnded> = (args, { updateArgs }) => ({
	components: { SurveyQuestionOpenEnded },
	setup() {
		return { ...args };
	},
	// TODO typing in textarea looses focus
	template:
		'<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder" @input="explanationUpdate">' +
		'<template v-if="explanation" #explanation><div v-html="explanation" /></template>' +
		'</survey-question-open-ended>',
	methods: {
		explanationUpdate(value) {
			updateArgs({ value });
		},
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	title: "Main question write here if it's long it will collapse.",
	value: 'value',
	explanation:
		'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',
	placeholder: 'Wpisz swoją odpowiedź',
	state: SURVEY_QUESTION_STATES.DEFAULT,
} as Args;

const argTypes = {
	explanation: { control: { type: 'text' } },
	state: { control: { type: 'select', options: Object.values(SURVEY_QUESTION_STATES) } },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739',
	},
};
