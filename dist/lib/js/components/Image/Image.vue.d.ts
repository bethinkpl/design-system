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
}, {}, {
    onError(): void;
    onLoad(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: () => true;
    load: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fit: {
        type: PropType<string>;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onError?: (() => any) | undefined;
    onLoad?: (() => any) | undefined;
}, {
    fit: string;
}>;
export default _default;
