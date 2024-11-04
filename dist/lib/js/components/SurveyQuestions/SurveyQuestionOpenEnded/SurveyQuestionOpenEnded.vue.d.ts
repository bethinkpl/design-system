declare const _default: import('vue').DefineComponent<{}, {}, {
    showModal: boolean;
    inputId: string;
    ICONS: Readonly<{
        readonly HEAD_WITH_QUESTION_MARK: VueConstructor<Vue>;
        readonly RIBBON: VueConstructor<Vue>;
        readonly SLIDERS_SEARCH: VueConstructor<Vue>;
        readonly COMMENTS_CHECK: VueConstructor<Vue>;
        readonly ANSWERS: VueConstructor<Vue>;
        readonly HIDE_ANSWERS: VueConstructor<Vue>;
        readonly SIDEBAR_FLIP_SOLID: VueConstructor<Vue>;
        readonly FA_ADDRESS_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ANGLE_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ANGLE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ANGLE_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ANGLE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_DOWN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_DOWN_TO_LINE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_LEFT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_POINTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_RIGHT_FROM_BRACKET: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROWS_LEFT_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROWS_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ARROWS_ROTATE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BADGE_PERCENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BARS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BELL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BELL_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOOK_BLANK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOOK_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOOK_SPARKLES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOOKMARK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOX: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_BOX_ARCHIVE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR_DAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR_DAYS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CALENDAR_RANGE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CAMERA_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CARET_SQUARE_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CART_SHOPPING: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHART_COLUMN: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHART_LINE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHEVRON_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHEVRON_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHEVRON_LEFT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHEVRON_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHEVRON_RIGHT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CHEVRON_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_ARROW_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_ARROW_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_NOTCH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_PLAY_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CIRCLE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CLIPBOARD_MEDICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CLIPBOARD_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CLOCK_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CODE_SIMPLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMMENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMMENT_DOTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMMENT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMMENTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMMENTS_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMMENTS_QUESTION_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMPASS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COMPRESS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_CREDIT_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_DOT_CIRCLE_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_EARTH_AMERICAS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ELLIPSIS_VERTICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_EYE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_EYE_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FACE_FROWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FACE_GRIMACE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FACE_MEH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FACE_SMILE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FACEBOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILE_INVOICE_DOLLAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILE_LINES: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILE_LINES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILE_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILE_PEN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILM: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FILTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FLAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FLASK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FLOPPY_DISK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_FOLDER_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GAUGE_HIGH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GEAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GEAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GEARS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GEM: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GIFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GRADUATION_CAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_GRID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HAND_POINT_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HAND_POINT_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HAND_SPOCK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HANDS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HEART_PULSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HEART_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HOURGLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HOURGLASS_END: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HOURGLASS_START: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_HOUSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_IMAGES: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_IMAGES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_KEY: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_KEYBOARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LIGHTBULB: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LIGHTBULB_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LINK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LINK_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LIST_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LIST_OL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LOCATION_DOT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_LOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MEDAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MEMO_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MEMO_CIRCLE_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MESSAGE_QUESTION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MESSAGE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MINUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MONEY_BILL1: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_MUSIC: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PAPER_PLANE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PAPERCLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PEN_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PEN_FIELD: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PENCIL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PLAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PLUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_PRINT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_RECTANGLE_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_RECTANGLE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_REPLY: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SHARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SHARE_NODES: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SHIELD_HALVED: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SIDEBAR_FLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SIGNAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SITEMAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SITEMAP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SLIDERS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SPELL_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SQUARE_CARET_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SQUARE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SQUARE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SQUARE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_SQUARE_LIST_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_STAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_STETHOSCOPE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_STOPWATCH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TAGS: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TEXT: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TEXT_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_THUMBS_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_THUMBS_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_THUMBTACK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TRASH_CAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TREE_PALM: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TRIANGLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TRIANGLE_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_TROPHY_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_UNLOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_UPLOAD: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_USER: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_USER_DOCTOR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_VIDEO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_VOLUME_HIGH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_WAND_MAGIC_SPARKLES: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_WINDOW_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FA_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
        readonly FAD_SPINNER_THIRD: import('@fortawesome/fontawesome-common-types').IconDefinition;
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
    SURVEY_QUESTION_STATES: Readonly<{
        readonly DEFAULT: "default";
        readonly DISABLED: "disabled";
    }>;
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "input"[], "input", import('vue').PublicProps, Readonly<{}> & Readonly<{
    onInput?: ((...args: any[]) => any) | undefined;
}>, {
    state: string;
    placeholder: string;
}, {}, {
    SurveyQuestionTextarea: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {}, {
        onInput(evt: any): void;
    }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "input"[], "input", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onInput?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        placeholder: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    DsButton: import('vue').DefineComponent<{}, {}, {
        ICONS: Readonly<{
            readonly HEAD_WITH_QUESTION_MARK: VueConstructor<Vue>;
            readonly RIBBON: VueConstructor<Vue>;
            readonly SLIDERS_SEARCH: VueConstructor<Vue>;
            readonly COMMENTS_CHECK: VueConstructor<Vue>;
            readonly ANSWERS: VueConstructor<Vue>;
            readonly HIDE_ANSWERS: VueConstructor<Vue>;
            readonly SIDEBAR_FLIP_SOLID: VueConstructor<Vue>;
            readonly FA_ADDRESS_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_DOWN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_DOWN_TO_LINE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_LEFT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_POINTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_RIGHT_FROM_BRACKET: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_ROTATE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BADGE_PERCENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BARS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BELL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BELL_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_BLANK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_SPARKLES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOKMARK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOX: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOX_ARCHIVE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_DAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_DAYS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_RANGE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CAMERA_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CARET_SQUARE_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CART_SHOPPING: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHART_COLUMN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHART_LINE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_LEFT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_RIGHT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ARROW_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ARROW_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_NOTCH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_PLAY_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLIPBOARD_MEDICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLIPBOARD_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLOCK_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CODE_SIMPLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT_DOTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS_QUESTION_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMPASS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMPRESS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CREDIT_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_DOT_CIRCLE_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EARTH_AMERICAS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ELLIPSIS_VERTICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EYE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EYE_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_FROWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_GRIMACE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_MEH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_SMILE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACEBOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_INVOICE_DOLLAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_LINES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_LINES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_PEN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLASK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLOPPY_DISK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FOLDER_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GAUGE_HIGH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEARS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GIFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GRADUATION_CAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GRID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_POINT_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_POINT_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_SPOCK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HANDS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HEART_PULSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HEART_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS_END: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS_START: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOUSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_IMAGES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_IMAGES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_KEY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_KEYBOARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIGHTBULB: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIGHTBULB_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LINK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LINK_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST_OL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LOCATION_DOT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEDAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEMO_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEMO_CIRCLE_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MESSAGE_QUESTION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MESSAGE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MINUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MONEY_BILL1: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MUSIC: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PAPER_PLANE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PAPERCLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PEN_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PEN_FIELD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PENCIL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PLAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PLUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PRINT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_RECTANGLE_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_RECTANGLE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_REPLY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHARE_NODES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHIELD_HALVED: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SIDEBAR_FLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SIGNAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SITEMAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SITEMAP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SLIDERS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SPELL_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CARET_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_LIST_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STETHOSCOPE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STOPWATCH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TAGS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TEXT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TEXT_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBS_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBS_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBTACK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRASH_CAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TREE_PALM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRIANGLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TROPHY_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_UNLOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_UPLOAD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_USER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_USER_DOCTOR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_VIDEO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_VOLUME_HIGH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_WAND_MAGIC_SPARKLES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_WINDOW_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FAD_SPINNER_THIRD: import('@fortawesome/fontawesome-common-types').IconDefinition;
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
    }, {
        iconSize(): string;
        colorClassName(): string;
        loadingIconSize(): string;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {
        size: string;
        type: string;
        color: string;
        radius: string;
        state: string;
        iconLeft: Record<string, any>;
        iconRight: Record<string, any>;
        elevation: string;
    }, {}, {
        WnlIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            icon: {
                type: ObjectConstructor;
                required: true;
                validator(icon: unknown): boolean;
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
        }>, {}, {}, {
            sizeClassName(): string;
            isFontawesomeIcon(): boolean;
            rotationClass(): string | null;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            icon: {
                type: ObjectConstructor;
                required: true;
                validator(icon: unknown): boolean;
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
        }>> & Readonly<{}>, {
            rotation: number;
            size: string;
            flippedVertical: boolean;
            flippedHorizontal: boolean;
            touchable: boolean;
            spinning: boolean;
        }, {}, {
            FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    DsCard: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        hasBorder: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderPosition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        borderSize: {
            type: import('vue').PropType<string>;
            default: string;
        };
        borderColor: {
            type: import('vue').PropType<string>;
            default: string;
        };
        hasLoadingBar: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingBarColor: {
            type: import('vue').PropType<string>;
            default: string;
        };
        loadingBarTime: {
            type: StringConstructor;
            default: string;
        };
    }>, {}, {}, {
        hasLeftBoarder(): any;
        hasTopBoarder(): any;
        borderColorClass(): string;
        borderSizeClass(): string;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        hasBorder: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderPosition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        borderSize: {
            type: import('vue').PropType<string>;
            default: string;
        };
        borderColor: {
            type: import('vue').PropType<string>;
            default: string;
        };
        hasLoadingBar: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingBarColor: {
            type: import('vue').PropType<string>;
            default: string;
        };
        loadingBarTime: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        headerHasPadding: boolean;
        dividerUnderHeader: boolean;
        hasBorder: boolean;
        borderPosition: string;
        borderSize: string;
        borderColor: string;
        hasLoadingBar: boolean;
        loadingBarColor: string;
        loadingBarTime: string;
    }, {}, {
        DsDivider: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        }>, {}, {
            DIVIDER_PROMINENCES: Readonly<{
                DEFAULT: string;
                STRONG: string;
                WEAK: string;
            }>;
        }, {
            sizeClass(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
        }>> & Readonly<{}>, {
            size: string;
            isVertical: boolean;
            prominence: string;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        DsLoadingBar: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            color: {
                type: import('vue').PropType<string>;
                default: string;
            };
            size: {
                type: import('vue').PropType<string>;
                default: string;
            };
            time: {
                type: StringConstructor;
                required: true;
            };
        }>, {}, {
            intervalId: number;
            width: number;
        }, {
            sizeClassName(): string;
            loadingBarStyles(): {
                width: string;
                transition: string;
            };
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            color: {
                type: import('vue').PropType<string>;
                default: string;
            };
            size: {
                type: import('vue').PropType<string>;
                default: string;
            };
            time: {
                type: StringConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {
            size: string;
            color: string;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    IconButton: import('vue').DefineComponent<{}, {
        isHovered: import('vue').Ref<boolean, boolean>;
        mouseOver: () => void;
        mouseLeave: () => void;
        touchStart: () => void;
        touchEnd: () => void;
    }, {
        ICONS: Readonly<{
            readonly HEAD_WITH_QUESTION_MARK: VueConstructor<Vue>;
            readonly RIBBON: VueConstructor<Vue>;
            readonly SLIDERS_SEARCH: VueConstructor<Vue>;
            readonly COMMENTS_CHECK: VueConstructor<Vue>;
            readonly ANSWERS: VueConstructor<Vue>;
            readonly HIDE_ANSWERS: VueConstructor<Vue>;
            readonly SIDEBAR_FLIP_SOLID: VueConstructor<Vue>;
            readonly FA_ADDRESS_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_DOWN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_DOWN_TO_LINE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_LEFT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_POINTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_RIGHT_FROM_BRACKET: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_ROTATE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BADGE_PERCENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BARS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BELL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BELL_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_BLANK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_SPARKLES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOKMARK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOX: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOX_ARCHIVE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_DAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_DAYS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_RANGE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CAMERA_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CARET_SQUARE_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CART_SHOPPING: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHART_COLUMN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHART_LINE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_LEFT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_RIGHT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ARROW_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ARROW_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_NOTCH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_PLAY_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLIPBOARD_MEDICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLIPBOARD_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLOCK_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CODE_SIMPLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT_DOTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS_QUESTION_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMPASS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMPRESS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CREDIT_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_DOT_CIRCLE_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EARTH_AMERICAS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ELLIPSIS_VERTICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EYE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EYE_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_FROWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_GRIMACE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_MEH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_SMILE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACEBOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_INVOICE_DOLLAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_LINES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_LINES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_PEN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLASK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLOPPY_DISK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FOLDER_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GAUGE_HIGH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEARS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GIFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GRADUATION_CAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GRID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_POINT_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_POINT_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_SPOCK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HANDS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HEART_PULSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HEART_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS_END: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS_START: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOUSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_IMAGES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_IMAGES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_KEY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_KEYBOARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIGHTBULB: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIGHTBULB_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LINK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LINK_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST_OL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LOCATION_DOT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEDAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEMO_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEMO_CIRCLE_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MESSAGE_QUESTION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MESSAGE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MINUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MONEY_BILL1: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MUSIC: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PAPER_PLANE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PAPERCLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PEN_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PEN_FIELD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PENCIL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PLAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PLUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PRINT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_RECTANGLE_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_RECTANGLE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_REPLY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHARE_NODES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHIELD_HALVED: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SIDEBAR_FLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SIGNAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SITEMAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SITEMAP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SLIDERS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SPELL_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CARET_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_LIST_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STETHOSCOPE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STOPWATCH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TAGS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TEXT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TEXT_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBS_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBS_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBTACK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRASH_CAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TREE_PALM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRIANGLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TROPHY_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_UNLOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_UPLOAD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_USER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_USER_DOCTOR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_VIDEO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_VOLUME_HIGH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_WAND_MAGIC_SPARKLES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_WINDOW_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FAD_SPINNER_THIRD: import('@fortawesome/fontawesome-common-types').IconDefinition;
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
    }, {
        iconSize(): string;
        buttonType(): string;
        computedColor(): string | null;
        isButtonColor(): boolean;
        colorClassName(): string;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {
        size: string;
        type: string;
        touchable: boolean;
        color: string;
        radius: string;
        state: string;
        elevation: string;
        colorScheme: string;
    }, {}, {
        WnlIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            icon: {
                type: ObjectConstructor;
                required: true;
                validator(icon: unknown): boolean;
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
        }>, {}, {}, {
            sizeClassName(): string;
            isFontawesomeIcon(): boolean;
            rotationClass(): string | null;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            icon: {
                type: ObjectConstructor;
                required: true;
                validator(icon: unknown): boolean;
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
        }>> & Readonly<{}>, {
            rotation: number;
            size: string;
            flippedVertical: boolean;
            flippedHorizontal: boolean;
            touchable: boolean;
            spinning: boolean;
        }, {}, {
            FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        WnlButton: import('vue').DefineComponent<{}, {}, {
            ICONS: Readonly<{
                readonly HEAD_WITH_QUESTION_MARK: VueConstructor<Vue>;
                readonly RIBBON: VueConstructor<Vue>;
                readonly SLIDERS_SEARCH: VueConstructor<Vue>;
                readonly COMMENTS_CHECK: VueConstructor<Vue>;
                readonly ANSWERS: VueConstructor<Vue>;
                readonly HIDE_ANSWERS: VueConstructor<Vue>;
                readonly SIDEBAR_FLIP_SOLID: VueConstructor<Vue>;
                readonly FA_ADDRESS_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ANGLE_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ANGLE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ANGLE_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ANGLE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_DOWN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_DOWN_TO_LINE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_LEFT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_POINTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_RIGHT_FROM_BRACKET: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROWS_LEFT_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROWS_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ARROWS_ROTATE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BADGE_PERCENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BARS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BELL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BELL_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOOK_BLANK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOOK_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOOK_SPARKLES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOOKMARK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOX: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_BOX_ARCHIVE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR_DAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR_DAYS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CALENDAR_RANGE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CAMERA_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CARET_SQUARE_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CART_SHOPPING: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHART_COLUMN: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHART_LINE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHEVRON_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHEVRON_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHEVRON_LEFT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHEVRON_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHEVRON_RIGHT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CHEVRON_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_ARROW_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_ARROW_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_NOTCH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_PLAY_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CIRCLE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CLIPBOARD_MEDICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CLIPBOARD_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CLOCK_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CODE_SIMPLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMMENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMMENT_DOTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMMENT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMMENTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMMENTS_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMMENTS_QUESTION_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMPASS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COMPRESS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_CREDIT_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_DOT_CIRCLE_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_EARTH_AMERICAS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ELLIPSIS_VERTICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_EYE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_EYE_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FACE_FROWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FACE_GRIMACE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FACE_MEH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FACE_SMILE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FACEBOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILE_INVOICE_DOLLAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILE_LINES: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILE_LINES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILE_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILE_PEN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILM: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FILTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FLAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FLASK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FLOPPY_DISK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_FOLDER_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GAUGE_HIGH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GEAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GEAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GEARS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GEM: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GIFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GRADUATION_CAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_GRID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HAND_POINT_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HAND_POINT_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HAND_SPOCK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HANDS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HEART_PULSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HEART_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HOURGLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HOURGLASS_END: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HOURGLASS_START: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_HOUSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_IMAGES: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_IMAGES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_KEY: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_KEYBOARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LIGHTBULB: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LIGHTBULB_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LINK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LINK_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LIST_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LIST_OL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LOCATION_DOT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_LOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MEDAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MEMO_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MEMO_CIRCLE_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MESSAGE_QUESTION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MESSAGE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MINUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MONEY_BILL1: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_MUSIC: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PAPER_PLANE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PAPERCLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PEN_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PEN_FIELD: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PENCIL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PLAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PLUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_PRINT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_RECTANGLE_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_RECTANGLE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_REPLY: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SHARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SHARE_NODES: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SHIELD_HALVED: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SIDEBAR_FLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SIGNAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SITEMAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SITEMAP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SLIDERS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SPELL_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SQUARE_CARET_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SQUARE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SQUARE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SQUARE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_SQUARE_LIST_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_STAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_STETHOSCOPE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_STOPWATCH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TAGS: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TEXT: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TEXT_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_THUMBS_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_THUMBS_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_THUMBTACK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TRASH_CAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TREE_PALM: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TRIANGLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TRIANGLE_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_TROPHY_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_UNLOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_UPLOAD: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_USER: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_USER_DOCTOR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_VIDEO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_VOLUME_HIGH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_WAND_MAGIC_SPARKLES: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_WINDOW_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FA_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
                readonly FAD_SPINNER_THIRD: import('@fortawesome/fontawesome-common-types').IconDefinition;
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
        }, {
            iconSize(): string;
            colorClassName(): string;
            loadingIconSize(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {
            size: string;
            type: string;
            color: string;
            radius: string;
            state: string;
            iconLeft: Record<string, any>;
            iconRight: Record<string, any>;
            elevation: string;
        }, {}, {
            WnlIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
                icon: {
                    type: ObjectConstructor;
                    required: true;
                    validator(icon: unknown): boolean;
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
            }>, {}, {}, {
                sizeClassName(): string;
                isFontawesomeIcon(): boolean;
                rotationClass(): string | null;
            }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
                icon: {
                    type: ObjectConstructor;
                    required: true;
                    validator(icon: unknown): boolean;
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
            }>> & Readonly<{}>, {
                rotation: number;
                size: string;
                flippedVertical: boolean;
                flippedHorizontal: boolean;
                touchable: boolean;
                spinning: boolean;
            }, {}, {
                FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
            }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    DsModal: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        animateScrollingContent: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {
        ICONS: Readonly<{
            readonly HEAD_WITH_QUESTION_MARK: VueConstructor<Vue>;
            readonly RIBBON: VueConstructor<Vue>;
            readonly SLIDERS_SEARCH: VueConstructor<Vue>;
            readonly COMMENTS_CHECK: VueConstructor<Vue>;
            readonly ANSWERS: VueConstructor<Vue>;
            readonly HIDE_ANSWERS: VueConstructor<Vue>;
            readonly SIDEBAR_FLIP_SOLID: VueConstructor<Vue>;
            readonly FA_ADDRESS_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ANGLE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_DOWN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_DOWN_TO_LINE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_LEFT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_POINTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_RIGHT_FROM_BRACKET: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROW_UP_RIGHT_FROM_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_LEFT_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ARROWS_ROTATE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BADGE_PERCENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BARS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BELL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BELL_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_BLANK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOK_SPARKLES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOOKMARK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOX: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_BOX_ARCHIVE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_DAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_DAYS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CALENDAR_RANGE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CAMERA_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CARET_SQUARE_RIGHT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CART_SHOPPING: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHART_COLUMN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHART_LINE_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_DOWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_LEFT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_RIGHT_LIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CHEVRON_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ARROW_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ARROW_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_NOTCH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_PLAY_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CIRCLE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLIPBOARD_MEDICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLIPBOARD_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLOCK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CLOCK_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CODE_SIMPLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT_DOTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENT_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS_QUESTION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMMENTS_QUESTION_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMPASS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COMPRESS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_COPY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_CREDIT_CARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_DOT_CIRCLE_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EARTH_AMERICAS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ELLIPSIS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ELLIPSIS_VERTICAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EYE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_EYE_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_FROWN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_GRIMACE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_MEH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACE_SMILE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FACEBOOK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_INVOICE_DOLLAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_LINES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_LINES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILE_PEN_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FILTER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLASK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FLOPPY_DISK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_FOLDER_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GAUGE_HIGH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEARS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GEM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GIFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GRADUATION_CAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_GRID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_POINT_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_POINT_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HAND_SPOCK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HANDS_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HEART_PULSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HEART_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS_END: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOURGLASS_START: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_HOUSE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_IMAGES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_IMAGES_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_KEY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_KEYBOARD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIGHTBULB: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIGHTBULB_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LINK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LINK_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LIST_OL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LOCATION_DOT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_LOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MAGNIFYING_GLASS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEDAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEMO_CIRCLE_INFO: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MEMO_CIRCLE_INFO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MESSAGE_QUESTION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MESSAGE_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MINUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MONEY_BILL1: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_MUSIC: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PAPER_PLANE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PAPERCLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PEN_CIRCLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PEN_FIELD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PENCIL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PLAY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PLUS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_PRINT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_RECTANGLE_CODE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_RECTANGLE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_REPLY: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_ROTATE_LEFT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHARE_NODES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SHIELD_HALVED: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SIDEBAR_FLIP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SIGNAL: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SITEMAP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SITEMAP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SLIDERS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SPELL_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CARET_RIGHT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CHECK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_CHECK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_LIST: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_SQUARE_LIST_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STAR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STETHOSCOPE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_STOPWATCH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TAG: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TAGS: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TEXT: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TEXT_SLASH: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBS_UP: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBS_UP_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_THUMBTACK_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRASH_CAN: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TREE_PALM: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRIANGLE_EXCLAMATION: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TRIANGLE_EXCLAMATION_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_TROPHY_STAR: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_UNLOCK_KEYHOLE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_UPLOAD: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_USER: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_USER_DOCTOR_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_VIDEO_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_VOLUME_HIGH_SOLID: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_WAND_MAGIC_SPARKLES: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_WINDOW_MAXIMIZE: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FA_XMARK: import('@fortawesome/fontawesome-common-types').IconDefinition;
            readonly FAD_SPINNER_THIRD: import('@fortawesome/fontawesome-common-types').IconDefinition;
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
    }, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "close-modal"[], "close-modal", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        animateScrollingContent: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onClose-modal"?: ((...args: any[]) => any) | undefined;
    }>, {
        showHeader: boolean;
        animateScrollingContent: boolean;
    }, {}, {
        WnlIcon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            icon: {
                type: ObjectConstructor;
                required: true;
                validator(icon: unknown): boolean;
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
        }>, {}, {}, {
            sizeClassName(): string;
            isFontawesomeIcon(): boolean;
            rotationClass(): string | null;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            icon: {
                type: ObjectConstructor;
                required: true;
                validator(icon: unknown): boolean;
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
        }>> & Readonly<{}>, {
            rotation: number;
            size: string;
            flippedVertical: boolean;
            flippedHorizontal: boolean;
            touchable: boolean;
            spinning: boolean;
        }, {}, {
            FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
