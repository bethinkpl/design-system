import { Value } from '../../utils/type.utils';

export const BADGE_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
} as const;

export type BadgeSize = Value<typeof BADGE_SIZES>;

export const BADGE_COLORS = {
	PRIMARY: 'primary',
	SUCCESS: 'success',
	DANGER: 'danger',
	FAIL: 'fail',
	NEUTRAL: 'neutral',
} as const;

export type BadgeColor = Value<typeof BADGE_COLORS>;

export const BADGE_ELEVATIONS = {
	NONE: 'none',
	X_SMALL: 'x-small',
	SMALL: 'small',
} as const;

export type BadgeElevation = Value<typeof BADGE_ELEVATIONS>;
