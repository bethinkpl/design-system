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
        expandable: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideSlotWhenCollapsed: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconLeft: {
            type: () => IconItem;
            default: null;
            validator(iconLeft: IconItem): boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
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
        showSlot(): boolean;
        sizeClass(): string;
    };
    created(): void;
    methods: {
        onTitleWrapperClicked(): void;
    };
};
export default _default;
