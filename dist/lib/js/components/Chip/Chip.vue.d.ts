import { IconItem } from '../Icons/Icon';
import { ChipColor, ChipRadius, ChipSize, ChipState } from './Chip.consts';

declare function __VLS_template(): {
    accessory?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    label?: string | null;
    isLabelUppercase?: boolean;
    leftIcon?: IconItem | null;
    radius?: ChipRadius;
    size?: ChipSize;
    color?: ChipColor;
    colorHex?: string | null;
    state?: ChipState;
    isRemovable?: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    remove: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    label?: string | null;
    isLabelUppercase?: boolean;
    leftIcon?: IconItem | null;
    radius?: ChipRadius;
    size?: ChipSize;
    color?: ChipColor;
    colorHex?: string | null;
    state?: ChipState;
    isRemovable?: boolean;
}>>> & Readonly<{
    onRemove?: (() => any) | undefined;
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
