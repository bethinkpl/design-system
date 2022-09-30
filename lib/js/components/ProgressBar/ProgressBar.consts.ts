export const PROGRESS_BAR_COLORS = {
	NEUTRAL: 'neutral',
	INFO: 'info',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	WARNING: 'warning',
	FAIL: 'fail',
} as const;

export const PROGRESS_BAR_SIZES = {
	MEDIUM: 'medium',
	SMALL: 'small',
	XSMALL: 'extra small',
} as const;

export const PROGRESS_BAR_RADII = {
	DEFAULT: 'default',
	NONE: 'none',
};

export const PROGRESS_BAR_LAYOUTS = {
	DEFAULT: 'default',
	COMPACT: 'compact',
};

export const PROGRESS_BAR_LAYERS = {
	ONE: 1,
	TWO: 2,
};

export const PROGRESS_BAR_COLOR_SCHEMES = {
	DEFAULT: 'default',
	MEDIUM: 'medium',
	MEDIUM_NEUTRAL: 'medium-neutral',
};

export interface Ranges {
	layer: Number;
	from: Number;
	length: Number;
}
