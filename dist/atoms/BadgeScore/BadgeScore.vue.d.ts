declare const _default: {
    name: string;
    props: {
        text: {
            type: StringConstructor;
            required: boolean;
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
