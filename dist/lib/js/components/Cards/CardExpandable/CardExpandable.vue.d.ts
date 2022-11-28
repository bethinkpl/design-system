declare const _default: {
    name: string;
    components: {
        DsCard: {
            name: string;
            components: {
                DsDivider: {
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
            };
            props: {
                headerHasPadding: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                dividerUnderHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
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
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        isExpandedInternal: boolean;
    };
    computed: {
        chevronRotation(): number | null;
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
