import { Value } from '../../utils/type.utils';

export const SURVEY_QUESTION_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
} as const;

export type SurveyQuestionState = Value<typeof SURVEY_QUESTION_STATES>;

export const SURVEY_QUESTION_SCALE_CONTAINERS = {
	ONE: 'one',
	TWO: 'two',
} as const;

export type SurveyQuestionScaleContainer = Value<typeof SURVEY_QUESTION_SCALE_CONTAINERS>;
