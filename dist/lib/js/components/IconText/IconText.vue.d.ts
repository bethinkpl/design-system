import { ICON_TEXT_STATES } from './IconText.consts';
import { Value } from '../../utils/type.utils';
declare const _default: {
    name: string;
    components: {
        Icon: {
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
        color: {
            type: StringConstructor;
            default: string;
            validator(color: any): boolean;
        };
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validate: (icon: any) => boolean;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        isLabelBold: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            required: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        state: {
            type: StringConstructor;
            default: string;
            validator(value: Value<typeof ICON_TEXT_STATES>): boolean;
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
        ICON_TEXT_COLORS: Readonly<{
            NEUTRAL_WEAK: string;
            NEUTRAL: string;
        }>;
        ICON_TEXT_SIZES: Readonly<{
            X_SMALL: string;
            SMALL: string;
            MEDIUM: string;
        }>;
        ICON_TEXT_STATES: Readonly<{
            DEFAULT: string;
            DISABLED: string;
        }>;
    };
    computed: {
        iconSize(): string;
    };
};
export default _default;