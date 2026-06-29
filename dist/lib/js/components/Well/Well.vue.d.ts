import { WellPadding, WellColor, WellRibbonPosition, WellRibbonSize, WellRibbonColor } from './Well.consts';

declare function __VLS_template(): {
    accessory?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    padding?: WellPadding | null;
    color?: WellColor;
    hasRadius?: boolean;
    hasBorder?: boolean;
    hasRibbon?: boolean;
    ribbonPosition?: WellRibbonPosition;
    ribbonSize?: WellRibbonSize;
    ribbonColor?: WellRibbonColor;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    padding?: WellPadding | null;
    color?: WellColor;
    hasRadius?: boolean;
    hasBorder?: boolean;
    hasRibbon?: boolean;
    ribbonPosition?: WellRibbonPosition;
    ribbonSize?: WellRibbonSize;
    ribbonColor?: WellRibbonColor;
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
