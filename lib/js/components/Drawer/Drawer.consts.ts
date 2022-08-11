export const DRAWER_POSITIONS = {
	LEFT: 'left',
	RIGHT: 'right',
} as const;

export type DrawerPosition = typeof DRAWER_POSITIONS[keyof typeof DRAWER_POSITIONS];
