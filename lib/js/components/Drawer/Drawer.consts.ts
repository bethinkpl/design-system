export const DRAWER_POSITIONS = {
	LEFT: 'left',
	RIGHT: 'right',
} as const;

export type DrawerPosition = (typeof DRAWER_POSITIONS)[keyof typeof DRAWER_POSITIONS];

export const DRAWER_BACKGROUND_COLORS = {
	NONE: 'none',
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
} as const;

export type DrawerBackgroundColor =
	(typeof DRAWER_BACKGROUND_COLORS)[keyof typeof DRAWER_BACKGROUND_COLORS];
