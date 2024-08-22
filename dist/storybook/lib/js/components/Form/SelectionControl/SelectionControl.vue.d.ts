declare const _default: import('../../../../../vue/dist/vue.esm-bundler.js').DefineComponent<Readonly<import('../../../../../vue/dist/vue.esm-bundler.js').ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    isFocused: boolean;
    SELECTION_CONTROL_STATE: Readonly<{
        readonly DEFAULT: "default";
        readonly DISABLED: "disabled";
        readonly LOADING: "loading";
    }>;
    SELECTION_CONTROL_TYPE: Readonly<{
        readonly RADIO_BUTTON: "radioButton";
        readonly CHECKBOX: "checkbox";
    }>;
}, {
    icon(): any;
    iconSize(): string;
}, {
    onToggle(): void;
    onFocus(): void;
    onBlur(): void;
}, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("update:is-selected" | "input:focus" | "input:blur")[], "update:is-selected" | "input:focus" | "input:blur", import('../../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<readonly string[] | import('../../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<Readonly<import('../../../../../vue/dist/vue.esm-bundler.js').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:is-selected"?: ((...args: any[]) => any) | undefined;
    "onInput:focus"?: ((...args: any[]) => any) | undefined;
    "onInput:blur"?: ((...args: any[]) => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _default;
