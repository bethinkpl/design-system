import { Value } from '../../utils/type.utils';

export const SURVEY_TOGGLE_MEANINGS = {
	PRIMARY: 'primary',
	NEUTRAL: 'neutral',
} as const;

export type SurveyToggleMeaning = Value<typeof SURVEY_TOGGLE_MEANINGS>;

export const SURVEY_TOGGLE_STATUSES = {
	DEFAULT: 'default',
	SELECTED: 'selected',
} as const;

export type SurveyToggleStatus = Value<typeof SURVEY_TOGGLE_STATUSES>;

export const SURVEY_TOGGLE_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	DISABLED: 'disabled',
} as const;

export type SurveyToggleState = Value<typeof SURVEY_TOGGLE_STATES>;
