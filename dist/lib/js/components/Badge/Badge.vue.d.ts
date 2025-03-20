import { BadgeColor, BadgeElevation, BadgeSize } from './Badge.consts';
import { IconItem } from '../Icons/Icon';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
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
