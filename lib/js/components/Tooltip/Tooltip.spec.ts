import { describe, expect, it } from 'vitest';
import { getTooltipArrowOffset, getTooltipViewportFitShift } from './Tooltip.utils';
import { TOOLTIP_VIEWPORT_MARGIN_PX } from './Tooltip.consts';

const VIEWPORT_MOBILE = 320;

describe('getTooltipViewportFitShift', () => {
	it.each([
		{ case: 'fits in the viewport', left: 20, width: 200, expected: 0 },
		{ case: 'overflows on the left', left: -76.5, width: 304, expected: 84.5 },
		{ case: 'overflows on the right', left: 100, width: 250, expected: -38 },
		{
			case: 'touches the left margin',
			left: TOOLTIP_VIEWPORT_MARGIN_PX,
			width: 100,
			expected: 0,
		},
	])('should return $expected when the tooltip $case', ({ left, width, expected }) => {
		expect(getTooltipViewportFitShift(left, width, VIEWPORT_MOBILE)).toBeCloseTo(expected);
	});

	it('should pin a tooltip wider than the viewport to the left margin', () => {
		const left = -170;
		const width = 490;

		const shift = getTooltipViewportFitShift(left, width, VIEWPORT_MOBILE);

		expect(left + shift).toBe(TOOLTIP_VIEWPORT_MARGIN_PX);
	});
});

describe('getTooltipArrowOffset', () => {
	it('should keep the arrow centered when the tooltip is not shifted', () => {
		expect(getTooltipArrowOffset(200, 0)).toBe(100);
	});

	it('should move the arrow against the shift so it stays over the trigger', () => {
		expect(getTooltipArrowOffset(200, 30)).toBe(70);
	});

	it.each([
		{ case: 'past the left edge', shift: 500, expected: 12 },
		{ case: 'past the right edge', shift: -500, expected: 188 },
	])('should not let the arrow slide $case', ({ shift, expected }) => {
		expect(getTooltipArrowOffset(200, shift)).toBe(expected);
	});
});
