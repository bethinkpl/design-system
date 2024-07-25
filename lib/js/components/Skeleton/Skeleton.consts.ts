export const SKELETON_RADIUSES = {
	SM: 'sm',
	MD: 'md',
	XL: 'xl',
};

export type SkeletonRadius = typeof SKELETON_RADIUSES[keyof typeof SKELETON_RADIUSES];
