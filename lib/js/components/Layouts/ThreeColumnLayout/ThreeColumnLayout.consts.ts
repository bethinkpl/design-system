export const THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE = {
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type ThreeColumnLayoutRightColumnSize =
	typeof THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE[keyof typeof THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE];
