declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {
    onInput(evt: any): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "input"[], "input", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onInput?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    placeholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
