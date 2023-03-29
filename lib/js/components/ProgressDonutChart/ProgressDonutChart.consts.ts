export const PROGRESS_DONUT_CHART_RANGE_COLORS = {
	PRIMARY_MEDIUM: 'primaryMedium',
	PRIMARY: 'primary',
	PRIMARY_WEAK: 'primaryWeak',
	PRIMARY_GHOST: 'primaryGhost',

	NEUTRAL_MEDIUM: 'neutralMedium',
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutralWeak',
	NEUTRAL_GHOST: 'neutralGhost',

	INFO_MEDIUM: 'infoMedium',
	INFO: 'info',
	INFO_WEAK: 'infoWeak',
	INFO_GHOST: 'infoGhost',

	SUCCESS_MEDIUM: 'successMedium',
	SUCCESS: 'success',
	SUCCESS_WEAK: 'successWeak',
	SUCCESS_GHOST: 'successGhost',

	WARNING_MEDIUM: 'warningMedium',
	WARNING: 'warning',
	WARNING_WEAK: 'warningWeak',
	WARNING_GHOST: 'warningGhost',

	FAIL_MEDIUM: 'failMedium',
	FAIL: 'fail',
	FAIL_WEAK: 'failWeak',
	FAIL_GHOST: 'failGhost',
} as const;

export const PROGRESS_DONUT_CHART_STATES = {
	DEFAULT: 'default',
	LOADING: 'loading',
};

export interface ProgressDonutChartRange {
	color: typeof PROGRESS_DONUT_CHART_RANGE_COLORS[keyof typeof PROGRESS_DONUT_CHART_RANGE_COLORS];
	start: number;
	length: number;
}
