import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    accelerate: {
        type: BooleanConstructor;
        default: boolean;
    };
    fit: {
        type: PropType<string>;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
}, unknown, {
    isLoading: boolean;
    IMAGE_FITS: Readonly<{
        CONTAIN: string;
        COVER: string;
    }>;
    SKELETON_RADIUS_SIZES: Readonly<{
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
}, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    accelerate: {
        type: BooleanConstructor;
        default: boolean;
    };
    fit: {
        type: PropType<string>;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    accelerate: boolean;
    fit: string;
}>;
export default _default;
