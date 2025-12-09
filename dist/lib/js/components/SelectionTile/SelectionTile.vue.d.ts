import { SelectionTileState, SelectionTileType } from './SelectionTile.consts';
import { IconItem } from '../Icons/Icon';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type?: SelectionTileType;
    title: string;
    supportingText?: string | null;
    icon?: IconItem | null;
    isSelected?: boolean;
    state?: SelectionTileState;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:is-selected": (value: boolean) => void;
    "icon-click": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type?: SelectionTileType;
    title: string;
    supportingText?: string | null;
    icon?: IconItem | null;
    isSelected?: boolean;
    state?: SelectionTileState;
}>>> & Readonly<{
    "onUpdate:is-selected"?: ((value: boolean) => any) | undefined;
    "onIcon-click"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
