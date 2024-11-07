import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
}>, {}, {}, {
    classList(): any;
    borderColorClass(): string | undefined;
    borderColorStyle(): {
        backgroundColor: any;
    } | undefined;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
}>> & Readonly<{}>, {
    isExpanded: boolean;
    borderColor: import('../RichListItem').RichListItemBorderColor;
    backgroundColor: import('../RichListItem').RichListItemBackgroundColor;
    borderColorHex: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
