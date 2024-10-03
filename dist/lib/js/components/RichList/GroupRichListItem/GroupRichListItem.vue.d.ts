import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    isExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderColor: {
        type: PropType<import('../RichListItem').RichListItemBorderColor>;
        default: null;
        validator(borderColor: unknown): boolean;
    };
    borderColorHex: {
        type: StringConstructor;
        default: null;
    };
    backgroundColor: {
        type: PropType<import('../RichListItem').RichListItemBackgroundColor>;
        default: "neutral";
        validator(backgroundColor: unknown): boolean;
    };
}, unknown, unknown, {
    classList(): any;
    borderColorClass(): string | undefined;
    borderColorStyle(): {
        backgroundColor: any;
    } | undefined;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    isExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderColor: {
        type: PropType<import('../RichListItem').RichListItemBorderColor>;
        default: null;
        validator(borderColor: unknown): boolean;
    };
    borderColorHex: {
        type: StringConstructor;
        default: null;
    };
    backgroundColor: {
        type: PropType<import('../RichListItem').RichListItemBackgroundColor>;
        default: "neutral";
        validator(backgroundColor: unknown): boolean;
    };
}>>, {
    backgroundColor: import('../RichListItem').RichListItemBackgroundColor;
    borderColor: import('../RichListItem').RichListItemBorderColor;
    isExpanded: boolean;
    borderColorHex: string;
}>;
export default _default;
