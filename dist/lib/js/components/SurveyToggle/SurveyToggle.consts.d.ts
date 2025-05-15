import { Value } from '../../utils/type.utils';

export declare const SURVEY_TOGGLE_MEANINGS: {
    readonly PRIMARY: "primary";
    readonly NEUTRAL: "neutral";
};
export type SurveyToggleMeaning = Value<typeof SURVEY_TOGGLE_MEANINGS>;
export declare const SURVEY_TOGGLE_STATUSES: {
    readonly DEFAULT: "default";
    readonly SELECTED: "selected";
};
export type SurveyToggleStatus = Value<typeof SURVEY_TOGGLE_STATUSES>;
export declare const SURVEY_TOGGLE_STATES: {
    readonly DEFAULT: "default";
    readonly HOVERED: "hovered";
    readonly DISABLED: "disabled";
};
export type SurveyToggleState = Value<typeof SURVEY_TOGGLE_STATES>;
