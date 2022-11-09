const makeHexShortcut = (hex: string) => {
	if (hex.split('').every((char) => char === hex[1] || char === '#')) {
		hex = '#' + `${hex[1]}${hex[2]}${hex[3]}`;
	}
	return hex;
};

exports.makeHexShortcut = makeHexShortcut;
