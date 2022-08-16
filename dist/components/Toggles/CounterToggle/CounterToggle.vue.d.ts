import { VueConstructor } from 'vue';
declare const _default: {
    name: string;
    components: {
        Icon: {
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
    };
    directives: {
        ripple: import("vue").DirectiveFunction;
    };
    props: {
        counter: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        color: {
            type: StringConstructor;
            default: string;
            validate(color: any): void;
        };
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validate(icon: VueConstructor): boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        colorClass(): string;
        hasCounter(): boolean;
    };
    created(): void;
};
export default _default;
