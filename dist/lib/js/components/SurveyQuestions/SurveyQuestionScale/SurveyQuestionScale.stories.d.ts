import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
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
        IconButton: {
            name: string;
            components: {
                WnlIcon: {
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
                WnlButton: {
                    name: string;
                    directives: {
                        ripple: import("vue").DirectiveFunction;
                    };
                    components: {
                        WnlIcon: {
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
                                readonly NEUTRAL_WEAK: "neutral-weak";
                                readonly FAIL: "fail";
                                readonly DANGER: "danger";
                                readonly SUCCESS: "success";
                                readonly INVERTED: "inverted";
                                readonly WARNING: "warning";
                                readonly INFO: "info";
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
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                        };
                        iconRight: {
                            type: ObjectConstructor;
                            default: null;
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                    data(): {
                        ICONS: Readonly<{
                            readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                            readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                            readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                            readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                        }>;
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
                        BUTTON_TYPES: Readonly<{
                            readonly FILLED: "filled";
                            readonly OUTLINED: "outlined";
                            readonly TEXT: "text";
                        }>;
                        COLORS: Readonly<{
                            readonly PRIMARY: "primary";
                            readonly NEUTRAL: "neutral";
                            readonly DANGER: "danger";
                            readonly SUCCESS: "success";
                            readonly INVERTED: "inverted";
                        }>;
                        RADIUSES: Readonly<{
                            readonly CAPSULE: "capsule";
                            readonly ROUNDED: "rounded";
                        }>;
                        SIZES: Readonly<{
                            readonly SMALL: "small";
                            readonly MEDIUM: "medium";
                            readonly LARGE: "large";
                        }>;
                        STATES: Readonly<{
                            readonly DEFAULT: "default";
                            readonly HOVERED: "hovered";
                            readonly FOCUSED: "focused";
                            readonly DISABLED: "disabled";
                            readonly LOADING: "loading";
                        }>;
                        ELEVATIONS: Readonly<{
                            readonly NONE: "none";
                            readonly X_SMALL: "x-small";
                            readonly SMALL: "small";
                        }>;
                    };
                    computed: {
                        colorClassName(): string;
                        loadingIconSize(): string;
                    };
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                        readonly LOADING: "loading";
                    }>): boolean;
                };
            };
            data(): {
                hovered: boolean;
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                ICON_BUTTON_SIZES: Readonly<{
                    readonly XX_SMALL: "xx-small";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                ICON_BUTTON_COLOR_SCHEMES: Readonly<{
                    readonly ALL_IN_COLOR: "all-in-color";
                    readonly NEUTRAL_LABEL: "neutral-label";
                }>;
                ICON_BUTTON_TYPES: Readonly<{
                    readonly ICON_ONLY: "icon-only";
                    readonly OUTLINED: "outlined";
                    readonly FILLED: "filled";
                }>;
                ICON_BUTTON_STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ICON_BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly NEUTRAL_WEAK: "neutral-weak";
                    readonly FAIL: "fail";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                    readonly WARNING: "warning";
                    readonly INFO: "info";
                }>;
                BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
            };
            computed: {
                iconSize(): string;
                buttonType(): string;
                computedColor(): string | null;
                isButtonColor(): boolean;
                colorClassName(): string;
            };
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
        DsModal: {
            name: string;
            components: {
                WnlIcon: {
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
                ripple: import("vue").DirectiveFunction;
            };
            components: {
                WnlIcon: {
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
                        readonly NEUTRAL_WEAK: "neutral-weak";
                        readonly FAIL: "fail";
                        readonly DANGER: "danger";
                        readonly SUCCESS: "success";
                        readonly INVERTED: "inverted";
                        readonly WARNING: "warning";
                        readonly INFO: "info";
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                iconRight: {
                    type: ObjectConstructor;
                    default: null;
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
            data(): {
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                BUTTON_TYPES: Readonly<{
                    readonly FILLED: "filled";
                    readonly OUTLINED: "outlined";
                    readonly TEXT: "text";
                }>;
                COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
                RADIUSES: Readonly<{
                    readonly CAPSULE: "capsule";
                    readonly ROUNDED: "rounded";
                }>;
                SIZES: Readonly<{
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ELEVATIONS: Readonly<{
                    readonly NONE: "none";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                }>;
            };
            computed: {
                colorClassName(): string;
                loadingIconSize(): string;
            };
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
            validator(state: any): boolean;
        };
        scaleOptions: {
            type: import("vue/types/options").Prop<import("../SurveyQuestion.domain").SurveyQuestionScaleOption[]>;
            required: boolean;
            validator(scaleOptions: any): any;
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
}>;
export default _default;
export declare const Interactive: StoryFn<{
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
        IconButton: {
            name: string;
            components: {
                WnlIcon: {
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
                WnlButton: {
                    name: string;
                    directives: {
                        ripple: import("vue").DirectiveFunction;
                    };
                    components: {
                        WnlIcon: {
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
                                readonly NEUTRAL_WEAK: "neutral-weak";
                                readonly FAIL: "fail";
                                readonly DANGER: "danger";
                                readonly SUCCESS: "success";
                                readonly INVERTED: "inverted";
                                readonly WARNING: "warning";
                                readonly INFO: "info";
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
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                        };
                        iconRight: {
                            type: ObjectConstructor;
                            default: null;
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                    data(): {
                        ICONS: Readonly<{
                            readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                            readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                            readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                            readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                        }>;
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
                        BUTTON_TYPES: Readonly<{
                            readonly FILLED: "filled";
                            readonly OUTLINED: "outlined";
                            readonly TEXT: "text";
                        }>;
                        COLORS: Readonly<{
                            readonly PRIMARY: "primary";
                            readonly NEUTRAL: "neutral";
                            readonly DANGER: "danger";
                            readonly SUCCESS: "success";
                            readonly INVERTED: "inverted";
                        }>;
                        RADIUSES: Readonly<{
                            readonly CAPSULE: "capsule";
                            readonly ROUNDED: "rounded";
                        }>;
                        SIZES: Readonly<{
                            readonly SMALL: "small";
                            readonly MEDIUM: "medium";
                            readonly LARGE: "large";
                        }>;
                        STATES: Readonly<{
                            readonly DEFAULT: "default";
                            readonly HOVERED: "hovered";
                            readonly FOCUSED: "focused";
                            readonly DISABLED: "disabled";
                            readonly LOADING: "loading";
                        }>;
                        ELEVATIONS: Readonly<{
                            readonly NONE: "none";
                            readonly X_SMALL: "x-small";
                            readonly SMALL: "small";
                        }>;
                    };
                    computed: {
                        colorClassName(): string;
                        loadingIconSize(): string;
                    };
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                        readonly LOADING: "loading";
                    }>): boolean;
                };
            };
            data(): {
                hovered: boolean;
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                ICON_BUTTON_SIZES: Readonly<{
                    readonly XX_SMALL: "xx-small";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                ICON_BUTTON_COLOR_SCHEMES: Readonly<{
                    readonly ALL_IN_COLOR: "all-in-color";
                    readonly NEUTRAL_LABEL: "neutral-label";
                }>;
                ICON_BUTTON_TYPES: Readonly<{
                    readonly ICON_ONLY: "icon-only";
                    readonly OUTLINED: "outlined";
                    readonly FILLED: "filled";
                }>;
                ICON_BUTTON_STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ICON_BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly NEUTRAL_WEAK: "neutral-weak";
                    readonly FAIL: "fail";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                    readonly WARNING: "warning";
                    readonly INFO: "info";
                }>;
                BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
            };
            computed: {
                iconSize(): string;
                buttonType(): string;
                computedColor(): string | null;
                isButtonColor(): boolean;
                colorClassName(): string;
            };
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
        DsModal: {
            name: string;
            components: {
                WnlIcon: {
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
                ripple: import("vue").DirectiveFunction;
            };
            components: {
                WnlIcon: {
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
                        readonly NEUTRAL_WEAK: "neutral-weak";
                        readonly FAIL: "fail";
                        readonly DANGER: "danger";
                        readonly SUCCESS: "success";
                        readonly INVERTED: "inverted";
                        readonly WARNING: "warning";
                        readonly INFO: "info";
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                iconRight: {
                    type: ObjectConstructor;
                    default: null;
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
            data(): {
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                BUTTON_TYPES: Readonly<{
                    readonly FILLED: "filled";
                    readonly OUTLINED: "outlined";
                    readonly TEXT: "text";
                }>;
                COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
                RADIUSES: Readonly<{
                    readonly CAPSULE: "capsule";
                    readonly ROUNDED: "rounded";
                }>;
                SIZES: Readonly<{
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ELEVATIONS: Readonly<{
                    readonly NONE: "none";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                }>;
            };
            computed: {
                colorClassName(): string;
                loadingIconSize(): string;
            };
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
            validator(state: any): boolean;
        };
        scaleOptions: {
            type: import("vue/types/options").Prop<import("../SurveyQuestion.domain").SurveyQuestionScaleOption[]>;
            required: boolean;
            validator(scaleOptions: any): any;
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
}>;
export declare const LimitedWidth: StoryFn<{
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
        IconButton: {
            name: string;
            components: {
                WnlIcon: {
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
                WnlButton: {
                    name: string;
                    directives: {
                        ripple: import("vue").DirectiveFunction;
                    };
                    components: {
                        WnlIcon: {
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
                                readonly NEUTRAL_WEAK: "neutral-weak";
                                readonly FAIL: "fail";
                                readonly DANGER: "danger";
                                readonly SUCCESS: "success";
                                readonly INVERTED: "inverted";
                                readonly WARNING: "warning";
                                readonly INFO: "info";
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
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                        };
                        iconRight: {
                            type: ObjectConstructor;
                            default: null;
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                    data(): {
                        ICONS: Readonly<{
                            readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                            readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                            readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                            readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                        }>;
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
                        BUTTON_TYPES: Readonly<{
                            readonly FILLED: "filled";
                            readonly OUTLINED: "outlined";
                            readonly TEXT: "text";
                        }>;
                        COLORS: Readonly<{
                            readonly PRIMARY: "primary";
                            readonly NEUTRAL: "neutral";
                            readonly DANGER: "danger";
                            readonly SUCCESS: "success";
                            readonly INVERTED: "inverted";
                        }>;
                        RADIUSES: Readonly<{
                            readonly CAPSULE: "capsule";
                            readonly ROUNDED: "rounded";
                        }>;
                        SIZES: Readonly<{
                            readonly SMALL: "small";
                            readonly MEDIUM: "medium";
                            readonly LARGE: "large";
                        }>;
                        STATES: Readonly<{
                            readonly DEFAULT: "default";
                            readonly HOVERED: "hovered";
                            readonly FOCUSED: "focused";
                            readonly DISABLED: "disabled";
                            readonly LOADING: "loading";
                        }>;
                        ELEVATIONS: Readonly<{
                            readonly NONE: "none";
                            readonly X_SMALL: "x-small";
                            readonly SMALL: "small";
                        }>;
                    };
                    computed: {
                        colorClassName(): string;
                        loadingIconSize(): string;
                    };
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                        readonly LOADING: "loading";
                    }>): boolean;
                };
            };
            data(): {
                hovered: boolean;
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                ICON_BUTTON_SIZES: Readonly<{
                    readonly XX_SMALL: "xx-small";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                ICON_BUTTON_COLOR_SCHEMES: Readonly<{
                    readonly ALL_IN_COLOR: "all-in-color";
                    readonly NEUTRAL_LABEL: "neutral-label";
                }>;
                ICON_BUTTON_TYPES: Readonly<{
                    readonly ICON_ONLY: "icon-only";
                    readonly OUTLINED: "outlined";
                    readonly FILLED: "filled";
                }>;
                ICON_BUTTON_STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ICON_BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly NEUTRAL_WEAK: "neutral-weak";
                    readonly FAIL: "fail";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                    readonly WARNING: "warning";
                    readonly INFO: "info";
                }>;
                BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
            };
            computed: {
                iconSize(): string;
                buttonType(): string;
                computedColor(): string | null;
                isButtonColor(): boolean;
                colorClassName(): string;
            };
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
        DsModal: {
            name: string;
            components: {
                WnlIcon: {
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
                ripple: import("vue").DirectiveFunction;
            };
            components: {
                WnlIcon: {
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
                        readonly NEUTRAL_WEAK: "neutral-weak";
                        readonly FAIL: "fail";
                        readonly DANGER: "danger";
                        readonly SUCCESS: "success";
                        readonly INVERTED: "inverted";
                        readonly WARNING: "warning";
                        readonly INFO: "info";
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                iconRight: {
                    type: ObjectConstructor;
                    default: null;
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
            data(): {
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                BUTTON_TYPES: Readonly<{
                    readonly FILLED: "filled";
                    readonly OUTLINED: "outlined";
                    readonly TEXT: "text";
                }>;
                COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
                RADIUSES: Readonly<{
                    readonly CAPSULE: "capsule";
                    readonly ROUNDED: "rounded";
                }>;
                SIZES: Readonly<{
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ELEVATIONS: Readonly<{
                    readonly NONE: "none";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                }>;
            };
            computed: {
                colorClassName(): string;
                loadingIconSize(): string;
            };
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
            validator(state: any): boolean;
        };
        scaleOptions: {
            type: import("vue/types/options").Prop<import("../SurveyQuestion.domain").SurveyQuestionScaleOption[]>;
            required: boolean;
            validator(scaleOptions: any): any;
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
}>;
export declare const SevenOptions: StoryFn<{
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
        IconButton: {
            name: string;
            components: {
                WnlIcon: {
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
                WnlButton: {
                    name: string;
                    directives: {
                        ripple: import("vue").DirectiveFunction;
                    };
                    components: {
                        WnlIcon: {
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
                                readonly NEUTRAL_WEAK: "neutral-weak";
                                readonly FAIL: "fail";
                                readonly DANGER: "danger";
                                readonly SUCCESS: "success";
                                readonly INVERTED: "inverted";
                                readonly WARNING: "warning";
                                readonly INFO: "info";
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
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                        };
                        iconRight: {
                            type: ObjectConstructor;
                            default: null;
                            validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                    data(): {
                        ICONS: Readonly<{
                            readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                            readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                            readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                            readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                            readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                        }>;
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
                        BUTTON_TYPES: Readonly<{
                            readonly FILLED: "filled";
                            readonly OUTLINED: "outlined";
                            readonly TEXT: "text";
                        }>;
                        COLORS: Readonly<{
                            readonly PRIMARY: "primary";
                            readonly NEUTRAL: "neutral";
                            readonly DANGER: "danger";
                            readonly SUCCESS: "success";
                            readonly INVERTED: "inverted";
                        }>;
                        RADIUSES: Readonly<{
                            readonly CAPSULE: "capsule";
                            readonly ROUNDED: "rounded";
                        }>;
                        SIZES: Readonly<{
                            readonly SMALL: "small";
                            readonly MEDIUM: "medium";
                            readonly LARGE: "large";
                        }>;
                        STATES: Readonly<{
                            readonly DEFAULT: "default";
                            readonly HOVERED: "hovered";
                            readonly FOCUSED: "focused";
                            readonly DISABLED: "disabled";
                            readonly LOADING: "loading";
                        }>;
                        ELEVATIONS: Readonly<{
                            readonly NONE: "none";
                            readonly X_SMALL: "x-small";
                            readonly SMALL: "small";
                        }>;
                    };
                    computed: {
                        colorClassName(): string;
                        loadingIconSize(): string;
                    };
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
                        readonly LOADING: "loading";
                    }>): boolean;
                };
            };
            data(): {
                hovered: boolean;
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                ICON_BUTTON_SIZES: Readonly<{
                    readonly XX_SMALL: "xx-small";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                ICON_BUTTON_COLOR_SCHEMES: Readonly<{
                    readonly ALL_IN_COLOR: "all-in-color";
                    readonly NEUTRAL_LABEL: "neutral-label";
                }>;
                ICON_BUTTON_TYPES: Readonly<{
                    readonly ICON_ONLY: "icon-only";
                    readonly OUTLINED: "outlined";
                    readonly FILLED: "filled";
                }>;
                ICON_BUTTON_STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ICON_BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly NEUTRAL_WEAK: "neutral-weak";
                    readonly FAIL: "fail";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                    readonly WARNING: "warning";
                    readonly INFO: "info";
                }>;
                BUTTON_COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
            };
            computed: {
                iconSize(): string;
                buttonType(): string;
                computedColor(): string | null;
                isButtonColor(): boolean;
                colorClassName(): string;
            };
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
        DsModal: {
            name: string;
            components: {
                WnlIcon: {
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
                ripple: import("vue").DirectiveFunction;
            };
            components: {
                WnlIcon: {
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
                        readonly NEUTRAL_WEAK: "neutral-weak";
                        readonly FAIL: "fail";
                        readonly DANGER: "danger";
                        readonly SUCCESS: "success";
                        readonly INVERTED: "inverted";
                        readonly WARNING: "warning";
                        readonly INFO: "info";
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
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
                };
                iconRight: {
                    type: ObjectConstructor;
                    default: null;
                    validator(icon: import("vue").VueConstructor<import("vue").default>): boolean;
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
            data(): {
                ICONS: Readonly<{
                    readonly CLIPBOARD_ADD: import("vue").VueConstructor<import("vue").default>;
                    readonly HEAD_WITH_QUESTION_MARK: import("vue").VueConstructor<import("vue").default>;
                    readonly RIBBON: import("vue").VueConstructor<import("vue").default>;
                    readonly FA_ADDRESS_CARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ANGLE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_DOWN_TO_LINE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_LEFT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_POINTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_FROM_BRACKET: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_LEFT_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ARROWS_ROTATE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BADGE_PERCENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BARS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BELL_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_BLANK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_COPY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOK_SPARKLES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOOKMARK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_BOX_ARCHIVE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CALENDAR_DAYS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CAMERA_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CARET_SQUARE_RIGHT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CART_SHOPPING: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_COLUMN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHART_LINE_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_DOWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_LEFT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_RIGHT_LIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CHEVRON_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ARROW_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_CHECK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_NOTCH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_PLAY_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_QUESTION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CIRCLE_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CLOCK_ROTATE_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_CODE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_DOTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENT_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMMENTS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_COMPRESS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EARTH_AMERICAS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_ELLIPSIS_VERTICAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_EYE_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_FROWN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_MEH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACE_SMILE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FACEBOOK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_INVOICE_DOLLAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_LINES_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILE_PEN_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FILTER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLASK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FLOPPY_DISK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_FOLDER_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GAUGE_HIGH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEARS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GEM: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GIFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRADUATION_CAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_GRID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_POINT_LEFT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HAND_SPOCK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HANDS_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_PULSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HEART_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_END: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOURGLASS_START: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_HOUSE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_KEYBOARD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIGHTBULB_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LINK_SLASH: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LIST_OL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCATION_DOT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_LOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MAGNIFYING_GLASS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEDAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MEMO_CIRCLE_INFO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MESSAGE_QUESTION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MINUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MONEY_BILL1: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_MUSIC: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPER_PLANE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PAPERCLIP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_CIRCLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PEN_FIELD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PENCIL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLAY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PLUS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_PRINT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_REPLY: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SHIELD_HALVED: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SIGNAL: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SITEMAP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SLIDERS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SPELL_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CARET_RIGHT: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_CHECK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_SQUARE_LIST: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STAR_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_STOPWATCH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAG: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TAGS: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBS_UP_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_THUMBTACK_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRASH_CAN: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TRIANGLE_EXCLAMATION_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_TROPHY_STAR: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UNLOCK_KEYHOLE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_UPLOAD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_USER: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VIDEO_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_VOLUME_HIGH_SOLID: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WAND_MAGIC_SPARKLES: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_WINDOW_MAXIMIZE: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FA_XMARK: import("@fortawesome/fontawesome-common-types").IconDefinition;
                    readonly FAD_SPINNER_THIRD: import("@fortawesome/fontawesome-common-types").IconDefinition;
                }>;
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
                BUTTON_TYPES: Readonly<{
                    readonly FILLED: "filled";
                    readonly OUTLINED: "outlined";
                    readonly TEXT: "text";
                }>;
                COLORS: Readonly<{
                    readonly PRIMARY: "primary";
                    readonly NEUTRAL: "neutral";
                    readonly DANGER: "danger";
                    readonly SUCCESS: "success";
                    readonly INVERTED: "inverted";
                }>;
                RADIUSES: Readonly<{
                    readonly CAPSULE: "capsule";
                    readonly ROUNDED: "rounded";
                }>;
                SIZES: Readonly<{
                    readonly SMALL: "small";
                    readonly MEDIUM: "medium";
                    readonly LARGE: "large";
                }>;
                STATES: Readonly<{
                    readonly DEFAULT: "default";
                    readonly HOVERED: "hovered";
                    readonly FOCUSED: "focused";
                    readonly DISABLED: "disabled";
                    readonly LOADING: "loading";
                }>;
                ELEVATIONS: Readonly<{
                    readonly NONE: "none";
                    readonly X_SMALL: "x-small";
                    readonly SMALL: "small";
                }>;
            };
            computed: {
                colorClassName(): string;
                loadingIconSize(): string;
            };
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
            validator(state: any): boolean;
        };
        scaleOptions: {
            type: import("vue/types/options").Prop<import("../SurveyQuestion.domain").SurveyQuestionScaleOption[]>;
            required: boolean;
            validator(scaleOptions: any): any;
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
}>;
