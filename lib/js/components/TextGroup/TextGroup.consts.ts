export const TEXT_GROUP_COLORS = {
	NEUTRAL: 'neutral',
} as const;

export const TEXT_GROUP_LOADING_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};

export const TEXT_GROUP_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
};

export const TEXT_GROUP_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export type TextGroupColor = typeof TEXT_GROUP_COLORS[keyof typeof TEXT_GROUP_COLORS];
export type TextGroupLoadingSize =
	typeof TEXT_GROUP_LOADING_SIZES[keyof typeof TEXT_GROUP_LOADING_SIZES];
export type TextGroupSize = typeof TEXT_GROUP_SIZES[keyof typeof TEXT_GROUP_SIZES];
export type TextGroupState = typeof TEXT_GROUP_STATES[keyof typeof TEXT_GROUP_STATES];
