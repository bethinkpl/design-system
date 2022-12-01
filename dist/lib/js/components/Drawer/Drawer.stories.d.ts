import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
    name: string;
    props: {
        position: {
            type: import("vue").PropType<import("./Drawer.consts").DrawerPosition>;
            default: "right";
            validator(position: any): boolean;
        };
        stickyHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        stickyFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        positionClassName(): string;
    };
}>;
export default _default;
export declare const Interactive: StoryFn<{
    name: string;
    props: {
        position: {
            type: import("vue").PropType<import("./Drawer.consts").DrawerPosition>;
            default: "right";
            validator(position: any): boolean;
        };
        stickyHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        stickyFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        positionClassName(): string;
    };
}>;
