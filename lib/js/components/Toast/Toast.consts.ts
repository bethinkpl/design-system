import { Value } from '../../utils/type.utils';

export const TOAST_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type ToastSizes = Value<typeof TOAST_SIZES>;

export const TOAST_COLORS = {
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	INFO: 'info',
};

export type ToastColors = Value<typeof TOAST_COLORS>;

export const TOAST_POSITIONS = {
	LEFT: 'left',
	CENTER: 'center',
	RIGHT: 'right',
};

export type ToastPositions = Value<typeof TOAST_POSITIONS>;
