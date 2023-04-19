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
            required: boolean;
            validator(icon: VueConstructor): boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            required: boolean;
        };
        label: {
            type: StringConstructor;
            required: boolean;
        };
        size: {
            type: StringConstructor;
            default: "M";
        };
    };
    data(): {
        iconSize: string;
        TAB_ITEM_SIZES: Readonly<{
            readonly SMALL: "S";
            readonly MEDIUM: "M";
        }>;
    };
};
export default _default;
