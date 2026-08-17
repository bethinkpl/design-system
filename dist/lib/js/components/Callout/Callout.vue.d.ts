import { IconItem } from '../Icons/Icon';
import { CalloutIconColor, CalloutLayout, CalloutMainTextColor, CalloutSize } from './Callout.consts';

declare function __VLS_template(): Readonly<{
    actions?: () => any;
}> & {
    actions?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    icon: IconItem;
    layout?: CalloutLayout;
    size?: CalloutSize;
    iconColor?: CalloutIconColor;
    eyebrowText?: string | null;
    mainText?: string | null;
    supportingText?: string | null;
    mainTextColor?: CalloutMainTextColor;
    buttonLabel?: string | null;
    buttonIcon?: IconItem | null;
    isActionVertical?: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "button-clicked": (e: Event) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    icon: IconItem;
    layout?: CalloutLayout;
    size?: CalloutSize;
    iconColor?: CalloutIconColor;
    eyebrowText?: string | null;
    mainText?: string | null;
    supportingText?: string | null;
    mainTextColor?: CalloutMainTextColor;
    buttonLabel?: string | null;
    buttonIcon?: IconItem | null;
    isActionVertical?: boolean;
}>>> & Readonly<{
    "onButton-clicked"?: ((e: Event) => any) | undefined;
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
