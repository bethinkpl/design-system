export const BANNER_COLORS = {
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	FAIL: 'fail',
	DANGER: 'danger',
} as const;

export type BannerColor = typeof BANNER_COLORS[keyof typeof BANNER_COLORS];

export const BANNER_LAYOUTS = {
	HORIZONTAL: 'horizontal',
	VERTICAL: 'vertical',
} as const;

export type BannerLayout = typeof BANNER_LAYOUTS[keyof typeof BANNER_LAYOUTS];
