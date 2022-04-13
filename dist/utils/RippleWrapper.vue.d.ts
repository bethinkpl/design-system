declare const _default: {
    name: string;
    directives: {
        ripple: import("vue").DirectiveFunction;
    };
    props: {
        disable: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        disableRipple: boolean;
    };
    watch: {
        disable: {
            handler(value: boolean): void;
            immediate: boolean;
        };
    };
};
export default _default;
