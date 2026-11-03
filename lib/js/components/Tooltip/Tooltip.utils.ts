import { TOOLTIP_ARROW_EDGE_INSET_PX, TOOLTIP_VIEWPORT_MARGIN_PX } from './Tooltip.consts';

export const getTooltipViewportFitShift = (
	tooltipLeft: number,
	tooltipWidth: number,
	viewportWidth: number,
	margin: number = TOOLTIP_VIEWPORT_MARGIN_PX,
): number => {
	const maxLeft = Math.max(viewportWidth - tooltipWidth - margin, margin);
	const fittedLeft = Math.min(Math.max(tooltipLeft, margin), maxLeft);

	return fittedLeft - tooltipLeft;
};

export const getTooltipArrowOffset = (
	tooltipWidth: number,
	shift: number,
	inset: number = TOOLTIP_ARROW_EDGE_INSET_PX,
): number => {
	const maxOffset = Math.max(tooltipWidth - inset, inset);

	return Math.min(Math.max(tooltipWidth / 2 - shift, inset), maxOffset);
};
