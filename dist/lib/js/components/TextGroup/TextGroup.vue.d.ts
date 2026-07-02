import { TextGroupAlign, TextGroupMainTextColor, TextGroupProminence, TextGroupLoadingSize, TextGroupSize, TextGroupState } from './TextGroup.consts';
import { RemovedProp } from '../../utils/type.utils';

declare function __VLS_template(): {
    mainText?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: TextGroupSize;
    align?: TextGroupAlign;
    mainTextColor?: TextGroupMainTextColor;
    prominence?: TextGroupProminence;
    eyebrowText?: string | null;
    eyebrowTextEllipsis?: boolean;
    isEyebrowTextUppercase?: boolean;
    hasEyebrowMask?: boolean;
    mainText?: string | null;
    mainTextEllipsis?: boolean;
    supportingText?: string | null;
    supportingTextEllipsis?: boolean;
    isInteractive?: boolean;
    skeletonLoadingSize?: TextGroupLoadingSize;
    state?: TextGroupState;
    isSupportingTextTooltipEnabled?: boolean;
    isSupportingTextTooltipEnabledOnMobile?: boolean;
    isSupportingTextTooltipAutoFilledWithContent?: boolean;
    supportingTextTooltipContent?: string;
    isSelected?: RemovedProp<"use mainTextColor=primary instead">;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: TextGroupSize;
    align?: TextGroupAlign;
    mainTextColor?: TextGroupMainTextColor;
    prominence?: TextGroupProminence;
    eyebrowText?: string | null;
    eyebrowTextEllipsis?: boolean;
    isEyebrowTextUppercase?: boolean;
    hasEyebrowMask?: boolean;
    mainText?: string | null;
    mainTextEllipsis?: boolean;
    supportingText?: string | null;
    supportingTextEllipsis?: boolean;
    isInteractive?: boolean;
    skeletonLoadingSize?: TextGroupLoadingSize;
    state?: TextGroupState;
    isSupportingTextTooltipEnabled?: boolean;
    isSupportingTextTooltipEnabledOnMobile?: boolean;
    isSupportingTextTooltipAutoFilledWithContent?: boolean;
    supportingTextTooltipContent?: string;
    isSelected?: RemovedProp<"use mainTextColor=primary instead">;
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
