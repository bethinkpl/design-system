export const DRAWER_HEADER_TITLE_COLORS = {
	NEUTRAL_STRONG: 'neutralStrong',
	NEUTRAL_WEAK: 'neutralWeak',
} as const;

export type DrawerHeaderTitleColor =
	typeof DRAWER_HEADER_TITLE_COLORS[keyof typeof DRAWER_HEADER_TITLE_COLORS];
