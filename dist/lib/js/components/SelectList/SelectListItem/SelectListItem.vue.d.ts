import { SelectListItemSelectionMode, SelectListItemSize, SelectListItemState } from './SelectListItem.consts';
import { IconItem } from '../../Icons/Icon';

declare function __VLS_template(): {
    accessory?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    iconLeft?: IconItem | null;
    isSelected?: boolean;
    label: string;
    eyebrowText?: string;
    isEyebrowTextUppercase?: boolean;
    selectionMode?: SelectListItemSelectionMode;
    size?: SelectListItemSize;
    state?: SelectListItemState;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    iconLeft?: IconItem | null;
    isSelected?: boolean;
    label: string;
    eyebrowText?: string;
    isEyebrowTextUppercase?: boolean;
    selectionMode?: SelectListItemSelectionMode;
    size?: SelectListItemSize;
    state?: SelectListItemState;
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
