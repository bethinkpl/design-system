interface StatsLayoutProps {
    hasGridHeader?: boolean;
    hasRightColumn?: boolean;
    leftColumnLabel?: string;
    rightColumnLabel?: string;
    statsItemsHeaderLabel?: string;
    isLoading?: boolean;
    hasError?: boolean;
}
declare function __VLS_template(): Readonly<{
    [key: `statsItem-${number}`]: (() => any) | undefined;
    sectionHeader?: () => any;
    overallStatsItem?: () => any;
    resetBanner?: () => any;
}> & {
    [key: `statsItem-${number}`]: (() => any) | undefined;
    sectionHeader?: () => any;
    overallStatsItem?: () => any;
    resetBanner?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<StatsLayoutProps>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    retryClicked: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<StatsLayoutProps>>> & Readonly<{
    onRetryClicked?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
