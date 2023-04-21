declare const _default: {
    name: string;
    directives: {
        ripple: DirectiveFunction;
    };
    props: {
        color: {
            type: StringConstructor;
            default: string;
            validator(color: any): boolean;
        };
        disable: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        disableRipple: boolean;
    };
    computed: {
        colorClass(): string;
    };
    watch: {
        disable: {
            handler(value: boolean): void;
            immediate: boolean;
        };
    };
};
export default _default;
