import { Value } from '../../utils/type.utils';

export const PROGRESS_BAR_LEGEND_ITEM_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type ProgressBarLegendItemSize = Value<typeof PROGRESS_BAR_LEGEND_ITEM_SIZES>;
