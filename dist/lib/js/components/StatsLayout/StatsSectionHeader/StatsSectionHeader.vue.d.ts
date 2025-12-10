interface FilterItem {
    key: string;
    label: string;
}
declare function __VLS_template(): Readonly<{
    accessory?: string;
    infoModalContent?: string;
}> & {
    accessory?: string;
    infoModalContent?: string;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    filterItems?: Array<FilterItem>;
    selectedFilterKey?: string | null;
    infoModalTitle?: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "select-filter": (filterKey: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    filterItems?: Array<FilterItem>;
    selectedFilterKey?: string | null;
    infoModalTitle?: string;
}>>> & Readonly<{
    "onSelect-filter"?: ((filterKey: string) => any) | undefined;
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
