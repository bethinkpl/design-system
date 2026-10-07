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

export const POP_OVER_PLACEMENTS = {
	TOP: 'top',
	BOTTOM: 'bottom',
	LEFT: 'left',
	RIGHT: 'right',
	BOTTOM_START: 'bottom-start',
	BOTTOM_END: 'bottom-end',
} as const;

export type PopOverPlacement = Value<typeof POP_OVER_PLACEMENTS>;

export const POP_OVER_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type PopOverSize = Value<typeof POP_OVER_SIZES>;
