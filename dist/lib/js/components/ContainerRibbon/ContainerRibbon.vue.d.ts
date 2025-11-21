import { ContainerRibbonSize, ContainerRibbonColor, ContainerRibbonLayout, ContainerRibbonRadius } from './ContainerRibbon.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: ContainerRibbonSize;
    color?: ContainerRibbonColor;
    layout?: ContainerRibbonLayout;
    radius?: ContainerRibbonRadius;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: ContainerRibbonSize;
    color?: ContainerRibbonColor;
    layout?: ContainerRibbonLayout;
    radius?: ContainerRibbonRadius;
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
