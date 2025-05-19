export const CHIP_SIZES = {
	X_SMALL: 'x-small',
	SMALL: 'small',
} as const;

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

export const CHIP_DEFAULT_COLOR = CHIP_COLORS.NEUTRAL;

export const CHIP_STATES = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
} as const;

export const CHIP_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;
