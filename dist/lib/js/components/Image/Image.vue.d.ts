import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>;
export default _default;
