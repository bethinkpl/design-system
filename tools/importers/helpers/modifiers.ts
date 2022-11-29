export const pascalCase = (str: string) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
			return word.toUpperCase();
		})
		.replace(/\s+/g, '');
};

export const camelize = (str: string) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, '');
};

export const kebabize = (str) => {
	if (str.length < 3) {
		return str;
	}
	return str
		.split('')
		.map((letter, idx) => {
			return letter.toUpperCase() === letter
				? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
				: letter;
		})
		.join('');
};

export const cssFileFirstLine = (isTheme: boolean, themeName: string | undefined) => {
	return isTheme ? '.theme-' + themeName + ' {' : cssFileRootFirstLine();
};

export const cssFileRootFirstLine = () => {
	return ':root {';
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
