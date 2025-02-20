import { PropType } from 'vue';
import { ImageFit } from './Image.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    fit: {
        type: PropType<ImageFit>;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {
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
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    fit: {
        type: PropType<ImageFit>;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    fit: string;
}, {}, {
    DsSkeleton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        height: {
            type: StringConstructor;
            default: string;
        };
        radius: {
            type: PropType<import('../Skeleton/Skeleton.consts').SkeletonRadiusSize>;
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
            type: PropType<import('../Skeleton/Skeleton.consts').SkeletonRadiusSize>;
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
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
