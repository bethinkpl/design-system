declare const _default: import('vue').DefineComponent<{
    size: {
        type: StringConstructor;
        default: string;
        validator(size: unknown): boolean;
    };
    supportingText: {
        type: StringConstructor;
        default: null;
    };
    titleText: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
        validator(size: unknown): boolean;
    };
    supportingText: {
        type: StringConstructor;
        default: null;
    };
    titleText: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    size: string;
    supportingText: string;
}>;
export default _default;
