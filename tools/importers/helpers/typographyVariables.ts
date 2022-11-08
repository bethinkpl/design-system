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
const resultCssAdditionalLines: Array<string> = [
	'--typography-font-weight-normal: normal;',
	'--typography-font-weight-bold: bold;',
	'--typography-font-weight-light: lighter;',
	'--typography-font-style-normal: normal;',
	'--typography-font-style-italic: italic;',
	'}\n',
];
const resultScssAdditionalLines: Array<string> = [
	'$typography-font-weight-normal: var(--typography-font-weight-normal);',
	'$typography-font-weight-bold: var(--typography-font-weight-bold);',
	'$typography-font-weight-light: var(--typography-font-weight-light);',
	'$typography-font-style-normal: var(--typography-font-style-normal);',
	'$typography-font-style-italic: var(--typography-font-style-italic);',
];

exports.typographyPrefix = typographyPrefix;
exports.tokensKey = tokensKey;
exports.excludedKeys = excludedKeys;
exports.fontFamilyProperty = fontFamilyProperty;
exports.fontWeightKey = fontWeightKey;
exports.transformCssProperty = transformCssProperty;
exports.jsonKeyToCssProperty = jsonKeyToCssProperty;
exports.importVariables = importVariables;
exports.resultCssAdditionalLines = resultCssAdditionalLines;
exports.resultScssAdditionalLines = resultScssAdditionalLines;
