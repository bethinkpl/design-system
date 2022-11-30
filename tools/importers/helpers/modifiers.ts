export const pascalCase = (str: string) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
			return word.toUpperCase();
		})
		.replace(/\s+/g, '');
};

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const kebabize = (str) => {
	const firstChar: string = str[0];
	if (firstChar === firstChar.toUpperCase() || Number(firstChar)) {
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
