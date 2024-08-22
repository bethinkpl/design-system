declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    isVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    prominence: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}, unknown, {
    DIVIDER_PROMINENCES: Readonly<{
        DEFAULT: string;
        STRONG: string;
        WEAK: string;
    }>;
}, {
    sizeClass(): string;
}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    isVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    prominence: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>>, {
    size: string;
    isVertical: boolean;
    prominence: string;
}>;
export default _default;
