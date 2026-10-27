import { Value } from '../../utils/type.utils';

export const POPOVER_COLORS = {
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
} as const;

export type PopoverColor = Value<typeof POPOVER_COLORS>;

export const POPOVER_SIDES = {
	TOP: 'top',
	RIGHT: 'right',
	BOTTOM: 'bottom',
	LEFT: 'left',
} as const;

export type PopoverSide = Value<typeof POPOVER_SIDES>;

export const POPOVER_ALIGNS = {
	START: 'start',
	CENTER: 'center',
	END: 'end',
} as const;

export type PopoverAlign = Value<typeof POPOVER_ALIGNS>;

export const POPOVER_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type PopoverSize = Value<typeof POPOVER_SIZES>;
