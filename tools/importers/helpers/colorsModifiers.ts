export const makeHexShortcut = (hex: string) => {
	if (hex.split('').every((char) => char === hex[1] || char === '#')) {
		hex = '#' + `${hex[1]}${hex[2]}${hex[3]}`;
	}
	return hex;
};

export const hexToRgb = (hex: string): string | null => {
	if (typeof hex !== 'string' || ![4, 7].includes(hex.length)) {
		return null;
	}
	if (hex.length === 4) {
		hex = hex + hex[1] + hex[2] + hex[3];
	}
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? '' +
				parseInt(result[1], 16) +
				', ' +
				parseInt(result[2], 16) +
				', ' +
				parseInt(result[3], 16)
		: null;
};
