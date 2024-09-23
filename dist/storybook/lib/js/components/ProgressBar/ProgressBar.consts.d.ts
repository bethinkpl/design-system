export declare const PROGRESS_BAR_RANGE_COLORS: {
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
export declare const PROGRESS_BAR_BADGE_COLORS: {
    readonly PRIMARY: "primary";
    readonly NEUTRAL: "neutral";
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly FAIL: "fail";
};
export declare const PROGRESS_BAR_SIZES: {
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
    readonly XSMALL: "extra small";
};
export declare const PROGRESS_BAR_LABEL_TEXT_SIZES: {
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
};
export declare const PROGRESS_BAR_RADII: {
    DEFAULT: string;
    NONE: string;
};
export declare const PROGRESS_BAR_LAYOUTS: {
    DEFAULT: string;
    COMPACT: string;
};
export interface ProgressBarRange {
    color: typeof PROGRESS_BAR_RANGE_COLORS[keyof typeof PROGRESS_BAR_RANGE_COLORS];
    start: number;
    length: number;
}
