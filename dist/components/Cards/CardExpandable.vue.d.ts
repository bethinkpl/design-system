declare const _default: {
    name: string;
    components: {
        DsCard: {
            name: string;
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
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanderVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        expanderTextCollapsed: {
            type: StringConstructor;
            default: string;
        };
        expanderTextExpanded: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): {
        isExpandedInternal: boolean;
    };
    watch: {
        isExpanded: {
            handler(isExpanded: any): void;
            immediate: boolean;
        };
    };
    created(): void;
    methods: {
        onExpanderClick(): void;
    };
};
export default _default;