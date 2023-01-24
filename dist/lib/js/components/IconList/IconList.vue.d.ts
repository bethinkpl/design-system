import { VueConstructor } from 'vue';
import { Prop } from 'vue/types/options';
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
        color: {
            type: StringConstructor;
            default: string;
            validator(color: any): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        tagNames: {
            type: ArrayConstructor;
            required: boolean;
            validator(tagNames: any): boolean;
        };
        icon: {
            type: Prop<VueConstructor<import("vue").default>>;
            required: boolean;
            validate: (icon: VueConstructor) => boolean;
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
        ICON_LIST_COLORS: Readonly<{
            NEUTRAL_WEAK: string;
            NEUTRAL_STRONG: string;
        }>;
        ICON_LIST_SIZES: Readonly<{
            X_SMALL: string;
            SMALL: string;
            MEDIUM: string;
        }>;
    };
    computed: {
        tagNamesConcatenated(): string;
        iconSize(): string;
    };
};
export default _default;
