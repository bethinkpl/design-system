import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
