export const AVATAR_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
} as const;

export type AvatarSize = typeof AVATAR_SIZES[keyof typeof AVATAR_SIZES];
