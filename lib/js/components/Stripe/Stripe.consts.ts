import { Value } from '../../utils/type.utils';

export const STRIPE_COLORS = {
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INFO: 'info',
};

export type StripeColors = Value<typeof STRIPE_COLORS>;

export const STRIPE_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
};

export type StripeSizes = Value<typeof STRIPE_SIZES>;
