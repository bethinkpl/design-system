import 'vue-popperjs/dist/vue-popper.css';
declare const _default: {
    name: string;
    components: {
        VuePopper: any;
    };
    props: {
        boundariesSelector: {
            type: StringConstructor;
            default: null;
        };
        forceShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        sameWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerAction: {
            type: StringConstructor;
            default: "click";
            validate(triggerAction: any): boolean;
        };
    };
    data(): {
        key: number;
    };
    computed: {
        options(): any;
    };
    watch: {
        triggerAction(): void;
        sameWidth(): void;
        boundariesSelector(): void;
    };
    methods: {
        close(): void;
        updateKey(): void;
    };
};
export default _default;
