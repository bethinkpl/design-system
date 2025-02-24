import { PropType } from 'vue';
import { GroupRichListItemBackgroundColor, GroupRichListItemBorderColor } from './GroupRichListItem.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    isExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderColor: {
        type: PropType<GroupRichListItemBorderColor>;
        default: null;
        validator(borderColor: unknown): boolean;
    };
    borderColorHex: {
        type: StringConstructor;
        default: null;
    };
    backgroundColor: {
        type: PropType<GroupRichListItemBackgroundColor>;
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
        type: PropType<GroupRichListItemBorderColor>;
        default: null;
        validator(borderColor: unknown): boolean;
    };
    borderColorHex: {
        type: StringConstructor;
        default: null;
    };
    backgroundColor: {
        type: PropType<GroupRichListItemBackgroundColor>;
        default: "neutral";
        validator(backgroundColor: unknown): boolean;
    };
}>> & Readonly<{}>, {
    backgroundColor: import('../RichListItem').RichListItemBackgroundColor;
    isExpanded: boolean;
    borderColor: import('../RichListItem').RichListItemBorderColor;
    borderColorHex: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
