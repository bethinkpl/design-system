export const CHECKBOX_SIZES = {
	MEDIUM: 'medium',
	SMALL: 'small',
	X_SMALL: 'extra small',
} as const;

export type CheckboxSizeKey = keyof typeof CHECKBOX_SIZES;
export type CheckboxSizeValue = typeof CHECKBOX_SIZES[CheckboxSizeKey];
