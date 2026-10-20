import { Value } from '../../utils/type.utils';

export const POP_OVER_COLORS = {
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
} as const;

export type PopOverColor = Value<typeof POP_OVER_COLORS>;

export const POP_OVER_TRIGGER_ACTIONS = {
	CLICK: 'click',
	HOVER: 'hover',
	NONE: 'none',
} as const;

export type PopOverTriggerAction = Value<typeof POP_OVER_TRIGGER_ACTIONS>;

export const POP_OVER_SIDES = {
	TOP: 'top',
	RIGHT: 'right',
	BOTTOM: 'bottom',
	LEFT: 'left',
} as const;

export type PopOverSide = Value<typeof POP_OVER_SIDES>;

export const POP_OVER_ALIGNS = {
	START: 'start',
	CENTER: 'center',
	END: 'end',
} as const;

export type PopOverAlign = Value<typeof POP_OVER_ALIGNS>;

export const POP_OVER_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type PopOverSize = Value<typeof POP_OVER_SIZES>;
