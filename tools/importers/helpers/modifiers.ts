const camelize = (str: string) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, '');
};

const makeHexShortcut = (hex: string) => {
	if (hex.split('').every((char) => char === hex[1] || char === '#')) {
		hex = '#' + `${hex[1]}${hex[2]}${hex[3]}`;
	}
	return hex;
};

const cssFileFirstLine = (isTheme: boolean, themeName: string | undefined) => {
	return isTheme ? '.theme-' + themeName + ' {' : ':root {';
};

exports.makeHexShortcut = makeHexShortcut;
exports.camelize = camelize;
exports.cssFileFirstLine = cssFileFirstLine;
