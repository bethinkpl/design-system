declare const _default: import('vue').DefineComponent<Readonly<import('vue').ComponentPropsOptions<{
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
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("update:is-selected" | "input:focus" | "input:blur")[], "update:is-selected" | "input:focus" | "input:blur", import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<readonly string[] | import('vue').ExtractPropTypes<Readonly<import('vue').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:is-selected"?: ((...args: any[]) => any) | undefined;
    "onInput:focus"?: ((...args: any[]) => any) | undefined;
    "onInput:blur"?: ((...args: any[]) => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _default;
