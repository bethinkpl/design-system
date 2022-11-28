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
    directives: {
        ripple: import("vue").DirectiveFunction;
    };
    props: {
        label: {
            type: StringConstructor;
            default: null;
        };
        contentText: {
            type: StringConstructor;
            default: null;
        };
        meaning: {
            type: StringConstructor;
            default: "primary";
            validator(meaning: any): boolean;
        };
        status: {
            type: StringConstructor;
            default: "default";
            validator(status: any): boolean;
        };
        state: {
            type: StringConstructor;
            default: "default";
            validator(state: any): boolean;
        };
        selectedIcon: {
            type: ObjectConstructor;
            default(): import("@fortawesome/fontawesome-common-types").IconDefinition;
            validator(selectedIcon: any): boolean;
        };
    };
    data(): {
        hovered: boolean;
    };
    computed: {
        isPrimarySelected(): boolean;
        isPrimary(): boolean;
        isNeutral(): boolean;
        isNeutralSelected(): boolean;
        isHoveredState(): any;
    };
    created(): void;
    methods: {
        onClick(): void;
    };
};
export default _default;
