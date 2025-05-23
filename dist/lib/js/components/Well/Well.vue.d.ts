import { WellPadding } from './Well.consts';
import { ChipRadius, ChipColor } from '../Chip';
import { IconItem } from '../Icons/Icon';

declare function __VLS_template(): {
    chipAccessory?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    padding?: WellPadding;
    hasChip?: boolean;
    chipLabel?: string;
    chipLabelUppercase?: boolean;
    chipLeftIcon?: IconItem;
    chipRadius?: ChipRadius;
    chipColor?: ChipColor;
    chipColorHex?: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    padding?: WellPadding;
    hasChip?: boolean;
    chipLabel?: string;
    chipLabelUppercase?: boolean;
    chipLeftIcon?: IconItem;
    chipRadius?: ChipRadius;
    chipColor?: ChipColor;
    chipColorHex?: string;
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
