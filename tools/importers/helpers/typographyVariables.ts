const typographyPrefix: string = 'typography-';
const tokensKey: string = 'TypographyTokens';
const excludedKeys: Array<string> = ['fontFamilies', 'TypographyTokens'];
const fontFamilyProperty: string = 'font-families';
const fontWeightKey: string = 'fontWeight';
const transformCssProperty: { [key: string]: string } = {
	'text-case': 'text-transform',
	'-regular': '-normal',
};
const importVariables: string = "@import 'variables';";
const jsonKeyToCssProperty: { [key: string]: string } = {
	lineHeight: 'line-height',
	fontWeight: 'font-weight',
	fontSize: 'font-size',
	letterSpacing: 'letter-spacing',
	textCase: 'text-transform',
	textDecoration: 'text-decoration',
};

exports.typographyPrefix = typographyPrefix;
exports.tokensKey = tokensKey;
exports.excludedKeys = excludedKeys;
exports.fontFamilyProperty = fontFamilyProperty;
exports.fontWeightKey = fontWeightKey;
exports.transformCssProperty = transformCssProperty;
exports.jsonKeyToCssProperty = jsonKeyToCssProperty;
exports.importVariables = importVariables;
