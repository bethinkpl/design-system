export const SKELETON_RADIUS_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};

export type SkeletonRadiusSize = typeof SKELETON_RADIUS_SIZES[keyof typeof SKELETON_RADIUS_SIZES];
