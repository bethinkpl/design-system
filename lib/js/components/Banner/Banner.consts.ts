import { Value } from '../../utils/type.utils';

export const BANNER_COLORS = {
	DEFAULT: 'default',
	NEUTRAL: 'neutral',
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	FAIL: 'fail',
	DANGER: 'danger',
} as const;

export type BannerColor = Value<typeof BANNER_COLORS>;

export const BANNER_LAYOUTS = {
	HORIZONTAL: 'horizontal',
	VERTICAL: 'vertical',
} as const;

export type BannerLayout = Value<typeof BANNER_LAYOUTS>;
