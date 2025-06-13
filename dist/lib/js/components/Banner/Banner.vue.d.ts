import { IconItem } from '../Icons/Icon';
import { BannerColor, BannerSize } from './Banner.consts';

declare function __VLS_template(): {
    defaultText?(_: {}): any;
    rightSlot?(_: {}): any;
    expandedText?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    icon?: IconItem | null;
    buttonText?: string;
    closable?: boolean;
    color?: BannerColor;
    title: string;
    isExpanded?: boolean;
    isIconHiddenOnMobile?: boolean;
    size?: BannerSize;
    titleInColor?: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    "button-clicked": () => void;
    "update:isExpanded": (isExpanded: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    icon?: IconItem | null;
    buttonText?: string;
    closable?: boolean;
    color?: BannerColor;
    title: string;
    isExpanded?: boolean;
    isIconHiddenOnMobile?: boolean;
    size?: BannerSize;
    titleInColor?: boolean;
}>>> & Readonly<{
    onClose?: (() => any) | undefined;
    "onButton-clicked"?: (() => any) | undefined;
    "onUpdate:isExpanded"?: ((isExpanded: boolean) => any) | undefined;
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
