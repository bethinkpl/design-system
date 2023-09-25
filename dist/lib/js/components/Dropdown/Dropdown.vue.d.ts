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
            validator(triggerAction: any): boolean;
        };
        radius: {
            type: StringConstructor;
            default: "both";
            validate(radius: any): boolean;
        };
        placement: {
            type: StringConstructor;
            default: "bottom-start";
            validate(placement: any): boolean;
        };
        maxHeight: {
            type: StringConstructor;
            default: null;
        };
    };
    emits: string[];
    data(): {
        key: number;
        isOpened: boolean;
        DROPDOWN_RADIUSES: Readonly<{
            readonly TOP: "top";
            readonly BOTTOM: "bottom";
            readonly BOTH: "both";
        }>;
    };
    computed: {
        scrollableWrapperStyles(): any;
        options(): any;
    };
    watch: {
        triggerAction(): void;
        sameWidth(): void;
        boundariesSelector(): void;
        placement(): void;
    };
    methods: {
        close(): void;
        updateKey(): void;
        onHide(): void;
        onShow(): void;
    };
};
export default _default;
