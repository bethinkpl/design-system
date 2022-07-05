import { Prop } from 'vue/types/options';
import { SurveyQuestionScaleOption } from '../SurveyQuestion.domain';
declare const _default: {
    name: string;
    components: {
        SurveyQuestionTextarea: {
            name: string;
            props: {
                value: {
                    type: StringConstructor;
                    required: boolean;
                };
                placeholder: {
                    type: StringConstructor;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            watch: {
                value(): void;
            };
            methods: {
                onInput(evt: any): void;
            };
        };
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
        IconButton: {
            name: string;
            components: {
                WnlIcon: {
                    name: string;
                    components: {
                        FontAwesomeIcon: import("vue/types/options").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
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
                WnlButton: {
                    name: string;
                    directives: {
                        ripple: import("vue/types/options").DirectiveFunction;
                    };
                    components: {
                        WnlIcon: {
                            name: string;
                            components: {
                                FontAwesomeIcon: import("vue/types/options").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
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
                        size: {
                            type: StringConstructor;
                            default: "medium";
                            validator(value: import("../../../utils/type.utils").Value<{
                                readonly SMALL: "small";
                                readonly MEDIUM: "medium";
                                readonly LARGE: "large";
                            }>): boolean;
                        };
                        type: {
                            type: StringConstructor;
                            default: "filled";
                            validator(value: import("../../../utils/type.utils").Value<{
                                readonly FILLED: "filled";
                                readonly OUTLINED: "outlined";
                                readonly TEXT: "text";
                            }>): boolean;
                        };
                        color: {
                            type: StringConstructor;
                            default: "primary";
                            validator(value: import("../../../utils/type.utils").Value<{
                                readonly PRIMARY: "primary";
                                readonly NEUTRAL: "neutral";
                                readonly DANGER: "danger";
                                readonly SUCCESS: "success";
                                readonly INVERTED: "inverted";
                            }>): boolean;
                        };
                        radius: {
                            type: StringConstructor;
                            default: "capsule";
                            validator(value: import("../../../utils/type.utils").Value<{
                                readonly CAPSULE: "capsule";
                                readonly ROUNDED: "rounded";
                            }>): boolean;
                        };
                        state: {
                            type: StringConstructor;
                            default: "default";
                            validator(value: import("../../../utils/type.utils").Value<{
                                readonly DEFAULT: "default";
                                readonly HOVERED: "hovered";
                                readonly FOCUSED: "focused";
                                readonly DISABLED: "disabled";
                                readonly LOADING: "loading";
                            }>): boolean;
                        };
                        iconLeft: {
                            type: ObjectConstructor;
                            default: null;
                            validate(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                        };
                        iconRight: {
                            type: ObjectConstructor;
                            default: null;
                            validate(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                        };
                        elevation: {
                            type: StringConstructor;
                            default: "none";
                            validator(value: import("../../../utils/type.utils").Value<{
                                readonly NONE: "none";
                                readonly X_SMALL: "x-small";
                                readonly SMALL: "small";
                            }>): boolean;
                        };
                    };
                    computed: {
                        colorClassName(): string;
                    };
                    created(): void;
                };
            };
            props: {
                size: {
                    type: StringConstructor;
                    default: "large";
                    validator(value: any): boolean;
                };
                radius: {
                    type: StringConstructor;
                    default: "capsule";
                    validator(value: any): boolean;
                };
                type: {
                    type: StringConstructor;
                    default: "icon-only";
                    validator(value: any): boolean;
                };
                icon: {
                    type: ObjectConstructor;
                    required: boolean;
                    validate(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                color: {
                    type: StringConstructor;
                    default: "primary";
                    validator(value: any): boolean;
                };
                colorScheme: {
                    type: StringConstructor;
                    default: "all-in-color";
                    validator(value: any): boolean;
                };
                elevation: {
                    type: StringConstructor;
                    default: "none";
                    validator(value: any): boolean;
                };
                touchable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: "default";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly DEFAULT: "default";
                        readonly HOVERED: "hovered";
                        readonly FOCUSED: "focused";
                        readonly DISABLED: "disabled";
                    }>): boolean;
                };
            };
            data(): {
                hovered: boolean;
            };
            computed: {
                iconSize(): string;
                buttonType(): string;
                computedColor(): string | null;
                isButtonColor(): boolean;
                colorClassName(): string;
            };
            created(): void;
            methods: {
                onClick(evt: any): void;
            };
        };
        SurveyToggle: {
            name: string;
            components: {
                DsIcon: {
                    name: string;
                    components: {
                        FontAwesomeIcon: import("vue/types/options").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
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
                ripple: import("vue/types/options").DirectiveFunction;
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
                    validate(meaning: any): boolean;
                };
                status: {
                    type: StringConstructor;
                    default: "default";
                    validate(status: any): boolean;
                };
                state: {
                    type: StringConstructor;
                    default: "default";
                    validate(state: any): boolean;
                };
                selectedIcon: {
                    type: ObjectConstructor;
                    default(): import("@fortawesome/fontawesome-common-types").IconDefinition;
                    validate(selectedIcon: any): boolean;
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
        DsModal: {
            name: string;
            components: {
                WnlIcon: {
                    name: string;
                    components: {
                        FontAwesomeIcon: import("vue/types/options").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
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
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animateScrollingContent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            created(): void;
        };
        DsButton: {
            name: string;
            directives: {
                ripple: import("vue/types/options").DirectiveFunction;
            };
            components: {
                WnlIcon: {
                    name: string;
                    components: {
                        FontAwesomeIcon: import("vue/types/options").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & import("vue").VueConstructor<import("vue").default>;
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
                size: {
                    type: StringConstructor;
                    default: "medium";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly SMALL: "small";
                        readonly MEDIUM: "medium";
                        readonly LARGE: "large";
                    }>): boolean;
                };
                type: {
                    type: StringConstructor;
                    default: "filled";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly FILLED: "filled";
                        readonly OUTLINED: "outlined";
                        readonly TEXT: "text";
                    }>): boolean;
                };
                color: {
                    type: StringConstructor;
                    default: "primary";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly PRIMARY: "primary";
                        readonly NEUTRAL: "neutral";
                        readonly DANGER: "danger";
                        readonly SUCCESS: "success";
                        readonly INVERTED: "inverted";
                    }>): boolean;
                };
                radius: {
                    type: StringConstructor;
                    default: "capsule";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly CAPSULE: "capsule";
                        readonly ROUNDED: "rounded";
                    }>): boolean;
                };
                state: {
                    type: StringConstructor;
                    default: "default";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly DEFAULT: "default";
                        readonly HOVERED: "hovered";
                        readonly FOCUSED: "focused";
                        readonly DISABLED: "disabled";
                        readonly LOADING: "loading";
                    }>): boolean;
                };
                iconLeft: {
                    type: ObjectConstructor;
                    default: null;
                    validate(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                iconRight: {
                    type: ObjectConstructor;
                    default: null;
                    validate(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                elevation: {
                    type: StringConstructor;
                    default: "none";
                    validator(value: import("../../../utils/type.utils").Value<{
                        readonly NONE: "none";
                        readonly X_SMALL: "x-small";
                        readonly SMALL: "small";
                    }>): boolean;
                };
            };
            computed: {
                colorClassName(): string;
            };
            created(): void;
        };
    };
    props: {
        title: {
            type: StringConstructor;
            required: boolean;
        };
        state: {
            type: StringConstructor;
            default: "default";
            validate(state: any): boolean;
        };
        scaleOptions: {
            type: Prop<SurveyQuestionScaleOption[]>;
            required: boolean;
            validate(scaleOptions: any): any;
        };
        elaborationLabel: {
            type: StringConstructor;
            required: boolean;
        };
        elaborationValue: {
            type: StringConstructor;
            required: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        selectedValue: {
            type: StringConstructor;
            default: null;
        };
    };
    data(): {
        showModal: boolean;
        inputId: string;
    };
    created(): void;
    methods: {
        onToggleClick(value: string): void;
    };
};
export default _default;
