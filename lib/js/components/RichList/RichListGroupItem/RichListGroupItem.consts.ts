export const RICH_LIST_GROUP_ITEM_BORDER_COLOR = {
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

export type RichListGroupItemBorderColor =
	typeof RICH_LIST_GROUP_ITEM_BORDER_COLOR[keyof typeof RICH_LIST_GROUP_ITEM_BORDER_COLOR];
