import { ToastColors, ToastPositions, ToastSizes } from './Toast.consts';
import { IconItem } from '../Icons/Icon';

declare function __VLS_template(): Readonly<{
    content?: () => any;
}> & {
    content?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    title?: string;
    size?: ToastSizes;
    position?: ToastPositions;
    color?: ToastColors;
    footerPrimaryButtonText?: string;
    footerPrimaryButtonIcon?: IconItem | null;
    footerSecondaryButtonText?: string;
    footerSecondaryButtonIcon?: IconItem | null;
    isDisappearing?: boolean;
    disappearingTimeout?: string;
    isClosable?: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    "secondary-button-click": () => void;
    "primary-button-click": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    title?: string;
    size?: ToastSizes;
    position?: ToastPositions;
    color?: ToastColors;
    footerPrimaryButtonText?: string;
    footerPrimaryButtonIcon?: IconItem | null;
    footerSecondaryButtonText?: string;
    footerSecondaryButtonIcon?: IconItem | null;
    isDisappearing?: boolean;
    disappearingTimeout?: string;
    isClosable?: boolean;
}>>> & Readonly<{
    onClose?: (() => any) | undefined;
    "onSecondary-button-click"?: (() => any) | undefined;
    "onPrimary-button-click"?: (() => any) | undefined;
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
