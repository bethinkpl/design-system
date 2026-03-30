import { Dict, ColorToken } from '../../../tools/importers/helpers/structures';

export { ColorToken };

export const TOKENS_TYPES = {
	COLORS: 'colors',
	TYPOGRAPHY: 'typography',
} as const;

interface AttributeRaw {
	property: string;
	value: string;
}

export interface TypographyToken {
	id: string;
	label: string;
	value: string;
	token: string;
	ratio: number | null;
	attributes: Array<string>;
	attributesRaw: Array<AttributeRaw>;
}

export interface ItemsListsItem {
	title: string;
	class: string;
	list: Dict<Array<object>>;
}
