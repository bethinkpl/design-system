import { VueConstructor } from 'vue';
declare const _default: {
    name: string;
    components: {
        WnlIcon: {
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
            validate(color: any): boolean;
        };
        icon: {
            type: ObjectConstructor;
            default: null;
            validate(icon: VueConstructor): boolean;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validate(size: any): boolean;
        };
        fullWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        iconSize(): string;
    };
    created(): void;
};
export default _default;