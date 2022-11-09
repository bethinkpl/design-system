export const typographyPrefix: string = 'typography-';
export const tokensKey: string = 'TypographyTokens';
export const excludedKeys: Array<string> = ['fontFamilies', 'TypographyTokens'];
export const fontFamilyProperty: string = 'font-families';
export const fontWeightKey: string = 'fontWeight';
export const transformCssProperty: { [key: string]: string } = {
	'text-case': 'text-transform',
	'-regular': '-normal',
};
export const importVariables: string = "@import 'variables';";
export const jsonAttributeToCssProperty: { [key: string]: string } = {
	lineHeight: 'line-height',
	fontWeight: 'font-weight',
	fontSize: 'font-size',
	letterSpacing: 'letter-spacing',
	textTransform: 'text-transform',
	textDecoration: 'text-decoration',
};
export const resultCssAdditionalLines: Array<string> = [
	'--typography-font-weight-normal: 400;',
	'--typography-font-weight-bold: 700;',
	'--typography-font-weight-light: 300;',
	'--typography-font-style-normal: normal;',
	'--typography-font-style-italic: italic;',
	'}',
];
export const resultScssAdditionalLines: Array<string> = [
	'$typography-font-weight-normal: var(--typography-font-weight-normal);',
	'$typography-font-weight-bold: var(--typography-font-weight-bold);',
	'$typography-font-weight-light: var(--typography-font-weight-light);',
	'$typography-font-style-normal: var(--typography-font-style-normal);',
	'$typography-font-style-italic: var(--typography-font-style-italic);',
];

export const tokensTypographyInputAttributes = {
	fontSize: 'fontSize',
	lineHeight: 'lineHeight',
	letterSpacing: 'letterSpacing',
	textTransform: 'textTransform',
	textDecoration: 'textDecoration',
} as const;
