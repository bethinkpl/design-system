import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
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
}>;
export default _default;
export declare const Interactive: StoryFn<{
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
}>;
