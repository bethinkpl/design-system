export declare const PROGRESS_DONUT_CHART_RANGE_COLORS: {
    readonly PRIMARY_MEDIUM: "primaryMedium";
    readonly PRIMARY: "primary";
    readonly PRIMARY_WEAK: "primaryWeak";
    readonly PRIMARY_GHOST: "primaryGhost";
    readonly NEUTRAL_MEDIUM: "neutralMedium";
    readonly NEUTRAL: "neutral";
    readonly NEUTRAL_WEAK: "neutralWeak";
    readonly NEUTRAL_GHOST: "neutralGhost";
    readonly INFO_MEDIUM: "infoMedium";
    readonly INFO: "info";
    readonly INFO_WEAK: "infoWeak";
    readonly INFO_GHOST: "infoGhost";
    readonly SUCCESS_MEDIUM: "successMedium";
    readonly SUCCESS: "success";
    readonly SUCCESS_WEAK: "successWeak";
    readonly SUCCESS_GHOST: "successGhost";
    readonly WARNING_MEDIUM: "warningMedium";
    readonly WARNING: "warning";
    readonly WARNING_WEAK: "warningWeak";
    readonly WARNING_GHOST: "warningGhost";
    readonly FAIL_MEDIUM: "failMedium";
    readonly FAIL: "fail";
    readonly FAIL_WEAK: "failWeak";
    readonly FAIL_GHOST: "failGhost";
};
export declare const PROGRESS_DONUT_CHART_STATES: {
    DEFAULT: string;
    LOADING: string;
    DONE: string;
    OVERAGE: string;
};
export type ProgressDonutChartState = typeof PROGRESS_DONUT_CHART_STATES[keyof typeof PROGRESS_DONUT_CHART_STATES];
export interface ProgressDonutChartRange {
    color: typeof PROGRESS_DONUT_CHART_RANGE_COLORS[keyof typeof PROGRESS_DONUT_CHART_RANGE_COLORS];
    start: number;
    length: number;
}
