declare const _default: {
    name: string;
    props: {
        value: {
            type: StringConstructor;
            required: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    watch: {
        value(): void;
    };
    methods: {
        onInput(evt: any): void;
    };
};
export default _default;
