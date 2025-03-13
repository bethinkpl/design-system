export const BADGE_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
} as const;

export type BadgeSize = typeof BADGE_SIZES[keyof typeof BADGE_SIZES];

export const BADGE_COLORS = {
	PRIMARY: 'primary',
	SUCCESS: 'success',
	DANGER: 'danger',
	FAIL: 'fail',
	NEUTRAL: 'neutral',
};

export type BadgeColor = typeof BADGE_COLORS[keyof typeof BADGE_COLORS];

export const BADGE_ELEVATION_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
};

export type BadgeElevationSize = typeof BADGE_ELEVATION_SIZES[keyof typeof BADGE_ELEVATION_SIZES];
