import { TextGroupSize, TextGroupState } from '../../TextGroup';

declare const _default: import('../../../../../vue/dist/vue.esm-bundler.js').DefineComponent<Readonly<import('../../../../../vue/dist/vue.esm-bundler.js').ComponentPropsOptions<{
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
}, {}, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    'update:is-selected': (value: boolean) => true;
}, string, import('../../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<readonly string[] | import('../../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<Readonly<import('../../../../../vue/dist/vue.esm-bundler.js').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:is-selected"?: ((value: boolean) => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _default;
