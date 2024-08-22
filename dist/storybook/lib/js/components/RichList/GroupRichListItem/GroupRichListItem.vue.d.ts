import { PropType } from '../../../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, {}, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
