import { Value } from '../../utils/type.utils';

export const RIPPLE_COLORS = {
	ACCENT: 'accent',
	DANGER: 'danger',
	DEFAULT: 'default',
	FAIL: 'fail',
	INFO: 'info',
	INVERTED: 'inverted',
	NEUTRAL: 'neutral',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	WARNING: 'warning',
};

export type RippleColor = Value<typeof RIPPLE_COLORS>;
