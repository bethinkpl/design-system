export const LAYOUT_RIGHT_COLUMN_SIZE = {
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type LayoutRightColumnSize =
	typeof LAYOUT_RIGHT_COLUMN_SIZE[keyof typeof LAYOUT_RIGHT_COLUMN_SIZE];
