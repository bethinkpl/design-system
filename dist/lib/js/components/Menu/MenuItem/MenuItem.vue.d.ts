import { IconItem } from '../../Icons/Icon';
import { MenuItemAccessoryState, MenuItemBackgroundColor, MenuItemSize, MenuItemState } from './MenuItem.consts';

type RouterLocation = string | Record<string, unknown>;
declare function __VLS_template(): Readonly<{
    children?: () => any;
    labelSlot?: () => any;
    default?: () => any;
}> & {
    children?: () => any;
    labelSlot?: () => any;
    default?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    href?: string;
    to?: RouterLocation;
    size?: MenuItemSize;
    backgroundColor?: MenuItemBackgroundColor;
    iconLeft?: IconItem | null;
    iconRight?: IconItem | null;
    iconRightRotation?: 90 | 180 | 270 | null;
    index?: number | null;
    label?: string;
    isLabelUppercase?: boolean;
    additionalText?: string;
    state?: MenuItemState;
    accessoryState?: MenuItemAccessoryState | null;
    isSelected?: boolean;
    isDone?: boolean;
    hasSelectedIconsColorPrimary?: boolean;
    isSelectedInteractive?: boolean;
    level?: number | null;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    href?: string;
    to?: RouterLocation;
    size?: MenuItemSize;
    backgroundColor?: MenuItemBackgroundColor;
    iconLeft?: IconItem | null;
    iconRight?: IconItem | null;
    iconRightRotation?: 90 | 180 | 270 | null;
    index?: number | null;
    label?: string;
    isLabelUppercase?: boolean;
    additionalText?: string;
    state?: MenuItemState;
    accessoryState?: MenuItemAccessoryState | null;
    isSelected?: boolean;
    isDone?: boolean;
    hasSelectedIconsColorPrimary?: boolean;
    isSelectedInteractive?: boolean;
    level?: number | null;
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
