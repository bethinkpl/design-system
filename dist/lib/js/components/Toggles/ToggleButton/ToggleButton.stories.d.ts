import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
    name: string;
    components: {
        DsRipple: {
            name: string;
            directives: {
                ripple: import("vue").DirectiveFunction;
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
    };
    props: {
        text: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly X_SMALL: "x-small";
                readonly SMALL: "small";
                readonly MEDIUM: "medium";
            }>): boolean;
        };
        type: {
            type: StringConstructor;
            default: "filled";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly FILLED: "filled";
                readonly OUTLINED: "outlined";
            }>): boolean;
        };
        color: {
            type: StringConstructor;
            default: "primary";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly PRIMARY: "primary";
                readonly NEUTRAL: "neutral";
            }>): boolean;
        };
        radius: {
            type: StringConstructor;
            default: "capsule";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly CAPSULE: "capsule";
                readonly ROUNDED: "rounded";
            }>): boolean;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        elevation: {
            type: StringConstructor;
            default: "none";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly NONE: "none";
                readonly X_SMALL: "x-small";
                readonly SMALL: "small";
            }>): boolean;
        };
    };
    data(): {
        TOGGLE_BUTTON_COLORS: Readonly<{
            readonly PRIMARY: "primary";
            readonly NEUTRAL: "neutral";
        }>;
        TOGGLE_BUTTON_ELEVATIONS: Readonly<{
            readonly NONE: "none";
            readonly X_SMALL: "x-small";
            readonly SMALL: "small";
        }>;
        TOGGLE_BUTTON_SIZES: Readonly<{
            readonly X_SMALL: "x-small";
            readonly SMALL: "small";
            readonly MEDIUM: "medium";
        }>;
        TOGGLE_BUTTON_TYPES: Readonly<{
            readonly FILLED: "filled";
            readonly OUTLINED: "outlined";
        }>;
        TOGGLE_BUTTON_RADIUSES: Readonly<{
            readonly CAPSULE: "capsule";
            readonly ROUNDED: "rounded";
        }>;
    };
    computed: {
        colorClassName(): string;
        rippleColor(): any;
        isLong(): boolean;
    };
}>;
export default _default;
export declare const Interactive: StoryFn<{
    name: string;
    components: {
        DsRipple: {
            name: string;
            directives: {
                ripple: import("vue").DirectiveFunction;
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
    };
    props: {
        text: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly X_SMALL: "x-small";
                readonly SMALL: "small";
                readonly MEDIUM: "medium";
            }>): boolean;
        };
        type: {
            type: StringConstructor;
            default: "filled";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly FILLED: "filled";
                readonly OUTLINED: "outlined";
            }>): boolean;
        };
        color: {
            type: StringConstructor;
            default: "primary";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly PRIMARY: "primary";
                readonly NEUTRAL: "neutral";
            }>): boolean;
        };
        radius: {
            type: StringConstructor;
            default: "capsule";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly CAPSULE: "capsule";
                readonly ROUNDED: "rounded";
            }>): boolean;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        elevation: {
            type: StringConstructor;
            default: "none";
            validator(value: import("../../../utils/type.utils").Value<{
                readonly NONE: "none";
                readonly X_SMALL: "x-small";
                readonly SMALL: "small";
            }>): boolean;
        };
    };
    data(): {
        TOGGLE_BUTTON_COLORS: Readonly<{
            readonly PRIMARY: "primary";
            readonly NEUTRAL: "neutral";
        }>;
        TOGGLE_BUTTON_ELEVATIONS: Readonly<{
            readonly NONE: "none";
            readonly X_SMALL: "x-small";
            readonly SMALL: "small";
        }>;
        TOGGLE_BUTTON_SIZES: Readonly<{
            readonly X_SMALL: "x-small";
            readonly SMALL: "small";
            readonly MEDIUM: "medium";
        }>;
        TOGGLE_BUTTON_TYPES: Readonly<{
            readonly FILLED: "filled";
            readonly OUTLINED: "outlined";
        }>;
        TOGGLE_BUTTON_RADIUSES: Readonly<{
            readonly CAPSULE: "capsule";
            readonly ROUNDED: "rounded";
        }>;
    };
    computed: {
        colorClassName(): string;
        rippleColor(): any;
        isLong(): boolean;
    };
}>;
