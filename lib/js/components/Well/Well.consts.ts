import { Value } from '../../utils/type.utils';

export const WELL_PADDINGS = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type WellPadding = Value<typeof WELL_PADDINGS>;

export const WELL_COLORS = {
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	FAIL: 'fail',
	DANGER: 'danger',
	ACCENT: 'accent',
} as const;

export type WellColor = Value<typeof WELL_COLORS>;

export const WELL_DEFAULT_COLOR = WELL_COLORS.NEUTRAL;
