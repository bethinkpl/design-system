export const LAYOUT_CONTENT = {
	FULL_WIDTH: 'fullWidth',
	MAX_900: 'max900',
} as const;

export type LayoutContent = typeof LAYOUT_CONTENT[keyof typeof LAYOUT_CONTENT];
