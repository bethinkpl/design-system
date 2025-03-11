import { Value } from '../../../utils/type.utils';

export const OVERLAY_HEADER_BORDER_COLORS = {
	NEUTRAL_GHOST: 'neutralGhost',
	NEUTRAL: 'neutral',
	SUCCESS: 'success',
	FAIL: 'fail',
	WARNING: 'warning',
} as const;

export type OverlayHeaderBorderColor = Value<typeof OVERLAY_HEADER_BORDER_COLORS>;

export const OVERLAY_HEADER_STATES = {
	DEFAULT: 'default',
	LOADING: 'loading',
} as const;

export type OverlayHeaderState = Value<typeof OVERLAY_HEADER_STATES>;
