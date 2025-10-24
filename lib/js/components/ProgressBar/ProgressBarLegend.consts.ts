import { Value } from '../../utils/type.utils';

export const PROGRESS_BAR_LEGEND_LAYOUTS = {
	DEFAULT: 'default',
	COMPACT: 'compact',
} as const;

export type ProgressBarLegendLayout = Value<typeof PROGRESS_BAR_LEGEND_LAYOUTS>;

export const PROGRESS_BAR_LEGEND_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type ProgressBarLegendSize = Value<typeof PROGRESS_BAR_LEGEND_SIZES>;
