import { PropType } from 'vue';
import { SelectListItem } from './SelectList.domain';
declare const _default: {
    name: string;
    components: {
        Divider: {
            name: string;
            props: {
                isVertical: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                prominence: {
                    type: StringConstructor;
                    default: string;
                    validator: (value: string) => boolean;
                };
                size: {
                    type: StringConstructor;
                    default: string;
                    validator: (value: string) => boolean;
                };
            };
            computed: {
                sizeClass(): string;
            };
            created(): void;
        };
        DsIcon: {
            name: string;
            components: {
                FontAwesomeIcon: import("vue").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
            };
            props: {
                icon: {
                    type: ObjectConstructor;
                    required: boolean;
                    validate(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
        items: {
            type: PropType<SelectListItem[]>;
            required: boolean;
        };
        size: {
            type: StringConstructor;
            required: boolean;
            validate(size: any): boolean;
        };
        value: {
            type: StringConstructor;
            default: null;
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
    };
    methods: {
        getClassNamesForItem(item: SelectListItem): Array<string>;
        onItemClick(item: SelectListItem): void;
    };
};
export default _default;