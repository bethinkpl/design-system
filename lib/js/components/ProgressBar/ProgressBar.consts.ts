export const PROGRESS_BAR_RANGE_COLORS = {
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

export const PROGRESS_BAR_BADGE_COLORS = {
	PRIMARY: 'primary',
	NEUTRAL: 'neutral',
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	FAIL: 'fail',
} as const;

export const PROGRESS_BAR_SIZES = {
	MEDIUM: 'medium',
	SMALL: 'small',
	XSMALL: 'extra small',
} as const;

export const PROGRESS_BAR_LABEL_TEXT_SIZES = {
	MEDIUM: 'medium',
	SMALL: 'small',
} as const;

export const PROGRESS_BAR_RADII = {
	DEFAULT: 'default',
	NONE: 'none',
};

export const PROGRESS_BAR_LAYOUTS = {
	DEFAULT: 'default',
	COMPACT: 'compact',
};

export interface ProgressBarRange {
	color: typeof PROGRESS_BAR_RANGE_COLORS[keyof typeof PROGRESS_BAR_RANGE_COLORS];
	start: Number;
	length: Number;
}
