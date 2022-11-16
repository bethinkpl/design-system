export const TOKENS_TYPES = {
	COLORS: 'colors',
	TYPOGRAPHY: 'typography',
} as const;

export interface ColorToken {
	id: string;
	label: string;
	value: string;
}

interface AttributeRaw {
	property: string;
	value: string;
}

export interface TypographyToken {
	id: string;
	label: string;
	value: string;
	token: string;
	attributes: Array<string>;
	attributesRaw: Array<AttributeRaw>;
}
