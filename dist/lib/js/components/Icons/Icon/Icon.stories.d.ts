import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
    name: string;
    components: {
        FontAwesomeIcon: import("vue").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: NumberConstructor;
            default: null;
            validator(value: number): boolean;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        sizeClassName(): string;
        isFontawesomeIcon(): boolean;
        rotationClass(): string | null;
    };
}>;
export default _default;
export declare const Interactive: StoryFn<{
    name: string;
    components: {
        FontAwesomeIcon: import("vue").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: NumberConstructor;
            default: null;
            validator(value: number): boolean;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        sizeClassName(): string;
        isFontawesomeIcon(): boolean;
        rotationClass(): string | null;
    };
}>;
export declare const AllIcons: StoryFn<{
    name: string;
    components: {
        FontAwesomeIcon: import("vue").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: NumberConstructor;
            default: null;
            validator(value: number): boolean;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        sizeClassName(): string;
        isFontawesomeIcon(): boolean;
        rotationClass(): string | null;
    };
}>;