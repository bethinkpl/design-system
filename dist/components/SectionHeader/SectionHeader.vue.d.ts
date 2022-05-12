import { IconItem } from '../Icon';
declare const _default: {
    name: string;
    components: {
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
    props: {
        expandable: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconLeft: {
            type: () => IconItem;
            default: null;
            validate(iconLeft: IconItem): boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validate(size: any): void;
        };
        slotPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: StringConstructor;
            required: boolean;
        };
    };
    computed: {
        chevronRotation(): number | null;
        sizeClass(): string;
    };
    created(): void;
    methods: {
        onTitleWrapperClicked(): void;
    };
};
export default _default;
