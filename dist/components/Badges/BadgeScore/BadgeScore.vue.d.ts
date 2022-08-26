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
            validate(color: any): boolean;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validate(size: any): boolean;
        };
    };
    created(): void;
};
export default _default;
