import { BadgeColor, BadgeElevation, BadgeSize } from './Badge.consts';
import { IconItem } from '../Icons/Icon';

declare function __VLS_template(): Readonly<{
    image?: () => any;
}> & {
    image?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    color?: BadgeColor;
    size?: BadgeSize;
    label?: string;
    icon?: IconItem;
    imageUrl?: string;
    elevation?: BadgeElevation;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    color?: BadgeColor;
    size?: BadgeSize;
    label?: string;
    icon?: IconItem;
    imageUrl?: string;
    elevation?: BadgeElevation;
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
