export const camelize = (str: string) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, '');
};

export const cssFileFirstLine = (isTheme: boolean, themeName: string | undefined) => {
	return isTheme ? '.theme-' + themeName + ' {' : ':root {';
};

export const mixinNameLine = (token: string) => {
	return '\n@mixin ' + token + '() {';
};

export const tokenAsCssPropertyLine = (token: string) => {
	return '--token: ' + token + ';\n';
};

export const closeBracketLine = () => {
	return '}';
};
