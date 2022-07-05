declare const _default: {
    name: string;
    components: {
        DsDivider: {
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
    };
    props: {
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
};
export default _default;
