export const TOOLTIP_PLACEMENTS = {
	TOP: 'top',
	BOTTOM: 'bottom',
	LEFT: 'left',
	RIGHT: 'right',
} as const;
export type TooltipPlacement = (typeof TOOLTIP_PLACEMENTS)[keyof typeof TOOLTIP_PLACEMENTS];

export const TOOLTIP_MAX_WIDTH_PX = 900;

export const TOOLTIP_VIEWPORT_MARGIN_PX = 8;

export const TOOLTIP_ARROW_EDGE_INSET_PX = 12;
