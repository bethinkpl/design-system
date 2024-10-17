import { PropType } from 'vue';
import { TextGroupState } from './TextGroup.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<"neutral">;
        default: "neutral";
    };
    eyebrowText: {
        type: PropType<string | null>;
        default: null;
    };
    eyebrowTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    mainText: {
        type: PropType<string | null>;
        default: null;
    };
    mainTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    supportingText: {
        type: PropType<string | null>;
        default: null;
    };
    supportingTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    skeletonLoadingSize: {
        type: PropType<string>;
        default: string;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<TextGroupState>;
        default: "default";
    };
}>, {}, {
    TEXT_GROUP_SIZES: Readonly<{
        SMALL: string;
        MEDIUM: string;
    }>;
    TEXT_GROUP_STATES: Readonly<{
        readonly DEFAULT: "default";
        readonly HOVERED: "hovered";
        readonly DISABLED: "disabled";
        readonly LOADING: "loading";
    }>;
}, {
    colorClassName(): string;
    isLoading(): boolean;
    loadingSizeClassName(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<"neutral">;
        default: "neutral";
    };
    eyebrowText: {
        type: PropType<string | null>;
        default: null;
    };
    eyebrowTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    mainText: {
        type: PropType<string | null>;
        default: null;
    };
    mainTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    supportingText: {
        type: PropType<string | null>;
        default: null;
    };
    supportingTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    skeletonLoadingSize: {
        type: PropType<string>;
        default: string;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<TextGroupState>;
        default: "default";
    };
}>> & Readonly<{}>, {
    size: string;
    color: "neutral";
    state: TextGroupState;
    eyebrowText: string | null;
    isEyebrowTextUppercase: boolean;
    isInteractive: boolean;
    supportingText: string | null;
    isSelected: boolean;
    eyebrowTextEllipsis: boolean;
    mainText: string | null;
    mainTextEllipsis: boolean;
    supportingTextEllipsis: boolean;
    skeletonLoadingSize: string;
}, {}, {
    DsSkeleton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        height: {
            type: StringConstructor;
            default: string;
        };
        radius: {
            type: PropType<string>;
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
            type: PropType<string>;
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
        PrimeSkeleton: import('@primevue/core').DefineComponent<import('primevue/skeleton').SkeletonProps, import('primevue/skeleton').SkeletonSlots, (e: string, ...args: any[]) => void, {}>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
