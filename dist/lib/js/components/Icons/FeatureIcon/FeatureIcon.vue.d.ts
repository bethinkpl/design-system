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
                    validator(icon: VueConstructor<import("vue").default>): boolean;
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
        icon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: VueConstructor): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(color: string): boolean;
        };
        doubleBackground: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        FEATURE_ICON_COLOR: Readonly<{
            DANGER: string;
            INFO: string;
            NEUTRAL: string;
            NEUTRAL_WEAK: string;
            PRIMARY: string;
            SUCCESS: string;
            WARNING: string;
        }>;
        FEATURE_ICON_SIZES: Readonly<{
            SMALL: string;
            MEDIUM: string;
            LARGE: string;
            X_LARGE: string;
        }>;
    };
    computed: {
        iconSize(): string;
    };
};
export default _default;
