import { Value } from '../../utils/type.utils';

export const CONTAINER_RIBBON_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export type ContainerRibbonSize = Value<typeof CONTAINER_RIBBON_SIZES>;

export const CONTAINER_RIBBON_COLORS = {
	NEUTRAL_HEAVY: 'neutralHeavy',
	NEUTRAL_STRONG: 'neutralStrong',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger',
	FAIL: 'fail',
	INFO: 'info',
	TRANSPARENT: 'transparent',
} as const;

export type ContainerRibbonColor = Value<typeof CONTAINER_RIBBON_COLORS>;

export const CONTAINER_RIBBON_LAYOUTS = {
	VERTICAL: 'vertical',
	HORIZONTAL: 'horizontal',
} as const;

export type ContainerRibbonLayout = Value<typeof CONTAINER_RIBBON_LAYOUTS>;