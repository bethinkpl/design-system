import { VueConstructor } from 'vue';
declare const _default: {
    name: string;
    components: {
        DsIcon: {
            name: string;
            components: {
                FontAwesomeIcon: import("vue").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & VueConstructor<import("vue").default>;
            };
            props: {
                icon: {
                    type: ObjectConstructor;
                    required: boolean;
                    validate(icon: VueConstructor<import("vue").default>): boolean;
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
        RippleWrapper: {
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
    };
    props: {
        interactive: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconLeft: {
            type: ObjectConstructor;
            default: null;
            validate(iconLeft: VueConstructor): boolean;
        };
        iconRight: {
            type: ObjectConstructor;
            default: null;
            validate(iconRight: VueConstructor): boolean;
        };
        text: {
            type: StringConstructor;
            required: boolean;
        };
        eyebrowText: {
            type: StringConstructor;
            required: boolean;
        };
        additionalText: {
            type: StringConstructor;
            default: null;
        };
    };
    computed: {
        iconRightDisplayed(): any;
    };
    created(): void;
};
export default _default;
