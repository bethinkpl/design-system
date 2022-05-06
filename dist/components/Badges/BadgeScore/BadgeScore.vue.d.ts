declare const _default: {
    name: string;
    props: {
        text: {
            type: StringConstructor;
            required: boolean;
        };
        additionalText: {
            type: StringConstructor;
            required: boolean;
            default: null;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validate(color: any): void;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validate(size: any): void;
        };
    };
    created(): void;
};
export default _default;
