import { IconItem } from '../../Icons/Icon';

declare const _default: import('vue').DefineComponent<Readonly<import('vue').ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    SELECT_LIST_ITEM_SELECTION_MODE: Readonly<{
        SELECT_ONLY: string;
        TOGGLE: string;
    }>;
    SELECT_LIST_ITEM_STATES: Readonly<{
        DEFAULT: string;
        LOADING: string;
        DISABLED: string;
    }>;
}, {
    icon(): IconItem | null;
    label(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, readonly string[] | Readonly<import('vue').ExtractPropTypes<Readonly<import('vue').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _default;
