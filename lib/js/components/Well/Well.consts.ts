import { Value } from '../../utils/type.utils';
import { CONTAINER_RIBBON_COLORS, CONTAINER_RIBBON_SIZES } from '../ContainerRibbon';

export const WELL_PADDINGS = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type WellPadding = Value<typeof WELL_PADDINGS>;

export const WELL_COLORS = {
	ACCENT: 'accent',
	PRIMARY: 'primary',
	FAIL: 'fail',
	INFO: 'info',
	INVERTED: 'inverted',
	NEUTRAL: 'neutral',
	SUCCESS: 'success',
	WARNING: 'warning',
} as const;

export type WellColor = Value<typeof WELL_COLORS>;

export const WELL_DEFAULT_COLOR = WELL_COLORS.NEUTRAL;

export const WELL_RIBBON_COLORS = CONTAINER_RIBBON_COLORS;

export type WellRibbonColor = Value<typeof WELL_RIBBON_COLORS>;

export const WELL_RIBBON_SIZES = CONTAINER_RIBBON_SIZES;

export type WellRibbonSize = Value<typeof WELL_RIBBON_SIZES>;

export const WELL_RIBBON_POSITIONS = {
	TOP: 'top',
	LEFT: 'left',
} as const;

export type WellRibbonPosition = Value<typeof WELL_RIBBON_POSITIONS>;
