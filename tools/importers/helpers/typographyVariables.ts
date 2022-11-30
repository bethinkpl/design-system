import { ITokenJsonObject } from './structures';

export const typographyPrefix: string = 'typography-';
export const tokensKey: string = 'TypographyTokens';
export const excludedKeys: Array<string> = ['fontFamilies', 'TypographyTokens'];
export const fontFamilyProperty: string = 'font-families';
export const textTransformProperty: string = 'font-transform';
export const textCaseProperty: string = 'text-case';
export const fontFamilyKey: string = 'fontFamily';
export const fontWeightKey: string = 'fontWeight';
export const tokenPartDisabled: string = 'default';
export const transformCssProperty: { [key: string]: string } = {
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

export const tokensTypographyMissingJsonFontFamilyVariable: ITokenJsonObject = {
	id: 'tokensjsontypographyfontfamilylato',
	label: 'typography-font-families-lato',
	value: 'Lato',
	base: null,
	ratio: null,
};

export const tokensTypographyMissingJsonFontWeightVariables: Array<ITokenJsonObject> = [
	{
		id: 'tokensjsontypographyfontweightregular',
		label: 'typography-font-weight-normal',
		value: 'normal',
		base: null,
		ratio: null,
	},
	{
		id: 'tokensjsontypographyfontweightbold',
		label: 'typography-font-weight-bold',
		value: 'bold',
		base: null,
		ratio: null,
	},
	{
		id: 'tokensjsontypographyfontweightlight',
		label: 'typography-font-weight-light',
		value: 'light',
		base: null,
		ratio: null,
	},
	{
		id: 'tokensjsontypographyfontweightstylenormal',
		label: 'typography-font-style-normal',
		value: 'normal',
		base: null,
		ratio: null,
	},
	{
		id: 'tokensjsontypographyfontstyleitalic',
		label: 'typography-font-style-italic',
		value: 'italic',
		base: null,
		ratio: null,
	},
];
