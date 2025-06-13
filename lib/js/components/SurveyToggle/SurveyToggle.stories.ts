import SurveyToggle from './SurveyToggle.vue';
import {
	SURVEY_TOGGLE_MEANINGS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from './SurveyToggle.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';

export default {
	title: 'Components/SurveyToggle',
	component: SurveyToggle,
} as Meta<typeof SurveyToggle>;

const StoryTemplate: StoryFn<typeof SurveyToggle> = (args) => ({
	components: { SurveyToggle },
	setup() {
		return args;
	},
	template:
		'<div style="background-color:#f6f6f8"><survey-toggle :label="label"  :meaning="meaning" :content-text="contentText" :selected-icon="ICONS[selectedIcon]" :status="status" :state="state" /></div>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	label: 'label',
	contentText: '1',
	meaning: SURVEY_TOGGLE_MEANINGS.PRIMARY,
	status: SURVEY_TOGGLE_STATUSES.DEFAULT,
	state: SURVEY_TOGGLE_STATES.DEFAULT,
	selectedIcon: 'FA_CHECK_SOLID',
} as Args;

const argTypes = {
	label: { control: 'text' },
	contentText: { control: 'text' },
	meaning: {
		control: 'select',
		options: Object.values(SURVEY_TOGGLE_MEANINGS),
	},
	status: {
		control: 'select',
		options: Object.values(SURVEY_TOGGLE_STATUSES),
	},
	state: {
		control: 'select',
		options: Object.values(SURVEY_TOGGLE_STATES),
	},
	selectedIcon: {
		control: 'select',
		options: Object.keys(ICONS),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A35210',
	},
};
