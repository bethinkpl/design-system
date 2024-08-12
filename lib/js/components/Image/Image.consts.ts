export const IMAGE_FITS = {
	CONTAIN: 'contain',
	COVER: 'cover',
};

export type ImageFit = typeof IMAGE_FITS[keyof typeof IMAGE_FITS];
