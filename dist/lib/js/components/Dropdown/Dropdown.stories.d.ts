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
    };
    data(): {
        key: number;
        DROPDOWN_RADIUSES: Readonly<{
            readonly TOP: "top";
            readonly BOTTOM: "bottom";
            readonly BOTH: "both";
        }>;
    };
    computed: {
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
    };
    data(): {
        key: number;
        DROPDOWN_RADIUSES: Readonly<{
            readonly TOP: "top";
            readonly BOTTOM: "bottom";
            readonly BOTH: "both";
        }>;
    };
    computed: {
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
    };
}>;
