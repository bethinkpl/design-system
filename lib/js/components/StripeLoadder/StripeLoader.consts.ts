import { Value } from '../../utils/type.utils';

export const STRIPE_LOADER_COLORS = {
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INFO: 'info',
};

export type StripeLoaderColors = Value<typeof STRIPE_LOADER_COLORS>;

export const STRIPE_LOADER_SIZES = {
	X_SMALL: 'xSmall',
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type StripeLoaderSizes = Value<typeof STRIPE_LOADER_SIZES>;
