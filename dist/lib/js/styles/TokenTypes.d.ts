import { Dict } from '../../../tools/importers/helpers/structures';
export declare const TOKENS_TYPES: {
    readonly COLORS: "colors";
    readonly TYPOGRAPHY: "typography";
};
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
export interface ItemsListsItem {
    title: string;
    class: string;
    list: Dict<object>;
}
export {};
