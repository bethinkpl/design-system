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
        DsRipple: {
            name: string;
            directives: {
                ripple: import("vue").DirectiveFunction;
            };
            props: {
                color: {
                    type: StringConstructor;
                    default: string;
                    validate(color: any): boolean;
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
        color: {
            type: StringConstructor;
            default: "neutral";
            validate(color: any): boolean;
        };
        isEyebrowTextUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        tileColor(): any;
        rippleColor(): any;
    };
    created(): void;
};
export default _default;
