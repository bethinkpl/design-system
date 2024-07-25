import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
    SKELETON_RADIUSES: Readonly<{
        SM: string;
        MD: string;
        XL: string;
    }>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    fit: string;
    accelerate: boolean;
}>;
export default _default;
