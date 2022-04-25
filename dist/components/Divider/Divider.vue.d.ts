declare const _default: {
    name: string;
    props: {
        isVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominence: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    };
    created(): void;
};
export default _default;
