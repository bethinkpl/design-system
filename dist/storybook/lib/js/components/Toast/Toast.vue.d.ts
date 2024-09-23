declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    boundariesSelectorElement: null;
    boundariesSelectorElementResizeObserver: null;
    styles: {};
    BUTTON_COLORS: Readonly<{
        readonly PRIMARY: "primary";
        readonly NEUTRAL: "neutral";
        readonly DANGER: "danger";
        readonly SUCCESS: "success";
        readonly INVERTED: "inverted";
    }>;
    BUTTON_RADIUSES: Readonly<{
        readonly CAPSULE: "capsule";
        readonly ROUNDED: "rounded";
    }>;
    BUTTON_TYPES: Readonly<{
        readonly FILLED: "filled";
        readonly OUTLINED: "outlined";
        readonly TEXT: "text";
    }>;
    TOAST_SIZES: Readonly<{
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
    }>;
    TOAST_POSITIONS: Readonly<{
        LEFT: string;
        CENTER: string;
        RIGHT: string;
    }>;
}, {
    buttonPrimaryColor(): "neutral" | "primary";
    buttonSecondaryColor(): "neutral" | "danger";
    toastPosition(): string;
    toastSize(): string;
}, {
    calculateStyles(): void;
    setBoundariesSelectorElement(): void;
}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    close: () => true;
    'primary-button-click': () => true;
    'secondary-button-click': () => true;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<readonly string[] | import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    onClose?: (() => any) | undefined;
    "onSecondary-button-click"?: (() => any) | undefined;
    "onPrimary-button-click"?: (() => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _default;
