import { VueConstructor } from 'vue';
import { Value } from '../../utils/type.utils';
import { BUTTON_COLORS, BUTTON_ELEVATIONS, BUTTON_RADIUSES, BUTTON_SIZES, BUTTON_STATES, BUTTON_TYPES } from './Button.consts';
declare const _default: {
    name: string;
    directives: {
        ripple: import("vue").DirectiveFunction;
    };
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
        size: {
            type: StringConstructor;
            default: "medium";
            validator(value: Value<typeof BUTTON_SIZES>): boolean;
        };
        type: {
            type: StringConstructor;
            default: "filled";
            validator(value: Value<typeof BUTTON_TYPES>): boolean;
        };
        color: {
            type: StringConstructor;
            default: "primary";
            validator(value: Value<typeof BUTTON_COLORS>): boolean;
        };
        radius: {
            type: StringConstructor;
            default: "capsule";
            validator(value: Value<typeof BUTTON_RADIUSES>): boolean;
        };
        state: {
            type: StringConstructor;
            default: "default";
            validator(value: Value<typeof BUTTON_STATES>): boolean;
        };
        iconLeft: {
            type: ObjectConstructor;
            default: null;
            validate(icon: VueConstructor): boolean;
        };
        iconRight: {
            type: ObjectConstructor;
            default: null;
            validate(icon: VueConstructor): boolean;
        };
        elevation: {
            type: StringConstructor;
            default: "none";
            validator(value: Value<typeof BUTTON_ELEVATIONS>): boolean;
        };
    };
    computed: {
        colorClassName(): string;
    };
    created(): void;
};
export default _default;
