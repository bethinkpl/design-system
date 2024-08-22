import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
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
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
