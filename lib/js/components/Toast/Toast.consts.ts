import { Value } from '../../utils/type.utils';

export const TOAST_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
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
	TOP_LEFT: 'topLeft',
	TOP_CENTER: 'topCenter',
	TOP_RIGHT: 'topRight',
	BOTTOM_LEFT: 'bottomLeft',
	BOTTOM_CENTER: 'bottomCenter',
	BOTTOM_RIGHT: 'bottomRight',
};

export type ToastPositions = Value<typeof TOAST_POSITIONS>;
