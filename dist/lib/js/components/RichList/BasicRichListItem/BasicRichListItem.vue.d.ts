import { TextGroupSize, TextGroupState } from '../../TextGroup';

declare const _default: import('vue').DefineComponent<Readonly<import('vue').ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    hovered: boolean;
    RICH_LIST_ITEM_SIZE: Readonly<{
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
    }>;
}, {
    textGroupSize(): TextGroupSize;
    textGroupState(): TextGroupState;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    'update:is-selected': (value: boolean) => true;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<readonly string[] | import('vue').ExtractPropTypes<Readonly<import('vue').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:is-selected"?: ((value: boolean) => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _default;
