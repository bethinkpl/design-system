import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
}, unknown, {
    designTokens: {
        animation: {
            background: string;
        };
        background: string;
    };
}, {
    radiusTranslated(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    radius: string;
    height: string;
    width: string;
}>;
export default _default;
