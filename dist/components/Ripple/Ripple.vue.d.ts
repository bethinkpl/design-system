declare const _default: {
    name: string;
    directives: {
        ripple: import("vue").DirectiveFunction;
    };
    props: {
        color: {
            type: StringConstructor;
            default: string;
            validate(color: any): boolean;
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
