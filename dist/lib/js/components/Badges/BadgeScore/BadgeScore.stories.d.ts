import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
    name: string;
    components: {
        WnlIcon: {
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
        };
    };
    props: {
        text: {
            type: StringConstructor;
            required: boolean;
        };
        suffix: {
            type: StringConstructor;
            required: boolean;
            default: null;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(color: any): boolean;
        };
        icon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validator(size: any): boolean;
        };
        fullWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        ICON_SIZES: Readonly<{
            XXX_SMALL: string;
            XX_SMALL: string;
            X_SMALL: string;
            SMALL: string;
            MEDIUM: string;
            LARGE: string;
            X_LARGE: string;
            XX_LARGE: string;
        }>;
        BADGE_SCORE_COLORS: Readonly<{
            readonly SUCCESS: "success";
            readonly WARNING: "warning";
            readonly FAIL: "fail";
            readonly INVERTED: "inverted";
            readonly NEUTRAL: "neutral";
            readonly NEUTRAL_WEAK: "neutral-weak";
        }>;
        BADGE_SCORE_SIZES: Readonly<{
            readonly MEDIUM: "medium";
            readonly SMALL: "small";
            readonly XSMALL: "extra small";
        }>;
    };
    computed: {
        iconSize(): string;
    };
}>;
export default _default;
export declare const Interactive: StoryFn<{
    text: string;
    suffix: string;
    color: string;
    size: string;
    icon: string;
    fullWidth: boolean;
}>;
export declare const MinWidth: StoryFn<{}>;
export declare const FullWidth: StoryFn<{}>;
