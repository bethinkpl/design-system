import { Value } from '../../../utils/type.utils';

export const FEATURE_ICON_SIZES = {
	X_SMALL: 'xSmall',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'xLarge',
} as const;

export type FeatureIconSize = Value<typeof FEATURE_ICON_SIZES>;

export const FEATURE_ICON_COLOR = {
	DANGER: 'danger',
	INFO: 'info',
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutralWeak',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	WARNING: 'warning',
	FAIL: 'fail',
} as const;

export type FeatureIconColor = Value<typeof FEATURE_ICON_COLOR>;
