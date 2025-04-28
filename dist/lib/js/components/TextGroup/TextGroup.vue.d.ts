import { PropType } from 'vue';
import { TextGroupColor, TextGroupLoadingSize, TextGroupSize, TextGroupState } from './TextGroup.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<TextGroupSize>;
        default: string;
    };
    color: {
        type: PropType<TextGroupColor>;
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
        type: PropType<TextGroupLoadingSize>;
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
    isSupportingTextTooltipEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSupportingTextTooltipEnabledOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSupportingTextTooltipAutoFilledWithContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    supportingTextTooltipContent: {
        type: (StringConstructor | null)[];
        default: null;
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
        type: PropType<TextGroupSize>;
        default: string;
    };
    color: {
        type: PropType<TextGroupColor>;
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
        type: PropType<TextGroupLoadingSize>;
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
    isSupportingTextTooltipEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSupportingTextTooltipEnabledOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSupportingTextTooltipAutoFilledWithContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    supportingTextTooltipContent: {
        type: (StringConstructor | null)[];
        default: null;
    };
}>> & Readonly<{}>, {
    size: string;
    color: "neutral";
    state: TextGroupState;
    isInteractive: boolean;
    eyebrowText: string | null;
    isEyebrowTextUppercase: boolean;
    supportingText: string | null;
    isSelected: boolean;
    eyebrowTextEllipsis: boolean;
    mainText: string | null;
    mainTextEllipsis: boolean;
    supportingTextEllipsis: boolean;
    skeletonLoadingSize: string;
    isSupportingTextTooltipEnabled: boolean;
    isSupportingTextTooltipEnabledOnMobile: boolean;
    isSupportingTextTooltipAutoFilledWithContent: boolean;
    supportingTextTooltipContent: string | null;
}, {}, {
    DsSkeleton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        height: {
            type: StringConstructor;
            default: string;
        };
        radius: {
            type: PropType<import('../..').SkeletonRadiusSize>;
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
            type: PropType<import('../..').SkeletonRadiusSize>;
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
    DsTooltip: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        placement: {
            type: PropType<import('../Tooltip').TooltipPlacement>;
            default: "bottom";
            validator(placement: import('../Tooltip').TooltipPlacement): boolean;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPointerVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
        isHiddenOnMobile: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {
        tooltipParams(): {
            position: any;
            event: string;
        };
        options(): {
            value: any;
            disabled: any;
            dt: {
                shadow: string;
                padding: string;
                background: string;
                color: string;
                borderRadius: string;
                maxWidth: string;
            };
            class: string | null;
            ptOptions: {
                mergeProps: boolean;
            };
            pt: {
                text: string;
                arrow: string;
            };
        };
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        placement: {
            type: PropType<import('../Tooltip').TooltipPlacement>;
            default: "bottom";
            validator(placement: import('../Tooltip').TooltipPlacement): boolean;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPointerVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
        isHiddenOnMobile: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        text: string;
        placement: import('../Tooltip').TooltipPlacement;
        isDisabled: boolean;
        isPointerVisible: boolean;
        inline: boolean;
        isHiddenOnMobile: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
