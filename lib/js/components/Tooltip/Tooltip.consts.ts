export const TOOLTIP_PLACEMENTS = {
	TOP: 'top',
	BOTTOM: 'bottom',
	LEFT: 'left',
	RIGHT: 'right',
} as const;
export type TooltipPlacement = typeof TOOLTIP_PLACEMENTS[keyof typeof TOOLTIP_PLACEMENTS];
