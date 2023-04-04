declare const _default: {
    name: string;
    components: {
        Divider: {
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
                size: {
                    type: StringConstructor;
                    default: string;
                    validator: (value: string) => boolean;
                };
            };
            data(): {
                DIVIDER_PROMINENCES: Readonly<{
                    DEFAULT: string;
                    STRONG: string;
                    WEAK: string;
                }>;
            };
            computed: {
                sizeClass(): string;
            };
        };
    };
};
export default _default;
