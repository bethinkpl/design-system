export const LAYOUT_CONTENT_SIZE = {
	FULL_WIDTH: 'fullWidth',
	MAX_900: 'max900',
} as const;

export type LayoutContentSize = typeof LAYOUT_CONTENT_SIZE[keyof typeof LAYOUT_CONTENT_SIZE];
export const LAYOUT_RIGHT_COLUMN_SIZE = {
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type LayoutRightColumnSize =
	typeof LAYOUT_RIGHT_COLUMN_SIZE[keyof typeof LAYOUT_RIGHT_COLUMN_SIZE];
