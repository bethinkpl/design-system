export const RICH_LIST_ITEM_TYPE = {
	DEFAULT: 'default',
	FLAT: 'flat',
} as const;

export type RichListItemType = typeof RICH_LIST_ITEM_TYPE[keyof typeof RICH_LIST_ITEM_TYPE];

export const RICH_LIST_ITEM_STATE = {
	DEFAULT: 'default',
	LOADING: 'loading',
} as const;

export type RichListItemState = typeof RICH_LIST_ITEM_STATE[keyof typeof RICH_LIST_ITEM_STATE];

export const RICH_LIST_ITEM_SIZE = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;

export type RichListItemSize = typeof RICH_LIST_ITEM_SIZE[keyof typeof RICH_LIST_ITEM_SIZE];

export const RICH_LIST_ITEM_ICON_COLOR = {
	DEFAULT: 'default',
	INVERTED: 'inverted',
	PRIMARY: 'primary',
	PRIMARY_WEAK: 'primary-weak',
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutral-weak',
	DANGER: 'danger',
	FAIL: 'fail',
	WARNING: 'warning',
	SUCCESS: 'success',
	INFO: 'info',
	ACCENT: 'accent',
} as const;

export type RichListItemIconColor =
	typeof RICH_LIST_ITEM_ICON_COLOR[keyof typeof RICH_LIST_ITEM_ICON_COLOR];

export const RICH_LIST_ITEM_BORDER_COLOR = {
	DEFAULT: 'default',
	PRIMARY: 'primary',
	PRIMARY_WEAK: 'primary-weak',
	NEUTRAL_HEAVY: 'neutral-heavy',
	NEUTRAL_STRONG: 'neutral-strong',
	NEUTRAL: 'neutral',
	NEUTRAL_WEAK: 'neutral-weak',
	NEUTRAL_GHOST: 'neutral-ghost',
	DANGER: 'danger',
	DANGER_WEAK: 'danger-weak',
	FAIL: 'fail',
	FAIL_WEAK: 'fail-weak',
	WARNING: 'warning',
	WARNING_WEAK: 'warning-weak',
	SUCCESS: 'success',
	SUCCESS_WEAK: 'success-weak',
	INFO: 'info',
	INFO_WEAK: 'info-weak',
	ACCENT: 'accent',
	ACCENT_WEAK: 'accent-weak',
} as const;

export type RichListItemBorderColor =
	typeof RICH_LIST_ITEM_BORDER_COLOR[keyof typeof RICH_LIST_ITEM_BORDER_COLOR];
