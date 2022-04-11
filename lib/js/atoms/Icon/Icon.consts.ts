import { FONTAWESOME_ICONS } from '../../icons/fontawesome';

export const ICON_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
	XX_LARGE: 'xx-large',
};

export const ICONS = {
	...FONTAWESOME_ICONS,
} as const;

export type IconKey = keyof typeof ICONS;
export type IconItem = typeof ICONS[IconKey];
