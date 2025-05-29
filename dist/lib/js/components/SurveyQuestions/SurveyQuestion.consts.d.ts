import { Value } from '../../utils/type.utils';

export declare const SURVEY_QUESTION_STATES: {
    readonly DEFAULT: "default";
    readonly DISABLED: "disabled";
};
export type SurveyQuestionState = Value<typeof SURVEY_QUESTION_STATES>;
export declare const SURVEY_QUESTION_SCALE_CONTAINERS: {
    readonly ONE: "one";
    readonly TWO: "two";
};
export type SurveyQuestionScaleContainer = Value<typeof SURVEY_QUESTION_SCALE_CONTAINERS>;
