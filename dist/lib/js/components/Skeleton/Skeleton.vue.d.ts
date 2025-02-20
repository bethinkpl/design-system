import { PropType } from 'vue';
import { SkeletonRadiusSize } from './Skeleton.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: PropType<SkeletonRadiusSize>;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {
    designTokens: {
        animation: {
            background: string;
        };
        background: string;
    };
}, {
    radiusTranslated(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: PropType<SkeletonRadiusSize>;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    radius: string;
    width: string;
    height: string;
}, {}, {
    PrimeSkeleton: import('@primevue/core').DefineComponent<import('primevue/skeleton').SkeletonProps, import('primevue/skeleton').SkeletonSlots, (e: string, ...args: any[]) => void>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
