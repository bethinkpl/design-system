import { Value } from '../../utils/type.utils';

export const LOADING_BAR_COLORS = {
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INFO: 'info',
};

export type LoadingBarColors = Value<typeof LOADING_BAR_COLORS>;

export const LOADING_BAR_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};

export type LoadingBarSizes = Value<typeof LOADING_BAR_SIZES>;
