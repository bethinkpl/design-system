import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    color: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<string>;
        default: string;
    };
    time: {
        type: StringConstructor;
        required: true;
    };
}, unknown, {
    intervalId: number;
    width: number;
}, {
    sizeClassName(): string;
    loadingBarStyles(): {
        width: string;
        transition: string;
    };
}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    color: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<string>;
        default: string;
    };
    time: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    size: string;
    color: string;
}>;
export default _default;
