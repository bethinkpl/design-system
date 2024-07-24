declare const _default: {
    name: string;
    props: {
        size: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        supportingText: {
            type: StringConstructor;
            default: null;
        };
        titleText: {
            type: StringConstructor;
            required: boolean;
        };
    };
};
export default _default;
