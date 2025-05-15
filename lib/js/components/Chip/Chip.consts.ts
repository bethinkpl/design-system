import { Value } from '../../utils/type.utils';

export const CHIP_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
} as const;

export type ChipSize = Value<typeof CHIP_SIZES>;

export const CHIP_COLORS = {
	PRIMARY: 'primary',
	PRIMARY_STRONG: 'primaryStrong',
	NEUTRAL: 'neutral',
	FAIL: 'fail',
	DANGER: 'danger',
	SUCCESS: 'success',
	INVERTED: 'inverted',
	WARNING: 'warning',
	INFO: 'info',
} as const;

export type ChipColor = Value<typeof CHIP_COLORS>;

export const CHIP_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
} as const;

export type ChipState = Value<typeof CHIP_STATES>;

export const CHIP_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;

export type ChipRadius = Value<typeof CHIP_RADIUSES>;
