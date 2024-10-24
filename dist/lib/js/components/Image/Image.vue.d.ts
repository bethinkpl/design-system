import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
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
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
