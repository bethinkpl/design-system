import SurveyToggle from './SurveyToggle.vue';
import {
	SURVEY_TOGGLE_MEANINGS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from './SurveyToggle.consts';
import { ICONS } from '../Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/SurveyToggle',
	component: SurveyToggle,
} as Meta<typeof SurveyToggle>;

const StoryTemplate: StoryFn<typeof SurveyToggle> = (argTypes) => ({
	components: { SurveyToggle },
	props: Object.keys(argTypes),
	template:
		'<div style="background-color:#f6f6f8"><survey-toggle :label="label"  :meaning="meaning" :content-text="contentText" :selected-icon="ICONS[selectedIcon]" :status="status" :state="state" /></div>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {
	label: { control: { type: 'text' }, defaultValue: 'label' },
	contentText: { control: { type: 'text' }, defaultValue: '1' },
	meaning: {
		control: { type: 'select', options: Object.values(SURVEY_TOGGLE_MEANINGS) },
		defaultValue: SURVEY_TOGGLE_MEANINGS.PRIMARY,
	},
	status: {
		control: { type: 'select', options: Object.values(SURVEY_TOGGLE_STATUSES) },
		defaultValue: SURVEY_TOGGLE_STATUSES.DEFAULT,
	},
	state: {
		control: { type: 'select', options: Object.values(SURVEY_TOGGLE_STATES) },
		defaultValue: SURVEY_TOGGLE_STATES.DEFAULT,
	},
	selectedIcon: {
		control: { type: 'select', options: Object.keys(ICONS) },
		defaultValue: 'FA_CHECK_SOLID',
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
