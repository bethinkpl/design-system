declare const _default: import('vue').DefineComponent<{
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
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
