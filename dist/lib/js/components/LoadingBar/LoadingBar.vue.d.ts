import { PropType } from 'vue';
import { LoadingBarColors, LoadingBarSizes } from './LoadingBar.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    color: {
        type: PropType<LoadingBarColors>;
        default: string;
    };
    size: {
        type: PropType<LoadingBarSizes>;
        default: string;
    };
    time: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {
    intervalId: number;
    width: number;
}, {
    sizeClassName(): string;
    loadingBarStyles(): {
        width: string;
        transition: string;
    };
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    color: {
        type: PropType<LoadingBarColors>;
        default: string;
    };
    size: {
        type: PropType<LoadingBarSizes>;
        default: string;
    };
    time: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    size: string;
    color: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
